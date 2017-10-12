Feature: CRUD check for computers grid

  Background: Get to main page
    Given:  I get to 'main page'

  Scenario: Create, find and delete one computer
    Given I have opened create new computer page
    When  I input computer values: 'name', 'introduced_date','discontinued_date', 'company_number'
    And   I submit values
    And   I searched computer in grid by 'name'
    And   I opened it
    And
    Then  New computer where added