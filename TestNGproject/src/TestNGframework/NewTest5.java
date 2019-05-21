package TestNGframework;

import org.testng.annotations.Test;

public class NewTest5 {
  @Test
  public void Testcase1() {
	  long id=Thread.currentThread().getId();
	  System.out.println("Test case 1 is sucessful :"+id);
  }
  @Test
  public void Testcase2() {
	  long id=Thread.currentThread().getId();
	  System.out.println("Test case 2 is sucessful :"+id);
  }
  @Test
  public void Testcase3() {
	  long id=Thread.currentThread().getId();
	  System.out.println("Test case 3 is sucessful :"+id);
  }
}

