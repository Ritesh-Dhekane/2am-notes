# PART 1 — `stqa-pyq-jan-2026.md`

# STQA PYQ — JAN 2026

## Question 1

### (a) Describe Software Quality Assurance and its challenges. `[5]`

#### Answer

## Software Quality Assurance (SQA)

Software Quality Assurance is a planned and systematic process used to ensure that software products and development processes meet specified quality standards and customer requirements.

---

## Objectives of SQA

* improve software quality
* prevent defects
* ensure process compliance
* improve reliability
* increase customer satisfaction

---

## Challenges in SQA

### 1. Changing Requirements

* frequent requirement modifications increase testing effort

---

### 2. Time Constraints

* limited deadlines reduce testing coverage

---

### 3. Budget Limitations

* insufficient budget affects quality activities and tools

---

### 4. Complex Software Systems

* modern applications contain multiple modules and integrations

---

### 5. Lack of Skilled Resources

* shortage of experienced QA professionals

---

### 6. Communication Gaps

* misunderstanding between teams creates defects

---

### 7. Integration Issues

* problems while integrating APIs and third-party systems

---

### 8. Security Challenges

* maintaining application security is difficult

---

### 9. Maintaining Test Environment

* creating stable testing environments requires resources

---

### 10. Continuous Maintenance

* software requires regular updates and retesting

> Important: SQA focuses mainly on defect prevention and process improvement.

---

### (b) Illustrate ISO 9000 standards in SQA. `[5]`

#### Answer

## ISO 9000 Standards

ISO 9000 is a family of international quality management standards used to improve process quality and maintain consistency in software development.

---

## Importance of ISO 9000 in SQA

### 1. Process Standardization

* establishes standard development and testing procedures

---

### 2. Improved Software Quality

* improves reliability and consistency

---

### 3. Better Documentation

* encourages proper maintenance of reports and records

---

### 4. Customer Satisfaction

* improves product quality and customer confidence

---

### 5. Continuous Improvement

* supports process monitoring and improvement

---

### 6. Defect Prevention

* focuses on preventing defects rather than only detecting them

---

### 7. International Recognition

* improves organizational credibility globally

---

### 8. Support for Audits

* simplifies quality audits and inspections

---

## Benefits of ISO 9000

* reduced errors
* improved efficiency
* better project management
* improved reliability

---

### (OR) (c) Distinguish between Software Quality Assurance and Software Quality Control. `[5]`

#### Answer

| Software Quality Assurance (SQA) | Software Quality Control (SQC)        |
| -------------------------------- | ------------------------------------- |
| process-oriented                 | product-oriented                      |
| prevents defects                 | detects defects                       |
| focuses on process improvement   | focuses on product quality            |
| proactive approach               | reactive approach                     |
| includes audits and reviews      | includes testing activities           |
| performed throughout SDLC        | mainly performed during testing       |
| responsibility of entire team    | mainly responsibility of testing team |

---

## Examples

### SQA Example

* conducting process audits

---

### SQC Example

* performing system testing

> Important: SQA prevents defects while SQC identifies defects.

---

### (OR) (d) Define Reliability and explain Availability, ROCOF, and POFOD. `[5]`

#### Answer

## Software Reliability

Software Reliability is the probability that software performs required functions correctly without failure for a specified period under specified conditions.

---

## 1. Availability

Availability measures percentage of time software remains operational.

### Formula

```text
Availability = MTTF / (MTTF + MTTR)
```

### Interpretation

* higher availability means less downtime

---

## 2. ROCOF (Rate of Occurrence of Failures)

ROCOF measures frequency of failures during software operation.

### Example

* 3 failures in 100 operational hours

### Interpretation

* lower ROCOF means higher reliability

---

## 3. POFOD (Probability of Failure on Demand)

POFOD measures probability that software fails when a service request occurs.

### Example

* emergency shutdown system failure during activation

### Interpretation

* lower POFOD means safer software

---

# Question 2

### (a) Explain the Testing Principles. `[5]`

#### Answer

## Seven Testing Principles

---

### 1. Testing Shows Presence of Defects

* testing identifies defects but cannot prove absence of defects

#### Example

* payment module testing identifies transaction errors

---

### 2. Exhaustive Testing is Impossible

