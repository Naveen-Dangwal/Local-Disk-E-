// Write a program to reverse a given List of strings.

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class RevStr {
	public static void main(String [] args)
	{
        // Creating a List of strings
        List<String> stringList = new ArrayList<>();
        stringList.add("Dog");
        stringList.add("Cat");
        stringList.add("Elephant");
        stringList.add("Lion");

        // Displaying the original list
        System.out.println("Original List : " + stringList);

        // Reversing the list
        Collections.reverse(stringList);

        // Displaying the reversed list
        System.out.println("Reversed List : " + stringList);
    }

}
