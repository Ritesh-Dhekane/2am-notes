# STQA Solved PYQ (Dec 2022)

## Q1. What is the difference between Black Box and White Box Testing? [10 Marks]

| Basis | Black Box Testing | White Box Testing |
| :--- | :--- | :--- |
| **Focus** | Focuses on functionality and requirements. | Focuses on internal code structure and logic. |
| **Knowledge** | No knowledge of internal code is required. | Knowledge of internal code/logic is essential. |
| **Who performs?** | Usually done by independent testers. | Usually done by developers (Unit Testing). |
| **Techniques** | ECP, BVA, Decision Tables. | Path Coverage, Branch Coverage, Data Flow. |
| **Level** | Done at higher levels (System, Acceptance). | Done at lower levels (Unit, Integration). |

## Q2. Explain the Software Testing Life Cycle (STLC) phases. [10 Marks]

1. **Requirement Analysis**: Understanding what needs to be tested.
2. **Test Planning**: Defining the strategy, resources, and schedule.
3. **Test Case Development**: Writing detailed test steps and expected results.
4. **Test Environment Setup**: Configuring the software and hardware for testing.
5. **Test Execution**: Running the tests and documenting results.
6. **Test Cycle Closure**: Final report and analysis of the testing phase.

## Q3. Explain the concept of Equivalence Class Partitioning (ECP). [5 Marks]

**Equivalence Class Partitioning (ECP)** is a technique where the input data is divided into partitions (classes) of valid and invalid data.
- It is assumed that all values in a partition will behave the same way.
- We pick only one value from each partition to test, reducing the total number of test cases.

**Example**:
A field accepts age between 18 and 60.
- **Partition 1**: < 18 (Invalid)
- **Partition 2**: 18-60 (Valid)
- **Partition 3**: > 60 (Invalid)

---
*Solved by [Ritesh Dhekane](https://github.com/Ritesh-Dhekane)*