* all possible combinations cannot be tested

#### Example

* millions of password combinations cannot be tested

---

### 3. Early Testing

* testing should start early in SDLC

#### Example

* requirement review before coding

---

### 4. Defect Clustering

* most defects are found in few modules

#### Example

* payment module contains maximum bugs

---

### 5. Pesticide Paradox

* repeated tests stop finding new defects

#### Example

* updating test cases regularly

---

### 6. Testing is Context Dependent

* testing approach varies according to application type

#### Example

* banking applications require strong security testing

---

### 7. Absence of Errors Fallacy

* defect-free software may still fail user expectations

#### Example

* software works correctly but has poor usability

> Important: These principles are among the most frequently repeated theory questions.

---

### (b) Illustrate V-Model phases. `[5]`

#### Answer

## V-Model

V-Model is a software development model where testing activities are planned parallel to development activities.

---

## Verification Phases

### 1. Requirement Analysis

* collects customer requirements

---

### 2. System Design

* prepares overall architecture

---

### 3. High-Level Design

* defines module interactions

---

### 4. Low-Level Design

* defines internal module logic

---

### 5. Coding

* software implementation phase

---

## Validation Phases

### 1. Unit Testing

* tests individual modules

---

### 2. Integration Testing

* tests interaction between modules

---

### 3. System Testing

* tests complete application

---

### 4. Acceptance Testing

* validates software from user perspective

---

## V-Model Diagram

```text
Requirements        → Acceptance Testing
System Design       → System Testing
High-Level Design   → Integration Testing
Low-Level Design    → Unit Testing
                Coding
```

---

## Advantages of V-Model

* early test planning
* better defect detection
* simple structure

---

## Limitations of V-Model

* difficult to handle changing requirements
* less flexible

---

### (OR) (c) Discuss any five non-functional testing types. `[5]`

#### Answer

## Non-Functional Testing

Non-Functional Testing verifies software quality attributes such as performance, security, and usability.

---

## 1. Performance Testing

* checks speed and response time

### Example

* measuring website response under load

---

## 2. Load Testing

* checks behavior under expected user load

### Example

* testing website with 1000 simultaneous users

---

## 3. Stress Testing

* checks software behavior beyond normal limits

### Example

* testing server during extremely high traffic

---

## 4. Security Testing

* identifies vulnerabilities and unauthorized access risks

### Example

* checking login authentication security

---

## 5. Usability Testing

* checks ease of use and user-friendliness

### Example

* verifying navigation simplicity in mobile apps

---

## Other Non-Functional Testing Types

* maintainability testing
* portability testing
* localization testing
* internationalization testing

---

### (OR) (d) Differentiate between Re-testing and Regression Testing. `[5]`

#### Answer

| Re-testing                 | Regression Testing                          |
| -------------------------- | ------------------------------------------- |
| verifies fixed defects     | checks existing functionality after changes |
| focuses on specific defect | focuses on complete application stability   |
| uses failed test cases     | uses regression test suite                  |
| narrow scope               | wider scope                                 |
| performed after bug fix    | performed after updates or enhancements     |
| ensures bug is fixed       | ensures no side effects introduced          |

---

## Example

### Re-testing

* verifying payment bug fix

---

### Regression Testing

* checking complete application after payment module update

> Important: Re-testing confirms defect resolution while regression testing checks impact of changes.
# PART 2 — `stqa-pyq-jan-2026.md`

# Question 3

### (a) Boundary Value Analysis Problem `[5]`

#### Answer

An Age Verification System accepts users between ages 18 and 60.

Boundary Value Analysis tests values near boundaries because defects usually occur near limits.

---

## i) Number of Test Cases Required

Boundary values:

```text id="mf0upf"
17, 18, 19, 59, 60, 61
```

Minimum Test Cases Required:

```text id="ehk5m5"
6 Test Cases
```

---

## ii) Test Cases with Expected Outcomes

| Test Case | Age Value | Expected Result |
| --------- | --------- | --------------- |
| TC1       | 17        | Rejected        |
| TC2       | 18        | Accepted        |
| TC3       | 19        | Accepted        |
| TC4       | 59        | Accepted        |
| TC5       | 60        | Accepted        |
| TC6       | 61        | Rejected        |

