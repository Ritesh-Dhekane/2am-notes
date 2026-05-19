# STQA Exam Question Bank (Units 1 - 5)

> [!TIP]
> This comprehensive question bank compiles solved university exam questions from previous years (including APR-25 and JAN-26) for quick late-night revision. Focus on bold terms, comparison tables, and equations.

---

## Unit 1: Software Quality Assurance Fundamentals

### Q1. Explain the term "Quality" in the context of Software Engineering. Describe McCall's Product Revision Factors. [5 Marks]

#### Software Quality Definition
In software engineering, **Quality** is the degree to which a software system, component, or process meets specified requirements and customer expectations. It is not merely "bug-free code" but a multi-dimensional construct covering conformance to functional specifications, performance standards, maintainability, and usability.

#### McCall's Quality Model
McCall’s Quality Model organizes quality into 11 factors grouped under three main perspectives: **Product Operation**, **Product Revision**, and **Product Transition**.

```
                   ┌──────────────────────────────────────┐
                   │        McCall's Quality Model        │
                   └──────────────────┬───────────────────┘
                                      │
         ┌────────────────────────────┼────────────────────────────┐
         ▼                            ▼                            ▼
┌─────────────────┐          ┌─────────────────┐          ┌─────────────────┐
│Product Operation│          │Product Revision │          │ProductTransition│
│  - Correctness  │          │ - Maintainability│          │  - Portability  │
│  - Reliability  │          │  - Flexibility  │          │  - Reusability  │
│  - Efficiency   │          │  - Testability  │          │-Interoperability│
│  - Integrity    │          └─────────────────┘          └─────────────────┘
│  - Usability    │
└─────────────────┘
```

#### Product Revision Factors (Focus Area)
Product revision refers to the ease with which a software system can be modified, tested, and maintained. The three key revision factors are:

| Factor | Description | Key Metric / Metric Indicator |
| :--- | :--- | :--- |
| **Maintainability** | The effort required to locate and fix errors or defects in operational software. | Average time to isolate and repair a defect (MTTR). Code modularity and readability. |
| **Flexibility** | The effort required to modify software to adapt it to changing requirements, new operational environments, or business logic. | Effort (in person-hours) required to add a new feature or modify an existing component. |
| **Testability** | The effort required to test the software to ensure it performs its intended functions and complies with specifications. | Cyclomatic complexity, code coverage percentage, and isolation of modules. |

---

### Q2. Describe Software Quality Assurance (SQA) and outline its key activities and challenges. [5 Marks]

#### What is SQA?
**Software Quality Assurance (SQA)** is a planned and systematic pattern of actions required to provide adequate confidence that the software product conforms to established technical requirements. It is a **preventative** and **process-oriented** discipline that runs parallel to software development.

#### Key SQA Activities
1. **Quality Management Plan (QMP)**: Establishing quality standards, regulations, and guidelines for the development cycle.
2. **Technical Reviews & Audits**: Conducting formal walkthroughs, code inspections, and audits to verify process conformance.
3. **Process Analysis & Evaluation**: Reviewing software processes to identify inefficiencies and improve performance (e.g., using CMMI levels).
4. **Testing Process Oversight**: Overseeing testing strategies, verifying that test plans are designed correctly, and monitoring defect rates.
5. **Defect Tracking & Management**: Analyzing defect patterns to identify systemic root causes of code defects.
6. **Educational & Training Programs**: Training development teams in coding standards, testing methodologies, and quality tools.

#### SQA Challenges
* **Lack of Early SQA Involvement**: SQA is often brought in late in the development cycle, turning it into a reactive gate rather than a proactive shield.
* **Underestimation of Budget/Timeline**: Quality activities (inspections, audits) are frequently compressed or cut when project deadlines Loom.
* **Resistance to Standards**: Developers may perceive code audits and strict documentation rules as obstacles to speed and creativity.
* **Dynamic / Changing Requirements**: In agile models, rapidly changing scopes make maintaining consistent quality baselines difficult.
* **Balancing Speed vs. Quality**: Pressures to release products quickly often lead to high "technical debt" at the expense of SQA.

---

### Q3. Distinguish between Software Quality Assurance (SQA) and Software Quality Control (SQC). [5 Marks]

| Feature / Dimension | Software Quality Assurance (SQA) | Software Quality Control (SQC) |
| :--- | :--- | :--- |
| **Core Definition** | Process-oriented activities to ensure that development processes are capable of producing a quality product. | Product-oriented activities that focus on identifying defects in the actual software product. |
| **Approach** | **Proactive & Preventive** (Prevents defects from entering the code). | **Reactive & Corrective** (Detects and fixes defects after code is written). |
| **Focus** | How the product is built (Processes, standards, audits, methodology). | The quality of the finished product (Testing, code inspection, execution). |
| **Execution Phase** | Applied throughout the entire Software Development Life Cycle (SDLC). | Applied during the verification and testing phases of the SDLC. |
| **Responsibility** | Every stakeholder, manager, and process engineer involved. | Specifically the testing and validation teams. |
| **Example** | Code reviews, process audits, document templates, and design walkthroughs. | Integration testing, unit testing, system testing, and bug verification. |

---

### Q4. Define Software Reliability. Explain the measures Availability, ROCOF, and POFOD. [5 Marks]

#### Software Reliability
**Software Reliability** is the probability of failure-free software operation for a specified period of time in a specified environment. Unlike hardware, software does not wear out physically; failures are caused by design/implementation defects triggered by specific inputs and execution paths.

#### Reliability Measures

##### 1. Availability (A)
Availability is the probability that a system is operational and accessible to perform its required functions at a given point in time. It factors in both reliability and recovery time.

$$\text{Availability (A)} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} \times 100\%$$

* **MTBF (Mean Time Between Failures)**: Average time between consecutive failures.
* **MTTR (Mean Time To Repair)**: Average time required to fix a failure and restore the system.

> [!NOTE]
> E.g., A system with "five nines" (99.999% availability) experiences less than 5.26 minutes of downtime per year.

##### 2. ROCOF (Rate of Occurrence of Failure)
ROCOF measures the frequency of failures observed over a given time interval during operation.

$$\text{ROCOF} = \frac{\text{Number of Failures}}{\text{Total Operational Time}}$$

* **Use Case**: Best suited for systems that run continuously and experience regular transactions, such as telecommunication switches or operating system kernels.
* **Example**: A ROCOF of $0.02$ failures/hour means we expect an average of 1 failure every 50 hours of execution.

##### 3. POFOD (Probability of Failure on Demand)
POFOD is the probability that a system will fail to perform its function when a request (demand) is initiated.

$$\text{POFOD} = \frac{\text{Number of Failed Requests}}{\text{Total Number of Requests (Demands)}}$$

