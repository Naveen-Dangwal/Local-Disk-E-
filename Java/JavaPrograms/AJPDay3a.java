// Write a program to check whether a number is a Strong number or not. Strong number is a special number whose sum of factorial of digits is equal to the original number. For example: 145 is a strong number. Since, 1! + 4! + 5! = 145.
import java.util.Scanner;

public class Armstrong {
	public static void main(String [] args) {
		Scanner sc =new Scanner(System.in);
		int n,r,a,arm=1,sum=0;
		System.out.print("Enter the number");
		n=sc.nextInt();                           // input from user
		a=n;
		while(n!=0)      // condition 
		{
			r=n%10;
			for(int i=1;i<=r;i++)    // loop
			{
				arm=arm*i;
				
			}
			sum=sum+arm;
			arm=1;
			n=n/10;
		}

		if(sum==a) {    // condition 
			System.out.print("the number is strong");
		}
		else
		{
			System.out.print("the number is not strong");
		}
	}

}
