// 'use strict';
// // module.exports = function() {
// //     this.World = function World() {
// //         this.expect = function (toExpect) {
// //             const chai = require('chai'),
// //                 chaiAsPromised = require('chai-as-promised'),
// //                 expect = chai.expect;
// //             chai.use(chaiAsPromised);
// //             return expect(toExpect);
// //         };
// //     };
// // };
//
// /*var chrome = require('selenium-webdriver/chrome');
// var chromeDriverPath = require('chromedriver').path;
// chrome.setDefaultService(new chrome.ServiceBuilder(chromeDriverPath).build())*/
//
// const chai = require('chai'),
//     chaiAsPromised = require('chai-as-promised'),
//     expect = chai.expect;
// chai.use(chaiAsPromised);
//
// function CustomWorld() {
//     this.expect = new chai.expect
// }
//
// module.exports = function() {
//     this.World = CustomWorld;
// };