---

## Explanation

### Lower Boundary

* 17 → just below minimum limit
* 18 → minimum valid value
* 19 → just above minimum limit

---

### Upper Boundary

* 59 → just below maximum limit
* 60 → maximum valid value
* 61 → just above maximum limit

---

## Advantages of Boundary Value Analysis

* detects boundary-related defects
* improves input validation testing
* reduces number of test cases

> Important: Boundary Value Analysis is one of the most repeated practical questions in STQA exams.

---

### (b) Describe Static Analysis Tools and explain their importance. `[5]`

#### Answer

## Static Analysis Tools

Static Analysis Tools examine source code and documents without executing software.

These tools help identify defects early during development.

---

## Objectives of Static Analysis Tools

* improve code quality
* identify coding defects
* ensure coding standards
* reduce debugging effort

---

## Functions of Static Analysis Tools

### 1. Detect Syntax Errors

* identifies coding mistakes early

---

### 2. Detect Dead Code

* identifies unused variables and functions

---

### 3. Check Coding Standards

* verifies compliance with coding guidelines

---

### 4. Identify Security Vulnerabilities

* detects unsafe coding practices

---

### 5. Improve Maintainability

* improves readability and code structure

---

### 6. Reduce Development Cost

* early defect detection reduces fixing cost

---

## Examples of Static Analysis Tools

* SonarQube
* PMD
* Checkstyle
* FindBugs
* ESLint

---

## Importance of Static Analysis Tools

* improves software quality
* reduces runtime failures
* improves security
* supports early defect detection
* improves maintainability

---

### (OR) (c) Calculate Cyclomatic Complexity. `[5]`

#### Answer

## Given Code

```text id="nyxj9x"
Read A

If A > 0 Then

   If A = 21 Then

      Print "Key"

   End If

End If
```

---

## Cyclomatic Complexity

Cyclomatic Complexity measures the number of independent execution paths in a program.

It helps determine minimum number of test cases required for complete testing.

---

## Formula

```text id="g8xjlwm"
V(G) = P + 1
```

Where:

* P = number of decision points

---

## Step 1 — Count Decision Points

### Decision Point 1

```text id="8qv2sx"
If A > 0
```

---

### Decision Point 2

```text id="jlwmlo"
If A = 21
```

---

## Total Decision Points

```text id="ifqjlwm"
P = 2
```

---

## Step 2 — Apply Formula

```text id="qjx5iy"
V(G) = 2 + 1
```

---

## Cyclomatic Complexity

```text id="f9j0fc"
V(G) = 3
```

---

## Conclusion

Minimum number of independent test paths required:

```text id="6i4hyk"
3 Test Cases
```

---

### (OR) (d) Differentiate between Black Box Testing and White Box Testing. `[5]`

#### Answer

| Black Box Testing                 | White Box Testing                    |
| --------------------------------- | ------------------------------------ |
| tests functionality               | tests internal code structure        |
| no programming knowledge required | programming knowledge required       |
| based on requirements             | based on program logic               |
| focuses on inputs and outputs     | focuses on code paths and conditions |
| mainly performed by testers       | mainly performed by developers       |
| validates external behavior       | validates internal implementation    |

---

## Examples

### Black Box Testing

* login testing
* payment testing
* registration testing

---

### White Box Testing

* statement coverage
* branch coverage
* path coverage

---

## Advantages of Black Box Testing

* user-oriented testing
* no coding knowledge required

---

## Advantages of White Box Testing

* improves code coverage
* identifies hidden logical defects

> Important: Black Box Testing validates functionality while White Box Testing validates internal code logic.

---

# Question 4

### (a) IEEE 829 Test Plan — Online Learning Platform `[10]`

#### Answer

## Application Overview

The online learning platform provides:

* interactive courses
* video lectures
* quizzes
* discussion forums
* personalized learning recommendations
* payment gateway integration

It supports:

* students
* instructors
* administrators

---

## i) Scope of Testing

### Features Included

* user registration and login
* course enrollment
* video lecture streaming
* quizzes and assessments
* discussion forums
* progress tracking
* payment gateway integration
* personalized recommendations

---

### Features Excluded

* third-party banking systems
* hardware testing
* external internet infrastructure

