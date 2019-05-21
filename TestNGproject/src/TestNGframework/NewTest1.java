package TestNGframework;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class NewTest1 {
 /*@BeforeClass
  public void login() {
	  System.out.println("login successful");
  }
 @AfterClass
	  public void logout(){
		  System.out.println("Logout successful");
	  }
*/@Test
	  public void Addvendor(){
		  System.out.println("vendor added successfully");
	  }
@Test
	  public void Addproduct(){
		  System.out.println("Product added successfully");
	  }
@Test
public void Addcurrency(){
	System.out.println("Currency added successfully");
  }
}

