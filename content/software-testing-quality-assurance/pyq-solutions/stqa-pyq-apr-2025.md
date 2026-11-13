# PART 1 — `stqa-pyq-apr-2025.md`

# STQA PYQ — APR 2025

## Question 1

### (a) Describe Software Quality Assurance and outline its key activities. `[5]`

#### Answer

## Software Quality Assurance (SQA)

Software Quality Assurance (SQA) is a planned and systematic process used to ensure that software products and development processes meet quality standards and customer requirements.

---

## Objectives of SQA

* improve software quality
* prevent defects
* ensure process compliance
* improve customer satisfaction
* enhance software reliability

---

## Key Activities of SQA

### 1. Requirement Review

* verifies requirement correctness and completeness
* identifies ambiguity in requirements

---

### 2. Design Review

* reviews software architecture and design documents
* ensures proper design standards

---

### 3. Code Review

* identifies coding errors and standard violations
* improves code quality

---

### 4. Testing

Includes:

* unit testing
* integration testing
* system testing
* acceptance testing

---

### 5. Configuration Management

* controls software versions and changes
* maintains build consistency

---

### 6. Defect Tracking

* records and manages software defects
* monitors defect status

---

### 7. Audits and Inspections

* verifies compliance with quality standards
* checks process implementation

---

### 8. Documentation Control

* maintains reports and project documents
* ensures proper documentation standards

---

### 9. Risk Management

* identifies project risks
* plans preventive actions

---

### 10. Continuous Improvement

* improves software processes using feedback and metrics

> Important: SQA focuses on defect prevention rather than only defect detection.

---

### (b) Explain the metrics used to assess and measure reliability. `[5]`

#### Answer

## Reliability Metrics

Reliability metrics are measurements used to evaluate software dependability and failure behavior.

---

## 1. MTTF (Mean Time To Failure)

Measures average operational time before software failure occurs.

### Formula

```text
MTTF = Total Operational Time / Number of Failures
```

### Interpretation

* higher MTTF means better reliability

---

## 2. MTTR (Mean Time To Repair)

Measures average time required to repair software after failure.

### Formula

```text
MTTR = Total Repair Time / Number of Repairs
```

### Interpretation

* lower MTTR means faster recovery

---

## 3. MTBF (Mean Time Between Failures)

Measures time between two failures.

### Formula

```text
MTBF = MTTF + MTTR
```

### Interpretation

* higher MTBF means more stable software

---

## 4. ROCOF (Rate of Occurrence of Failures)

Measures frequency of failures during operation.

### Example

* 2 failures in 100 operational hours

### Interpretation

* lower ROCOF means higher reliability

---

## 5. POFOD (Probability of Failure on Demand)

Measures probability that software fails when a service request occurs.

### Example

* emergency shutdown system failure during activation

### Interpretation

* lower POFOD means safer software

---

## 6. Availability

Measures percentage of time software remains operational.

### Formula

```text
Availability = MTTF / (MTTF + MTTR)
```

### Interpretation

* higher availability means less downtime

---

### (OR) (c) Explain the term quality in software engineering and describe product revision factors. `[5]`

#### Answer

## Quality in Software Engineering

Quality means the degree to which software satisfies customer requirements and performs correctly without defects.

---

## Characteristics of Software Quality

* correctness
* reliability
* efficiency
* usability
* maintainability
* security

---

## Product Revision Factors

Product revision factors are quality factors related to software modification and maintenance after delivery.

---

## Types of Product Revision Factors

### 1. Maintainability

* ease of identifying and fixing defects

### Example

* correcting calculation errors in billing software

---

### 2. Flexibility

* ease of modifying software for new requirements

### Example

* adding new payment methods in e-commerce applications

---

### 3. Testability

* ease of testing software functionality

### Example

* modular applications are easier to test

---

### 4. Modularity

* software divided into independent modules

### Example

* separate login and payment modules

---

### 5. Reusability

* ability to reuse software components

### Example

* reusable authentication module

> Important: Product revision factors improve software maintenance and future enhancement.

---

### (OR) (d) Describe the significance of ISO 9000 standards in SQA. `[5]`

#### Answer

## ISO 9000 Standards

ISO 9000 is a family of international quality management standards used to maintain software process quality and consistency.

