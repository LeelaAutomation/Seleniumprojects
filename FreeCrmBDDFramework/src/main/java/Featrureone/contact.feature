Feature: Free CRM Create Contacts

Scenario Outline: Free CRM Create a new contact scenario

Given user is already on Login Page
Then user click on login button for enter credentials
Then user enters "<email>" and "<password>"
Then user tap on login button
Then user moves to new contact page
Then user enters contact details "<firstname>" and "<lastname>" 
Then Close the browser

Examples:
	| email               | password    | firstname  | lastname |
	| leela231@gmail.com  | Leeladhar   | Tom 	     | Peter    | 
	 