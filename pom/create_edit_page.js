"use strict";

// var chai = require('chai'),
//     chaiAsPromised = require('chai-as-promised'),
//     expect = chai.expect;
// chai.use(chaiAsPromised);
var world =  require('../features/support/world.js');

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
        return element(by.id('name')).getAttribute('value').then(function (value) {
            return world.expect (value).to.equal(browser.params.properties.edit_name)
        }).then(function () {
            return element(by.id('introduced')).getAttribute('value')
        }).then(function (value) {
            return world.expect (value).to.equal(browser.params.properties.edit_introduceDate)
        }).then(function () {
            return element(by.id('discontinued')).getAttribute('value')
        }).then(function (value) {
            return world.expect (value).to.equal(browser.params.properties.edit_discontinuedDate)
        }).then(function () {
            return element(by.css('option:checked')).getAttribute('text')
        }).then(function (value) {
            return world.expect (value).to.equal('Cray')
        })
    };

     this.deleteComputer = function () {
         return element(by.css('.btn.danger')).click();
     };
};
module.exports = new create_edit_page();