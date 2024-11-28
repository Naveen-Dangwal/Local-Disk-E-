// Write a Java program to append the specified element to the end of a HashSet.

package Lab_Programs;
import java.util.HashSet;

public class AddHashSet {
    public static void main(String[] args) {
     
        HashSet<String> hashSet = new HashSet<>();

        hashSet.add("Dog");   // adding dog
        hashSet.add("Cat");  // adding cat
        hashSet.add("Monkey");  // adding monkey

        System.out.println("HashSet before adding any element : " + hashSet); // printing the hashset

        String newElement = "Lion";   // adding new element lion

        boolean isAdded = hashSet.add(newElement);

        if (isAdded) {
            System.out.println(newElement + " was added to the HashSet.");  // printing element name which was added 
        } else {
            System.out.println(newElement + " was already in the HashSet."); // printing if element already exixts in the hashset
        }

        System.out.println("HashSet after adding the element: " + hashSet); // printing the hashset
    }
}