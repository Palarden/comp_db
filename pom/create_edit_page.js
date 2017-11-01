"use strict";

let create_edit_page = function () {

    this.inputComputerProperties = (table) => {
        let computerValues = table.hashes();
        console.log(computerValues);
        return element(by.id('name')).sendKeys(computerValues[0].name).then(() => {
            return element(by.id('introduced')).sendKeys(computerValues[0].introduced_date)
        }).then(() => {
            return element(by.id('discontinued')).sendKeys(computerValues[0].discontinued_date)
        }).then(() => {
            return element(by.id('company')).$('[value="' + (computerValues[0].company_number) + '"]').click()
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