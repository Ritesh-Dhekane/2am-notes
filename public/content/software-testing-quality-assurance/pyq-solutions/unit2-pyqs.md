# Unit 2: Testing Life Cycle & Strategies (PYQ Solutions)

> [!NOTE]
> This unit focus on STLC, Testing Types (Performance, Integration), and Models (V-Model). Expect a 10-mark question on the V-Model or STLC.

---

## 1. Outline the Software Testing Life Cycle (STLC).
**[APR-2025 | 10 Marks]**

STLC is a sequence of specific activities conducted during the testing process to ensure software quality goals are met.

### Phases of STLC:
1. **Requirement Analysis:** Testing team studies requirements from a testing perspective.
2. **Test Planning:** Defining strategy, effort estimation, and identifying resources.
3. **Test Case Development:** Creating detailed test cases and test data.
4. **Environment Setup:** Setting up the hardware and software conditions for testing.
5. **Test Execution:** Running test cases and reporting defects.
6. **Test Closure:** Evaluating completion criteria, documenting lessons learned, and preparing test summary reports.

---

## 2. Differentiate between Fault, Defect, and Failure.
**[APR-2025 | 5 Marks]**

* **Fault (Bug):** An incorrect step, process, or data definition in a computer program. (Internal to code).
* **Defect:** A deviation from the requirements. When a fault is found during testing, it is called a defect.
* **Failure:** When a defect reaches the end-user and causes the system to behave unexpectedly. (Observable in production).

---

## 3. Illustrate the V-Model Phases.
**[JAN-2026 | 10 Marks]**

The V-Model (Verification and Validation Model) demonstrates the relationship between each phase of the development life cycle and its associated phase of testing.

### Verification Phases (Left side of V):
* **Requirement Analysis:** Checked by Acceptance Testing.
* **System Design:** Checked by System Testing.
* **Architecture Design:** Checked by Integration Testing.
* **Module Design:** Checked by Unit Testing.

### Validation Phases (Right side of V):
* **Unit Testing:** Validates individual modules.
* **Integration Testing:** Validates interfaces between modules.
* **System Testing:** Validates the entire system against requirements.
* **Acceptance Testing:** Validates if the system meets user needs.

---

## 4. Differentiate between Re-testing and Regression Testing.
**[JAN-2026 | 5 Marks]**

| Feature | Re-testing | Regression Testing |
| :--- | :--- | :--- |
| **Purpose** | To verify that a specific defect has been fixed. | To verify that a change hasn't broken existing functionality. |
| **Cases** | Uses the failed test cases only. | Uses a subset of the entire test suite. |
| **Trigger** | Defect fix. | Code change, patch, or new feature. |
| **Priority** | High (blocking). | Medium/High (safety). |

---

## 5. Performance Testing Categories.
**[APR-2025 | 5 Marks]**

Performance testing determines how a system performs in terms of responsiveness and stability under a particular workload.

1. **Load Testing:** Testing behavior under expected normal and peak loads.
2. **Stress Testing:** Testing behavior beyond normal operational capacity (finding breaking point).
3. **Scalability Testing:** Determining the system's ability to "scale up" with increasing load.

---

> [!TIP]
> **Exam Hack:** For "Integration Testing," remember the three main approaches: **Top-Down**, **Bottom-Up**, and **Big Bang**.
