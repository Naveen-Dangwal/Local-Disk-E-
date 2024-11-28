// Write a Java program that calculates the sum of all even numbers present in an ArrayList of integers.


import java.util.ArrayList;

public class EvenNumber {
	public static void main(String[] args) {
		// TODO Auto-generated method stub
        // Creating an ArrayList of integers
        ArrayList<Integer> numbers = new ArrayList<>();
        numbers.add(10);
        numbers.add(15);
        numbers.add(20);
        numbers.add(25);
        numbers.add(30);
        numbers.add(35);
        numbers.add(40);

        // Calculating the sum of even numbers
        int sum = 0;
        for (int number : numbers) {
            if (number % 2 == 0) { // Check if the number is even
                sum += number; // Add to sum
            }
        }

        // Displaying the result
        System.out.println("Sum of even numbers: " + sum);
    }
}
