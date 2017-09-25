var create_edit_page = function() {
    this.addNewComputer = function() {
        element(by.id('add')).click();
    };

    this.inputName = function (name) {
        element(by.xpath('//*[@id="name"]')).sendKeys(name);
    };
    this.getName = function (){
        return element(by.id('name')).getText();
    }
};

module.exports = new create_edit_page();