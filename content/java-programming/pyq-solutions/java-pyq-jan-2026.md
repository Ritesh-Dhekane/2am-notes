# File Name

`java-pyq-jan-2026.md`

# JAVA PYQ — JAN 2026

**Subject:** Java Programming
**Course:** FY MCA Semester II (2024 Pattern)
**Paper Code:** 6554-2001

---

# Question 1

## (a) Define class `Student` with suitable attributes and methods. Display the student details. [5]

### Answer

### Class and Object

* A class is a blueprint for creating objects.
* Objects store data and call methods of class.

### Java Program

```java id="jlwm6p"
class Student {

    int rollNo;
    String name;
    float marks;

    void accept(int r, String n, float m) {
        rollNo = r;
        name = n;
        marks = m;
    }

    void display() {
        System.out.println("Roll No = " + rollNo);
        System.out.println("Name = " + name);
        System.out.println("Marks = " + marks);
    }

    public static void main(String[] args) {

        Student s = new Student();

        s.accept(101, "Amit", 85.5f);

        s.display();
    }
}
```

### Output

```text id="fq7swa"
Roll No = 101
Name = Amit
Marks = 85.5
```

### Key Points

* `accept()` method stores student data.
* `display()` method prints student details.

---

## (b) Create an abstract class `Shape` with method `area()`. Inherit this class for creating `Square` class. Display area of square. [5]

### Answer

### Abstract Class

* Abstract class contains abstract methods.
* Abstract methods do not have body.
* Abstract class cannot be instantiated.

### Java Program

```java id="ckkvvq"
abstract class Shape {

    abstract void area();
}

class Square extends Shape {

    int side = 5;

    void area() {

        int a = side * side;

        System.out.println("Area of Square = " + a);
    }

    public static void main(String[] args) {

        Square s = new Square();

        s.area();
    }
}
```

### Output

```text id="0psd7w"
Area of Square = 25
```

### Explanation

* `Shape` is abstract class.
* `Square` inherits `Shape`.
* `area()` method calculates square area.

---

## (c) Write a function using lambda expression to calculate cube of a given number. [5]

### Answer

### Lambda Expression

* Introduced in Java 8.
* Used to implement functional interfaces.
* Reduces coding complexity.

### Java Program

```java id="z9dzon"
interface Cube {

    int calculate(int x);
}

class Demo {

    public static void main(String[] args) {

        Cube c = (x) -> x * x * x;

        System.out.println("Cube = " + c.calculate(3));
    }
}
```

### Output

```text id="tqbdps"
Cube = 27
```

### Explanation

* Lambda expression:

```java id="fjlwm4"
(x) -> x * x * x
```

* Calculates cube of number.

---

## (d) Explain use of `final` keyword for class, data members and methods. [5]

### Answer

# Final Keyword

* `final` keyword restricts modification.
* Used with variables, methods and classes.

---

## 1. Final Variable

* Value cannot be changed.

### Example

```java id="j4zzj3"
final int x = 10;
```

---

## 2. Final Method

* Cannot be overridden.

### Example

```java id="onjlwm"
class Test {

    final void show() {
        System.out.println("Final Method");
    }
}
```

---

## 3. Final Class

* Cannot be inherited.

### Example

```java id="i1d22u"
final class Demo {
}
```

---

## Advantages

* Provides security
* Prevents unwanted modification
* Improves reliability

---

# Question 2

## (a) Explain Thread Life Cycle with suitable diagram. [5]

### Answer

# Thread Life Cycle

A thread passes through different states during execution.

## States of Thread

1. New
2. Runnable
3. Running
4. Waiting / Blocked
5. Dead

---

## Thread Life Cycle Diagram

```text id="e9wkwg"
      New
       |
    start()
       ↓
    Runnable
       ↓
     Running
    /      \
sleep()   complete
  /          \
Waiting      Dead
   |
notify()
   ↓
Runnable
```

---

## Explanation of States

| State    | Description           |
| -------- | --------------------- |
| New      | Thread object created |
| Runnable | Ready to execute      |
| Running  | Currently executing   |
| Waiting  | Waiting for resource  |
| Dead     | Execution completed   |

---

## Important Methods

| Method     | Purpose                |
| ---------- | ---------------------- |
| `start()`  | Starts thread          |
| `sleep()`  | Pauses thread          |
| `wait()`   | Thread waits           |
| `notify()` | Resumes waiting thread |

---

## (b) Accept age from user. If age is negative throw `InvalidAgeException` (user defined). [5]

### Answer

### Java Program

```java id="ysvpcv"
import java.util.Scanner;

class InvalidAgeException extends Exception {

    InvalidAgeException(String msg) {
        super(msg);
    }
}

class Test {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        System.out.println("Enter Age : ");
        int age = sc.nextInt();

        try {

            if(age < 0) {

                throw new InvalidAgeException(
                    "Age cannot be negative");
            }

            System.out.println("Valid Age");
        }

        catch(InvalidAgeException e) {
            System.out.println(e);
        }
    }
}
```

### Output

```text id="k8v22p"
Enter Age : -5

InvalidAgeException: Age cannot be negative
```

