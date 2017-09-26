var create_edit_page = function() {

    this.addNewComputer = function() {
        element(by.css('.btn.primary')).click();
    };

    this.inputName = function (name) {
        element(by.xpath('//*[@id="name"]')).sendKeys(name);
    };

    this.getName = function (){
        element(by.id('name')).getText();
    };

    this.inputIntroduced = function(name){
        element(by.id('introduced')).sendKeys(name);
    };

    this.getIntroduced = function(){
        element(by.id('introduced')).getAttribute('value');
    };

    this.inputDiscontinued = function(name){
        element(by.id('discontinued')).sendKeys(name);
    };

    this.getDiscontinued = function(){
        element(by.id('discontinued')).getAttribute('value');
    };

    this.companySelect = function () {
        return element(by.id('company'));
    };

    this.deleteComputer = function () {
        element(by.css('.btn_danger')).click();
    }
};

module.exports = new create_edit_page();