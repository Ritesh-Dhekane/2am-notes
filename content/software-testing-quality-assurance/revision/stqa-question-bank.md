# STQA Exam Question Bank (Units 1 - 4)

> [!TIP]
> This question bank compiles solved exam questions for Units 1 to 4 based on your custom syllabus structure. Focus on bold terms, comparison tables, and equations.

---

## Unit 1: Software Quality Assurance Fundamentals

### Q1. Define the following terms with suitable examples: Quality, Quality Assurance, Quality Control. Also differentiate between QA and QC. [5 Marks]

#### Definitions

##### 1. Quality
In software engineering, **Quality** is the degree to which a software system, component, or process meets specified requirements and customer expectations.
* **Example**: A banking application that processes transactions without errors, maintains data encryption, and responds within 2 seconds.

##### 2. Quality Assurance (QA)
**Quality Assurance (QA)** is a planned and systematic set of activities focused on the processes used to develop software. It is a **preventative** discipline.
* **Example**: Conducting developer code reviews and enforcing strict coding standard guidelines to prevent bugs from being written.

##### 3. Quality Control (QC)
**Quality Control (QC)** is the set of activities focused on identifying defects in the actual software product. It is a **detection-oriented** and **reactive** discipline.
* **Example**: Running integration test suites or performing manual usability testing on a compiled software build.

#### Differentiating QA vs. QC

| Dimension | Quality Assurance (QA) | Quality Control (QC) |
| :--- | :--- | :--- |
| **Focus** | Process-oriented (How the product is created). | Product-oriented (Checking the final output). |
| **Approach** | Proactive / Preventive (Aims to prevent bugs). | Reactive / Corrective (Aims to find and fix bugs). |
| **Responsibility** | The entire development team and SQA staff. | The testing team and code inspectors. |
| **Example** | Code standards, audits, design reviews. | Functional testing, system integration testing. |

---

### Q2. Explain the major challenges faced in implementing Software Quality Assurance in software development organizations. [5 Marks]

Organizations face several hurdles when establishing a successful SQA culture:

* **Underestimation of QA Budgets and Timelines**: Quality planning, audits, and static inspections are often compressed or cancelled when project deadlines run tight.
* **Late QA Involvement**: SQA is frequently brought in late in the Software Development Life Cycle (SDLC), turning it into a reactive gate rather than a preventative process.
* **Developer Resistance to Standards**: Development teams may perceive strict coding rules, audits, and comprehensive documentation as bottlenecks to speed and creativity.
* **Dynamic and Changing Requirements**: In agile environments, constantly shifting project scopes make it difficult to maintain stable quality baselines.
* **Lack of Skilled Resources**: SQA requires professionals who understand process frameworks (like CMMI or ISO) and automated testing tooling, which are often scarce.

---

### Q3. Discuss the role of SQA Planning in software development. Explain the importance of ISO 9000 standards in maintaining software quality. [5 Marks]

#### Role of SQA Planning
An **SQA Plan** serves as the blueprint for quality activities throughout the software project. Its role includes:
* **Defining Quality Standards**: Outlines the code style guidelines, metrics, and documentation standards to be used.
* **Scheduling Audits and Reviews**: Details exactly when and how software inspections, walkthroughs, and process audits will occur.
* **Allocating Tools and Resources**: Lists testing tools, verification environments, and assigns roles/responsibilities to team members.
* **Establishing Defect Tracking**: Specifies the workflow for logging, prioritizing, and closing defects.

#### Importance of ISO 9000 Standards
ISO 9000 is an international standard for Quality Management Systems (QMS). Its significance includes:
* **Process Consistency**: Enforces documented procedures for all development and testing phases, reducing variations.
* **Customer Confidence**: Certifications demonstrate to clients that the company follows globally accepted quality standards.
* **Risk Control**: Mandates regular internal audits and management reviews to detect and fix process loopholes.
* **Continuous Improvement**: Requires teams to implement post-project feedback loops to optimize workflows continuously.

---

### Q4. Explain various SQA Activities performed during the Software Development Life Cycle (SDLC). [5 Marks]

SQA operates in parallel with the development lifecycle through the following activities:

