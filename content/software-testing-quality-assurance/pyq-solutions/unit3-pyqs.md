# Unit 3: Static & Dynamic Testing Techniques (PYQ Solutions)

> [!NOTE]
> This is a highly practical unit. Expect numericals on Equivalence Partitioning, Boundary Value Analysis, and Cyclomatic Complexity.

---

## 1. Case Study: Equivalence Partitioning
**[APR-2025 | 10 Marks]**

**Scenario:** Pass mark = 24, Max mark = 40.

### Equivalence Partitions:
1. **Invalid Partition 1:** Marks < 0 (e.g., -5) - [System should reject]
2. **Valid Partition (Fail):** 0 <= Marks < 24 (e.g., 10) - [Outcome: Fail]
3. **Valid Partition (Pass):** 24 <= Marks <= 40 (e.g., 30) - [Outcome: Pass]
4. **Invalid Partition 2:** Marks > 40 (e.g., 45) - [System should reject]

### Test Cases:
| Test Case ID | Value | Expected Outcome | Partition Type |
| :--- | :--- | :--- | :--- |
| TC01 | -1 | Error/Invalid | Invalid |
| TC02 | 15 | Fail | Valid |
| TC03 | 24 | Pass | Valid |
| TC04 | 41 | Error/Invalid | Invalid |

---

## 2. Case Study: Boundary Value Analysis (BVA)
**[JAN-2026 | 5 Marks]**

**Scenario:** Age Verification (18 to 60 years allowed).

### Boundary Values:
The boundaries are 18 and 60.
* **Lower Boundary:** 17 (Invalid), 18 (Valid), 19 (Valid)
* **Upper Boundary:** 59 (Valid), 60 (Valid), 61 (Invalid)

### Test Cases:
17, 18, 19, 59, 60, 61.

---

## 3. Differentiate between Static and Dynamic Testing.
**[APR-2025 | 5 Marks]**

| Basis | Static Testing | Dynamic Testing |
| :--- | :--- | :--- |
| **Execution** | Done without executing the code. | Done by executing the code. |
| **Stage** | Early stage of SDLC (Verification). | Later stage (Validation). |
| **Technique** | Review, Inspection, Walkthrough. | Unit, Integration, System Testing. |
| **Goal** | Preventing defects by reviewing docs. | Identifying defects by running code. |

---

## 4. Differentiate between Black Box and White Box Testing.
**[JAN-2026 | 5 Marks]**

* **Black Box Testing:** Testing the software without knowing its internal structure or code. Focuses on inputs and outputs (Functional testing).
* **White Box Testing:** Testing the internal structure, logic, and code of the software. Focuses on code coverage, paths, and conditions (Structural testing).

---

## 5. What is Cyclomatic Complexity?
**[JAN-2026 | 5 Marks]**

Cyclomatic complexity is a software metric used to indicate the complexity of a program. It measures the number of linearly independent paths through a program's source code.

**Formula:** $V(G) = E - N + 2P$
Where:
* $E$ = Number of edges
* $N$ = Number of nodes
* $P$ = Number of connected components (usually 1)

> [!TIP]
> **Exam Hack:** For simple code, Cyclomatic Complexity is simply **(Number of decision points + 1)**. Decision points are `if`, `while`, `for`, `case` statements.
