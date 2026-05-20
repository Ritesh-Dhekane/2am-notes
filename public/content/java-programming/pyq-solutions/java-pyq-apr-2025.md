# File Name

`java-pyq-apr-2025.md`

# JAVA PYQ — APR 2025

**Subject:** Java Programming
**Course:** MCA Semester II (2024 Pattern)
**Paper Code:** 6432-2001

---

# Question 1

## (a) Define a class `Calculation` to implement method overloading for addition of two integers and two double variables. [5]

### Answer

### Method Overloading

* Method overloading means defining multiple methods with the same name but different parameter lists.
* It is an example of **Compile Time Polymorphism**.

### Java Program

```java
class Calculation {

    void add(int a, int b) {
        System.out.println("Addition of Integers = " + (a + b));
    }

    void add(double a, double b) {
        System.out.println("Addition of Double Values = " + (a + b));
    }

    public static void main(String[] args) {

        Calculation c = new Calculation();

        c.add(10, 20);
        c.add(12.5, 8.3);
    }
}
```

### Output

```text
Addition of Integers = 30
Addition of Double Values = 20.8
```

### Explanation

* `add(int,int)` handles integer addition.
* `add(double,double)` handles double addition.
* Compiler selects method based on arguments passed.

---

## (b) Define class `Person` with suitable data members and methods. Extend this class in `Manager` class. Display manager details. [5]

### Answer

### Inheritance

* Inheritance allows one class to acquire properties of another class.
* `Manager` inherits `Person` using `extends`.

### Java Program

```java
class Person {

    int id;
    String name;

    void acceptPerson(int i, String n) {
        id = i;
        name = n;
    }

    void displayPerson() {
        System.out.println("ID = " + id);
        System.out.println("Name = " + name);
    }
}

class Manager extends Person {

    double salary;

    void acceptManager(double s) {
        salary = s;
    }

    void displayManager() {
        displayPerson();
        System.out.println("Salary = " + salary);
    }

    public static void main(String[] args) {

        Manager m = new Manager();

        m.acceptPerson(101, "Rahul");
        m.acceptManager(50000);

        m.displayManager();
    }
}
```

### Output

```text
ID = 101
Name = Rahul
Salary = 50000.0
```

### Key Points

* `Person` is parent class.
* `Manager` is child class.
* Child class accesses parent class members.

---

## (c) Write a function using lambda expression to calculate power of number `(xy)`. [5]

### Answer

### Lambda Expression

* Introduced in Java 8.
* Provides shorter syntax for functional interfaces.

### Java Program

```java
interface Power {

    int calculate(int x, int y);
}

class Demo {

    public static void main(String[] args) {

        Power p = (x, y) -> (int)Math.pow(x, y);

        System.out.println("Power = " + p.calculate(2, 3));
    }
}
```

### Output

```text
Power = 8
```

### Explanation

* Lambda expression:

```java
(x, y) -> (int)Math.pow(x, y)
```

* Calculates `x` raised to `y`.

---

## (d) What is Garbage Collection? Explain with required method. [5]

### Answer

### Garbage Collection

* Garbage Collection is automatic memory management process in Java.
* JVM removes unused objects automatically.
* Helps avoid memory leakage.

### Important Method — `finalize()`

* Called before object destruction.
* Used for cleanup activities.

### Syntax

```java
protected void finalize() {
    // cleanup code
}
```

### Java Program

```java
class Test {

    protected void finalize() {
        System.out.println("Object is destroyed");
    }

    public static void main(String[] args) {

        Test t = new Test();

        t = null;

        System.gc();
    }
}
```

### Explanation

* `t = null` removes reference.
* `System.gc()` requests JVM to run garbage collector.
* `finalize()` executes before object removal.

### Advantages

* Automatic memory management
* Reduces memory leaks
* Improves performance

---

# Question 2

## (a) Create a thread to display prime numbers between 1 to 500. Each number will display after 3 seconds. [5]

### Answer

### Java Program

```java
class PrimeThread extends Thread {

    public void run() {

        for(int i = 1; i <= 500; i++) {

            int count = 0;

            for(int j = 1; j <= i; j++) {

                if(i % j == 0) {
                    count++;
                }
            }

            if(count == 2) {

                System.out.println(i);

                try {
                    Thread.sleep(3000);
                }
                catch(Exception e) {
                    System.out.println(e);
                }
            }
        }
    }

    public static void main(String[] args) {

        PrimeThread t = new PrimeThread();

        t.start();
    }
}
```

### Explanation

* `Thread.sleep(3000)` pauses thread for 3 seconds.
* Prime numbers are displayed one by one.
* Thread executes inside `run()` method.

---

## (b) Write a Java program to demonstrate user-defined exception. [5]

### Answer

### User Defined Exception

* Custom exception created by programmer.
* Created using `Exception` class.

### Java Program