```
  ┌────────────────────────────────────────────────────────┐
  │                     SQA Activities                     │
  └──────────────────────────┬─────────────────────────────┘
                             │
     ┌───────────────────────┼───────────────────────┐
     ▼                       ▼                       ▼
┌──────────────┐        ┌──────────────┐        ┌──────────────┐
│ Requirements │        │  Design &    │        │  Testing &   │
│ Verification │        │ Code Reviews │        │Process Audits│
└──────────────┘        └──────────────┘        └──────────────┘
```

1. **Requirements Verification**: Reviewing software requirement specifications (SRS) for ambiguities, contradictions, and testability.
2. **Design Auditing**: Ensuring that architectural models conform to design standards and satisfy non-functional performance requirements.
3. **Formal Code Reviews**: Participating in inspections and walkthroughs to catch code defects and security flaws before execution.
4. **Testing Strategy Oversight**: Verifying that the Test Plan covers all specifications and checking test execution coverage metrics.
5. **Process Audits**: Evaluating whether development teams are adhering to organizational procedures (e.g., commit rules, release steps).
6. **Defect Analysis**: Reviewing bug tracking databases to identify systemic quality trends and prevent recurring issues.

---

### Q5. What are Software Quality Factors? Explain any five software quality factors with suitable examples. [5 Marks]

#### Software Quality Factors
Quality factors represent the non-functional attributes of a software product that determine its overall capability, utility, and user satisfaction.

#### Five Key Quality Factors

1. **Correctness**
   * *Definition*: The degree to which the software satisfies its specifications and fulfill the user's objectives.
   * *Example*: A payroll system calculating tax deductions exactly as per current government regulations.
2. **Reliability**
   * *Definition*: The probability that software will run failure-free for a specified duration in a specific environment.
   * *Example*: Medical monitoring software that runs 24/7 without crashing or freezing.
3. **Efficiency**
   * *Definition*: The amount of computer resources (CPU, memory, bandwidth) required by the software to perform its tasks.
   * *Example*: A mobile video streaming app that processes HD streams using minimal RAM and battery power.
4. **Maintainability**
   * *Definition*: The ease with which software can be updated, bug-fixed, or refactored.
   * *Example*: A modular React application where changing the layout of the sidebar does not break the login flow.
5. **Portability**
   * *Definition*: The ease with which the software can be moved from one hardware or operating system environment to another.
   * *Example*: A Java program running seamlessly on Windows, macOS, and Linux without code modifications.

---

### Q6. Define Software Reliability. Explain the following reliability measurement factors with examples: ROCOF, MTTF, MTTR, MTBF, and POFOD. [5 Marks]

#### Software Reliability
**Software Reliability** is the probability of failure-free software operation for a specified period of time in a specified environment.

#### Reliability Measurement Factors

##### 1. ROCOF (Rate of Occurrence of Failure)
Measures the frequency of failures observed over a given operational duration.
* **Example**: A database engine experiencing $0.05$ failures per hour (meaning 1 failure expected every 20 hours).

##### 2. MTTF (Mean Time To Failure)
The average time the software runs before failing. Used primarily for non-repairable systems.
* **Example**: A satellite control module designed to operate continuously for $10,000$ hours before a critical failure occurs.

##### 3. MTTR (Mean Time To Repair)
The average time required to troubleshoot, fix, and restore a failed system to an operational state.
* **Example**: A web server crashing and taking an average of $15$ minutes for sysadmins to reboot and restore.

##### 4. MTBF (Mean Time Between Failures)
The average time between consecutive failures in repairable systems.
* **Formula**: $\text{MTBF} = \text{MTTF} + \text{MTTR}$
* **Example**: If a server runs for $200$ hours (MTTF) and takes $2$ hours to fix (MTTR), the MTBF is $202$ hours.

##### 5. POFOD (Probability of Failure on Demand)
The probability that a system will fail to perform its required action when a service request (demand) is initiated.
* **Example**: An emergency shutdown safety valve in a chemical plant having a POFOD of $0.001$, meaning it might fail to shut down once in $1000$ emergency demands.

---

## Unit 2: Software Testing Fundamentals

### Q1. Define Software Testing. Explain the objectives and importance of testing in software development. [5 Marks]

#### Software Testing Definition
**Software Testing** is the process of executing an application with the intent of finding defects and verifying that the software conforms to specified functional, performance, and security requirements.

