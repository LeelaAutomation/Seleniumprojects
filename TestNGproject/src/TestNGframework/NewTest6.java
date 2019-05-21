package TestNGframework;

import org.testng.annotations.Test;

public class NewTest6 {
	 @Test
	  public void Testcase4() {
		  long id=Thread.currentThread().getId();
		  System.out.println("Test case 4 is sucessful :"+id);
	  }
	  @Test
	  public void Testcase5() {
		  long id=Thread.currentThread().getId();
		  System.out.println("Test case 5 is sucessful :"+id);
	  }
	  @Test
	  public void Testcase6() {
		  long id=Thread.currentThread().getId();
		  System.out.println("Test case 6 is sucessful :"+id);
	  }
}
