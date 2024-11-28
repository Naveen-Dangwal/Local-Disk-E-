// Write a program to declare stack.Store 10 elements into it.Remove 4 elements from stack and display it.

package Lab_Programs;
import java.util.Stack;


public class StackOp {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		        Stack<Integer> stack = new Stack<>(); // creating a new stack

		      
		        for (int i = 1; i <= 10; i++) {   // for loop
		            stack.push(i);           // inserting elements in the stack
		        }
		        System.out.println("Stack after adding 10 elements: " + stack);   // displaying the stack

		        for (int i = 0; i < 4; i++) {   // removing 4 elements from the stack
		            if (!stack.isEmpty()) {
		                int removedElement = stack.pop();
		                System.out.println("Removed element: " + removedElement);
		            }
		        }

		        System.out.println("Stack after removing 4 elements: " + stack);  // displaying the stack after removing 4 elements
	}

}
