// Create a program with a logic that throws theArrayIndexOutOfBoundsException while accessing elements in an array. 


public class Exception {

    public static void main(String[] args) {
        // TODO Auto-generated method stub
        int[] num = {0, 1, 2, 3, 4}; // array of 5 elements
        try {
            // ArrayIndexOutOfBoundsException
            System.out.println("Accessing element at index 6: " + num[6]);
        } catch (ArrayIndexOutOfBoundsException e) {
            // Catching the exception and printing a message
            System.out.println("Caught an ArrayIndexOutOfBoundsException: \n" + e.getMessage());
        }

    }

}
