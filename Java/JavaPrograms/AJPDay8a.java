package AJP_Lab_Program;
import java.util.HashMap;

public class Day_8_a {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		HashMap<String, String> map = new HashMap<>();

        // Associating specified value with the specified key
        map.put("name", "Naveen Dangwal");
        map.put("age", "23");
        map.put("city", "Ghaziabad");

        // Displaying the contents of the HashMap
        System.out.println("HashMap contents: " + map);

        // Retrieving and print a value using a key
        String name = map.get("name");
        System.out.println("The value associated with 'name' is: " + name);
	}

}
