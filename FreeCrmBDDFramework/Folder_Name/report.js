$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/leeladhar selenium/workspace/FreeCrmBDDFramework/src/main/java/Featrureone/contact.feature");
formatter.feature({
  "name": "Free CRM Create Contacts",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "name": "user click on login button for enter credentials",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters \"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user tap on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "firstname",
        "lastname"
      ]
    },
    {
      "cells": [
        "leela231@gmail.com",
        "Leeladhar",
        "Tom",
        "Peter"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Free CRM Create a new contact scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is already on Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ContactSteps.user_already_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on login button for enter credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_click_on_login_button_for_enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters \"leela231@gmail.com\" and \"Leeladhar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user tap on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_tap_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters contact details \"Tom\" and \"Peter\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_enters_contact_details_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("D:/leeladhar selenium/workspace/FreeCrmBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "name": "Free CRM login feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Free CRM login test scenerio",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is already in login page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "title of login page is free CRM",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user click on login button for enter credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_click_on_login_button_for_enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user tap on login button",
  "keyword": "And "
});
formatter.match({
  "location": "ContactSteps.user_tap_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
});