* **Use Case**: Used for safety-critical, intermittent, or protection systems that remain idle until triggered.
* **Example**: A POFOD of $0.001$ for an automotive braking system means there is a 1 in 1000 chance the brakes will fail to engage when the pedal is pressed.

---

### Q5. Describe the significance of ISO 9000 standards in SQA. How are ISO 9000 standards illustrated in SQA? [5 Marks]

#### Significance of ISO 9000
ISO 9000 is a family of international quality management standards designed to help organizations ensure that they meet the needs of customers and other stakeholders while meeting statutory and regulatory requirements. In SQA:
* **Standardization**: It enforces standardized processes across coding, testing, and system delivery.
* **Global Credibility**: Obtaining ISO 9001 certification demonstrates that an organization has verified quality processes.
* **Risk Reduction**: It requires regular risk assessments and process audits, reducing bugs early.
* **Continuous Improvement**: It mandates post-project reviews and continuous quality refinement loops.

#### Illustration / Mapping of ISO 9000 in SQA
The standard is mapped to software organizations through the following core operational areas:

```
                  ┌────────────────────────────────────────┐
                  │      ISO 9000 Mapping in SQA           │
                  └──────────────────┬─────────────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        ▼                            ▼                            ▼
┌────────────────┐           ┌────────────────┐           ┌────────────────┐
│ Management     │           │ Process        │           │ Auditing &     │
│ Commitment     │           │ Standardization│           │ Feedback       │
│ - Quality Policy│          │ - Documented   │           │ - Internal &   │
│ - Resource     │           │   Procedures   │           │   External     │
│   Allocation   │           │ - Coding Rules │           │   Audits       │
└────────────────┘           └────────────────┘           └────────────────┘
```

* **Management Commitment**: Executives must define a Quality Policy and ensure resources (tools, training) are allocated to SQA.
* **Process Standardization**: Every phase of development must have documented procedures (e.g., test plans, requirement verification matrices).
* **Auditing and Verification**: Independent internal and external audits are conducted regularly to verify that developers are following quality plans.

---

## Unit 2: Software Testing Fundamentals

### Q6. Differentiate between Fault, Defect, Bug, and Failure. Describe the common causes of software failure. [5 Marks]

#### Key Definitions
While often used interchangeably in casual conversation, these terms have precise technical distinctions:

* **Error / Mistake**: An incorrect human action (e.g., a developer writing `<` instead of `<=` in a loop).
* **Bug / Fault / Defect**: The manifestation of that error in the software's static code or design documentation. A fault is what resides in the code.
* **Failure**: The visible, runtime deviation of the system behavior from its expected specifications (e.g., the software crashes or outputs incorrect numbers during execution).

```
  ┌───────────────┐        triggers        ┌───────────────┐        manifests as        ┌───────────────┐
  │ Human Error   ├───────────────────────►│  Bug / Defect ├───────────────────────────►│    Failure    │
  │ (In thoughts) │                        │   (In code)   │                            │ (At runtime)  │
  └───────────────┘                        └───────────────┘                        └───────────────┘
```

#### Common Causes of Software Failure
1. **Miscommunication / Ambiguous Requirements**: The business requirements were unclear, leading the developer to code the wrong logic.
2. **Programming Errors**: Direct syntax, mathematical, or logic errors written by the developer (e.g., null pointer exceptions, buffer overflows).
3. **Complex Systems and Integration**: Combining different third-party APIs and microservices can create unhandled edge cases.
4. **Tight Timelines & Deadlines**: Pressures to deliver code fast leads to rushed testing and shortcut development.
5. **Inadequate Testing Coverage**: Failing to test boundary values, load conditions, or exception handling paths.
6. **Environmental Differences**: The software worked in the development environment but fails under production loads or different operating systems.

---

### Q7. Outline the steps in the Software Testing Life Cycle (STLC), highlighting the sequence of testing phases. [5 Marks]

```
 ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
 │  Requirement  │────►│     Test      │────►│   Test Case   │
 │   Analysis    │     │   Planning    │     │  Development  │
 └───────────────┘     └───────────────┘     └───────────────┘
                                                             │
 ┌───────────────┐     ┌───────────────┐     ┌───────────────┐
 │  Test Cycle   │◄────│     Test      │◄────│  Environment  │
 │    Closure    │     │   Execution   │     │     Setup     │
 └───────────────┘     └───────────────┘     └───────────────┘
```

#### 1. Requirement Analysis
* **Activities**: Analyzing functional and non-functional specifications to identify testable requirements.
* **Deliverables**: Traceability Matrix (RTM), Automation Feasibility Report.

#### 2. Test Planning
* **Activities**: Defining test strategy, estimating effort, calculating cost, selecting tools, and assigning roles.
* **Deliverables**: Test Plan Document, Resource Estimation Sheet.

#### 3. Test Case Development
* **Activities**: Creating detailed test scripts, writing test data, and creating automated test scenarios.
* **Deliverables**: Test Cases, Test Scripts, Test Data.

#### 4. Test Environment Setup
* **Activities**: Preparing test servers, databases, test networks, and hardware config.
* **Deliverables**: Configured Test Environment.

#### 5. Test Execution
* **Activities**: Running test cases, logging defects, tracking bug fixes, and conducting regression tests.
* **Deliverables**: Bug Reports, Execution Logs, Test Execution Summary.

#### 6. Test Cycle Closure
* **Activities**: Analyzing test outcomes, evaluating exit criteria, discussing lessons learned, and documenting final reports.
* **Deliverables**: Test Closure Report, Quality Metrics.

---

### Q8. Explain the fundamental Testing Principles. [5 Marks]

To perform software testing effectively, teams must adhere to the following 7 principles:

1. **Testing shows the presence of defects, not their absence**: Testing can prove that defects exist in the software, but it cannot guarantee that the software is 100% bug-free.
2. **Exhaustive testing is impossible**: Testing all possible inputs, paths, and precondition combinations is mathematically infeasible. Instead, risk analysis and prioritization are used to guide tests.
3. **Early testing saves time and money**: Testing activities should start as early as possible in the SDLC (e.g., during requirements reviews) to catch issues before they become expensive to fix.
4. **Defect Clustering**: A small percentage of modules usually contain the majority of the defects found during testing (often following the 80/20 rule).
5. **Pesticide Paradox**: If you repeat the same tests over and over, they will eventually stop finding new bugs. Test cases must be updated and refreshed regularly.
6. **Testing is context-dependent**: The approach to testing depends on the type of application. A safety-critical medical device app requires much more rigorous testing than an e-commerce website.
7. **Absence-of-errors fallacy**: Building a system that has zero defects is useless if the system is unusable and does not satisfy customer business needs.

---

### Q9. Illustrate the V-Model of testing and explain its phases. [5 Marks]

