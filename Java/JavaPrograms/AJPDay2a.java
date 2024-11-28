// Create a Bank class and declare an instance variable named amount of type double. Create parameterized constructor to initialize variable “amount” with value 10000.Create two methods withdraw(double withdrawalAmount) and deposit(double depositAmount).Calculate withdrawal based on some condition (using ternary operator) like If amount is sufficient then “withdraw successful” message will be printed on the console and amount should be updated after withdraw. Later on, deposit 5000 in the account balance. At the end display total balance on the console.

class Bank {
    double amount;

    Bank(double amount) { // parameterized constructor
        this.amount = amount;
        System.out.print("Current Amount = " + amount); // printing current amount
    }

    void withdraw(double withdrawalAmount) {
        System.out.println("\nWithdrawal Amount = " + withdrawalAmount);
        Stringamt = (amount >= withdrawalAmount) ? ("withdraw successful") : ("insufficient balance");
        amount = (amount >= withdrawalAmount) ? (amount - withdrawalAmount) : (amount);
        System.out.println(amt);
    }

    void deposit(double depositAmount) {
        System.out.println("Deposit Amount = " + depositAmount);
        amount = amount + depositAmount;
        System.out.println("Amount deposited successfully"); // printing amount after depositing
    }
}

public class Rbibank {
    public static void main(String[] args) {
        Bank rb = new Bank(10000); // initializing constructor
        rb.withdraw(1000);
        rb.deposit(5000);
        System.out.print("Total Balance = " + rb.amount); // printing total amount after

    }
}
