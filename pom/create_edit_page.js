"use strict";

var create_edit_page = function() {

    this.inputComputerProperties = function (name, introduceDate, discontinuedDate, company_number) {
        return element(by.id('name')).sendKeys(name).then(function () {
            return element(by.id('introduced')).sendKeys(introduceDate)
        }).then(function () {
            return element(by.id('discontinued')).sendKeys(discontinuedDate)
        }).then(function () {
            return element(by.id('company')).$('[value="' + company_number + '"]').click()
        }).then(function () {
            return element(by.css('.btn.primary')).click();
        })
    };

    this.clearComputersValues = function () {
        return element(by.id('name')).clear().then(function () {
            return element(by.id('introduced')).clear()
        }).then(function () {
            return element(by.id('discontinued')).clear()
        }).then(function () {
            return element(by.id('company')).$('[value]').click()
        })
    };

    this.getComputerValues = function () {
        return element(by.id('name')).getAttribute('value').then(function () {
            return element(by.id('introduced')).getAttribute('value')
        }).then(function () {
            return element(by.id('discontinued')).getAttribute('value')
        }).then(function () {
            return element(by.css('option:checked')).getAttribute('text')
        })
    };

     this.deleteComputer = function () {
         return element(by.css('.btn.danger')).click();
     };
};
module.exports = new create_edit_page();