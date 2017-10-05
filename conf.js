'use strict';

exports.config = {
    directConnect: true,

    baseUrl: 'http://computer-database.herokuapp.com/computers',

    framework: 'custom', // set to "custom" instead of cucumber

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['features/basicStep.feature'],  // Specs here are the cucumber feature files],

    params: {
        properties: {
            name: 'Cray Jaguar',
            edit_name: 'Cray XT5',
            introduceDate: '2009-11-01',
            edit_introduceDate: '2007-11-06',
            discontinuedDate: '2010-11-01',
            edit_discontinuedDate: '2017-09-27',
            company_number: '31'
        }
    },

    cucumberOpts: {
        require: ['features/step_definitions/basicSteps.js']
    },

    onPrepare: function() {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
    }
};