```java
class InvalidAgeException extends Exception {

    InvalidAgeException(String msg) {
        super(msg);
    }
}

class Test {

    public static void main(String[] args) {

        int age = 15;

        try {

            if(age < 18) {

                throw new InvalidAgeException(
                    "Not Eligible for Voting");
            }

            else {
                System.out.println("Eligible for Voting");
            }
        }

        catch(InvalidAgeException e) {
            System.out.println(e);
        }
    }
}
```

### Output

```text
InvalidAgeException: Not Eligible for Voting
```

### Key Points

* `throw` keyword throws exception.
* `catch` block handles exception.

---

## (c) Write a Java program to implement `ArrayList` with functions to add, remove and sort members. [5]

### Answer

### ArrayList

* Dynamic collection in Java.
* Part of Collection Framework.

### Java Program

```java
import java.util.*;

class ArrayListDemo {

    public static void main(String[] args) {

        ArrayList<String> list = new ArrayList<String>();

        list.add("Rahul");
        list.add("Amit");
        list.add("Sneha");

        System.out.println("ArrayList : " + list);

        list.remove("Amit");

        System.out.println("After Remove : " + list);

        Collections.sort(list);

        System.out.println("After Sorting : " + list);
    }
}
```

### Output

```text
ArrayList : [Rahul, Amit, Sneha]
After Remove : [Rahul, Sneha]
After Sorting : [Rahul, Sneha]
```

### Methods Used

| Method               | Purpose         |
| -------------------- | --------------- |
| `add()`              | Adds element    |
| `remove()`           | Removes element |
| `Collections.sort()` | Sorts elements  |

---

## (d) Differentiate between Checked and Unchecked Exception. [5]

### Answer

| Checked Exception                   | Unchecked Exception              |
| ----------------------------------- | -------------------------------- |
| Checked at compile time             | Checked at runtime               |
| Must be handled                     | Handling optional                |
| Derived from `Exception`            | Derived from `RuntimeException`  |
| Compiler gives error if not handled | Compiler does not force handling |
| Example: `IOException`              | Example: `ArithmeticException`   |

### Checked Exception

* Occurs during compilation.
* Must be handled using try-catch or throws.

### Unchecked Exception

* Occurs during execution.
* Caused by programming errors.

---

# Question 3

## (a) Create an HTML page to accept two numbers and write servlet to add given numbers and display result. [10]

### Answer

### HTML Page

```html
<html>
<head>
    <title>Addition Form</title>
</head>

<body>

<h2>Addition of Two Numbers</h2>

<form action="AddServlet" method="post">

    Enter First Number :
    <input type="text" name="num1"><br><br>

    Enter Second Number :
    <input type="text" name="num2"><br><br>

    <input type="submit" value="Add">

</form>

</body>
</html>
```

### Servlet Program

```java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class AddServlet extends HttpServlet {

    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
                       throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        int n1 = Integer.parseInt(
            request.getParameter("num1"));

        int n2 = Integer.parseInt(
            request.getParameter("num2"));

        int sum = n1 + n2;

        out.println("<h2>Addition = " + sum + "</h2>");
    }
}
```

### Output

```text
Addition = 30
```

### Explanation

* HTML form accepts input.
* `getParameter()` reads form values.
* Servlet performs addition and displays result.

---

## (b) Explain Servlet Life Cycle and demonstrate its methods with example. [10]

### Answer

# Servlet Life Cycle

Servlet life cycle defines stages through which servlet passes.

## Stages

1. Loading Servlet
2. `init()`
3. `service()`
4. `destroy()`

### Life Cycle Diagram

```text
Loading Servlet
       ↓
init()
       ↓
service()
       ↓
destroy()
```

### Methods

| Method      | Purpose             |
| ----------- | ------------------- |
| `init()`    | Initializes servlet |
| `service()` | Handles requests    |
| `destroy()` | Removes servlet     |

### Servlet Program

```java
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LifeCycleDemo extends HttpServlet {

    public void init() {
        System.out.println("Servlet Initialized");
    }

    public void service(HttpServletRequest req,
                        HttpServletResponse res)
                        throws IOException {

        PrintWriter out = res.getWriter();

        out.println("Service Method Executed");
    }

    public void destroy() {
        System.out.println("Servlet Destroyed");
    }
}
```

### Explanation

* `init()` runs once.
* `service()` runs for every request.
* `destroy()` runs before servlet removal.

---

# Question 4

## (a) Design Java Application (using JSP) for registration of hackathon and store data in appropriate table. [10]

### Answer

## Student Table

```sql
CREATE TABLE hackathon (
    name VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(15),
    gender VARCHAR(10),
    course VARCHAR(30)
);
```

## JSP Form Page

```jsp
<html>
<body>

<h2>Hackathon Registration</h2>

<form action="register.jsp" method="post">

Name :
<input type="text" name="name"><br><br>

Email :
<input type="email" name="email"><br><br>

Phone :
<input type="text" name="phone"><br><br>

Gender :
<input type="radio" name="gender" value="Male">Male

<input type="radio" name="gender" value="Female">Female
<br><br>

Course :
<select name="course">
    <option>MCA</option>
    <option>BCA</option>
</select>

<br><br>

<input type="submit" value="Register">

</form>

</body>
</html>
```

