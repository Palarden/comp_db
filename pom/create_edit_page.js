"use strict";

var create_edit_page = function() {

    this.addNewComputer = function() {
        element(by.css('.btn.primary')).click();
    };

    this.inputName = function (name) {
        element(by.xpath('//*[@id="name"]')).sendKeys(name);
    };

    this.clearName = function(){
        element(by.xpath('//*[@id="name"]')).clear();
    };

    this.getName = function (){
        return element(by.id('name')).getAttribute('value');
    };

    this.inputIntroduced = function(name){
        element(by.id('introduced')).sendKeys(name);
    };

    this.clearIntroduced = function() {
        element(by.id('introduced')).clear();
    };

    this.getIntroduced = function(){
        return element(by.id('introduced')).getAttribute('value');
    };

    this.inputDiscontinued = function(name){
        element(by.id('discontinued')).sendKeys(name);
    };

    this.clearDiscontinued = function() {
        element(by.id('discontinued')).clear();
    };

    this.getDiscontinued = function(){
        return element(by.id('discontinued')).getAttribute('value');
    };

    this.companySelect = function () {
        return element(by.id('company'));
    };

    this.getCompany = function () {
       return element(by.css('option:checked')).getAttribute('text');
    };

    this.deleteComputer = function () {
        element(by.css('.btn.danger')).click();
    };
};

module.exports = new create_edit_page();