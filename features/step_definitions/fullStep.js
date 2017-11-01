'use strict';

let main_page = require('../../pom/main_page_pom');
let create_edit_page = require('../../pom/create_edit_page');

module.exports = function () {
    this.Given(/^I get to the main page$/, () => {
        return main_page.get();
    });

    this.Given(/^I have opened page 'Create New Computer'$/, () => {
        return main_page.addComputer();
    });

    this.When(/^I input and submit computer values:$/, (table) => {
        return create_edit_page.inputComputerProperties(table);
    });

    this.When(/^Alert message "([^"]*)" appeared$/, (alert_text) => {
        return main_page.alertMessagesText().getText().then((text) => {
            return expect(text).to.include(alert_text)
            //expect(main_page.searchAnyComputer(browser.params.properties.name, 1)).to.eventually.equal(main_page.searchRequest());
        });
    });

    this.When(/^I searched computer in grid by "([^"]*)" name$/, (name) => {
        return main_page.searchAnyComputer(name);
    });

    this.When(/^I check that computer with "([^"]*)" name displayed$/, (name) => {
        return expect(main_page.checkSearchResult()).to.eventually.equal(name);
    });

    this.When(/^I filtered computer by "([^"]*)" and opened needed one$/, (attr) => {
        return main_page.searchLuckyComputer(attr, 1);
    });

    this.When(/^I opened "([^"]*)" result in grid$/, (number) => {
        return main_page.openVariousResult(number);
    });

    this.When(/^I clear computer values$/, () => {
        return create_edit_page.clearComputersValues();
    });

    this.When(/^I delete computer$/, () => {
        return create_edit_page.deleteComputer();
    });

    this.When(/^I edit and submit computer values:$/,  (table) => {
        return create_edit_page.inputComputerProperties(table);
    });
};