---

## Significance of ISO 9000 in SQA

### 1. Process Standardization

* establishes standard development procedures

---

### 2. Improved Software Quality

* improves reliability and consistency

---

### 3. Better Documentation

* encourages proper maintenance of records and reports

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

### 8. Supports Auditing

* simplifies quality audits and inspections

---

## Benefits of ISO 9000

* reduced errors
* improved efficiency
* better project management
* competitive advantage

---

# Question 2

### (a) Outline the steps in Software Testing Life Cycle (STLC). `[5]`

#### Answer

## Software Testing Life Cycle (STLC)

STLC is a sequence of testing activities performed to ensure software quality.

---

## Phases of STLC

### 1. Requirement Analysis

* analyze software requirements
* identify testable requirements

---

### 2. Test Planning

* define testing strategy and objectives
* allocate resources and schedule

---

### 3. Test Case Development

* prepare test cases and test data

---

### 4. Test Environment Setup

* configure hardware and software environment

---

### 5. Test Execution

* execute test cases
* compare actual and expected results

---

### 6. Defect Reporting and Tracking

* record identified defects
* monitor defect status

---

### 7. Retesting and Regression Testing

* verify fixed defects
* ensure existing functionality works properly

---

### 8. Test Closure

* prepare test summary report
* analyze testing results

---

## STLC Flow Diagram

```text
Requirement Analysis
        ↓
Test Planning
        ↓
Test Case Development
        ↓
Environment Setup
        ↓
Test Execution
        ↓
Defect Tracking
        ↓
Test Closure
```

---

### (b) Differentiate between fault, defect, and failure. Explain causes of software failure. `[5]`

#### Answer

## Difference Between Fault, Defect, and Failure

| Term    | Meaning                                   | Example                 |
| ------- | ----------------------------------------- | ----------------------- |
| Fault   | incorrect logic or coding mistake         | wrong condition in code |
| Defect  | flaw identified during testing            | incorrect output        |
| Failure | inability of software to perform function | application crash       |

---

## Example Flow

```text
Human Error → Fault in Code → Defect in Software → Failure During Execution
```

---

## Common Causes of Software Failure

### 1. Incorrect Requirements

* incomplete or misunderstood requirements

---

### 2. Design Errors

* poor software architecture or logic

---

### 3. Coding Mistakes

* syntax errors or logical mistakes

---

### 4. Lack of Testing

* insufficient testing coverage

---

### 5. Integration Problems

* issues while combining modules

---

### 6. Hardware or Environment Issues

* compatibility and infrastructure problems

---

### 7. Communication Gaps

* misunderstanding between teams

---

### 8. Security Vulnerabilities

* weak security implementation

---

### (OR) (c) Explain Performance Testing and any three performance test categories. `[5]`

#### Answer

## Performance Testing

Performance Testing evaluates software speed, stability, responsiveness, and scalability under workload.

---

## Objectives of Performance Testing

* measure response time
* identify bottlenecks
* ensure system stability
* verify scalability

---

## Types of Performance Testing

### 1. Load Testing

Checks system behavior under expected user load.

#### Example

* testing website with 1000 simultaneous users

---

### 2. Stress Testing

Checks software behavior beyond normal limits.

#### Example

* testing server under extremely high traffic

---

### 3. Spike Testing

Checks software behavior during sudden load increase or decrease.

#### Example

* sudden traffic increase during online ticket booking

---

### 4. Endurance Testing

Checks software performance over long duration.

#### Example

* testing application continuously for 24 hours

---

### 5. Volume Testing

Checks performance with large amount of data.

#### Example

* testing database with millions of records

---

### (OR) (d) Discuss Integration Testing Approaches. `[5]`

#### Answer

## Integration Testing

Integration Testing verifies interaction between combined software modules.

---

## Integration Testing Approaches

### 1. Big Bang Integration Testing

* all modules integrated together at once
* entire system tested as a whole

#### Advantages

* simple for small systems

#### Disadvantages

* difficult defect identification

---

### 2. Top-Down Integration Testing

* testing starts from top-level modules
* uses stubs for incomplete lower modules

#### Advantages

* early testing of main control logic

#### Disadvantages

* lower modules tested late

---

### 3. Bottom-Up Integration Testing

