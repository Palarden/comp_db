Feature: CRUD check for computers grid

  Background: Get to main page
    Given:  I get to 'main page'


  Scenario: Create, find and delete one computer
    Given I get to the main page
    Given I have opened page 'Create New Computer'
    When  I input and submit computer values:
      | name        | introduced_date | discontinued_date | company_number |
      | Cray Jaguar | 2009-11-01      | 2010-11-01        | 31             |
    And   Alert message "<message>" appeared
    And   I searched computer in grid by "name"
    And   I check that computer with "name" displayed
    And   I filtered computer by "name" and opened needed one
    And   I clear computer values
    And   I edit and submit computer values:
      | edit_name | edit_introduced_date | edit_discontinued_date | edit_company_number |
      | Cray XT5  | 2007-11-06           | 2010-11-01             | 31                  |
    And   Alert message <message> appeared
    And   I searched computer in grid by "name"
    And   I filtered computer by "name" and opened needed one
    And   I delete computer
    Then  Alert message <message> appeared
