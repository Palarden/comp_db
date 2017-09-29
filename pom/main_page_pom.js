"use strict";

var create_edit_page =  require('./create_edit_page.js');

var main_page = function() {

    this.get = function () {
        browser.get('http://computer-database.herokuapp.com/computers');
    };

    this.addComputer = function() {
        element(by.id('add')).click();
        return create_edit_page;
    };

    this.searchBox = function(name) {
        return element(by.id('searchbox')).sendKeys(name);
    };

    this.searchRequest = function() {
        return element(by.id('searchbox')).getAttribute('value')//.then(function(text) {
        //console.log(text);
        //});
    };

    this.searchSubmit = function(){
        return element(by.id('searchsubmit')).click();
    };

    this.checkSearchResult = function(number) { //where number result in row
        return element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child('+number+') > td:nth-child(1) > a').getText();
    };


    this.openSearchResult = function(number) { //where number result in row
        element(by.className('computers zebra-striped')).$('#main > table > tbody > tr:nth-child('+number+') > td:nth-child(1) > a').click();
    };

    /*this.computerTable = function(){
        element.all(by.repeater("computers zebra-striped"));
     };

     this.pagination = function() {
        this.element(by.className('prev')).click();
        this.element(by.className('next')).click();
        return element(by.className('current')).getText();
      }; */
    };
    module.exports = new main_page();