The **V-Model** represents a software development process that is an extension of the waterfall model, demonstrating the direct relationship between each phase of development (Verification) and its corresponding phase of testing (Validation).

```
   Verification (Static Analysis)                      Validation (Dynamic Execution)
  ┌──────────────────────────────┐                  ┌──────────────────────────────┐
  │ Requirements Analysis        │                  │ User Acceptance Testing      │
  └──────────────┬───────────────┘                  └──────────────▲───────────────┘
                 │                                                 │
                 ▼                                                 │
  ┌──────────────────────────────┐                  ┌──────────────┴───────────────┐
  │ System Design                │                  │ System Testing               │
  └──────────────┬───────────────┘                  └──────────────▲───────────────┘
                 │                                                 │
                 ▼                                                 │
  ┌──────────────────────────────┐                  ┌──────────────┴───────────────┐
  │ High-Level Design (Architecture)                │ Integration Testing          │
  └──────────────┬───────────────┘                  └──────────────▲───────────────┘
                 │                                                 │
                 ▼                                                 │
  ┌──────────────────────────────┐                  ┌──────────────┴───────────────┐
  │ Low-Level Design (Detail)    │                  │ Unit Testing                 │
  └──────────────┬───────────────┘                  └──────────────▲───────────────┘
                 │                                                 │
                 └──────────────────────► Coding ──────────────────┘
```

#### Verification Phases (Left Side)
* **Requirements Analysis**: The business requirements are gathered and reviewed. Acceptance tests are designed in parallel.
* **System Design**: Defining the global architecture, system modules, and hardware parameters. System tests are designed in parallel.
* **High-Level Design (HLD)**: Detailing module interactions, data structures, and database structures. Integration tests are designed in parallel.
* **Low-Level Design (LLD)**: Specifying individual module code layouts, API inputs, and exception handling. Unit tests are designed in parallel.

#### Validation Phases (Right Side)
* **Unit Testing**: Tests individual components or units of code to verify correctness (usually conducted by developers).
* **Integration Testing**: Verifies that different modules or services interface and communicate correctly.
* **System Testing**: Validates the end-to-end system against the customer specifications (functional and non-functional tests).
* **User Acceptance Testing (UAT)**: Conducted by end users or clients in a staging environment to confirm the product is ready for production.

---

### Q10. Differentiate between Black Box and White Box testing. [5 Marks]

| Feature / Dimension | Black Box Testing | White Box Testing |
| :--- | :--- | :--- |
| **Core Definition** | Testing focused on inputs and outputs without knowing code implementation. | Testing focused on internal logic, loops, branches, and code statements. |
| **Knowledge Needed** | Requirements specification documentation (no programming knowledge required). | Deep understanding of code, logic paths, and programming languages. |
| **Performed By** | Dedicated Test Engineers / End Users. | Software Developers / White Box Test Engineers. |
| **Techniques Used** | Equivalence Partitioning (ECP), Boundary Value Analysis (BVA), Decision Tables. | Statement Coverage, Branch/Decision Coverage, Path Coverage, Data Flow Testing. |
| **Starting Point** | After the software is fully compiled and running (Late in SDLC). | As soon as individual code components are written (Early in SDLC). |
| **Objective** | Validate usability, requirement correctness, and interface responses. | Validate internal structure, logical loops, data flow, and code optimization. |

---

### Q11. Differentiate between Re-testing and Regression Testing. [5 Marks]

| Feature / Dimension | Re-testing | Regression Testing |
| :--- | :--- | :--- |
| **Primary Goal** | To verify that a specific, previously reported defect has been successfully fixed. | To ensure that recent code modifications (bug fixes, updates) have not introduced new bugs in existing unmodified features. |
| **Trigger** | Triggered by a developer completing a bug fix. | Triggered by code additions, environment configuration updates, or bug fixes. |
| **Test Cases Used** | Runs only the specific test cases that failed previously. | Runs a selected suite of test cases covering critical existing features. |
| **Automation** | Mostly manual (run individually once). | Highly automated (suited for scheduled pipeline execution). |
| **Scope** | Extremely narrow (focused only on the defect area). | Wide scope (covers the entire module or application ecosystem). |

---

### Q12. Illustrate the concept of Performance Testing. Detail any three specific performance test categories. [5 Marks]

#### Performance Testing
**Performance Testing** is a non-functional testing process designed to determine the speed, responsiveness, scalability, stability, and resource utilization of a system under varying workloads. It aims to eliminate performance bottlenecks before release.

```
                  ┌────────────────────────────────────────┐
                  │       Performance Testing Suite        │
                  └──────────────────┬─────────────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        ▼                            ▼                            ▼
┌────────────────┐           ┌────────────────┐           ┌────────────────┐
│  Load Testing  │           │ Stress Testing │           │ Endurance Test │
│ (Normal Load)  │           │ (Break Point)  │           │ (Long Duration)│
└────────────────┘           └────────────────┘           └────────────────┘
```

#### Performance Testing Categories

##### 1. Load Testing
* **Definition**: Testing the system under expected real-world user volumes.
* **Objective**: Measure response times, database queries throughput, and CPU usage under typical workloads to ensure SLA compliance.
* **Example**: Testing an online course portal with 1,000 concurrent students accessing the dashboard.

##### 2. Stress Testing
* **Definition**: Testing the system under extreme, abnormal workloads that exceed design limits to find the breaking point.
* **Objective**: Understand how the system behaves when it runs out of memory, and verify that it recovers gracefully (failover, error pages) rather than crashing destructively.
* **Example**: Flooding an API endpoint with 50,000 requests per minute to observe resource exhaustion.

##### 3. Endurance Testing (Soak Testing)
* **Definition**: Running a continuous, moderate load over an extended period (hours, days, or weeks).
* **Objective**: Identify memory leaks, database connection pool exhaustion, file handle leaks, or performance degradation over time.
* **Example**: Leaving an application running under a continuous load of 500 users for 72 hours straight.

---

### Q13. Discuss any five Non-Functional Testing types. [5 Marks]

Non-functional testing evaluates the operational parameters of software rather than specific functional actions:

1. **Performance Testing**: Assesses the speed, stability, and resource consumption of the system under varying user loads.
2. **Security Testing**: Examines the vulnerability of the application to external attacks, unauthorized entry, SQL injection, and data breaches.
3. **Usability Testing**: Evaluates how user-friendly, intuitive, and easy the interface is for actual target users to navigate.
4. **Compatibility Testing**: Checks whether the application operates correctly across different browsers (Chrome, Safari), screen resolutions, operating systems, and network conditions.
5. **Reliability Testing**: Verifies if the software can perform failure-free operations for a specified period under a given environment (evaluating MTBF and ROCOF metrics).

