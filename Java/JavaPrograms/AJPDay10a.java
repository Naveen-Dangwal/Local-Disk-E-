//1. Write a program to prints numbers from 0 to 4 using thread
package AJP_Lab_Program;
public class Day_10_a extends Thread {
	public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(i);
            try {         // try block
                Thread.sleep(600); // Sleep for 600 milliseconds
            } catch (InterruptedException e) { // catch block
                System.out.println("Thread interrupted: " + e.getMessage());
            }
        }
    }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        Day_10_a thread = new Day_10_a();
        thread.start();
        try {
            thread.join();
        } catch (InterruptedException e) {
            System.out.println("Main thread interrupted: " + e.getMessage());
        }
	}
}
