Feature: Room
  Scenario: As a host, I can play 1 round
    Given I visit "/"
    Then I see heading "Just Jokes"
      And I see link "Create Room"
    When I click on link "Create Room"
    Then I see heading "Room"
      And I see search contains "?_driftdb_room="
      And I see heading "Choose a nickname"
    When I find input by placeholder text "Nickname"
      And I type "Mark"
      And I click on button "Save"
    Then I see text "Mark"
      And I see button "Invite Your Friends!"
      And I see text "QR Code"
    When I click on label "Rounds"
      And I type "{enter}"
      And I click on text "1"
      And I click on button "Start"
    Then I see heading "Create a Joke:"
      And I see text "Preview: "
    When I find input by display value ""
      And I type "test joke"
    Then I see text "test joke"
    When I click on button "Create Joke"
      Then I see button "test joke"
    When I click on button "test joke"
    Then I see text "1"
    When I click on button "Next Round"
    Then I see heading "Room"

  Scenario: As a player, I can visit the room
    Given I visit "/room"
    Then I see heading "Room"
      And I see search contains "?_driftdb_room="
      And I see heading "Choose a nickname"
    When I get focused element
      And I type "Mark{enter}"
    Then I see text "Mark"
      And I see button "Invite Your Friends!"
      And I see text "QR Code"
      And I see text "Waiting for the host to start the game..."
