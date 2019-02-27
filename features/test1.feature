@Regression
Feature: test1-feature

  Background:
    When User navigates to the main page with url "http://thinkmobiles.com/"
    Then User navigates to login "https://thinkmobiles.com/login/"
    Then Page title is equal to "ThinkMobiles"

  Scenario: 1: page
    When User clicks "button" "body > div.wrapper > header > div.header-main-block > div.user-menu.hide-xs.hide-s.hide-m.hide-l > button > span:nth-child(1)"
    Then History "result memory" is equal to 0

   Scenario: 2: Page1
     When
