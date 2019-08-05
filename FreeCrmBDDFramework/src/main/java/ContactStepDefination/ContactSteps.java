package ContactStepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class ContactSteps {
public WebDriver driver;
//Test feature steps
@Given("^user is already on Login Page$")
public void user_already_on_login_page(){
System.setProperty("webdriver.chrome.driver","D:\\leeladhar selenium\\chromedriver.exe");//webdriver instializing
driver = new ChromeDriver();
driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);

driver.get("https://www.freecrm.com/index.html");
}

@When("^title of login page is Free CRM$")
public void title_of_login_page_is_free_CRM(){
String title = driver.getTitle();
System.out.println(title);
Assert.assertEquals("#1 Free CRM software in the Cloud FreeCRM", title);
}
@Then("^user click on login button for enter credentials$")
public void user_click_on_login_button_for_enter_credentials(){
driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div[2]/div/div[3]/ul/a/span[2]")).click();
}

//Reg Exp:
//1. \"([^\"]*)\"
//2. \"(.*)\"

@Then("^user enters \"(.*)\" and \"(.*)\"$")//Regular expression for 2 parameters
public void user_enters_username_and_password(String email, String password){
driver.findElement(By.name("email")).sendKeys(email);
driver.findElement(By.name("password")).sendKeys(password);
}

@Then("^user tap on login button$")
public void user_tap_on_login_button() throws InterruptedException {
	driver.findElement(By.xpath("/html/body/div[1]/div/div/form/div/div[3]")).click();

/*WebElement loginBtn =
driver.findElement(By.xpath("//input[@type='submit']"));
JavascriptExecutor js = (JavascriptExecutor)driver;
js.executeScript("arguments[0].click();", loginBtn);*/
}


@Then("^user moves to new contact page$")
public void user_moves_to_new_contact_page() throws InterruptedException {
	/*driver.switchTo().frame(0);
	Actions action = new Actions(driver);
	action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();*/
driver.findElement(By.xpath("/html/body/div[1]/div/div[1]/a[3]/span")).click();
driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/a/button")).click();

	
}

@Then("^user enters contact details \"([^\"]*)\" and \"([^\"]*)\"$")
public void user_enters_contact_details_and(String firstname, String lastname) throws Exception {
  driver.findElement(By.id("first_name")).sendKeys(firstname);
  driver.findElement(By.id("last_name")).sendKeys(lastname);
  driver.findElement(By.xpath("/html/body/div[1]/div/div[2]/div[2]/div/div[1]/div[2]/div/button[2]")).click();
}


@Then("^Close the browser$")
public void close_the_browser() throws InterruptedException{
	 driver.quit();
	 Thread.sleep(2000);
}

	}