#### Testing Objectives
* **Finding Defects**: Identifying software bugs, errors, and omissions before release.
* **Gaining Confidence**: Providing stakeholders with verification that the system performs as expected.
* **Preventing Defects**: Reviewing early requirement and design documents to prevent logical errors from entering the code.
* **Ensuring Compliance**: Confirming that the system meets industry standards and regulatory compliance requirements.

#### Importance of Testing
* **Financial Savings**: Finding and fixing defects early in the SDLC is significantly cheaper than hotfixing bugs in production.
* **Product Safety**: Testing ensures safety-critical software (like medical devices or autopilots) does not cause physical harm.
* **Customer Satisfaction**: A bug-free, fast, and easy-to-use application builds brand loyalty and user retention.
* **High Quality**: Enforces performance, security, compatibility, and reliability constraints on the software build.

---

### Q2. Differentiate between the following terms with suitable examples: Error, Bug, Fault, Defect, and Failure. Explain how software failures occur. [5 Marks]

#### Key Differences

* **Error / Mistake**: An incorrect human action made during programming or design.
  * *Example*: A developer writing `<` instead of `<=` in a loop check.
* **Bug / Fault / Defect**: The representation of the error in the static source code or documentation.
  * *Example*: The loop exiting one index too early in the code.
* **Failure**: The visible, runtime misbehavior of the software when executed.
  * *Example*: The application crashing or returning an incorrect calculation to the user.

```
┌───────────────┐     triggers     ┌───────────────┐     manifests as     ┌───────────────┐
│  Human Error  ├─────────────────►│ Bug / Defect  ├─────────────────────►│    Failure    │
│  (In thought) │                  │   (In code)   │                      │ (At runtime)  │
└───────────────┘                  └───────────────┘                      └───────────────┘
```

#### How Software Failures Occur
1. A developer makes an **Error** due to miscommunication, time pressure, or code complexity.
2. This error introduces a **Defect** (Bug) into the static code or configuration files.
3. During execution, the software runs along a specific path that triggers the defect.
4. Once triggered, the defect corrupts the internal state of the program.
5. This corrupted state propagates to the user interface or output API, causing a visible **Failure**.

---

### Q3. Explain the Seven Testing Principles with practical examples. [5 Marks]

1. **Testing shows the presence of defects, not their absence**
   * *Example*: Running $100$ tests on a portal and passing them all does not prove the system is $100\%$ bug-free; it only proves that no bugs were found in those $100$ specific test paths.
2. **Exhaustive testing is impossible**
   * *Example*: Testing an input field that accepts $20$-character strings with all possible alphanumeric combinations is impossible. Instead, testers prioritize using boundary values and equivalence classes.
3. **Early testing saves time and money**
   * *Example*: Reviewing requirement drafts at the start of a project to identify logical errors is far cheaper than fixing those same requirements after coding them.
4. **Defect Clustering**
   * *Example*: In an e-commerce platform, $80\%$ of system bugs are often found clustered within a single complex module (like the Payment Gateway integration).
5. **Pesticide Paradox**
   * *Example*: Running the same automated regression tests every week will eventually stop revealing new bugs. Test cases must be updated regularly to find new issues.
6. **Testing is context-dependent**
   * *Example*: Testing an online mobile game focuses on frame rates and usability, whereas testing banking transaction software focuses on data encryption, concurrency, and security.
7. **Absence-of-errors fallacy**
   * *Example*: Building a bug-free portal is useless if it is hard to navigate, runs slowly, and does not meet the customer's actual business goals.

---

### Q4. Compare the V-Model and W-Model used in software testing. Discuss their advantages and limitations. [5 Marks]

#### Concept Difference
* **V-Model**: Pairs development activities on the left side (Verification) with matching dynamic testing levels on the right side (Validation). Testing execution only starts after coding.
* **W-Model**: Introduces parallel testing activities for every phase of development. Testers work alongside developers to review requirements, review designs, and construct test cases *before* any code is compiled.

```
 V-Model: Code ──► Unit Test ──► Integration Test ──► System Test ──► UAT
 
 W-Model: Requirements Review ──► Design Review ──► Code Review ──► Testing
                    │                 │                │               │
             Create Test Plan ──► Test Cases ──► Run Unit ──► Run System
```

#### Comparison Table

