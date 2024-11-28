// Write a program to check leap year using if else. How to check whether a given year is a leap year or not. [Hint:Take an input of any number. Store it in some variable say year. If a year is exactly divisible by 4 and not divisible by 100, then it is a leap year. Or if a year is exactly divisible by 400 then it is a leap year.]


import java.util.Scanner;

public class Leap {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		int n;
		System.out.println("enter the year");
		n=sc.nextInt();   // input from user
		if(n%4==0) {      // condition
			System.out.print("leap year");
		}
		else {
			System.out.print("not leap year");
		}

	}
}
