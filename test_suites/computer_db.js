describe('Computer Database', function() {
    var main_page = require('../pom/main_page_pom.js');
    var EC = protractor.ExpectedConditions;
    //var computer_name = 'Cray+Jaguar';

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        main_page.get();
    });

    xit ('should add new computer', function () {
        var create_edit_page = main_page.addNewComputer();
        create_edit_page.inputName('Cray Jaguar');
        //expect(create_edit_page.getName()).toEqual('Igor');
        create_edit_page.inputIntroduced('2009-11-01');
        //expect(create_edit_page.getIntroduced()).toEqual('1985');
        create_edit_page.inputDiscontinued('2010-11-01');
        //expect(create_edit_page.getDiscontinued()).toEqual('2000');
        create_edit_page.companySelect().$('[value="31"]').click();
        browser.pause(5000);
        create_edit_page.addNewComputer();
        browser.pause(15000);
    });

    it ('should find computers by name', function() {
        main_page.searchBox('Cray Jaguar');
        main_page.searchSubmit();
        //browser.wait(EС.textToBePresentInElement(main_page.searchBox), 'Apple', 5000);
        expect(main_page.searchRequest()).toEqual('Cray Jaguar');
        //expect(browser.getCurrentUrl()).toEqual('http://computer-database.herokuapp.com/computers' + '?f=' + computer_name);


    });

    it ('should open created computers', function () {
        main_page.searchBox('Cray Jaguar');
        main_page.searchSubmit();
        main_page.searchResult(1);
        browser.pause(5000);
    });

    it ('should edit opened computers', function () {
       // var latestResult = element(by.binding
    });

    it ('should delete created computers', function () {

    });
});