---

### Q14. Discuss the different Integration Testing approaches. [5 Marks]

Integration testing verifies that different software components interact and exchange data correctly. There are four primary approaches:

```
                    Integration Testing Approaches
  ┌─────────────────┬───────────────┴───────────────┬─────────────────┐
  ▼                 ▼                               ▼                 ▼
┌──────────────┐  ┌──────────────┐                ┌──────────────┐  ┌──────────────┐
│  Big Bang    │  │  Top-Down    │                │  Bottom-Up   │  │   Sandwich   │
│  Approach    │  │  Approach    │                │  Approach    │  │   Approach   │
└──────────────┘  └──────────────┘                └──────────────┘  └──────────────┘
```

#### 1. Big Bang Integration
* **Description**: All modules are integrated and compiled simultaneously, then tested as a single entity.
* **Pros**: Simple for very small programs.
* **Cons**: Extremely difficult to isolate the source of errors; bugs can mask one another.

#### 2. Top-Down Integration
* **Description**: Testing starts from the top control modules and moves downward through the control hierarchy. Lower modules are simulated using dummy programs called **Stubs**.
* **Pros**: High-level system logic is verified early; easier to show progress to clients.
* **Cons**: Low-level details (database modules, calculations) are tested late; writing stubs is time-consuming.

#### 3. Bottom-Up Integration
* **Description**: Testing starts from the lowest-level modules and works upward. Higher-level module behaviors are simulated using dummy test harnesses called **Drivers**.
* **Pros**: Critical calculations and database operations are verified early; no drivers required.
* **Cons**: Main control systems are tested last; writing drivers can be complicated.

#### 4. Sandwich (Hybrid) Integration
* **Description**: Combines Top-Down and Bottom-Up methodologies. It defines a middle layer, testing downward from the top using stubs, and testing upward from the bottom using drivers.
* **Pros**: Combines the benefits of both approaches; reduces the dependency on dummy components.
* **Cons**: Complex to manage and coordinate across development teams.

---

## Unit 3: Static & Dynamic Testing

### Q15. Explain the Review Process in Static Testing. Describe the different types of reviews and their differences. [5 Marks]

#### Review Process
The **Review Process** is a static testing technique used to identify defects, ambiguities, and violations of coding standards in documents or code *without* executing the software.

#### Steps in a Formal Review Process

```
┌───────────┐     ┌───────────┐     ┌──────────────┐     ┌───────────┐     ┌───────────┐
│ Planning  ├────►│Preparation├────►│Review Meeting├────►│  Rework   ├────►│ Follow-up │
└───────────┘     └───────────┘     └──────────────┘     └───────────┘     └───────────┘
```

1. **Planning**: Define the scope, select the document/code for review, assign reviewers, and allocate roles (e.g., Moderator, Author, Scribe).
2. **Preparation**: Reviewers study the target document individually and note down potential defects or queries.
3. **Review Meeting**: The team discusses the findings. The scribe records all valid defects and action items.
4. **Rework**: The author resolves the identified issues by correcting the document or refactoring the code.
5. **Follow-up**: The moderator checks the updated document to verify that all defects are properly fixed.

#### Types of Reviews
* **Informal Review**: A simple, undocumented peer review (e.g., buddy check) without a formal process.
* **Technical Review**: A peer discussion focusing on technical choices, design adequacy, and architectural compliance.
* **Walkthrough**: An author-led meeting where the developer explains the code or design to the team to share knowledge and seek feedback.
* **Inspection**: The most formal, documented defect-detection process led by a trained moderator using checklists.

#### Difference Between Review Types

| Dimension | Informal Review | Technical Review | Walkthrough | Inspection |
| :--- | :--- | :--- | :--- | :--- |
| **Formality** | Low | Medium | Medium | **High** (Strictly Defined) |
| **Led By** | Peer | Technical Lead | Author | **Moderator** (Independent) |
| **Primary Goal** | Quick feedback | Technical correctness | Knowledge sharing | **Defect detection** |
| **Metrics Collected**| No | Optional | Optional | **Yes** (Defect rates, time) |

---

### Q16. What is Static Analysis? Explain the objectives and the role of automated static analysis tools. [5 Marks]

#### Static Analysis
**Static Analysis** is the process of examining software source code, configurations, or designs without running the application. It focuses on structure, syntax, and compliance with programming standards.

#### Objectives of Static Analysis
* **Early Defect Detection**: Catching syntax errors, empty catch blocks, and logical errors before running tests.
* **Coding Standards Compliance**: Ensuring all code matches the organization’s style rules (e.g., naming conventions).
* **Security Scanning**: Detecting structural vulnerabilities like SQL Injection opportunities, buffer overflows, or hardcoded passwords.
* **Code Metric Assessment**: Measuring code complexity (e.g., Cyclomatic Complexity) to locate hard-to-maintain modules.

#### Role of Automated Static Analysis Tools
Automated tools scan large codebases rapidly to identify issues that are tedious to find during manual reviews:
1. **Dead Code Identification**: Pinpoints unused variables, uncalled functions, and unreachable `break` statements.
2. **Resource Leak Warnings**: Warns if file streams, database connections, or network sockets are not closed correctly.
3. **Security Vulnerability Checks**: Flags use of unsafe functions (e.g., `strcpy` in C) or missing security headers.
4. **Maintainability Metrics**: Flags functions exceeding maximum line lengths or nesting limits.

> [!NOTE]
> **Examples of Static Analysis Tools**: SonarQube, ESLint, PMD, Checkstyle, FindBugs.

---

### Q17. Explain Equivalence Partitioning (ECP) with a practical testing example. [5 Marks]

#### Equivalence Partitioning
**Equivalence Partitioning** is a black-box testing design technique that divides the input domain of a system into classes of data from which test cases can be derived. The fundamental premise is that the system behaves in the same way for any input within a specific partition (equivalence class).

```
                  ┌────────────────────────────────────────┐
                  │            Input Data Domain           │
                  └──────────────────┬─────────────────────┘
                                     │
        ┌────────────────────────────┼────────────────────────────┐
        ▼                            ▼                            ▼
┌────────────────┐           ┌────────────────┐           ┌────────────────┐
│ Invalid Range  │           │  Valid Range   │           │ Invalid Range  │
│  (Below Min)   │           │   (Min - Max)  │           │  (Above Max)   │
└────────────────┘           └────────────────┘           └────────────────┘
```

#### Example
A university portal accepts an exam score field containing integer values between **35 and 100** (inclusive).

#### Equivalence Partition Definition
* **Valid Partition**: `[35 to 100]` (Expected: Accepted)
* **Invalid Partition 1**: Values `< 35` (Expected: Rejected / Error)
* **Invalid Partition 2**: Values `> 100` (Expected: Rejected / Error)

