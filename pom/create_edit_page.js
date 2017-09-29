"use strict";

var create_edit_page = function() {

    this.addNewComputer = function (name, date_introduced, date_discontinued, company_number) {
        return element(by.id('name')).sendKeys(name).then(function(){
            return element(by.id('introduced')).sendKeys(date_introduced)
        }).then(function () {
            return element(by.id('discontinued')).sendKeys(date_discontinued);
        }).then(function () {
            return element(by.id('company')).$('[value='+company_number+']').click();
        }).then(function () {
            return element(by.css('.btn.primary')).click();
        })
    }
};




   /* this.addNewComputer = function() {
        return element(by.css('.btn.primary')).click();
    };

    this.inputName = function (name) {
        return element(by.id('name')).sendKeys(name);
    };

    this.clearName = function(){
        return element(by.id('name')).clear();
    };

    this.getName = function (){
        return element(by.id('name')).getAttribute('value');
    };

    this.inputIntroduced = function(name){
        return element(by.id('introduced')).sendKeys(name);
    };

    this.clearIntroduced = function() {
        return element(by.id('introduced')).clear();
    };

    this.getIntroduced = function(){
        return element(by.id('introduced')).getAttribute('value');
    };

    this.inputDiscontinued = function(name){
        return element(by.id('discontinued')).sendKeys(name);
    };

    this.clearDiscontinued = function() {
        return element(by.id('discontinued')).clear();
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
        return element(by.css('.btn.danger')).click();
    };
};*/

module.exports = new create_edit_page();