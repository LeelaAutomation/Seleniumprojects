package TestNGframework;

import org.testng.annotations.Test;
import org.testng.Assert;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeMethod;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Browserlaunching {
	public WebDriver  driver;
  @BeforeMethod
  public void browserlaunching() {
	  System.setProperty("webdriver.chrome.driver", "D:\\leeladhar selenium\\chromedriver.exe");
		 driver=new ChromeDriver();
  }
  @AfterMethod
  public void closebrowser(){
	  driver.close();
  }
@Test
  public void verifypagetitle1(){
driver.get("https://www.gmail.com");
Assert.assertEquals("Gmail",driver.getTitle());
System.out.println(driver.getTitle());
}
@Test
public void verifypagetitle2(){
driver.get("https://www.yahoo.com");
Assert.assertEquals("Yahoo",driver.getTitle());
System.out.println(driver.getTitle());

}	 
  }
