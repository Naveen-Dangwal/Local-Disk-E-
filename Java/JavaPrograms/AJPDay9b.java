package AJP_Lab_Program;
import java.util.*;

public class Day_9_b {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		// Creating a TreeMap
        TreeMap<String, Integer> map = new TreeMap<>();
        map.put("One", 1);
        map.put("Three", 3);
        map.put("Two", 2);

        System.out.println("TreeMap: " + map);
        
        // 1. Using for-each loop on entrySet()
        System.out.println("\nIterating using entrySet():");
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }

        // 2. Using for-each loop on keySet()
        System.out.println("\nIterating using keySet():");
        for (String key : map.keySet()) {
            System.out.println("Key: " + key + ", Value: " + map.get(key));
        }

        // 3. Using for-each loop on values()
        System.out.println("\nIterating using values():");
        for (Integer value : map.values()) {
            System.out.println("Value: " + value);
        }

        // 4. Using an Iterator on entrySet()
        System.out.println("\nIterating using Iterator on entrySet():");
        Iterator<Map.Entry<String, Integer>> entryIterator = map.entrySet().iterator();
        while (entryIterator.hasNext()) {
            Map.Entry<String, Integer> entry = entryIterator.next();
            System.out.println("Key: " + entry.getKey() + ", Value: " + entry.getValue());
        }

        // 5. Using an Iterator on keySet()
        System.out.println("\nIterating using Iterator on keySet():");
        Iterator<String> keyIterator = map.keySet().iterator();
        while (keyIterator.hasNext()) {
            String key = keyIterator.next();
            System.out.println("Key: " + key + ", Value: " + map.get(key));
        }
	}
}
