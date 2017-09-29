"use strict";

describe('Computer Database', function() {
    var main_page = require('../pom/main_page_pom.js');
    /* var EC = protractor.ExpectedConditions;
    var computer_name = 'Cray+Jaguar';
     */
    var create_edit_page = require('../pom/create_edit_page.js');

    /*beforeEach(function() {
        main_page.get();
    }); */

    it ('should add new computer', function () {
        var create_edit_page = main_page.addNewComputer();
        create_edit_page.inputName(browser.params.properties.name); //expect(create_edit_page.getName()).toEqual('Cray Jaguar');
        create_edit_page.inputIntroduced(browser.params.properties.introduceDate); //expect(create_edit_page.getIntroduced()).toEqual('2009-11-01');
        create_edit_page.inputDiscontinued(browser.params.properties.discontinuedDate); //expect(create_edit_page.getDiscontinued()).toEqual('2010-11-01');
        create_edit_page.companySelect().$('[value="31"]').click();
        create_edit_page.addNewComputer();
    });

    it ('should find computers by name', function() {
        main_page.searchBox(browser.params.properties.name);
        main_page.searchSubmit(); //browser.wait(EС.textToBePresentInElement(main_page.searchBox), 'Cray Jaguar', 5000);
        expect(main_page.checkSearchResult(1)).toEqual(browser.params.properties.name); //expect(browser.getCurrentUrl()).toEqual('http://computer-database.herokuapp.com/computers' + '?f=' + computer_name);
    });

    it ('should open created computers', function () {
        main_page.searchBox(browser.params.properties.name);
        main_page.searchSubmit();
        main_page.openSearchResult(1);
        expect(create_edit_page.getName()).toEqual(browser.params.properties.name);
        expect(create_edit_page.getIntroduced()).toEqual(browser.params.properties.introduceDate);
        expect(create_edit_page.getDiscontinued()).toEqual(browser.params.properties.discontinuedDate);
        expect(create_edit_page.getCompany()).toEqual('Cray');
    });

    it ('should edit opened computers', function () {
        main_page.searchBox(browser.params.properties.name);
        main_page.searchSubmit();
        main_page.openSearchResult(1);
        create_edit_page.clearName();
        create_edit_page.inputName(browser.params.properties.edit_name);
        create_edit_page.clearIntroduced();
        create_edit_page.inputIntroduced(browser.params.properties.edit_introduceDate);
        create_edit_page.clearDiscontinued();
        create_edit_page.inputDiscontinued(browser.params.properties.edit_discontinuedDate);
        create_edit_page.addNewComputer();
    });

    it ('should delete created computers', function () {
        main_page.searchBox(browser.params.properties.edit_name);
        main_page.searchSubmit();
        main_page.openSearchResult(1);
        create_edit_page.deleteComputer();
        main_page.searchBox(browser.params.properties.edit_name);
        main_page.searchSubmit();
        expect(main_page.checkSearchResult(1)).not.toContain('Cray XT5');
    });
});