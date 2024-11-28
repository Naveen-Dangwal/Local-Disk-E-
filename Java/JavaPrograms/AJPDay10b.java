//2. Write a program to prints 1 to 10 and sleep for 500ms using thread
package AJP_Lab_Program;

public class Day_10_b implements Runnable  {
	public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
            try {
                Thread.sleep(500); // Sleep for 500 milliseconds
            } catch (InterruptedException e) {
                System.out.println("Thread interrupted: " + e.getMessage());
            }
        }
    }


	public static void main(String[] args) {
		// TODO Auto-generated method stub
        // Creating a Runnable instance
		Day_10_b printer = new Day_10_b();
        
        // Create a thread with the Runnable
        Thread thread = new Thread(printer);
        
        // Starting the thread
        thread.start();

        // Waiting for the thread to finish
        try {
            thread.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted: " + e.getMessage());
        }
	}
}
