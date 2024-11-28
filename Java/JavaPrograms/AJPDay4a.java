// Create one superclass HillStations and three subclasses Manali, Mussoorie, Gulmarg. Subclasses extend the superclass and override its location() and famousFor() method. i.call the location() and famousFor() method by the Parent class’, i.e. Hillstations class. As it refers to the base class object and the base class method overrides the superclass method; the base class method is invoked at runtime. ii.call the location() and famousFor() method by the all subclass’,and print accordingly. 


public class HillStations { 				 // HillStations class
    public void location() {
        System.out.println("Location: Unknown");
    }

    public void famousFor() {
        System.out.println("Famous for: Unknown");
    }
}
public class Manali extends HillStations {  	  //Manali class
    public void location() {
        System.out.println("Location: Manali");
    }
    public void famousFor() {
        System.out.println("Famous for: Skiing, Snow-capped Mountains");
    }
}
class Mussoorie extends HillStations { 		//Mussoorie class
    public void location() {
        System.out.println("Location: Mussoorie");
    }

  
    public void famousFor() {
        System.out.println("Famous for: Hill Stations");
    }
}

class Gulmarg extends HillStations {
    public void location() {
        System.out.println("Location: Gulmarg");
    }
    public void famousFor() {
        System.out.println("Famous for:Natural Beauty");
    }
}
public class Places {           // Main class
    public static void main(String[] args) {
        HillStations manali = new Manali();
        HillStations mussoorie = new Mussoorie();
        HillStations gulmarg = new Gulmarg();
        System.out.println("Calling from superclass reference:");
        manali.location();   
        manali.famousFor();  

        mussoorie.location();  
        mussoorie.famousFor();

        gulmarg.location();    
        gulmarg.famousFor();   

        System.out.println("\nCalling from subclass reference:");
      
        Manali realManali = new Manali();
        Mussoorie realMussoorie = new Mussoorie();
        Gulmarg realGulmarg = new Gulmarg();

        realManali.location();   
        realManali.famousFor();  

        realMussoorie.location();
        realMussoorie.famousFor();

        realGulmarg.location();   
        realGulmarg.famousFor();  
    }
}
