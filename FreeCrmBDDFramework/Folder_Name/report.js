$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Srinivas/git/Seleniumprojects/Seleniumprojects/Seleniumprojects/Seleniumprojects/FreeCrmBDDFramework/src/main/java/Featrureone/contact.feature");
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
  "name": "user click on login button for enter credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_click_on_login_button_for_enter_credentials()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"leela231@gmail.com\" and \"Leeladhar\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user tap on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_tap_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.match({
  "location": "ContactSteps.user_moves_to_new_contact_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d/html/body/div[1]/div/div[1]/a[3]/span\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LEELADHAR\u0027, ip: \u0027192.168.0.12\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ContactStepDefination.ContactSteps.user_moves_to_new_contact_page(ContactSteps.java:64)\r\n\tat ✽.user moves to new contact page(C:/Users/Srinivas/git/Seleniumprojects/Seleniumprojects/Seleniumprojects/Seleniumprojects/FreeCrmBDDFramework/src/main/java/Featrureone/contact.feature:9)\r\n",
  "status": "failed"
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
});