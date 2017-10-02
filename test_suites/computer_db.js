"use strict";

describe('Computer Database', function() {
    var main_page = require('../pom/main_page_pom.js');
    var create_edit_page = require('../pom/create_edit_page.js');

    beforeEach(function() {
        main_page.get();
    });

    it ('should add new computer', function () {
        main_page.addComputer();
        create_edit_page.inputComputerProperties(browser.params.properties.name,
            browser.params.properties.introduceDate,
            browser.params.properties.discontinuedDate,
            browser.params.properties.company_number)});

    it ('should edit opened computers', function() {
        main_page.searchLuckyComputer(browser.params.properties.name, 1);
        create_edit_page.clearComputersValues();
        create_edit_page.inputComputerProperties(browser.params.properties.edit_name,
            browser.params.properties.edit_introduceDate,
            browser.params.properties.edit_discontinuedDate,
            browser.params.properties.company_number)});

    it ('should find computers by any name', function() {
        expect(main_page.searchAnyComputer(browser.params.properties.edit_name, 1)).toEqual(main_page.searchRequest()); //expect(browser.getCurrentUrl()).toEqual('http://computer-database.herokuapp.com/computers' + '?f=' + computer_name);
    });


    it ('should delete created computers', function () {
        main_page.searchLuckyComputer(browser.params.properties.edit_name, 1);
        create_edit_page.deleteComputer();
        /*try {
            expect(main_page.searchAnyComputer(browser.params.properties.edit_name, 1)).toContain("Nothing to display");
        } catch (NoSuchElementError){
            console.log('text')
        }
        browser.pause(5000)*/
    });
});