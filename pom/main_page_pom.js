"use strict";

var main_page = function() {

    this.get = function () {
        browser.get('/');
    };

    this.addComputer = function() {
        element(by.id('add')).click();
        return create_edit_page;
    };

    this.searchLuckyComputer = function (name, number) {
      return element(by.id('searchbox')).sendKeys(name).then(function(){
          return element(by.id('searchsubmit')).click()
      }).then(function() {
          return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child('+number+') > td:nth-child(1) > a').click()
      })
    };

    this.searchAnyComputer = function (name, number) {
        return element(by.id('searchbox')).sendKeys(name).then(function(){
            return element(by.id('searchsubmit')).click()
        }).then(function() {
            return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child('+number+') > td:nth-child(1) > a').getText()
        })
    };

    this.searchRequest = function() {
        return element(by.id('searchbox')).getAttribute('value')//.then(function(text) {
    };

    this.checkAlertMessageText = function (message) {
        return $('.alert-message.warning').getText('text').then(function(text) {
            return expect(text).to.equal(message)
        });
    }
};
    module.exports = new main_page();