#### Test Cases Derived
Instead of testing all numbers from 0 to 120, we select one representative value from each partition:

| Test Case ID | Partition Represented | Input Value | Expected Outcome | Result Type |
| :--- | :--- | :--- | :--- | :--- |
| **TC-01** | Valid `[35 to 100]` | `65` | Score Accepted | Pass |
| **TC-02** | Invalid `< 35` | `20` | Error: "Value too low" | Pass |
| **TC-03** | Invalid `> 100` | `115` | Error: "Value exceeds limit" | Pass |

---

### Q18. Explain Boundary Value Analysis (BVA) with a practical testing example. [5 Marks]

#### Boundary Value Analysis
**Boundary Value Analysis (BVA)** is a testing design technique that complements Equivalence Partitioning. It focuses on testing the boundary values of input partitions because experience shows that programmers frequently make errors at the edge limits (e.g., using `<` instead of `<=`).

#### Rules for BVA
For a range $[Min, Max]$, BVA selects values at:
* **Just below the minimum boundary** ($Min - 1$)
* **Exactly at the minimum boundary** ($Min$)
* **Just above the minimum boundary** ($Min + 1$)
* **Just below the maximum boundary** ($Max - 1$)
* **Exactly at the maximum boundary** ($Max$)
* **Just above the maximum boundary** ($Max + 1$)

#### Example
An age verification system allows access only to users who are between **18 and 60** years old.
* **Boundary limits**: $Min = 18$, $Max = 60$

#### Test Cases Derived

| Test Case ID | Test Value | Position Relative to Boundary | Expected Outcome |
| :--- | :--- | :--- | :--- |
| **TC-01** | `17` | $Min - 1$ (Outside) | Access Denied |
| **TC-02** | `18` | $Min$ (Boundary) | Access Granted |
| **TC-03** | `19` | $Min + 1$ (Inside) | Access Granted |
| **TC-04** | `59` | $Max - 1$ (Inside) | Access Granted |
| **TC-05** | `60` | $Max$ (Boundary) | Access Granted |
| **TC-06** | `61` | $Max + 1$ (Outside) | Access Denied |

---

### Q19. Explain Decision Table Testing with an example. [5 Marks]

#### Decision Table Testing
**Decision Table Testing** is a black-box test design technique used for complex business rules that depend on combinations of multiple inputs (conditions) to trigger different outcomes (actions). It guarantees that all possible logical rules are covered systematically.

#### Example: ATM Withdrawal Rules
* **Condition 1**: User enters a valid PIN.
* **Condition 2**: Account has sufficient balance.
* **Action**: Allow cash withdrawal.

#### Decision Table Representation

| Conditions & Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
| :--- | :---: | :---: | :---: | :---: |
| **C1: Valid PIN?** | Yes | Yes | No | No |
| **C2: Sufficient Balance?**| Yes | No | Yes | No |
| **A1: Allow Cash Dispense**| **Yes** | **No** | **No** | **No** |
| **A2: Show Error Page** | No | Yes | Yes | Yes |

---

### Q20. Explain State Transition Testing with an example. [5 Marks]

#### State Transition Testing
**State Transition Testing** is a dynamic black-box testing technique used to evaluate how a system behaves when it shifts between different operational states in response to events or inputs. It is particularly useful for real-time systems, embedded software, and transaction flows.

#### Example: ATM Session States
* **States**: `Idle`, `Card Inserted`, `PIN Verified`, `Transaction Completed`.
* **Transitions & Events**:
  1. From `Idle` to `Card Inserted` (Trigger: Insert Card).
  2. From `Card Inserted` to `PIN Verified` (Trigger: Enter Valid PIN).
  3. From `Card Inserted` to `Idle` (Trigger: Enter Invalid PIN 3 times / Timeout).
  4. From `PIN Verified` to `Idle` (Trigger: Complete Transaction & Eject Card).

```
            Insert Card          Enter Valid PIN          Eject Card
 ┌────────┐             ┌──────────────┐         ┌─────────────┐        ┌────────┐
 │  Idle  ├────────────►│Card Inserted ├────────►│PIN Verified ├───────►│  Idle  │
 └────────┘             └──────┬───────┘         └─────────────┘        └────────┘
                               │
                               │ Invalid PIN 3x
                               ▼
                          ┌────────┐
                          │  Idle  │
                          └────────┘
```

#### Application Scope
* E-commerce checkout flows (Shopping Cart $\rightarrow$ Payment $\rightarrow$ Processing $\rightarrow$ Shipped).
* Telecommunication call flows.
* Login security modules (Locked account after 3 failures).

---

### Q21. Differentiate between Statement Coverage, Branch/Decision Coverage, and Path Coverage. [5 Marks]

These metrics are used in white-box testing to measure the thoroughness of test cases running through code:

| Dimension | Statement Coverage | Branch/Decision Coverage | Path Coverage |
| :--- | :--- | :--- | :--- |
| **Core Definition** | Measures the percentage of code lines (statements) executed by tests. | Measures the percentage of decision outcomes (true/false paths) executed. | Measures the percentage of all possible execution paths traversed. |
| **Complexity** | Low / Basic. | Medium. | Very High / Exhaustive. |
| **Formula Target** | $\frac{\text{Executed Statements}}{\text{Total Statements}} \times 100\%$ | $\frac{\text{Executed Branches}}{\text{Total Decision Branches}} \times 100\%$ | $\frac{\text{Executed Paths}}{\text{Total Execution Paths}} \times 100\%$ |
| **Defect Detection** | Can miss errors in untested conditional conditions. | Detects missing branches; better logical coverage. | Maximum defect detection; verifies all loops and logic sequences. |

#### Coverage Strength Hierarchy
$$Statement\ Coverage \subset Branch\ Coverage \subset Path\ Coverage$$

---

### Q22. What is Cyclomatic Complexity? Explain McCabe’s Cyclomatic Complexity Metric with an example. [5 Marks]

#### Cyclomatic Complexity
**Cyclomatic Complexity** is a quantitative measure of the logical complexity of a program. Developed by Thomas McCabe, it determines the number of independent linear paths through a program's source code, which dictates the minimum number of test cases required for complete path coverage.

#### McCabe’s Formulas

##### 1. Using Decision Points (P)
$$V(G) = P + 1$$
*(Where $P$ is the number of predicate/decision nodes like `if`, `while`, `for` statements).*

##### 2. Using Control Flow Graphs
$$V(G) = E - N + 2$$
*(Where $E$ = number of edges, $N$ = number of nodes in the control flow graph).*

#### Example Calculation
Consider the following code snippet:

```javascript
read(A);
if (A > 0) {
    print("A is Positive");
} else {
    print("A is Negative");
}
```

