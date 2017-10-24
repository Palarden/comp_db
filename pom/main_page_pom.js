"use strict";

var create_edit_page =  require('./create_edit_page.js');
var expect =  require('../features/support/world.js');

// var chai = require('chai'),
//     chaiAsPromised = require('chai-as-promised'),
//     expect = chai.expect;
// chai.use(chaiAsPromised);

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
            return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child('+number+') > td:nth-child(1) > a')
        })
    };

    this.searchRequest = function() {
        return element(by.id('searchbox')).getAttribute('value')//.then(function(text) {
    };

    this.checkSearchResult = function() {
        //return expect(element(by.linkText(browser.params.properties.name).getTagName()).toBe('a'));
        return $('#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a').getText()
    };

    this.alertMessagesText = function () {
        return $('.alert-message');
    };

    this.emptyGridWarning = function () {
      return $('#main > div.well > em').getText()
    }
};
    module.exports = new main_page();