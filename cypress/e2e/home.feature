Feature: Home
  Scenario: As a visitor, I can create a room
    Given I visit "/"
    Then I see document title "Just Jokes | remarkablegames"
      And I see heading "Just Jokes"
    When I click on link "Create Room"
    Then I see heading "Room"
      And I see search contains "?_driftdb_room="