| Attribute | V-Model | W-Model |
| :--- | :--- | :--- |
| **Testing Start** | Starts after the coding phase is completed. | Starts on day one during requirements gathering. |
| **Activities** | Primarily dynamic validation tests. | Equal focus on static verification (reviews) and validation. |
| **Defect Detection** | Bugs are identified late during test execution. | Bugs are identified early in requirements/design reviews. |
| **Cost to Fix** | Higher, as bugs are found late in the cycle. | Lower, as design flaws are caught before coding. |

#### Advantages & Limitations

##### V-Model
* *Advantages*: Simple, structured, and easy to manage for small projects with stable requirements.
* *Limitations*: Testing starts late; high risk of expensive rework if requirements were misunderstood.

##### W-Model
* *Advantages*: Early bug detection, higher test quality, and reduced development costs due to upfront verification.
* *Limitations*: Complex to coordinate; requires highly skilled testers and documentation from day one.

---

### Q5. Explain the following levels of testing with suitable examples: Unit Testing, Integration Testing, System Testing, and User Acceptance Testing (UAT). [5 Marks]

```
 ┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
 │ Unit Testing│────►│ Integration │────►│System Test  │────►│ User Accept.│
 └─────────────┘     └─────────────┘     └─────────────┘     └─────────────┘
```

#### 1. Unit Testing
* *Description*: Testing the smallest isolation of code (e.g., individual functions, classes, or modules), typically written and executed by developers.
* *Example*: Testing a helper function `calculateInterest(principal, rate, time)` to verify it returns the correct mathematical value for valid inputs.

#### 2. Integration Testing
* *Description*: Verifying that different modules, APIs, or hardware interfaces interact and exchange data correctly.
* *Example*: Testing if the user registration module successfully stores user details in the MySQL database and triggers a welcome email API.

#### 3. System Testing
* *Description*: Testing the completely integrated, end-to-end software application to evaluate its compliance with functional and non-functional specifications.
* *Example*: Simulating a user searching for an item, adding it to the cart, checking out via credit card, and checking the receipt page.

#### 4. User Acceptance Testing (UAT)
* *Description*: Testing conducted by actual end-users, clients, or product owners in a staging environment to confirm the application meets business requirements before production.
* *Example*: A client walking through a custom inventory dashboard to sign off that the business reporting logic complies with their internal finance guidelines.

---

### Q6. Differentiate between the following: Functional vs. Non-Functional Testing, Smoke vs. Sanity Testing, and Re-testing vs. Regression Testing. [5 Marks]

#### 1. Functional Testing vs. Non-Functional Testing

| Feature | Functional Testing | Non-Functional Testing |
| :--- | :--- | :--- |
| **Objective** | Validates **what** the system does. | Validates **how** the system performs. |
| **Focus** | User actions, inputs, and outputs. | Loading speeds, security, scalability. |
| **Example** | Testing if user login works with valid credentials. | Testing if the system handles $10,000$ concurrent users. |

#### 2. Smoke Testing vs. Sanity Testing

| Feature | Smoke Testing | Sanity Testing |
| :--- | :--- | :--- |
| **Scope** | Broad and shallow (Tests overall build stability). | Narrow and deep (Tests specific bug fixes). |
| **Executed On** | Initial/new software builds. | Relatively stable subsequent builds. |
| **Example** | Verifying if the app launches and the login page opens. | Verifying if the password reset link works after a hotfix. |

#### 3. Re-testing vs. Regression Testing

| Feature | Re-testing | Regression Testing |
| :--- | :--- | :--- |
| **Goal** | Confirms that a reported bug is fixed. | Confirms that changes have not broken existing features. |
| **Execution** | Runs the specific failed test case again. | Runs a suite of previously passed test cases. |
| **Focus** | Targeted on the bug fix area. | Covers unmodified parts of the application. |

---

## Unit 3: Static & Dynamic Testing

### Q1. Explain the Review Process in Static Testing. Differentiate between Informal Review, Technical Review, Walkthrough, and Inspection. [5 Marks]

#### Review Process
The **Review Process** is a static testing technique where documents, specifications, or code are examined manually to detect defects and deviations from standards *without* running the application.

```
Planning ──► Individual Preparation ──► Review Meeting ──► Rework ──► Follow-up
```