## JSP Database Program

```jsp
<%@ page import="java.sql.*" %>

<%
String name = request.getParameter("name");
String email = request.getParameter("email");
String phone = request.getParameter("phone");
String gender = request.getParameter("gender");
String course = request.getParameter("course");

try {

    Class.forName("com.mysql.cj.jdbc.Driver");

    Connection con = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/test",
        "root",
        "root");

    PreparedStatement ps = con.prepareStatement(
        "insert into hackathon values(?,?,?,?,?)");

    ps.setString(1, name);
    ps.setString(2, email);
    ps.setString(3, phone);
    ps.setString(4, gender);
    ps.setString(5, course);

    ps.executeUpdate();

    out.println("Registration Successful");

    con.close();
}

catch(Exception e) {
    out.println(e);
}
%>
```

### Explanation

* JSP accepts registration details.
* JDBC stores data in database.
* `PreparedStatement` inserts record safely.

---

## (b) Explain JSP directives with example. [10]

### Answer

# JSP Directives

* JSP directives provide instructions to JSP container.
* Written using `<%@ %>`.

## Types of JSP Directives

1. Page Directive
2. Include Directive
3. Taglib Directive

---

## 1. Page Directive

### Syntax

```jsp
<%@ page attribute="value" %>
```

### Example

```jsp
<%@ page import="java.util.*" %>
```

### Purpose

* Imports packages.

---

## 2. Include Directive

### Syntax

```jsp
<%@ include file="header.jsp" %>
```

### Purpose

* Includes another JSP file.

---

## 3. Taglib Directive

### Syntax

```jsp
<%@ taglib uri="uri" prefix="c" %>
```

### Purpose

* Uses custom tags.

---

## Summary Table

| Directive | Purpose               |
| --------- | --------------------- |
| Page      | Defines page settings |
| Include   | Includes file         |
| Taglib    | Uses custom tags      |

---

# Question 5

## (a) Create a Spring MVC form to read registration details for Blood Donation Camp with validation and display it. [10]

### Answer

## Model Class

```java
package com.demo;

import jakarta.validation.constraints.*;

public class Donor {

    @NotEmpty(message="Name is required")
    private String name;

    @Email(message="Enter valid email")
    private String email;

    @NotEmpty(message="Blood Group is required")
    private String bloodgroup;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getBloodgroup() {
        return bloodgroup;
    }

    public void setBloodgroup(String bloodgroup) {
        this.bloodgroup = bloodgroup;
    }
}
```

## Controller Class

```java
package com.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@Controller
public class DonorController {

    @GetMapping("/form")
    public String showForm(Model m) {

        m.addAttribute("donor", new Donor());

        return "form";
    }

    @PostMapping("/register")
    public String submitForm(
            @Valid @ModelAttribute("donor") Donor d,
            BindingResult br) {

        if(br.hasErrors()) {
            return "form";
        }

        return "success";
    }
}
```

## JSP Form Page

```jsp
<%@ taglib uri="http://www.springframework.org/tags/form"
prefix="form" %>

<html>
<body>

<h2>Blood Donation Registration</h2>

<form:form action="register" modelAttribute="donor">

Name :
<form:input path="name"/>
<form:errors path="name"/>
<br><br>

Email :
<form:input path="email"/>
<form:errors path="email"/>
<br><br>

Blood Group :
<form:input path="bloodgroup"/>
<form:errors path="bloodgroup"/>
<br><br>

<input type="submit" value="Submit"/>

</form:form>

</body>
</html>
```

### Explanation

* `@Controller` defines controller.
* `@Valid` performs validation.
* `BindingResult` stores validation errors.

---

## (b) Explain Spring MVC architecture and any two Spring annotations. [10]

### Answer

# Spring MVC Architecture

Spring MVC follows MVC design pattern.

## Components

| Component         | Purpose            |
| ----------------- | ------------------ |
| DispatcherServlet | Central controller |
| Controller        | Handles request    |
| Model             | Stores data        |
| View              | Displays output    |
| View Resolver     | Resolves JSP page  |

---

## Spring MVC Flow

```text
Client Request
      ↓
DispatcherServlet
      ↓
Controller
      ↓
Model
      ↓
View Resolver
      ↓
JSP View
      ↓
Response to Client
```

---

# Spring Annotations

## 1. `@Controller`

* Defines controller class.

### Example

```java
@Controller
public class DemoController {
}
```

---

## 2. `@RequestMapping`

* Maps URL request to method.

### Example

```java
@RequestMapping("/home")
public String home() {
    return "index";
}
```

---

## Advantages of Spring MVC

* Loose coupling
* Easy maintenance
* Reusable components
* Simplifies web development
