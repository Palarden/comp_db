'use strict';
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

exports.config = {
    directConnect: true,

    baseUrl: 'http://computer-database.herokuapp.com/computers',

    framework: 'custom',

    frameworkPath: require.resolve('protractor-cucumber-framework'),

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['features/fullStep.feature'],

    params: {
        properties: {
            alert_created: 'Done! Computer Cray Jaguar has been created',
            alert_edited: 'Done! Computer Cray XT5 has been updated',
            alert_deleted: 'Done! Computer has been deleted'
        }
    },

    cucumberOpts: {
        strict: true,
        require: ['features/step_definitions/fullStep.js', 'features/support/reporter.js'],
        format: 'pretty',
        tags: ['@AllureScenario']
    },

    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        global.expect = chai.expect;
        //protractor.main_page = require('/pom/main_page_pom.js');
        //protractor.create_edit_page = require('/pom/create_edit_page.js')
    }
};