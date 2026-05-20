# Unit 4: Test Planning & Documentation (PYQ Solutions)

> [!NOTE]
> This unit focus on the IEEE 829 Test Plan template and Test Case writing. A 10-mark case study is guaranteed from this unit.

---

## 1. Case Study: IEEE 829 Test Plan
**[APR-2025 | JAN-2026 | 10 Marks]**

**Application:** Cloud Kitchen Aggregator App / Online Learning Platform.

### i) Scope of Testing
Includes functional testing of order management, menu updates, payment gateway integration, and user authentication. Out of scope: Backend infrastructure scaling and load testing (unless specified).

### ii) Objectives
* Verify that cloud kitchens can manage menus without errors.
* Ensure real-time order updates are received by customers.
* Validate secure transactions via third-party payment gateways.

### iii) Risks
* Delay in third-party API responses (Payment/Delivery).
* Data loss during high-order volumes.
* Security vulnerabilities in transaction modules.

### iv) Strategy
A combination of Black Box testing for UI/UX and Integration testing for third-party gateways. Regression testing will be performed after every major bug fix.

### v) Approach
Manual testing for usability and UI. Automated testing for API integrations using tools like Postman/Selenium.

---

## 2. Case Study: Writing Test Cases
**[APR-2025 | 10 Marks]**

**Feature:** Online Food Ordering (Cloud Kitchen App).

| Test Case ID | Description | Input Data | Expected Result |
| :--- | :--- | :--- | :--- |
| TC01 | Verify adding item to cart | Select "Paneer Tikka" | Item added with correct price |
| TC02 | Verify payment with valid card | Card details, OTP | Transaction Success, Order Placed |
| TC03 | Verify order tracking | Active Order ID | Real-time status shows "Preparing" |
| TC04 | Verify out-of-stock item | Select disabled item | User should see "Unavailable" alert |

---

## 3. What is IEEE 829?
**[Short Note]**

IEEE 829 is a standard for software test documentation. It defines a set of documents for use in eight defined stages of software testing, each stage potentially producing its own separate type of document. The most common document is the **Software Test Plan (STP)**.

---

> [!TIP]
> **Exam Hack:** For Case Study questions, always use a table for Test Cases. It looks professional and is easier for the examiner to grade. Use headers like `Test Case ID`, `Description`, `Steps`, `Expected Result`.
