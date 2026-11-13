# Unit 1: Software Quality Assurance & Quality Concepts (PYQ Solutions)

> [!NOTE]
> This unit focus on foundational concepts of Quality, SQA activities, and Standards like ISO 9000. It typically carries 10-15 marks in exams.

---

## 1. Describe Software Quality Assurance (SQA) and outline its key activities.
**[APR-2025 | 5 Marks]**

### Definition
Software Quality Assurance (SQA) is a systematic and planned set of activities designed to evaluate the process by which software is created. It focuses on improving the software development process to prevent defects before they occur.

### Key SQA Activities
1. **SQA Planning:** Establishing a quality plan for a project, defining quality goals, and identifying standards.
2. **Standard Definition:** Defining or selecting standards (e.g., ISO, IEEE) to be followed during development.
3. **Technical Reviews:** Conducting formal technical reviews (FTR) to uncover errors in logic, function, or implementation.
4. **Software Testing:** Oversight of the testing process to ensure it is effective and follows the plan.
5. **Change Management:** Ensuring that changes to software artifacts are controlled and documented.
6. **Audits:** Conducting independent audits to verify that the project is following the defined processes and standards.
7. **Reporting:** Providing management with the results of quality activities and identifying areas for improvement.

---

## 2. Differentiate between Software Quality Assurance (SQA) and Software Quality Control (SQC).
**[JAN-2026 | 5 Marks]**

| Feature | Software Quality Assurance (SQA) | Software Quality Control (SQC) |
| :--- | :--- | :--- |
| **Focus** | Process-oriented (Preventing defects) | Product-oriented (Identifying defects) |
| **Activity** | Proactive | Reactive |
| **Goal** | Improve development/maintenance processes | Ensure the product meets requirements |
| **When** | Performed throughout the SDLC | Performed during the testing phase |
| **Example** | Process audits, training, FTR | Unit testing, Integration testing |

> [!TIP]
> **Exam Hack:** Remember **SQA = Process** and **SQC = Product**. SQA is about "How we build," SQC is about "What we built."

---

## 3. Describe the significance of ISO 9000 standards in SQA.
**[APR-2025 | JAN-2026 | 5 Marks]**

ISO 9000 is a set of international standards for quality management and quality assurance.

### Significance in SQA:
* **Global Recognition:** Provides a globally recognized framework for quality management.
* **Customer Confidence:** Assures customers that the organization follows standardized quality processes.
* **Process Consistency:** Ensures that development processes are documented and consistent across projects.
* **Continuous Improvement:** Requires organizations to monitor their processes and improve them over time.
* **Standardization:** Reduces variability in software development, leading to more predictable outcomes.

---

## 4. Explain the metrics used to assess and measure Reliability.
**[APR-2025 | JAN-2026 | 5 Marks]**

Reliability is the probability of failure-free operation of a software system for a specified time in a specified environment.

### Key Metrics:
1. **POFOD (Probability of Failure on Demand):** The likelihood that the system will fail when a service request is made. (Useful for safety-critical systems).
2. **ROCOF (Rate of Occurrence of Failure):** The number of failures appearing in a unit time interval. (Useful for systems where services are requested regularly).
3. **MTTF (Mean Time To Failure):** The average time between observed system failures.
4. **Availability:** The probability that the system is available for use at a given time. Formula: `MTTF / (MTTF + MTTR)`, where MTTR is Mean Time To Repair.

---

## 5. Describe Product Revision Factors (McCall's Quality Model).
**[APR-2025 | 5 Marks]**

According to McCall’s Quality Model, product revision factors are concerned with the ease of changing the software.

1. **Maintainability:** The effort required to locate and fix an error in an operational program.
2. **Flexibility:** The effort required to modify an operational program (to add new features).
3. **Testability:** The effort required to test a program to ensure that it performs its intended function.

---

> [!IMPORTANT]
> **Frequent Question:** The distinction between SQA and SQC appears in almost every alternate exam. Study the comparison table thoroughly.