---

## ii) Objectives

* verify application functionality
* ensure secure transactions
* validate video streaming
* verify quiz functionality
* ensure system stability
* improve user experience

---

## iii) Risks

* payment transaction failure
* video buffering issues
* server crash during high traffic
* unauthorized access
* data loss
* API integration failure

---

## iv) Strategy

### Testing Types Used

* functional testing
* integration testing
* system testing
* performance testing
* security testing
* usability testing
* regression testing

---

## v) Approach

### Testing Process

1. analyze requirements
2. prepare test cases
3. set up testing environment
4. perform module-wise testing
5. execute integration testing
6. report and track defects
7. perform regression testing
8. prepare test summary report

---

## Important Testing Flow

```text id="yjlwmr"
Login → Course Enrollment → Video Access → Quiz → Payment → Progress Tracking
```

---

### (OR) (b) Write suitable test cases for the Online Learning Platform. `[10]`

#### Answer

# Test Cases for Online Learning Platform

| Test Case ID | Test Scenario               | Test Steps                           | Expected Result                |
| ------------ | --------------------------- | ------------------------------------ | ------------------------------ |
| TC01         | User Registration           | enter valid details                  | registration successful        |
| TC02         | Invalid Login               | enter incorrect password             | error message displayed        |
| TC03         | Course Enrollment           | enroll in course                     | course added successfully      |
| TC04         | Video Lecture Access        | play lecture video                   | video streams correctly        |
| TC05         | Quiz Submission             | submit answers                       | score generated successfully   |
| TC06         | Payment Gateway             | complete payment                     | payment successful             |
| TC07         | Failed Payment              | disconnect internet during payment   | payment failure handled        |
| TC08         | Discussion Forum            | post comment                         | comment displayed successfully |
| TC09         | Progress Tracking           | complete lessons                     | progress updated               |
| TC10         | Personalized Recommendation | complete course                      | recommendations displayed      |
| TC11         | High Traffic Load           | simulate multiple users              | system remains stable          |
| TC12         | Unauthorized Access         | access admin page without permission | access denied                  |
| TC13         | Logout Function             | click logout                         | session terminated             |
| TC14         | Notification Testing        | enroll in course                     | notification received          |
| TC15         | Security Testing            | attempt SQL injection                | attack prevented               |

---

## Testing Types Used

* functional testing
* performance testing
* security testing
* usability testing
* integration testing

> Important: Scenario-based test case questions are frequently asked for 10 marks.
# PART 3 — `stqa-pyq-jan-2026.md`

# Question 5

### (a) How can a testing tool be successfully introduced and integrated into an organization’s workflow? `[5]`

#### Answer

## Introducing a Testing Tool into an Organization

Introducing a testing tool requires proper planning, evaluation, training, and integration with existing development workflows.

---

## Steps for Successful Tool Introduction

### 1. Identify Organizational Needs

* analyze current testing challenges
* identify areas requiring automation

---

### 2. Evaluate Available Tools

Compare tools based on:

* features
* compatibility
* cost
* scalability
* ease of use
* support services

---

### 3. Conduct Pilot Project

* test selected tool on a small project
* verify tool effectiveness

---

### 4. Analyze Cost and Benefits

* calculate ROI
* estimate maintenance and training costs

---

### 5. Select Suitable Tool

* choose tool based on project and organizational requirements

---

### 6. Train Employees

* provide technical training to testers and developers

---

### 7. Integrate with Existing Workflow

* connect tool with:

  * testing process
  * CI/CD pipeline
  * defect tracking systems

---

### 8. Develop Test Scripts

* create reusable automation scripts

---

### 9. Execute and Monitor

* run automated tests
* monitor tool performance and reports

---

### 10. Continuous Improvement

* update automation framework regularly
* improve testing strategies continuously

---

## Benefits of Proper Tool Integration

* reduced manual effort
* faster testing
* improved productivity
* better defect detection
* increased testing coverage

> Important: Proper planning and employee training are critical for successful automation adoption.

---

### (b) Discuss Selenium Components — WebDriver and TestNG. `[5]`

#### Answer

# Selenium

Selenium is an open-source automation testing tool used for web application testing.

---

## 1. Selenium WebDriver

