Feature: Fetching data using api

  Scenario: Fetching data using api and perform ui testing
    Given I fetch login data from the API
    When I enter fetched data in login page
    Then it displays the home page