### Explanation

* Custom exception created using `Exception`.
* `throw` keyword throws exception.
* `catch` handles exception.

---

## (c) Demonstrate synchronized keyword with example. [5]

### Answer

### Synchronized Keyword

* Used to control access of multiple threads.
* Prevents data inconsistency.

### Java Program

```java id="tw4z3m"
class Table {

    synchronized void printTable(int n) {

        for(int i = 1; i <= 5; i++) {

            System.out.println(n * i);

            try {
                Thread.sleep(500);
            }

            catch(Exception e) {
            }
        }
    }
}

class MyThread1 extends Thread {

    Table t;

    MyThread1(Table t) {
        this.t = t;
    }

    public void run() {
        t.printTable(2);
    }
}

class MyThread2 extends Thread {

    Table t;

    MyThread2(Table t) {
        this.t = t;
    }

    public void run() {
        t.printTable(5);
    }
}

class TestSync {

    public static void main(String[] args) {

        Table obj = new Table();

        MyThread1 t1 = new MyThread1(obj);
        MyThread2 t2 = new MyThread2(obj);

        t1.start();
        t2.start();
    }
}
```

### Explanation

* `synchronized` allows one thread at a time.
* Prevents simultaneous method execution.

---

## (d) Write a program to demonstrate `HashSet`. Create a `HashSet` and perform add and remove operations. [5]

### Answer

### HashSet

* Part of Collection Framework.
* Stores unique elements only.
* Uses hashing technique.

### Java Program

```java id="m6u1gx"
import java.util.*;

class HashSetDemo {

    public static void main(String[] args) {

        HashSet<String> hs = new HashSet<String>();

        hs.add("Java");
        hs.add("Python");
        hs.add("C++");

        System.out.println("HashSet : " + hs);

        hs.remove("Python");

        System.out.println("After Remove : " + hs);
    }
}
```

### Output

```text id="wl3rbn"
HashSet : [Java, Python, C++]

After Remove : [Java, C++]
```

### Methods Used

| Method     | Purpose         |
| ---------- | --------------- |
| `add()`    | Adds element    |
| `remove()` | Removes element |

---

# Question 3

## (a) Create a Servlet which checks username and password. If correct, display message “Successful Login”, else display appropriate error message (without JDBC). [10]

### Answer

## HTML Page

```html id="5s0scv"
<html>
<body>

<h2>Login Form</h2>

<form action="LoginServlet" method="post">

Username :
<input type="text" name="uname">
<br><br>

Password :
<input type="password" name="pass">
<br><br>

<input type="submit" value="Login">

</form>

</body>
</html>
```

## Servlet Program

```java id="5a1knr"
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class LoginServlet extends HttpServlet {

    public void doPost(HttpServletRequest request,
                       HttpServletResponse response)
                       throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String uname = request.getParameter("uname");
        String pass = request.getParameter("pass");

        if(uname.equals("admin") &&
           pass.equals("123")) {

            out.println("<h2>Successful Login</h2>");
        }

        else {

            out.println(
            "<h2>Invalid Username or Password</h2>");
        }
    }
}
```

### Output

```text id="o9duaq"
Successful Login
```

### Explanation

* Servlet reads username and password.
* `equals()` compares credentials.
* Displays success or error message.

---

## (b) Demonstrate session management using cookies. [10]

### Answer

# Session Management using Cookies

* Cookies store client information.
* Used to maintain user session.

---

## First Servlet

```java id="5ffjlwm"
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FirstServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        String name = request.getParameter("uname");

        Cookie c = new Cookie("username", name);

        response.addCookie(c);

        out.println("<h2>Cookie Added</h2>");

        out.println("<a href='SecondServlet'>Next Page</a>");
    }
}
```

## Second Servlet

```java id="8rfmdt"
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class SecondServlet extends HttpServlet {

    public void doGet(HttpServletRequest request,
                      HttpServletResponse response)
                      throws ServletException, IOException {

        response.setContentType("text/html");

        PrintWriter out = response.getWriter();

        Cookie ck[] = request.getCookies();

        out.println("<h2>Welcome " +
        ck[0].getValue() + "</h2>");
    }
}
```

## HTML Page

```html id="g0y6wa"
<html>
<body>

<form action="FirstServlet">

Enter Name :
<input type="text" name="uname">

<input type="submit" value="Send">

</form>

</body>
</html>
```

### Explanation

* `Cookie` object stores user data.
* `addCookie()` sends cookie to browser.
* `getCookies()` reads cookie data.

---

# Question 4

## (a) Create a JSP page to accept roll number of a student, update mobile number in student table and display updated details. [10]

### Answer

## Student Table

```sql id="wxd06e"
CREATE TABLE student (
    rollno INT PRIMARY KEY,
    name VARCHAR(50),
    mobile VARCHAR(15)
);
```

## JSP Form Page

```jsp id="bx8u3o"
<html>
<body>

<h2>Update Mobile Number</h2>

<form action="update.jsp" method="post">

Enter Roll Number :
<input type="text" name="rollno">
<br><br>

Enter New Mobile Number :
<input type="text" name="mobile">
<br><br>

<input type="submit" value="Update">

</form>

</body>
</html>
```

