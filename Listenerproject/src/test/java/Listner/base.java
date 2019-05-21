package Listner;

import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class base {
	public static WebDriver driver ;
	public void intialization(){
		System.setProperty("webdriver.chrome.driver","D:/chromedriver.exe");
		driver=new ChromeDriver();
		driver.get("https://www.google.com/");
	}
public void failedtest(String testmethodname){
	TakesScreenshot ts=(TakesScreenshot)driver;
	File source=ts.getScreenshotAs(OutputType.FILE);
	try {
		FileUtils.copyFile(source, new File("D:\\leeladhar selenium\\workspace\\Listenerproject\\screenshot/" +testmethodname+".png"));
	} catch (Exception e) {
			}
}
	public void passedtest(String passmethodname){
		TakesScreenshot ts=(TakesScreenshot)driver;
		File source=ts.getScreenshotAs(OutputType.FILE);
		try {
			FileUtils.copyFile(source, new File("D:\\leeladhar selenium\\workspace\\Listenerproject\\screenshot2/" +passmethodname+".png"));
		} catch (Exception e) {
				}
}
} 