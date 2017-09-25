require('./create_edit_page.js');

var main_page = function() {

    this.get = function () {
        browser.get('http://computer-database.herokuapp.com/computers');
    };

    this.addNewComputer = function() {
        element(by.id('add')).click();
        return require('./create_edit_page.js');
    };

    this.searchBox = function(name) {
       element(by.id('searchbox')).sendKeys(name);
    };

    this.searchSubmit = function(){
        element(by.id('searchsubmit')).click();
    };

    this.computerTable = function(){
        element.all(by.className("computers zebra-striped"));
    };

    this.pagination = function() {
        this.element(by.className('prev')).click();
        this.element(by.className('next')).click();
        return element(by.className('current')).getText();
    };
};
module.exports = new main_page();