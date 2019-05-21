package TestNGframework;

	import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

	public class NewTest2 {
	 @BeforeTest
	  public void login() {
		  System.out.println("login successful");
	  }
	 @AfterTest
		  public void logout(){
			  System.out.println("Logout successful");
		  }
	@Test(priority=1)
		  public void Addvendor(){
			  System.out.println("vendor deleted successfully");
		  }
	@Test(priority=2)
		  public void Addproduct(){
			  System.out.println("Product deleted successfully");
		  }
	@Test(priority=3)
	public void Addcurrency(){
		System.out.println("Currency deleted successfully");
	  }
	}
	
