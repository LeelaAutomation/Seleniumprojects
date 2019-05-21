package TestNGlistnersconcepts;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {
	public static WebDriver driver ;
	public void intialization(){
		System.setProperty("webdriver.chrome.driver","D:/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.google.com/");
	}
public void Failedtest(String testmethodname){
	TakesScreenshot ts=(TakesScreenshot)driver;
	File source=ts.getScreenshotAs(OutputType.FILE);
	try {
		FileUtils.copyFile(source, new File("D:/leeladhar selenium/workspace/TestNGlisteners/Screenshots/"+testmethodname+".png"));
	} catch (Exception e) {
			}
}
	public void Passedtest(String passmethodname){
		TakesScreenshot ts=(TakesScreenshot)driver;
		File source=ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source, new File("D:/leeladhar selenium/workspace/TestNGlisteners/screenshots2/"+passmethodname+".png"));
		} catch (Exception e) {
				}
}
}