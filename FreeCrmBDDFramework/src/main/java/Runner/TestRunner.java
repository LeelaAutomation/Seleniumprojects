package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin ={"pretty" , "html:Folder_Name", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"},//To generate different types of reporting formats
     features="D:/leeladhar selenium/workspace/FreeCrmBDDFramework/src/main/java/Featrureone"//path of feature file
      ,glue="ContactStepDefination", //path of step definition file
      monochrome=true, //display the console output in proper readable format
      dryRun=true, //it will check mapping is proper between feature file and step definition file
      strict=true //it will check any step is missing in step definition file
 )
     
      
public class TestRunner {

}
