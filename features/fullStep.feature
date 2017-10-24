Feature: CRUD check for computers grid

  Background: Get to main page
    Given:  I get to 'main page'


  Scenario: Create, find and delete one computer
    Given I get to the main page
    Given I have opened page 'Create New Computer'
    When  I input and submit computer values:
      | name              | Cray Jaguar |
      | introduced_date   | 2009-11-01  |
      | discontinued_date | 2010-11-01  |
      | company_number    | 31          |
    And   Alert message "Done! Computer Cray Jaguar has been created" appeared
    And   I searched computer in grid by "Cray Jaguar" name
    And   I check that computer with "Cray Jaguar" name displayed
    And   I opened "1" result in grid
    And   I clear computer values
    And   I input and submit computer values:
      | name              | Cray XT5   |
      | introduced_date   | 2007-11-06 |
      | discontinued_date | 2010-11-01 |
      | company_number    | 31         |
    And   Alert message "Done! Computer Cray XT5 has been updated" appeared
    And   I searched computer in grid by "Cray XT5" name
    And   I check that computer with "Cray XT5" name displayed
    And   I opened "1" result in grid
    And   I delete computer
    Then  Alert message "Done! Computer has been deleted" appeared