* testing starts from lower-level modules
* uses drivers for incomplete upper modules

#### Advantages

* utility modules tested early

#### Disadvantages

* main functionality tested late

---

### 4. Sandwich (Hybrid) Integration Testing

* combination of top-down and bottom-up approaches

#### Advantages

* better coverage

#### Disadvantages

* more complex management

---

### 5. Incremental Integration Testing

* modules integrated and tested step-by-step

#### Advantages

* easier debugging
* defect isolation is simple

#### Disadvantages

* time-consuming
# PART 2 — `stqa-pyq-apr-2025.md`

# Question 3

### (a) Equivalence Partitioning Problem `[5]`

#### Answer

A candidate must score at least 24 marks to pass.

Maximum possible marks = 40.

---

## i) Equivalence Partitions

Equivalence Partitioning divides input data into valid and invalid groups.

---

## Valid Partition

| Partition   | Range    |
| ----------- | -------- |
| Valid Marks | 24 to 40 |

---

## Invalid Partitions

| Partition               | Range           |
| ----------------------- | --------------- |
| Invalid Marks           | Less than 24    |
| Invalid Negative Marks  | Less than 0     |
| Invalid Exceeding Marks | Greater than 40 |

---

## ii) Minimum Number of Test Cases Required

Minimum test cases required:

```text
4 Test Cases
```

Reason:

* one test case from each partition

---

## iii) Test Cases with Expected Outcomes

| Test Case | Representative Value | Partition Type          | Expected Result |
| --------- | -------------------- | ----------------------- | --------------- |
| TC1       | 30                   | Valid                   | Pass            |
| TC2       | 20                   | Invalid                 | Fail            |
| TC3       | -5                   | Invalid Negative        | Invalid Input   |
| TC4       | 45                   | Invalid Exceeding Limit | Invalid Input   |

---

## Advantages of Equivalence Partitioning

* reduces number of test cases
* avoids redundant testing
* improves testing efficiency

> Important: Frequently asked practical problem in university exams.

---

### (b) Differentiate between Static Testing and Dynamic Testing. `[5]`

#### Answer

| Static Testing                           | Dynamic Testing                  |
| ---------------------------------------- | -------------------------------- |
| performed without executing code         | performed by executing code      |
| identifies defects in documents and code | identifies runtime defects       |
| performed early in SDLC                  | performed after development      |
| includes reviews and inspections         | includes unit and system testing |
| no test data required                    | requires test data               |
| focuses on defect prevention             | focuses on defect detection      |
| less expensive                           | comparatively expensive          |
| improves process quality                 | validates software behavior      |

---

## Examples

### Static Testing

* walkthrough
* inspection
* code review

---

### Dynamic Testing

* unit testing
* integration testing
* system testing

---

### (OR) (c) Flowchart Coverage Problem `[5]`

#### Answer

## Flowchart Analysis

The flowchart contains two decision points:

1. `A >= 2`
2. `B < 1`

---

## 1. Statement Coverage

Statement Coverage ensures every statement executes at least once.

---

## Required Paths

### Test Case 1

```text
A >= 2 → TRUE
```

Executes:

* Print A+B

---

### Test Case 2

```text
A >= 2 → FALSE
B < 1 → FALSE
```

Executes:

* Print A-B
* Print B-A
* Print End

---

## Minimum Test Cases for 100% Statement Coverage

```text
2 Test Cases
```

---

## 2. Decision Coverage

Decision Coverage ensures TRUE and FALSE outcomes of all decisions execute at least once.

---

## Decisions to Cover

### Decision 1

```text
A >= 2
```

* TRUE branch
* FALSE branch

---

### Decision 2

```text
B < 1
```

* TRUE branch
* FALSE branch

---

## Required Test Cases

### Test Case 1

```text
A >= 2 → TRUE
B < 1 → TRUE
```

---

### Test Case 2

```text
A >= 2 → FALSE
B < 1 → FALSE
```

---

## Minimum Test Cases for 100% Decision Coverage

```text
2 Test Cases
```

---

## Justification

These two test cases cover:

* all statements
* TRUE and FALSE outcomes of both decisions

---

### (OR) (d) Discuss Inspection Process in detail. `[5]`

#### Answer

## Inspection Process