#### Differentiating Review Types

| Review Type | Formality | Led By | Primary Objective | Key Deliverables |
| :--- | :--- | :--- | :--- | :--- |
| **Informal Review** | Low | Peer (Buddy check) | Quick feedback / brainstorming | No formal notes |
| **Walkthrough** | Medium | Author (Developer) | Knowledge sharing, training | Review report |
| **Technical Review**| Medium | Technical Lead / Architect | Technical adequacy, design checks | Action list |
| **Inspection** | **High** | Trained Moderator | Strict defect detection using checklists | Defect metrics |

> [!IMPORTANT]
> **Inspection** is the most formal review technique, requiring pre-defined entry/exit criteria and formal reporting of defect density metrics.

---

### Q2. What is Static Analysis? Explain the role of automated static analysis tools in software testing. [5 Marks]

#### Static Analysis
**Static Analysis** is the process of evaluating software code structure, data flow, and configurations without executing the program. It focuses on finding syntax errors, security vulnerabilities, and design anomalies.

#### Role of Automated Static Analysis Tools
Automated tools scan massive codebases rapidly to identify issues that are tedious to find during manual code reviews:
* **Syntax and Style Violations**: Flags code style deviations (e.g., camelCase violations or missing semi-colons).
* **Unreachable (Dead) Code Detection**: Identifies declared variables that are never read, or lines of code after a return statement.
* **Security Scanning**: Detects common security vulnerabilities like potential SQL Injection flaws or hardcoded secrets.
* **Complexity Metrics**: Calculates Cyclomatic Complexity to flag functions that are too large and complex.
* **Resource Leak Detection**: Warns developers if file streams, database handles, or memory pointers are not closed properly.

---

### Q3. Explain the following Black Box Testing techniques with suitable examples: Equivalence Partitioning, Boundary Value Analysis, and Decision Table Testing. [5 Marks]

#### 1. Equivalence Partitioning (ECP)
ECP divides input data into classes that are expected to behave similarly. One value is selected from each partition.
* *Example*: A discount code field accepts ages between `18` and `60` (inclusive).
  * **Valid Partition**: `[18 to 60]` (e.g., Input `30` $\rightarrow$ Accepted)
  * **Invalid Partition 1**: `< 18` (e.g., Input `10` $\rightarrow$ Rejected)
  * **Invalid Partition 2**: `> 60` (e.g., Input `70` $\rightarrow$ Rejected)

#### 2. Boundary Value Analysis (BVA)
BVA tests values at the boundaries of equivalence partitions, as programming mistakes often occur at edge limits.
* *Example*: Using the same `[18 to 60]` age range, the boundary test cases are:
  * **Minimum boundaries**: `17` (Rejected), `18` (Accepted), `19` (Accepted)
  * **Maximum boundaries**: `59` (Accepted), `60` (Accepted), `61` (Rejected)

#### 3. Decision Table Testing
Used when combinations of inputs map to different actions.
* *Example*: An online shopping site applies a discount if a user is a **Premium Member** AND has a **Discount Code**:

| Inputs & Actions | Rule 1 | Rule 2 | Rule 3 | Rule 4 |
| :--- | :---: | :---: | :---: | :---: |
| **Is Premium?** | Yes | Yes | No | No |
| **Has Code?** | Yes | No | Yes | No |
| **Apply Discount** | **Yes** | **No** | **No** | **No** |

---

### Q4. Explain State Transition Testing with a suitable example. Where is this testing technique useful? [5 Marks]

#### State Transition Testing
**State Transition Testing** is a black-box testing technique that evaluates how a system transitions between different states in response to inputs or events.

#### Example: ATM Account Lock Flow
* **States**: `Unlocked`, `1 Failure`, `2 Failures`, `Locked`.
* **Transitions**:
  * Entering correct PIN transitions the state back to `Unlocked`.
  * Entering incorrect PIN transitions `Unlocked` $\rightarrow$ `1 Failure` $\rightarrow$ `2 Failures` $\rightarrow$ `Locked`.

```
                    Invalid PIN               Invalid PIN               Invalid PIN
┌────────────┐     ────────────► ┌───────────┐ ────────────► ┌───────────┐ ────────────► ┌──────────┐
│  Unlocked  │                   │ 1 Failure │               │ 2 Failures│               │  Locked  │
└─────▲──────┘     ◄──────────── └───────────┘ ◄──────────── └───────────┘               └──────────┘
                      Valid PIN                   Valid PIN
```

