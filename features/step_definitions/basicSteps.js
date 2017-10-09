'use strict';

var chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;
chai.use(chaiAsPromised);

var main_page = require('../../pom/main_page_pom');
var create_edit_page = require('../../pom/create_edit_page');

module.exports = function() {

    this.Given(/^I get to the main page$/, function () {
        main_page.get();
    });

    this.Given(/^I have opened create new computer page$/, function() {
        main_page.addComputer();
    });

    this.When(/^I add computer values and submit them$/, function() {
        create_edit_page.inputComputerProperties(browser.params.properties.name,
            browser.params.properties.introduceDate,
            browser.params.properties.discontinuedDate,
            browser.params.properties.company_number);
    });

    this.Then(/^New computer where added$/, function(name) {
        main_page.checkAlertMessageText(browser.params.properties.alert_created);
    });

    this.When(/^I search computer in grid filtered by name$/, function() {
        main_page.searchAnyComputer(browser.params.properties.name);
    });

    this.Then(/^I get results filtered by name$/, function() {
        expect(main_page.searchAnyComputer(browser.params.properties.name, 1)).to.eventually.equal(main_page.searchRequest());
    });

    this.Given(/^I filtered computer by name and opened needed one$/, function(){
        main_page.searchLuckyComputer(browser.params.properties.name, 1);
    });

    this.When(/^I edit computers values and save them$/, function() {
        create_edit_page.clearComputersValues();
        create_edit_page.inputComputerProperties(browser.params.properties.edit_name,
            browser.params.properties.edit_introduceDate,
            browser.params.properties.edit_discontinuedDate,
            browser.params.properties.company_number);
        main_page.checkAlertMessageText(browser.params.properties.alert_edited);
    });

    this.Then(/^Computers values was edited$/, function(name, int) {
        main_page.searchLuckyComputer(browser.params.properties.edit_name, 1);
        create_edit_page.getComputerValues();
    });

    this.When(/^I delete computer$/, function() {
        create_edit_page.deleteComputer();
    });

    this.Then(/^Computer was deleted and not present in grid$/, function() {
        main_page.checkAlertMessageText(browser.params.properties.alert_deleted);
    });
};