@Regression
Feature: test1-feature

  Background:
    When User navigates to the page with url "http://thinkmobiles.com/"
    Then Page title is equal to "Top list of IT companies, software, mobile apps, games, Saas, PaaS, IaaS"

  Scenario: 1: page
    When User clicks "button" "body > div.wrapper > header > div.header-main-block > div.user-menu.hide-xs.hide-s.hide-m.hide-l > button > span:nth-child(1)"
    Then History "result memory" is equal to 0

