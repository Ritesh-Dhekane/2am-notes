# Object-Oriented Programming Concepts in Java

OOP is a paradigm that uses "objects" to design applications and computer programs. 

## 1. Classes and Objects
A **class** is a blueprint for creating objects. An **object** is an instance of a class.

### Example Code
```java
public class Car {
    String model;
    int year;

    void drive() {
        System.out.println("The car is driving...");
    }

    public static void main(String[] args) {
        Car myCar = new Car(); // Object creation
        myCar.model = "Tesla";
        myCar.year = 2024;
        myCar.drive();
    }
}
```

## 2. The Four Pillars of OOP

| Pillar | Description |
|--------|-------------|
| **Encapsulation** | Hiding internal state and requiring all interaction to be through an object's methods. |
| **Inheritance** | A mechanism where a new class is derived from an existing class. |
| **Polymorphism** | The ability of an object to take on many forms. |
| **Abstraction** | Hiding complex implementation details and showing only the necessary features of an object. |

> [!NOTE]
> Java does not support multiple inheritance with classes but achieves it through Interfaces.

### Inheritance Example
```java
class Animal {
    void eat() { System.out.println("Eating..."); }
}

class Dog extends Animal {
    void bark() { System.out.println("Barking..."); }
}
```

## 3. Checklists
- [x] Class defined
- [x] Object instantiated
- [ ] Interface implemented
