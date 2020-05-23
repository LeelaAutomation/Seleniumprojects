/*package StepDefination;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStepDefination {
public WebDriver driver;

	@Given("^user is already in login page$")
	public void user_is_already_in_login_page(){
		System.setProperty("webdriver.chrome.driver", "D:\\leeladhar selenium\\chromedriver.exe");
		driver=new ChromeDriver();
	driver.get("https://freecrm.com/");
	driver.manage().window().maximize();
	
	}
	@When("^title of login page is free CRM$")
	public void title_of_login_page_is_free_CRM(){
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the Cloud FreeCRM", title);
	}
	@Then("^user click on login button for enter credentials$")
	public void user_click_on_login_button_for_enter_credentials(){
	driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div[2]/div/div[3]/ul/a/span[2]")).click();
		
	}
	@Then("^user enters username and password$")
	public void user_enters_username_and_password(){
		driver.findElement(By.name("email")).sendKeys("leela231@gmail.com");
		driver.findElement(By.name("password")).sendKeys("Leeladhar");
	}
	@And("^user tap on login button$")
	public void user_clicks_on_login_button(){
driver.findElement(By.xpath("/html/body/div[1]/div/div/form/div/div[3]")).click();
		driver.findElement(By.className("Login")).click();
	}
}
*/