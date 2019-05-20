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
formatter.match({
  "location": "ContactSteps.title_of_login_page_is_free_CRM()"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[1]/div/div[1]/a[3]/span\"}\n  (Session info: chrome\u003d73.0.3683.103)\n  (Driver info: chromedriver\u003d73.0.3683.68 (47787ec04b6e38e22703e856e101e840b65afe72),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LEELADHAR\u0027, ip: \u0027192.168.0.5\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 73.0.3683.68 (47787ec04b6e3..., userDataDir: C:\\Users\\Srinivas\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:49498}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 73.0.3683.103, webStorageEnabled: true}\nSession ID: 2b894ed1b4fd415bcf43540baa209589\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[1]/div/div[1]/a[3]/span}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat ContactStepDefination.ContactSteps.user_moves_to_new_contact_page(ContactSteps.java:63)\r\n\tat ✽.user moves to new contact page(D:/leeladhar selenium/workspace/FreeCrmBDDFramework/src/main/java/Featrureone/contact.feature:10)\r\n",
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