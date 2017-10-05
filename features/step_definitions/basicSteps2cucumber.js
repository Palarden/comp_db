var path = require('path');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var {defineSupportCode} = require(path.join(
    __dirname,
    '..',
    '..',
    '..',
    'lib',
    'cucumberLoader'
)).load();

defineSupportCode(({After, Given, Then, When}) => {

    Given(/^I get to the main page$/, function (callback) {
        main_page.get();
        callback();
    });


    Given(/^I have opened create new computer page$/, function(callback) {
        main_page.addComputer();
        callback();
    });

    When(/^I add computer values and submit them$/, function(callback) {
        create_edit_page.inputComputerProperties(browser.params.properties.name,
            browser.params.properties.introduceDate,
            browser.params.properties.discontinuedDate,
            browser.params.properties.company_number);
        callback();
    });

    Then(/^New computer where added$/, function(callback) {
        (main_page.searchAnyComputer(browser.params.properties.name, 1)).to.equal(main_page.searchRequest());
        callback();
    });

    When(/^I search computer in grid filtered by name$/, function(callback) {
        main_page.searchAnyComputer(browser.params.properties.name);
        callback();
    });

    Then(/^I get results filtered by name$/, function(callback) {
        expect(main_page.searchAnyComputer(browser.params.properties.name, 1)).to.equal(main_page.searchRequest());
        callback();
    });

    Given(/^I filtered computer by name and opened needed one$/, function(callback){
        main_page.searchLuckyComputer(browser.params.properties.name, 1);
        callback();
    });

    When(/^I edit computers values and save them$/, function(callback) {
        create_edit_page.clearComputersValues();
        create_edit_page.inputComputerProperties(browser.params.properties.edit_name,
            browser.params.properties.edit_introduceDate,
            browser.params.properties.edit_discontinuedDate,
            browser.params.properties.company_number);
        callback();
    });

    Then(/^Computers values was edited$/, function(callback) {
        main_page.searchLuckyComputer(browser.params.properties.edit_name, 1);
        create_edit_page.getComputerValues();
        callback();
    });

    When(/^I delete computer$/, function(callback) {
        create_edit_page.deleteComputer();
        callback();
    });

    Then(/^Computer was deleted and not present in grid$/, function(callback) {
        expect(main_page.searchAnyComputer(browser.params.properties.name, 1)).to.equal(main_page.searchRequest());
        callback();
    });
)});