Inspection is a formal static testing technique used to identify defects in documents, design, and code without executing software.

---

## Objectives of Inspection

* identify defects early
* improve software quality
* reduce development cost
* improve documentation quality

---

## Steps in Inspection Process

### 1. Planning

* select document/code for inspection
* assign inspection team

---

### 2. Overview Meeting

* author explains document or code
* team understands functionality

---

### 3. Preparation

* inspectors review material individually
* identify possible defects

---

### 4. Inspection Meeting

* defects discussed by inspection team
* recorder documents issues

---

### 5. Rework

* author corrects identified defects

---

### 6. Follow-Up

* moderator verifies corrections

---

## Roles in Inspection Process

| Role      | Responsibility                   |
| --------- | -------------------------------- |
| Moderator | manages inspection process       |
| Author    | creator of document/code         |
| Inspector | identifies defects               |
| Recorder  | records defects and observations |

---

## Advantages of Inspection

* early defect detection
* reduced testing cost
* improved software quality
* improved team communication

---

## Limitations

* time-consuming
* requires trained reviewers
* cannot detect runtime errors

---

# Question 4

### (a) IEEE 829 Test Plan — Cloud Kitchen Aggregator App `[10]`

#### Answer

## Application Overview

Cloud kitchen aggregator application allows customers to order food online and enables kitchens to manage menus, orders, promotions, payment integration, and delivery tracking.

---

## i) Scope of Testing

### Features Included

* user registration and login
* kitchen search functionality
* menu management
* add to cart and order placement
* payment gateway integration
* real-time order tracking
* notification system
* promotions and offers
* delivery partner integration

---

### Features Excluded

* third-party banking systems
* external delivery infrastructure
* hardware testing

---

## ii) Objectives

* verify application functionality
* ensure secure payment transactions
* validate order management
* check real-time order tracking
* verify third-party API integration
* ensure application stability under high traffic
* improve customer satisfaction

---

## iii) Risks

* payment transaction failure
* API integration failure
* server crash during peak load
* delayed order updates
* security vulnerabilities
* slow system response time
* data loss during transactions

---

## iv) Strategy

### Testing Types Used

* functional testing
* integration testing
* system testing
* performance testing
* load testing
* security testing
* regression testing
* usability testing

---

## v) Approach

### Testing Approach

1. prepare test cases based on requirements
2. set up testing environment
3. perform module-wise testing
4. execute integration testing
5. report and track defects
6. retest fixed defects
7. perform regression testing
8. generate test summary reports

---

## Important Testing Areas

```text
Login → Menu → Cart → Payment → Order Tracking → Delivery
```

---

### (OR) (b) Write suitable test cases for the application. `[10]`

#### Answer

# Test Cases for Cloud Kitchen Aggregator App

| Test Case ID | Test Scenario        | Test Steps                        | Expected Result                   |
| ------------ | -------------------- | --------------------------------- | --------------------------------- |
| TC01         | User Login           | enter valid credentials           | login successful                  |
| TC02         | Invalid Login        | enter incorrect password          | error message displayed           |
| TC03         | Search Kitchen       | search food item                  | matching kitchens displayed       |
| TC04         | View Menu            | open kitchen menu                 | menu items displayed correctly    |
| TC05         | Add to Cart          | add food item to cart             | item added successfully           |
| TC06         | Place Order          | confirm order                     | order placed successfully         |
| TC07         | Online Payment       | complete payment                  | payment successful                |
| TC08         | Failed Payment       | disconnect network during payment | payment failure message displayed |
| TC09         | Order Tracking       | track placed order                | real-time status updated          |
| TC10         | Apply Coupon         | enter valid promo code            | discount applied                  |
| TC11         | Notification Testing | place order                       | notification received             |
| TC12         | Delivery Integration | assign delivery partner           | delivery details synced           |
| TC13         | High Traffic Load    | simulate multiple users           | system remains stable             |
| TC14         | Logout Function      | click logout                      | session terminated                |
| TC15         | Security Testing     | attempt unauthorized access       | access denied                     |

---

## Types of Testing Used

* functional testing
* integration testing
* performance testing
* security testing
* usability testing
* regression testing

> Important: Scenario-based test case questions are frequently asked for 10 marks.
# PART 3 — `stqa-pyq-apr-2025.md`

