package TestNGlistnersconcepts;

import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.testng.annotations.Listeners;


@Listeners(Listenersone.class)
public class Takescreenshot extends Base {
	@BeforeMethod
	public void setup(){
		intialization();
		
	}

	@AfterMethod
	public void quit(){
		driver.quit();
		
	}
	
	@Test
	public void TakeScreenshotTest1( ){
		System.out.println("Screenshot1 takes successfully");
	}
	@Test
	public void TakeScreenshotTest2(){
		System.out.println("Screenshot2 takes successfully");

	}
	@Test
	public void TakeScreenshotTest3(){
		Assert.assertEquals(false, true);

	}
}
