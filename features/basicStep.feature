Feature: CRUD check for computers grid

  Background: Get to main page
    Given I get to the main page

  Scenario: All in one
    Given I have opened create new computer page
    When  I add computer values and submit them
    Then  New computer where added
    When  I search computer in grid filtered by name
    Then  I get results filtered by name
    Given I get to the main page
    Given  I filtered computer by "Cray Jaguar" and opened needed one
    When   I edit computers values and save them
    Then   Computers values was edited
    Given I get to the main page
    Given I filtered computer by "Cray XT5" and opened needed one
    When  I delete computer
    Then  Computer was deleted and not present in grid
  basicStep.feature