## JSP Update Program

```jsp id="3j78mr"
<%@ page import="java.sql.*" %>

<%
int roll =
Integer.parseInt(request.getParameter("rollno"));

String mobile =
request.getParameter("mobile");

try {

    Class.forName("com.mysql.cj.jdbc.Driver");

    Connection con = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/test",
        "root",
        "root");

    PreparedStatement ps = con.prepareStatement(
        "update student set mobile=? where rollno=?");

    ps.setString(1, mobile);
    ps.setInt(2, roll);

    ps.executeUpdate();

    PreparedStatement ps2 = con.prepareStatement(
        "select * from student where rollno=?");

    ps2.setInt(1, roll);

    ResultSet rs = ps2.executeQuery();

    while(rs.next()) {

        out.println("<h2>Updated Details</h2>");

        out.println("Roll No : " + rs.getInt(1) + "<br>");
        out.println("Name : " + rs.getString(2) + "<br>");
        out.println("Mobile : " + rs.getString(3));
    }

    con.close();
}

catch(Exception e) {
    out.println(e);
}
%>
```

### Explanation

* JSP accepts roll number and mobile number.
* JDBC updates database record.
* Updated data is displayed using `ResultSet`.

---

## (b) Explain any 5 implicit objects of JSP. [10]

### Answer

# JSP Implicit Objects

* JSP provides predefined objects automatically.

---

## 1. request Object

### Purpose

* Reads client request data.

### Example

```jsp id="p2dwnk"
String name = request.getParameter("uname");
```

---

## 2. response Object

### Purpose

* Sends response to client.

### Example

```jsp id="ywjlwm"
response.sendRedirect("home.jsp");
```

---

## 3. out Object

### Purpose

* Displays output on browser.

### Example

```jsp id="g7n0i1"
out.println("Welcome User");
```

---

## 4. session Object

### Purpose

* Maintains user session.

### Example

```jsp id="pjlwm3"
session.setAttribute("user", "Amit");
```

---

## 5. application Object

### Purpose

* Shares data for entire application.

### Example

```jsp id="3tr8ui"
application.setAttribute("count", 10);
```

---

## Summary Table

| Implicit Object | Purpose                 |
| --------------- | ----------------------- |
| request         | Reads request           |
| response        | Sends response          |
| out             | Prints output           |
| session         | Maintains session       |
| application     | Stores application data |

---

# Question 5

## (a) Create a Spring MVC form to read registration details for placement drive with Spring validation and display it. [10]

### Answer

## Model Class

```java id="4xjlwm"
package com.demo;

import jakarta.validation.constraints.*;

public class Student {

    @NotEmpty(message="Name is required")
    private String name;

    @Email(message="Enter valid email")
    private String email;

    @NotEmpty(message="Course is required")
    private String course;

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

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }
}
```

## Controller Class

```java id="bjlwm5"
package com.demo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@Controller
public class PlacementController {

    @GetMapping("/form")
    public String showForm(Model m) {

        m.addAttribute("student", new Student());

        return "form";
    }

    @PostMapping("/register")
    public String submitForm(
        @Valid @ModelAttribute("student") Student s,
        BindingResult br) {

        if(br.hasErrors()) {
            return "form";
        }

        return "success";
    }
}
```

## JSP Form Page

```jsp id="0t8ec7"
<%@ taglib uri="http://www.springframework.org/tags/form"
prefix="form" %>

<html>
<body>

<h2>Placement Drive Registration</h2>

<form:form action="register" modelAttribute="student">

Name :
<form:input path="name"/>
<form:errors path="name"/>
<br><br>

Email :
<form:input path="email"/>
<form:errors path="email"/>
<br><br>

Course :
<form:input path="course"/>
<form:errors path="course"/>
<br><br>

<input type="submit" value="Register"/>

</form:form>

</body>
</html>
```

### Explanation

* Spring MVC form accepts registration details.
* Validation performed using `@Valid`.
* Errors shown using `<form:errors>`.

---

## (b) Explain Spring MVC flow and Inversion of Control (IoC). [10]

### Answer

# Spring MVC Flow

Spring MVC follows MVC architecture.

---

## Spring MVC Flow Diagram

```text id="s2mjlwm"
Client Request
      ↓
DispatcherServlet
      ↓
Handler Mapping
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

## Components

| Component         | Purpose          |
| ----------------- | ---------------- |
| DispatcherServlet | Handles requests |
| Controller        | Processes logic  |
| Model             | Stores data      |
| View Resolver     | Resolves JSP     |
| View              | Displays output  |

---

# Inversion of Control (IoC)

## Definition

* IoC transfers object creation control to Spring container.

## Example

```java id="9x0vd8"
ApplicationContext context =
new ClassPathXmlApplicationContext("beans.xml");

Student s =
(Student)context.getBean("stud");
```

## Advantages

* Loose coupling
* Better modularity
* Easier maintenance
* Supports Dependency Injection