#### Using Predicate Nodes
* There is $1$ decision statement (`if (A > 0)`).
* $P = 1$
* $V(G) = 1 + 1 = 2$

The Cyclomatic Complexity is **2**, meaning exactly $2$ independent test cases are needed to cover all execution branches.

---

### Q23. Explain Error Guessing and Exploratory Testing. [5 Marks]

#### Error Guessing
**Error Guessing** is an experience-based testing technique where the tester designs test cases based on intuition and past knowledge of where defects are commonly found.

* **Typical Test Cases**:
  * Leaving required fields empty.
  * Entering special characters or emojis in name fields.
  * Inputting $0$, negative numbers, or extremely large values in numeric fields.
  * Testing database operations with connection timeouts.
* **Advantage**: Efficient at finding edge-case bugs that formal test specifications might miss.
* **Limitation**: Highly dependent on the skill and system familiarity of the tester.

#### Exploratory Testing
**Exploratory Testing** is an informal testing approach where the tester simultaneously learns about the application, designs test cases, and executes them on the fly. There are no pre-written test scripts.

* **Characteristics**:
  * **Dynamic**: The outcome of one test dictates the design of the next test.
  * **Rapid Defect Finding**: Extremely useful when documentation is missing or timelines are constrained.
  * **Creativity**: Encourages testers to explore the app like a real-world user.
* **Advantage**: Fast feedback loop.
* **Limitation**: Difficult to measure code coverage and track test execution status.

---

## Unit 4: Test Management

### Q24. Explain the roles and responsibilities of Tester, Test Lead, and Test Manager. [5 Marks]

```
               ┌──────────────────────────────────────┐
               │             Test Manager             │
               │ (Strategy, Budgets, Stakeholders)    │
               └──────────────────┬───────────────────┘
                                  │
                                  ▼
               ┌──────────────────────────────────────┐
               │              Test Lead               │
               │ (Task Assignment, Reviews, Metrics)  │
               └──────────────────┬───────────────────┘
                                  │
                                  ▼
               ┌──────────────────────────────────────┐
               │                Tester                │
               │ (Execution, Test Cases, Bug Reports) │
               └──────────────────────────────────────┘
```

#### 1. Tester (Execution Focus)
* **Responsibilities**:
  * Writing detailed test cases and creating test data.
  * Executing manual test cases or running automated test scripts.
  * Logging clear defects in tracking tools (like JIRA) with logs and screenshots.
  * Performing re-testing on fixed bugs to verify corrections.

#### 2. Test Lead (Operational Focus)
* **Responsibilities**:
  * Assigning daily testing tasks and coordinating schedules.
  * Reviewing test cases and test design artifacts created by testers.
  * Collecting, compiling, and analyzing QA progress metrics.
  * Interfacing between developers and testers to clarify requirements.

#### 3. Test Manager (Strategic Focus)
* **Responsibilities**:
  * Authoring and approving the high-level **Test Strategy** and **Test Plan**.
  * Managing budget, timelines, and resource planning.
  * Approving the selection of automation tools and infrastructures.
  * Communicating overall product quality status directly to business stakeholders.

---

### Q25. Outline the core components of the IEEE 829 Test Plan Template. [5 Marks]

The **IEEE 829 Standard** provides a structured template for writing test plans, ensuring that all aspects of testing are documented:

1. **Test Plan Identifier**: A unique reference number to version and track the plan.
2. **Introduction**: High-level overview of the software project under test.
3. **Test Items**: List of specific software builds, APIs, or modules to be tested.
4. **Features to be Tested**: The functional and non-functional requirements included in the test scope.
5. **Features Not to be Tested**: Explicitly lists exclusions (e.g., out-of-scope third-party payment gateways) to manage expectations.
6. **Approach**: The overall testing strategy (tools, automation methods, and coverage goals).
7. **Item Pass/Fail Criteria**: The thresholds that determine if a module has passed testing.
8. **Suspension/Resumption Criteria**: Rules for stopping tests (e.g., if a blocking bug prevents 50% of execution) and when to restart.
9. **Test Deliverables**: List of documents to be produced (test logs, defect reports, summaries).
10. **Environmental Needs**: Infrastructure requirements (operating systems, test databases, browsers).
11. **Risks and Contingencies**: Identifying potential bottlenecks (e.g., missing APIs) and their mitigation plans.
12. **Approvals**: Signature block for key stakeholders to sign off before release.

---

### Q26. Explain Test Monitoring, Test Control, and the role of the Test Log. [5 Marks]

#### Test Monitoring
**Test Monitoring** is the continuous activity of collecting and reporting metrics from ongoing testing activities. It provides visibility into project health.

* **Key Metrics**:
  * Percentage of test cases executed (Passed vs. Failed).
  * Defect status trends (Open, Fixed, Reopened).
  * Requirements coverage progress.

#### Test Control
**Test Control** involves taking corrective actions based on the metrics collected during monitoring to keep the testing cycle aligned with the planned schedule and quality goals.

* **Actions**:
  * Re-allocating testing resources to bottleneck areas.
  * Adjusting the test scope if project timelines are compressed.
  * Delaying code builds if incoming bug rates are too high.

#### Role of the Test Log
The **Test Log** is a formal document that records the chronological execution details of test cases.

* **Significance**:
  * Provides an audit trail showing exactly when, how, and by whom a test was run.
  * Records the exact environmental setups and test steps used during a failure.
  * Serves as crucial verification evidence for compliance audits.

---

### Q27. Define Defect Density and explain its calculation with a formula. [5 Marks]

#### Defect Density
**Defect Density** is a quality metric that measures the number of confirmed defects found in a software module divided by the size of that module. It allows teams to compare the quality of different software modules, regardless of their size.

#### Formula
$$\text{Defect Density} = \frac{\text{Number of Confirmed Defects}}{\text{Size of Software (Lines of Code / Function Points)}}$$

* **Size Metric**: Usually calculated per **KLOC** (Thousand Lines of Code) or per **FP** (Function Points).

#### Example Calculation
A payment processing service contains $10,000$ lines of code ($10\text{ KLOC}$). During testing, $25$ valid bugs were identified.

$$\text{Defect Density} = \frac{25\text{ Defects}}{10\text{ KLOC}} = 2.5\text{ defects/KLOC}$$

#### Importance
* **Quality Comparison**: Helps identify which modules are highly prone to bugs and require intensive refactoring.
* **Release Readiness**: Helps determine if the software is stable enough to be released to production.

---

### Q28. Define and differentiate between Test Scenario, Test Suite, and Test Case. [5 Marks]

These three concepts represent different levels of abstraction in the test design hierarchy:

