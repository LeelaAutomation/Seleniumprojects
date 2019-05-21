package Listner;

import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

public class Listnerone extends base implements ITestListener{

	public void onFinish(ITestContext result) {

	}

	public void onStart(ITestContext result) {

	}

	public void onTestFailedButWithinSuccessPercentage(ITestResult result) {

	}

	public void onTestFailure(ITestResult result) {
		System.out.println("FAILED TEST CASE");
failedtest(result.getMethod().getMethodName());

	}

	

	public void onTestSkipped(ITestResult result) {		

	}

	public void onTestStart(ITestResult result) {

	}

	public void onTestSuccess(ITestResult result) {
	System.out.println("PASSED");
	passedtest(result.getMethod().getMethodName());
	}

}