#### Where it is Useful
* **Workflow Applications**: Order tracking (Placed $\rightarrow$ Paid $\rightarrow$ Shipped $\rightarrow$ Delivered).
* **UI Navigation States**: Interactive wizard pages (Step 1 $\rightarrow$ Step 2 $\rightarrow$ Complete).
* **Real-time Control Systems**: Traffic light controllers, elevators, and vending machine software.

---

### Q5. Differentiate between the following White Box Testing techniques: Statement Coverage, Branch Coverage, and Path Coverage. [5 Marks]

These coverage metrics evaluate code execution completeness:

| Metric | Focus | Strength | Complexity / Effort |
| :--- | :--- | :--- | :--- |
| **Statement Coverage** | Executes every individual line of code (statements) at least once. | Weak (May miss untested conditional outcomes). | Low effort. |
| **Branch Coverage** | Executes every decision outcome (both True and False paths) at least once. | Stronger (Includes statement coverage). | Medium effort. |
| **Path Coverage** | Executes every possible execution path through the control flow graph. | Strongest (Exhaustive execution coverage). | Extremely High (Often impossible with loops). |

#### Hierarchy
$$Statement\ Coverage \subset Branch\ Coverage \subset Path\ Coverage$$

---

### Q6. What is Cyclomatic Complexity? Explain McCabe’s Cyclomatic Complexity Metric. [5 Marks]

#### Cyclomatic Complexity
**Cyclomatic Complexity** is a software metric used to indicate the logical complexity of a program. It measures the number of linearly independent paths through the program's source code, which determines the minimum number of test cases required for branch coverage.

#### McCabe’s Formulas

##### 1. Predicate Nodes Formula
$$V(G) = P + 1$$
* *Where $P$ is the number of decision/predicate nodes (e.g. `if`, `while`, `for` statements).*

##### 2. Edges and Nodes Formula
$$V(G) = E - N + 2$$
* *Where $E$ = number of edges, $N$ = number of nodes in the program's control flow graph.*

#### Example Calculation
```javascript
if (X > 10) {
    print("Large");
} else {
    print("Small");
}
```
* **Decision Nodes (P)**: $1$ (`if (X > 10)`)
* **Complexity**: $V(G) = 1 + 1 = 2$
* Meaning exactly $2$ independent test cases are required to cover both decision branches.

---

## Unit 4: Test Management

### Q1. Explain the roles and responsibilities of Tester, Test Lead, and Test Manager in a software testing project. [5 Marks]

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

#### 1. Tester
* **Responsibilities**:
  * Writing test cases, preparing test data, and scripting test automation scenarios.
  * Executing manual test cases or running test scripts.
  * Logging defects in tracking tools (like JIRA) with logs and screenshots.
  * Performing re-testing on fixed bugs to verify corrections.

#### 2. Test Lead
* **Responsibilities**:
  * Assigning daily testing tasks and coordinating schedule timelines.
  * Reviewing test design documents and verifying test cases created by testers.
  * Gathering and analyzing QA progress metrics (e.g., test execution status).
  * Acting as a link between developers and testers to clarify requirements.

#### 3. Test Manager
* **Responsibilities**:
  * Writing and approving the high-level **Test Strategy** and **Test Plan**.
  * Managing project budgets, human resources, and timelines.
  * Selecting automation tools and infrastructure configurations.
  * Reporting overall product quality metrics directly to stakeholders and clients.

---

### Q2. Explain the components of a Test Plan as per IEEE 829 Standard Test Plan Template. [5 Marks]

The **IEEE 829 Standard** outlines a structured blueprint to ensure all aspects of testing are documented:

