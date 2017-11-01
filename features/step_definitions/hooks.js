// module.exports = function () {
//     this.After(function (scenario, callback) {
//         if (scenario.isFailed()) {
//             browser.takeScreenshot().then(function(base64png) {
//                 var decodedImage = new Buffer(base64png, 'base64').toString('binary');
//                 scenario.attach(decodedImage, 'image/png');
//                 callback();
//             }, function(err) {
//                 callback(err);
//             });
//         } else {
//             callback();
//         }
//     });
//
// };
