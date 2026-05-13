# STQA Solved PYQ (May 2023)

## Q1. Explain the difference between Verification and Validation with examples. [5 Marks]

| Feature | Verification | Validation |
| :--- | :--- | :--- |
| **Definition** | "Are we building the product right?" | "Are we building the right product?" |
| **Process** | Process-oriented activity. | Product-oriented activity. |
| **Focus** | Focuses on reviews, walk-throughs, and inspections. | Focuses on actual testing and execution of code. |
| **Stage** | Done at early stages of development. | Done after the development phase is complete. |
| **Example** | Checking if the SRS document matches the design. | Executing the software to check if the Login button works. |

> [!PYQ]
> This is a recurring question (asked in 2021, 2022, 2023). Memorize the "Right product vs Product right" distinction.

## Q2. Explain Selenium WebDriver Architecture. [10 Marks]

The Selenium WebDriver architecture consists of 4 main components:

1. **Selenium Client Libraries / Language Bindings**:
   - Developers write code in languages like Java, Python, C#, etc.
   - Selenium provides libraries for these languages to interact with the browser.

2. **JSON Wire Protocol (Legacy) / W3C Protocol (Modern)**:
   - Facilitates communication between the code and the browser driver.
   - It sends HTTP requests containing RESTful commands.

3. **Browser Drivers**:
   - Each browser has its own driver (e.g., ChromeDriver for Chrome, GeckoDriver for Firefox).
   - The driver acts as a bridge, receiving commands and executing them on the actual browser.

4. **Real Browsers**:
   - The final destination where the automation takes place (Chrome, Safari, Edge).

## Q3. What is Boundary Value Analysis (BVA)? Explain with an example. [5 Marks]

**Boundary Value Analysis (BVA)** is a black-box testing technique where test cases are designed to include values at the boundaries of the input domain.
- Errors are most likely to occur at the "edges" rather than the center.

**Example**:
If a text field accepts a password between **6 and 12** characters:
- **Boundary Values**: 5 (Invalid), 6 (Valid), 7 (Valid), 11 (Valid), 12 (Valid), 13 (Invalid).

---
*Solved by [Ritesh Dhekane](https://github.com/Ritesh-Dhekane)*
