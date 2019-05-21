package TestNGlistnersconcepts;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class Listenersone extends Base implements ITestListener{

	public void onFinish(ITestContext result) {
		
	}

	public void onStart(ITestContext result) {
		
	}

	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {
		
	}

	public void onTestFailure(ITestResult result) {
		System.out.println("FAILED TEST CASE");
		Failedtest(result.getMethod().getMethodName());
	
	}

	public void onTestSkipped(ITestResult result) {		
		
	}

	public void onTestStart(ITestResult result) {
		
	}

	public void onTestSuccess(ITestResult result) {
	System.out.println("PASSED");
	Passedtest(result.getMethod().getMethodName());
	}

}
