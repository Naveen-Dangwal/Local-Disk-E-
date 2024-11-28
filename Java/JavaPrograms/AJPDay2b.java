
// Write a program to input two numbers and find the maximum between two numbers using the conditional/ternary operator
import java.util.Scanner; // for taking input from user
public class Maximum {
public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x, y, s;
        System.out.print("Enter the first number : ");
        x = sc.nextInt(); // taking first number from user
        System.out.print("Enter the second number : ");
        y = sc.nextInt(); // taking second number from user
        s = x > y ? x : y; // ternary Operator
        System.out.print("The greatest number is " + sum); // output
    }
}Output :