* **Test Plan Identifier**: A unique reference number to version and track the plan.
* **Introduction**: General project overview and testing scope limits.
* **Test Items**: Specific builds, code files, or modules to be tested.
* **Features to be Tested**: Functional and non-functional parameters included in the scope.
* **Features Not to be Tested**: Explicit out-of-scope exclusions (e.g., third-party authentication APIs).
* **Approach**: The overall testing strategy (automation tools, manual testing types).
* **Item Pass/Fail Criteria**: The criteria that determine if a module has passed testing.
* **Suspension and Resumption Criteria**: Rules for stopping tests (e.g., if a blocking bug prevents execution) and when to restart.
* **Test Deliverables**: List of documents to be produced (test logs, defect reports, summaries).
* **Environmental Needs**: Infrastructure requirements (hardware configuration, browser types, test databases).
* **Risks and Contingencies**: Identifying potential bottlenecks and mitigation backup plans.
* **Approvals**: Signature sign-off block for managers and clients.

---

### Q3. What is Test Monitoring and Test Control? Explain the role of Test Log, Defect Density, and Test Summary Report in monitoring testing activities. [5 Marks]

#### Test Monitoring and Test Control
* **Test Monitoring**: The ongoing QA activity of collecting, analyzing, and reporting metrics from test execution to track progress.
* **Test Control**: Taking corrective action based on monitoring data (e.g., allocating more testers to a delayed module) to keep testing aligned with the plan.

#### Roles in Monitoring

##### 1. Test Log
A chronological record of test execution activities.
* *Role*: Provides audit proof of test execution steps, timestamps, tester names, and pass/fail details.

##### 2. Defect Density
A metric measuring the number of confirmed defects per software size unit (e.g., defects per KLOC).
* *Formula*:
  $$\text{Defect Density} = \frac{\text{Number of Confirmed Defects}}{\text{Size of Software (Lines of Code / Function Points)}}$$
* *Role*: Identifies which modules are highly prone to bugs and require restructuring or refactoring.

##### 3. Test Summary Report
The final report prepared at the end of the testing cycle.
* *Role*: Details executed test results, passed/failed ratios, open bug status, and provides a release recommendation.

---

### Q4. Define Test Scenario, Test Suite, and Test Case. Write suitable examples of Positive and Negative Test Cases. [5 Marks]

#### Definitions
* **Test Scenario**: A high-level description of a testable requirement. Defines **what** to test.
  * *Example*: Verify user payment functionality.
* **Test Suite**: A logical collection of related test cases grouped together for execution.
  * *Example*: Regression Test Suite for Checkout Module.
* **Test Case**: A set of inputs, preconditions, execution steps, and expected outcomes.

#### Positive vs. Negative Test Case Examples
Scenario: Login page validation (Requires $6$-character alphanumeric password).

##### Positive Test Case
Tests system behavior using valid inputs.
* **Test Case ID**: `TC-POS-01`
* **Input**: Password = `P@ss12` (Valid)
* **Expected Result**: User successfully logs in and accesses the dashboard.

##### Negative Test Case
Tests system error handling using invalid inputs.
* **Test Case ID**: `TC-NEG-01`
* **Input**: Password = `123` (Too short)
* **Expected Result**: Login fails; displays error message: "Password must be at least 6 characters".

---

### Q5. Explain the importance of Configuration Management in software testing. [5 Marks]

**Configuration Management (CM)** tracks and controls changes, versions, and environments in software projects. Its importance in testing includes:

* **Build Version Control**: Ensures testers execute test cases on the correct, target build version rather than outdated code.
* **Environment Consistency**: Guarantees that configuration parameters (database schemas, configurations, API keys) are identical across development and testing environments.
* **Defect Traceability**: Links logged defects to the exact version of the code and configuration settings that triggered them.
* **Preventing Code Conflicts**: Avoids issues where developer fixes overwrite or conflict with each other in the shared test build.
* **Rollback Capabilities**: Allows the testing team to restore a previous stable version if a new build introduces critical blocking bugs.

---

### Q6. Explain the Defect Life Cycle with a neat diagram. Also discuss the importance of Incident/Defect Reports in testing projects. [5 Marks]

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

#### Importance of Defect Reports
A **Defect/Incident Report** is a document containing detailed information about a discovered bug (including title, description, steps to reproduce, expected vs. actual outcomes, severity, and screenshots). Its importance includes:
* **Developer Communication**: Provides developers with the exact instructions and logs needed to reproduce and fix the bug without back-and-forth communication.
* **Defect Tracking**: Serves as the primary source of truth for the status, history, and owner of a bug.
* **Quality Metrics**: Supports calculating overall defect metrics, helping project managers evaluate software readiness.
