"use strict";

const chai = require('chai'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect;
chai.use(chaiAsPromised);

let create_edit_page = function () {

    this.inputComputerProperties = (table) => {
        let computerValues = table.rowsHash();
        console.log();
        return element(by.id('name')).sendKeys(computerValues['name']).then(() => {
            return element(by.id('introduced')).sendKeys(computerValues['introduced_date'])
        }).then(() => {
            return element(by.id('discontinued')).sendKeys(computerValues['discontinued_date'])
        }).then(() => {
            return element(by.id('company')).$('[value="' + (computerValues['company_number']) + '"]').click()
        }).then(() => {
            return element(by.css('.btn.primary')).click();
        })
    };

    this.clearComputersValues = () => {
        return element(by.id('name')).clear().then(() => {
            return element(by.id('introduced')).clear()
        }).then(() => {
            return element(by.id('discontinued')).clear()
        }).then(() => {
            return element(by.id('company')).$('[value]').click()
        })
    };

    this.getComputerValues = () => {
        return element(by.id('name')).getAttribute('value').then((value) => {
            return expect(value).to.equal(browser.params.properties.edit_name)
        }).then(() => {
            return element(by.id('introduced')).getAttribute('value')
        }).then((value) => {
            return expect(value).to.equal(browser.params.properties.edit_introduceDate)
        }).then(() => {
            return element(by.id('discontinued')).getAttribute('value')
        }).then((value) => {
            return expect(value).to.equal(browser.params.properties.edit_discontinuedDate)
        }).then(() => {
            return element(by.css('option:checked')).getAttribute('text')
        }).then((value) => {
            return expect(value).to.equal('Cray')
        })
    };

    this.deleteComputer = () => {
        return element(by.css('.btn.danger')).click();
    };
};
module.exports = new create_edit_page();