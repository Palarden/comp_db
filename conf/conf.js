exports.config = {
    framework: 'jasmine',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['../test_suites/computer_db.js'],

    params: {
        properties : {
            name : 'Cray Jaguar',
            edit_name : 'Cray XT5',
            introduceDate : '2009-11-01',
            edit_introduceDate : '2007-11-06',
            discontinuedDate : '2010-11-01',
            edit_discontinuedDate : '2017-09-27'
        }

        /*setup : {

        }*/

    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    }

};