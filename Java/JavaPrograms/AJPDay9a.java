package AJP_Lab_Program;
import java.util.TreeMap;

public class Day_9_a {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Creating and initializing a TreeMap
        TreeMap<String, Integer> map = new TreeMap<>();
        map.put("One", 1);
        map.put("Three", 3);
        map.put("Two", 2);

        // Displaying the initial TreeMap
        System.out.println("Initial TreeMap: " + map);

        // Removing the entry with key "Two" and return its value
        Integer removedValue = map.remove("Two");

        // Printing the removed value
        System.out.println("Removed value = " + removedValue);

        // Checking if the entry {Three=3} is removed
        boolean isRemoved = !map.containsKey("Three");

        // Printing the result of checking if the entry is removed
        System.out.println("Is the entry {Three=3} removed? " + isRemoved);

        // Displaying the updated TreeMap
        System.out.println("Updated TreeMap: " + map);

	}

}
