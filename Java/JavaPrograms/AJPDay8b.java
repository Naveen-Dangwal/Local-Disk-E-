package AJP_Lab_Program;
import java.util.HashMap;

public class Day_8_b {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Creating a HashMap
        HashMap<String, String> map = new HashMap<>();

        // Checking if the HashMap is empty
        if (map.isEmpty()) {
            System.out.println("The HashMap is empty.");
        } else {
            System.out.println("The HashMap contains key-value mapping.");
        }

        // Adding some data to the HashMap
        map.put("name", "John");
        map.put("age", "25");

        // Checking again if the HashMap is empty
        if (map.isEmpty()) {
            System.out.println("The HashMap is empty.");
        } else {
            System.out.println("The HashMap contains key-value mapping.");
        }

	}
}
