# ComputerDB CRUD
Simple protractor-cucumber autotests for checking CRUD functionality for ComputerDB
Resource: http://computer-database.herokuapp.com/computers

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Install NodeJS (v6.x.x or later)
* Install Protractor Globally and update WebDriver
```
npm install -g protractor
webdriver-manager update
```
* Checkout from GIT repositories
```
git clone -b working_pickle https://github.com/Palarden/comp_db.git
```
* Install dependencies from package.json
```
npm insall      //in project directory
```
* Start up a server with
```
webdriver-manager start
```

## Running tests
Run the test with: 
```
protractor conf.js      //in project directory
```

### Cover functionality:
 * Create new Computer
 * Find computer by name
 * Edit created computer
 * Deleted created computer