# Question 5

### (a) Define CAST and explain its benefits in software testing. `[5]`

#### Answer

## CAST (Computer Aided Software Testing)

CAST refers to software tools and automated techniques used to support and improve software testing activities.

These tools help testers perform testing efficiently and accurately.

---

## Objectives of CAST

* automate testing activities
* reduce manual effort
* improve testing speed
* increase test coverage
* improve software quality

---

## Benefits of CAST

### 1. Reduces Manual Effort

* repetitive testing tasks become automated

---

### 2. Saves Time

* test execution becomes faster compared to manual testing

---

### 3. Improves Accuracy

* reduces human errors during testing

---

### 4. Supports Regression Testing

* repeated execution of test cases becomes easier

---

### 5. Increases Test Coverage

* large number of test cases can be executed

---

### 6. Reusable Test Scripts

* automated scripts can be reused multiple times

---

### 7. Automatic Report Generation

* tools generate logs and testing reports automatically

---

### 8. Improves Software Quality

* early defect detection improves final product quality

---

## Examples of CAST Tools

* Selenium
* Postman
* JMeter
* TestNG
* QTP/UFT

---

## Advantages of CAST

| Advantage           | Description                     |
| ------------------- | ------------------------------- |
| faster execution    | reduces testing time            |
| better consistency  | same test repeated accurately   |
| improved efficiency | supports automation             |
| reduced cost        | lowers long-term testing effort |

> Important: CAST is commonly asked together with automation testing tools.

---

### (b) Describe the steps in introducing a testing tool into an organization. `[5]`

#### Answer

## Introducing a Testing Tool into an Organization

Introducing a testing tool requires planning, evaluation, training, and integration with existing workflows.

---

## Steps for Introducing a Testing Tool

### 1. Identify Testing Needs

* analyze current testing challenges
* identify automation requirements

---

### 2. Evaluate Available Tools

* compare tools based on:

  * features
  * cost
  * compatibility
  * support
  * ease of use

---

### 3. Conduct Pilot Project

* test selected tool on small project
* verify tool effectiveness

---

### 4. Analyze Cost and Benefits

* calculate ROI
* estimate maintenance and training cost

---

### 5. Select Appropriate Tool

* choose tool based on organizational requirements

---

### 6. Train Employees

* provide technical training to testers and developers

---

### 7. Integrate Tool with Workflow

* connect tool with testing process and CI/CD pipeline

---

### 8. Develop Test Scripts

* create reusable automation scripts

---

### 9. Execute and Monitor

* run automated tests
* monitor tool performance

---

### 10. Continuous Improvement

* update tools and improve automation process regularly

---

## Benefits of Proper Tool Integration

* improved productivity
* reduced testing time
* increased test coverage
* better defect detection

---

### (OR) (c) Explain the purpose of Postman in API testing. `[5]`

#### Answer

## Postman

Postman is a popular API testing tool used to develop, test, and manage APIs.

It helps testers validate communication between client and server applications.

---

## Purposes of Postman in API Testing

### 1. Sending API Requests

Supports:

* GET
* POST
* PUT
* DELETE
* PATCH requests

---

### 2. Testing API Responses

* verifies response status codes
* validates response data
* checks response time

---

### 3. API Automation

* automates API testing activities
* supports test scripts

---

### 4. Authentication Testing

Supports:

* tokens
* API keys
* OAuth authentication

---

### 5. Collection Management

* organizes APIs into collections

---

### 6. Environment Variables

* supports multiple environments:

  * development
  * testing
  * production

---

### 7. API Debugging

* identifies API errors and failures

---

### 8. Collaboration Support

* allows team sharing and collaboration

---

## Advantages of Postman

| Advantage          | Description                    |
| ------------------ | ------------------------------ |
| user-friendly      | easy interface                 |
| automation support | supports automated API testing |
| faster validation  | quick API verification         |
| CI/CD integration  | integrates with DevOps tools   |

---

## Postman Workflow

```text
Request → API Server → Response Validation
```

---

### (OR) (d) Discuss Defect Life Cycle. `[5]`

#### Answer

## Defect Life Cycle

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

```text
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

# END OF `stqa-pyq-apr-2025.md`
