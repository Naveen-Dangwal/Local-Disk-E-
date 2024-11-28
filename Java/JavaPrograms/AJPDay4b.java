// Write a Java program that demonstrates method overriding by creating a superclass called Animal and two subclasses called Dog and Cat. ● The Animal class should have a method called makeSound(), which simply prints "The animal makes a sound." ● The Dog and Cat classes should override this method to print "TheCat/The dog meows/barks" respectively. ● The program should allow the user to create and display objects of each class.

import java.util.*;

class Animal {                            // Animal Class
    public void makeSound() {
        System.out.println("The animal makes a sound.");
    }
}

class Dog extends Animal {       // Dog class
    public void makeSound() {
        System.out.println("The dog barks.");
    }
}

class Cat extends Animal {          // Cat class
    public void makeSound() {
        System.out.println("The cat meows.");
    }
}


public class AnimalSound {             // Main class
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Choose an animal to create : ");
        System.out.println("1. Dog");
        System.out.println("2. Cat");
        int choice = sc.nextInt();

        Animal animal;
        if (choice==1) {
            animal = new Dog();
        } else if (choice==2) {
            animal = new Cat();
        } else {
            System.out.println("Defaulting to Animal.");
            animal = new Animal();
        }

        animal.makeSound();
    }
}
