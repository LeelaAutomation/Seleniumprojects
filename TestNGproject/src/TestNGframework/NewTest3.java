package TestNGframework;

import org.testng.annotations.AfterGroups;
import org.testng.annotations.BeforeGroups;
import org.testng.annotations.Test;

public class NewTest3 {
	@BeforeGroups(groups = {"Sanity","Regression"})
	public void login(){
		System.out.println("Login successful");
	}
  @Test(groups = {"Sanity"},priority=2)
  public void fundtransfer() {
	  System.out.println("Fund transfer successful");
}
 @Test(groups = {"Sanity"},priority=3)
 public void search(){
	 System.out.println("Search successful");
}
@Test(groups = {"Regression"})
public void advancedsearch(){
	System.out.println("advanced search successful");
	
}
 @Test(groups = {"Regression"})
 public void prepaidrecharge(){
	 System.out.println("Prepaid recharge successful");
 }
@Test(groups = {"Regression"})
public void billpayment(){
	System.out.println("Bill payment successful");
}
@AfterGroups(groups = {"Sanity","Regression"})
public void logout(){
	System.out.println("logout successful");
}
}