```
┌────────────────────────────────────────────────────────┐
│                     Test Scenario                      │
│            "Verify User Login Functionality"           │
│                                                        │
│  ┌──────────────────────────────────────────────────┐  │
│  │                    Test Suite                    │  │
│  │               "Login Module Suite"               │  │
│  │                                                  │  │
│  │  ┌─────────────────┐        ┌─────────────────┐  │  │
│  │  │  Test Case 01   │        │  Test Case 02   │  │  │
│  │  │ (Positive Test) │        │ (Negative Test) │  │  │
│  │  └─────────────────┘        └─────────────────┘  │  │
│  └──────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────┘
```

#### Test Scenario
* **Definition**: A high-level description of a testable requirement. It defines *what* is to be tested.
* **Example**: "Verify that users can buy products using an international credit card."

#### Test Suite
* **Definition**: A collection of related test cases grouped together for execution purposes (e.g., smoke test suite, performance test suite).
* **Example**: "Billing and Payment Gateway Test Suite."

#### Test Case
* **Definition**: A set of inputs, execution preconditions, testing steps, and expected results designed to verify a specific software behavior.
* **Example**:

| Step | Action | Input Data | Expected Result |
| :--- | :--- | :--- | :--- |
| **1** | Enter valid card number | `4111 2222 3333 4444` | Green checkmark shows |
| **2** | Click Pay button | — | Payment Success page |

---

### Q29. Explain Configuration Management in the context of software testing. [5 Marks]

#### Configuration Management (CM)
In software testing, **Configuration Management (CM)** is the discipline of identifying, controlling, tracking, and auditing all software artifacts, test resources, versions, and testing environments.

#### Why Configuration Management is Critical in Testing
1. **Ensures Build Traceability**: Ensures that a logged defect is linked to a specific version of the code build.
2. **Prevents Version Conflicts**: Prevents testers from running tests on outdated or incorrect code builds.
3. **Ensures Environment Consistency**: Ensures that configuration settings (database schemas, API keys) are identical across development, testing, and production environments.
4. **Supports Code Rollbacks**: If a newly integrated feature introduces critical bugs, CM allows developers to rollback to the last stable build.
5. **Manages Test Deliverables**: Version controls test plans, test cases, and automated test scripts to ensure team alignment.

---

### Q30. Explain the Defect Life Cycle with a diagram. [5 Marks]

The **Defect Life Cycle** (or Bug Life Cycle) is the specific journey a defect goes through from its initial discovery by a tester to its ultimate resolution and closure.

#### Defect Life Cycle Diagram

```
                 Tester logs bug
                ┌──────────────┐
                │     New      │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │   Assigned   │
                └──────┬───────┘
                       │
                       ▼
                ┌──────────────┐
                │     Open     │
                └──────┬───────┘
                       │
          ┌────────────┴────────────┐
          ▼                         ▼
  ┌──────────────┐          ┌──────────────┐
  │    Fixed     │          │   Rejected   │
  └──────┬───────┘          └──────────────┘
         │
         ▼
  ┌──────────────┐
  │   Re-test    │
  └──────┬───────┘
         │
         ├──────────────────────────┐
         ▼ (Pass)                   ▼ (Fail)
  ┌──────────────┐          ┌──────────────┐
  │   Verified   │          │   Reopened   │
  └──────┬───────┘          └──────┬───────┘
         │                         │
         ▼                         ▼
  ┌──────────────┐          ┌──────────────┐
  │    Closed    │◄─────────┤   Assigned   │
  └──────────────┘          └──────────────┘
```

#### Defect Life Cycle Stages
1. **New**: The tester discovers a bug and submits it to the tracking system.
2. **Assigned**: The Lead/Manager assigns the bug to a developer.
3. **Open**: The developer analyzes the bug to confirm its validity and determine how to fix it.
4. **Fixed**: The developer corrects the code and releases a new build.
5. **Re-test**: The tester runs the original test cases on the new build to verify the fix.
6. **Verified**: The tester confirms that the bug is resolved.
7. **Closed**: The bug is marked as resolved and closed in the tracker.

#### Alternative Defect States
* **Rejected**: The developer denies the bug is valid (e.g., works as designed).
* **Deferred**: The fix is postponed to a future release because it is low priority.
* **Duplicate**: The bug is identical to another already logged defect.
* **Reopened**: The test fails during re-testing, sending the bug back to the developer.

---

## Unit 5: Tool Support for Testing

### Q31. What are CAST tools? Explain the benefits and risks of automation testing tools. [5 Marks]

#### CAST (Computer Aided Software Testing)
**CAST tools** are software applications designed to automate testing activities, manage test execution, track defects, and run performance diagnostics, reducing the dependence on manual testing.

#### Benefits of Automation Tools
* **High Execution Speed**: Automation tests can run thousands of test steps in seconds.
* **Improved Test Accuracy**: Eliminates manual human mistakes like input typos or missed verification checks.
* **Efficient Regression Testing**: Ideal for running repeating regression test suites on new builds, saving QA effort.
* **Broad Test Coverage**: Enables complex end-to-end tests across multiple browsers, platforms, and devices concurrently.
* **Reusable Test Scripts**: Automation test code can be reused across different sprints and projects.

#### Risks of Automation Tools
* **High Initial Cost**: Purchase fees for commercial licenses, infrastructure setups, and framework design are high.
* **High Maintenance Overhead**: If the application user interface (UI) changes frequently, test scripts break and require constant maintenance updates.
* **False Sense of Security**: Having 100 automated tests does not mean the system is secure or bug-free; automation only verifies what it is programmed to check.
* **Requires Specialized Skills**: Designing robust automation suites requires experienced programming and framework skills.

---

### Q32. Explain how a testing tool is successfully introduced and integrated into an organization. [5 Marks]

Introducing a new testing tool requires a systematic process to prevent tool abandonment (shelfware):

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│Needs Assess │────►│Tool Eval/PoC├────►│Pilot Project├────►│ Scale/Rollout│
└─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

1. **Needs Assessment**: Define the technical requirements of the organization. Identify if the bottleneck is manual execution speed, API integration failures, or load handling issues.
2. **Tool Evaluation & Proof of Concept (PoC)**: Evaluate available open-source and commercial tools against compatibility, budget, and learning curve constraints. Run a mini PoC.
3. **Pilot Project**: Introduce the selected tool to a small, low-risk project first. Use this pilot phase to establish coding standards, define best practices, and calculate the return on investment (ROI).
4. **Training and Enablement**: Provide target developers and testers with technical training and resources to build tool expertise.
5. **Process Integration**: Update the software development workflow (e.g., integrating the tool into CI/CD pipelines like Jenkins or GitHub Actions).
6. **Scale and Rollout**: Deploy the tool across other engineering teams, tracking performance metrics continuously.

---

