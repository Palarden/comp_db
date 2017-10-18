"use strict";

let create_edit_page = require('./create_edit_page.js');

let main_page = function () {

    this.get = () => {
        browser.get('/');
    };

    this.addComputer = () => {
        element(by.id('add')).click();
        return create_edit_page;
    };

    this.searchLuckyComputer = (name, number) => {
        return element(by.id('searchbox')).sendKeys(name).then(function () {
            return element(by.id('searchsubmit')).click()
        }).then(function () {
            return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child(' + number + ') > td:nth-child(1) > a').click()
        })
    };

    this.searchAnyComputer = (name, number) => {
        return element(by.id('searchbox')).sendKeys(name).then(function () {
            return element(by.id('searchsubmit')).click()
        }).then(function () {
            return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child(' + number + ') > td:nth-child(1) > a')
        })
    };

    this.searchRequest = () => {
        return element(by.id('searchbox')).getAttribute('value')//.then(function(text) {
    };


    /*this.checkAlertMessageText = (message) => {
        return $('.alert-message.warning').getText('text').then(function (text) {
            return expect(text).to.equal(message)
        });
    };*/

    this.openVariousResult = (number) => {
        return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child(' + number + ') > td:nth-child(1) > a').click()
    };


    this.checkSearchResult = () => {
        //return expect(element(by.linkText(browser.params.properties.name).getTagName()).toBe('a'));
        return $('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').getText()
    };

    this.alertMessagesText = () => {
        return $('.alert-message');
    };

    this.emptyGridWarning = () => {
        return $('#main > div.well > em').getText()
    }
};
module.exports = new main_page();