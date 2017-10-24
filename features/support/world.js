var World = function () {
    this.expect = function (toExpect) {
        var chai = require('chai');
        var chaiAsPromised = require('chai-as-promised');
        chai.use(chaiAsPromised);
        var expect = chai.expect;
        return expect(toExpect);
    };
};
    module.exports = new World();