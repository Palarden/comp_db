describe('Computer Database', function() {

    var main_page = require('../pom/computer_db_POM.js');

    beforeEach(function() {
        browser.waitForAngularEnabled(false);
        main_page.get();
    });

    it ('should add new computer', function () {
        var create_edit_page = main_page.addNewComputer();
        create_edit_page.inputName('Igor');
        expect(create_edit_page.getName()).toEqual('Igor');
    });

   // it
});