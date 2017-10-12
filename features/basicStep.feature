Feature: CRUD check for computers grid

  Background: Get to main page
    Given I get to the main page

  Scenario: Add new computer
    Given I have opened create new computer page
    When  I add computer values and submit them
    Then  New computer where added
    Then  I search computer in grid filtered by name

  Scenario: Find created computer by name
    When  I search computer in grid filtered by name
    Then  I get results filtered by name


  Scenario: Edit values for created computer
    Given  I filtered computer by "Cray Jaguar" and opened needed one
    When   I edit computers values and save them
    Then   Computers values was edited

  Scenario: Delete created computer
    Given I filtered computer by "Cray XT5" and opened needed one
    When  I delete computer
    Then  Computer was deleted and not present in grid


    Scenario: All in one