$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:/leeladhar selenium/workspace/FreeCrmBDDFramework/src/main/java/Features/login.feature");
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
  "name": "User is already in login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginStepDefination.User_is_already_in_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Title of login page is free CRM",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDefination.Title_of_login_page_is_free_CRM()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[#1 Free CRM software in the Cloud FreeCRM]\u003e but was:\u003c[freecrm.com]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat StepDefination.LoginStepDefination.Title_of_login_page_is_free_CRM(LoginStepDefination.java:28)\r\n\tat ✽.Title of login page is free CRM(D:/leeladhar selenium/workspace/FreeCrmBDDFramework/src/main/java/Features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user click on login button for enter credentials",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_click_on_login_button_for_enter_credentials()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefination.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefination.user_clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
});