### Q33. Explain Selenium WebDriver and TestNG. What is their relationship in test automation? [5 Marks]

#### Selenium WebDriver
**Selenium WebDriver** is an open-source browser automation framework that allows developers to write code that interacts directly with web browsers (e.g., clicking buttons, entering text, retrieving element states) like a real user.

* **Key Features**:
  * Direct communication with browsers using native driver protocols.
  * Supports multiple languages (Java, Python, C#, JavaScript).
  * Supports major browsers (Chrome, Firefox, Safari, Edge).

#### TestNG
**TestNG** is a testing framework for Java inspired by JUnit, but adding advanced functionalities to manage test runs and generate reports.

* **Key Features**:
  * Enforces test flow control using annotations (e.g., `@Test`, `@BeforeMethod`, `@DataProvider`).
  * Supports parallel execution of test scripts.
  * Generates clean XML and HTML execution reports.
  * Supports parameterization and data-driven testing.

#### Relationship in Test Automation
Selenium WebDriver and TestNG are typically paired together in Java test automation architectures:

```text
┌────────────────────────────────────────────────────────┐
│                        TestNG                          │
│  (Manages test cases, runs, groupings, and reports)    │
│                                                        │
│   ┌────────────────────────────────────────────────┐   │
│   │               Selenium WebDriver               │   │
│   │ (Locates web elements, automates browser actions)│   │
│   └────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────┘
```

* **WebDriver** acts as the engine that drives and interacts with the web browser UI.
* **TestNG** acts as the brain that directs the test flow, makes assertions on results, runs tests in parallel, and logs final reports.

---

### Q34. Explain Apache JMeter and its key uses in performance testing. [5 Marks]

#### Apache JMeter
**Apache JMeter** is a popular open-source Java application designed to load test functional behaviors and measure performance metrics under varying stress levels.

#### Key Uses in Performance Testing

##### 1. Load Testing
* **How it works**: Simulated user requests are directed to the target server up to the expected normal traffic limit.
* **Objective**: Measure average response times and system stability under normal loads.

##### 2. Stress Testing
* **How it works**: Pushes concurrent user requests far beyond the application design limit to identify the system's breaking point.
* **Objective**: Check if the application crashes safely, handles database bottlenecks gracefully, and returns to normal operation once load is reduced.

##### 3. API Performance Testing
* **How it works**: Directly target microservices or REST API endpoints with simulated HTTP requests, bypassing the browser UI.
* **Objective**: Verify JSON response payloads, database query latency, and connection limit limits.

##### 4. Protocol Testing
* **Multi-Protocol Support**: Can load test HTTP, HTTPS, SOAP, XML, FTP, database connections (via JDBC), and LDAP directory servers.

---

### Q35. Explain Postman and its role in API testing. [5 Marks]

#### Postman
**Postman** is a collaborative API development and testing application that provides a clean user interface to construct, send, and analyze HTTP/HTTPS requests.

```
                    ┌────────────────────────────┐
                    │     Postman Request Flow   │
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │    Construct HTTP Request  │
                    │   (GET, POST, Headers, Body)│
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │     Execute API Request    │
                    └─────────────┬──────────────┘
                                  │
                                  ▼
                    ┌────────────────────────────┐
                    │   Analyze API Response     │
                    │   (Status, JSON, Asserts)  │
                    └────────────────────────────┘
```

#### Role in API Testing

##### 1. Request Dispatching
* Easily construct GET, POST, PUT, and DELETE requests, configuring parameters, custom headers, and request bodies (JSON, form-data).

##### 2. Response Validation
* Inspect status codes (e.g., `200 OK`, `401 Unauthorized`), response header configurations, and JSON/XML response bodies.

##### 3. Automated Test Assertions
* Developers can write JavaScript test scripts directly inside the Postman "Tests" tab to assert payload parameters:
  ```javascript
  pm.test("Status code is 200", function () {
      pm.response.to.have.status(200);
  });
  pm.test("Response contains user ID", function () {
      var jsonData = pm.response.json();
      pm.expect(jsonData.id).to.eql(101);
  });
  ```

##### 4. Collection Management
* Group related API endpoints into Collections, allowing testers to run entire folders of test calls automatically.

---

### Q36. Explain JIRA and its benefits in software test management. [5 Marks]

#### JIRA
**JIRA** is a widely-used project management and issue-tracking application designed for agile development teams to plan sprints, track tasks, and monitor bugs.

#### Benefits of JIRA in Software Test Management
* **Centralized Defect Tracking**: Simplifies bug reporting. Testers can log bugs, assign priority, select affected versions, and link screenshots in a single ticket.
* **Agile Integration**: Integrates testing tasks directly into Kanban or Scrum boards, giving developer teams clear visibility on QA progress.
* **Customizable Workflows**: Allows organizations to design custom bug life cycle states (e.g., `New` $\rightarrow$ `Triaged` $\rightarrow$ `Fixing` $\rightarrow$ `Testing` $\rightarrow$ `Ready`).
* **Traceability Linking**: Enables linking bug tickets directly to development source code commits, pull requests, and requirements specifications.
* **Extensibility**: Integrates with specialized QA plugins (like Zephyr or Xray) to manage test cases, test runs, and coverage graphs directly within JIRA.

---

### Q37. What is ETL Testing? Explain the ETL process and the role of ETL testing tools. [5 Marks]

#### ETL Testing
**ETL (Extract, Transform, Load) Testing** is the validation process used to verify that data has been correctly extracted from source databases, transformed according to business logic rules, and loaded into target data warehouses without data loss or corruption.

#### The ETL Process Flow

```
 ┌──────────────┐     Extraction      ┌────────────────┐
 │ Source DBs   ├────────────────────►│ Staging Area   │
 └──────────────┘                     └───────┬────────┘
                                              │ Transformation
                                              ▼
 ┌──────────────┐     Loading         ┌────────────────┐
 │ Data Warehse │◄────────────────────┤Transformation  │
 └──────────────┘                     └────────────────┘
```

1. **Extract**: Retrieve raw transactional data from various source files, operational databases, or third-party CRM APIs.
2. **Transform**: Clean, format, deduplicate, and aggregate the raw data in a staging area to comply with business rules.
3. **Load**: Load the processed, clean data into the target data warehouse for business intelligence reporting.

#### Role of ETL Testing Tools
ETL testing tools (such as QuerySurge, Talend, or Informatica) automate data validations:
* **Row Count Verification**: Confirms that the number of source records matches the target warehouse tables.
* **Data Quality Checks**: Automatically flags null values, truncated text fields, or incorrect formatting.
* **Transformation Validation**: Compares query execution results from the source system against the target to verify aggregation math.
* **Regression Testing**: Automatically verifies that updates to ETL pipelines do not corrupt existing data warehouse tables.
