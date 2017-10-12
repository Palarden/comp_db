'use strict';

const chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;
chai.use(chaiAsPromised);

let main_page = require('../../pom/main_page_pom');
let create_edit_page = require('../../pom/create_edit_page');

module.exports = function () {

    this.Given(/^I get to the main page$/, () => {
        return main_page.get();
    });

    this.Given(/^I have opened create new computer page$/, () => {
        return main_page.addComputer();
    });

    this.When(/^I add computer values and submit them$/, () => {
        return create_edit_page.inputComputerProperties(browser.params.properties.name,
            browser.params.properties.introduceDate,
            browser.params.properties.discontinuedDate,
            browser.params.properties.company_number);
    });

    this.Then(/^New computer where added$/, () => {
        return main_page.alertMessagesText().getText().then((text) => {
            return expect(text).to.include('Done! Computer Cray Jaguar has been created')
            //expect(main_page.searchAnyComputer(browser.params.properties.name, 1)).to.eventually.equal(main_page.searchRequest());
        });
    });

    this.When(/^I search computer in grid filtered by name$/, () => {
        return main_page.searchAnyComputer(browser.params.properties.name);
    });

    this.Then(/^I get results filtered by name$/, () => {
        return expect(main_page.checkSearchResult()).to.eventually.equal(browser.params.properties.name);
    });

    this.Given(/^I filtered computer by "([^"]*)" and opened needed one$/, (attr) => {
        return main_page.searchLuckyComputer(attr, 1);
    });

    this.When(/^I edit computers values and save them$/,() => {
        return create_edit_page.clearComputersValues().then(() => {
        create_edit_page.inputComputerProperties(browser.params.properties.edit_name,
            browser.params.properties.edit_introduceDate,
            browser.params.properties.edit_discontinuedDate,
            browser.params.properties.company_number)}).then(() => {
        return main_page.alertMessagesText().getText().then((text) => {
            return expect(text).to.include('Done! Computer Cray XT5 has been updated')
            });
        });
    });

    this.Then(/^Computers values was edited$/, () => {
        return main_page.searchLuckyComputer(browser.params.properties.edit_name, 1).then(() => {
            return create_edit_page.getComputerValues();
        });
    });

    this.When(/^I delete computer$/, () => {
        return create_edit_page.deleteComputer();
    });

    this.Then(/^Computer was deleted and not present in grid$/, () => {
        return main_page.alertMessagesText().getText().then((text) => {
            return expect(text).to.include('Done! Computer has been deleted')
        });
    });
};