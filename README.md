# **comp_db**

Running the tests Protractor requires a selenium server to run.

Before installing please review devDependencies in package.json to set up correct version.

# **Setup project:**
 * Install NodeJS (v6.x.x or later)
 * Install Protractor & CucumberJS globally with: *npm install -g protractor* & *npm install -g cucumber*
 * Install protractor-cucumber-framework with: *npm install protractor-cucumber-framework*
 * Update webdriver: *webdriver-manager update*
 * Clone project: *https://github.com/Palarden/comp_db/tree/dev_cucumber*
 * Start up a server with: *webdriver-manager start*
 * Run the test with: *protractor conf.js*

# **Cover functionality:**
 * Create new Computer
 * Find computer by name
 * Edit created computer
 * Deleted created computer