WebDriver is a Selenium component used for browser automation.

It directly interacts with browsers to perform testing activities.

---

## Features of WebDriver

### 1. Browser Automation

* automates browser operations such as:

  * click
  * input
  * navigation
  * form submission

---

### 2. Cross-Browser Support

Supports:

* Chrome
* Firefox
* Edge
* Safari

---

### 3. Multiple Language Support

Supports:

* Java
* Python
* C#
* JavaScript

---

### 4. Dynamic Element Handling

* handles dynamic web elements effectively

---

### 5. Faster Execution

* directly communicates with browser drivers

---

## Advantages of WebDriver

* open-source
* platform independent
* reusable automation scripts
* supports framework integration

---

# 2. TestNG

TestNG is a testing framework commonly used with Selenium.

It helps manage test execution, reporting, and automation workflow.

---

## Features of TestNG

### 1. Annotation Support

Examples:

```text id="x9jlwm"
@Test
@BeforeMethod
@AfterMethod
```

---

### 2. Parallel Testing

* executes multiple test cases simultaneously

---

### 3. Report Generation

* generates execution reports automatically

---

### 4. Test Prioritization

* controls execution order of test cases

---

### 5. Grouping of Tests

* groups related test cases together

---

### 6. Data-Driven Testing

* supports execution with multiple data inputs

---

## Advantages of TestNG

* better test organization
* improved reporting
* easier regression testing
* efficient execution management

---

## Relationship Between WebDriver and TestNG

```text id="2qexjlwm"
WebDriver → Browser Automation
TestNG → Test Execution & Reporting
```

---

### (OR) (c) Explain the benefits of JIRA in Software Test Management. `[5]`

#### Answer

# JIRA in Software Test Management

JIRA is a project management and defect tracking tool widely used in Agile software development and testing.

---

## Benefits of JIRA

### 1. Defect Tracking

* records and tracks software defects effectively

---

### 2. Better Project Management

* manages testing tasks and workflows efficiently

---

### 3. Real-Time Collaboration

* improves communication between developers, testers, and managers

---

### 4. Customizable Workflows

* supports organization-specific testing workflows

---

### 5. Integration Support

Integrates with:

* Selenium
* TestNG
* Jenkins
* GitHub

---

### 6. Report Generation

* generates dashboards and project reports

---

### 7. Requirement Traceability

* links requirements, test cases, and defects

---

### 8. Agile and Scrum Support

* supports sprint planning and backlog management

---

### 9. Improved Productivity

* improves testing efficiency and coordination

---

## Advantages of JIRA

| Advantage              | Description                            |
| ---------------------- | -------------------------------------- |
| centralized management | manages tasks and defects in one place |
| better monitoring      | tracks project progress effectively    |
| collaboration support  | improves team communication            |
| customizable           | supports flexible workflows            |

> Important: JIRA is one of the most commonly used tools in software testing projects.

---

### (OR) (d) Narrate the stages of Defect Life Cycle with a diagram. `[5]`

#### Answer

# Defect Life Cycle

Defect Life Cycle is the sequence of stages through which a defect passes from identification until closure.

It helps manage and track defects systematically.

---

## Stages of Defect Life Cycle

### 1. New

* tester identifies and reports defect

---

### 2. Assigned

* defect assigned to developer

---

### 3. Open

* developer analyzes defect

---

### 4. Fixed

* developer fixes defect

---

### 5. Pending Retest

* fixed defect sent back to tester

---

### 6. Retest

* tester verifies defect fix

---

### 7. Verified

* tester confirms defect resolved successfully

---

### 8. Closed

* defect closed after successful verification

---

## Additional Defect States

### Reopened

* defect appears again after fixing

---

### Rejected

* defect considered invalid or not reproducible

---

### Deferred

* fix postponed to future release

---

### Duplicate

* same defect already exists in system

---

## Defect Life Cycle Diagram

```text id="pjlwm3"
New → Assigned → Open → Fixed → Retest → Verified → Closed
                     ↑
                 Reopened
```

---

## Importance of Defect Life Cycle

* tracks defect status properly
* improves communication between teams
* ensures systematic defect handling
* improves software quality
* supports project management

---

# END OF `stqa-pyq-jan-2026.md`
