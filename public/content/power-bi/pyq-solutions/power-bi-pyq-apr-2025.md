# Power BI PYQ — APR 2025

## Question 1

### (a) What is Business Intelligence (BI). Explain its key components and benefits. [5]

#### Answer

## Business Intelligence (BI)

Business Intelligence (BI) is a technology-driven process used to collect, analyze, transform, and visualize business data to support decision-making.

BI helps organizations convert raw data into meaningful insights using reports, dashboards, and analytics tools.

---

## Key Components of BI

| Component      | Description                                  |
| -------------- | -------------------------------------------- |
| Data Sources   | Excel, SQL Server, CSV, Web APIs etc.        |
| Data Warehouse | Central storage for integrated business data |
| ETL Process    | Extract, Transform and Load data             |
| Data Analytics | Identifying trends and patterns              |
| Reporting      | Generating reports and dashboards            |
| Visualization  | Charts, KPIs, graphs and dashboards          |

---

## BI Workflow

```text
Data Sources → ETL → Data Warehouse → Analytics → Reports/Dashboards
```

---

## Benefits of BI

* Improves decision making
* Provides real-time analytics
* Increases operational efficiency
* Identifies business trends
* Enhances data visualization
* Helps in performance monitoring

---

## Applications of BI

* Sales analysis
* Financial reporting
* Healthcare analytics
* Marketing analysis
* Customer behavior analysis

---

### (b) What is data modeling? Why is it important in Power BI. [5]

#### Answer

## Data Modeling

Data Modeling is the process of creating relationships between tables to organize and structure data for analysis.

In Power BI, data modeling helps combine multiple datasets efficiently.

---

## Important Concepts

### Relationships

Relationships connect tables using common columns.

Example:

```text
Customer Table ← CustomerID → Sales Table
```

---

### Cardinality

Types:

* One-to-One
* One-to-Many
* Many-to-One
* Many-to-Many

---

### Star Schema

```text
        Product
           |
Customer — Sales — Date
           |
        Region
```

---

## Importance of Data Modeling in Power BI

* Improves report performance
* Enables accurate calculations
* Supports DAX measures
* Simplifies dashboard creation
* Prevents duplicate data
* Improves data organization

---

## Advantages

* Faster reporting
* Better scalability
* Easier maintenance
* Improved analytics

---

### (c) Apply direct query mode in power BI & Compare it with import mode using real world data set. [5]

#### Answer

## Direct Query Mode

Direct Query mode connects Power BI directly to the database without importing data into Power BI memory.

---

## Steps to Apply Direct Query

### Step 1

Open Power BI Desktop.

### Step 2

Navigate:

```text
Home → Get Data → SQL Server
```

### Step 3

Enter:

* Server Name
* Database Name

### Step 4

Select:

```text
DirectQuery
```

### Step 5

Load tables.

---

## Real World Dataset Example

Retail Sales Dataset:

| ProductID | Product | Sales |
| --------- | ------- | ----- |
| 101       | Laptop  | 50000 |
| 102       | Mobile  | 30000 |

---

## Comparison: Direct Query vs Import Mode

| Feature        | Direct Query   | Import Mode       |
| -------------- | -------------- | ----------------- |
| Data Storage   | Database       | Power BI Memory   |
| Performance    | Slower         | Faster            |
| Real-Time Data | Yes            | No                |
| Data Refresh   | Live Query     | Scheduled Refresh |
| Suitable For   | Large datasets | Small datasets    |

---

## Advantages of Direct Query

* Real-time analytics
* Handles large datasets
* No local storage required

---

### (d) Apply conditional column in power BI to categorise data based on product data set. [5]

#### Answer

## Conditional Column

Conditional Column is used to categorize data based on conditions similar to IF-ELSE logic.

---

## Product Dataset

| Product | Sales |
| ------- | ----- |
| Laptop  | 90000 |
| Mobile  | 30000 |
| Mouse   | 1000  |

---

## Steps to Apply Conditional Column

### Step 1

Load dataset into Power BI.

### Step 2

Open:

```text
Home → Transform Data
```

### Step 3

Go to:

```text
Add Column → Conditional Column
```

### Step 4

Apply Conditions

| Condition     | Output       |
| ------------- | ------------ |
| Sales > 50000 | High Sales   |
| Sales > 10000 | Medium Sales |
| Else          | Low Sales    |

---

## Output

| Product | Sales | Category     |
| ------- | ----- | ------------ |
| Laptop  | 90000 | High Sales   |
| Mobile  | 30000 | Medium Sales |
| Mouse   | 1000  | Low Sales    |

---

## Advantages

* Easy categorization
* Better analysis
* Simplifies reporting

---

# Question 2

### (a) Analyze the AVERAGE DAX function to calculate the average sales amount per customer. [5]

#### Answer

## AVERAGE DAX Function

The `AVERAGE()` function calculates the arithmetic mean of numeric values.

---

## Syntax

```DAX
Average Sales = AVERAGE(Sales[SalesAmount])
```

---

## Example Dataset

| Customer | SalesAmount |
| -------- | ----------- |
| Amit     | 5000        |
| Rahul    | 7000        |
| Sneha    | 8000        |

---

## Calculation

```text
Average = (5000 + 7000 + 8000) / 3
        = 6666.67
```

---

## Steps to Create Measure

1. Open Power BI Desktop
2. Go to Modeling
3. Click New Measure
4. Enter DAX formula
5. Use measure in report visual

---

## Applications

* Customer spending analysis
* KPI reporting
* Sales trend analysis

---

### (b) Explore the use of slicers and filters in power BI. [5]

#### Answer

## Slicers and Filters

Slicers and Filters are used to filter report data dynamically.

---

## Types of Filters

| Filter Type          | Purpose                 |
| -------------------- | ----------------------- |
| Visual Filter        | Filters specific visual |
| Page Filter          | Filters entire page     |
| Report Filter        | Filters complete report |
| Drill-through Filter | Opens detailed analysis |

---

## Slicers

Slicers are visual filters that allow interactive data selection.

Example:

```text
Region Slicer → West, East, North, South
```

---

## Advantages

* Improves report interactivity
* Easy navigation
* Better data analysis
* Dynamic filtering

---

## Applications

* Region-wise sales analysis
* Product category filtering
* Customer segmentation

---

### (c) Explore how z-order affects the layering of visuals in power BI and provide an example. [5]

#### Answer

## Z-Order in Power BI

Z-order controls the front and back arrangement of visuals.

It determines which visual appears on top.

---

## Z-Order Operations

| Operation      | Purpose                 |
| -------------- | ----------------------- |
| Bring Forward  | Move visual up          |
| Send Backward  | Move visual down        |
| Bring to Front | Move to top             |
| Send to Back   | Move behind all visuals |

---

## Example

```text
Background Image
      ↓
Sales Chart
      ↓
KPI Card
```

Using "Bring to Front", KPI card appears above the chart.

---

## Advantages

* Better dashboard design
* Organized visual layout
* Improved readability

---

### (d) What is DAX? Explain any four DAX operators. [5]

#### Answer

## DAX

DAX (Data Analysis Expressions) is a formula language used in Power BI for calculations and data analysis.

---

## Types of DAX Operators

### 1. Arithmetic Operators

| Operator | Purpose        |
| -------- | -------------- |
| +        | Addition       |
| -        | Subtraction    |
| *        | Multiplication |
| /        | Division       |

Example:

```DAX
Profit = Sales[Revenue] - Sales[Cost]
```

---

### 2. Comparison Operators

| Operator | Purpose      |
| -------- | ------------ |
| =        | Equal To     |
| >        | Greater Than |
| <        | Less Than    |

Example:

```DAX
Sales[Amount] > 5000
```

---

### 3. Logical Operators

| Operator | Purpose |
| -------- | ------- |
| &&       | AND     |
| ||       | OR      |

Example:

```DAX
Sales[Amount] > 5000 && Sales[Region] = "West"
```

---

### 4. Text Operator

| Operator | Purpose       |
| -------- | ------------- |
| &        | Concatenation |

Example:

```DAX
FullName = Customer[FirstName] & " " & Customer[LastName]
```

---

# Question 3

### (a) Describe any four types of report in power BI with example. [5]

#### Answer

## Types of Reports in Power BI

### 1. Standard Reports

Fixed format reports.

Example:
Monthly Sales Report.

---

### 2. Interactive Reports

Users can interact using slicers and filters.

Example:
Region-wise sales dashboard.

---

### 3. Paginated Reports

Designed for printing/exporting.

Example:
Invoice reports.

---

### 4. Dashboard Reports

Single-page summary reports.

Example:
Executive KPI dashboard.

---

## Advantages

* Better analysis
* Improved reporting
* Real-time monitoring

---

### (b) What are KPI visuals and how are they used in decision making. [5]

#### Answer

## KPI Visuals

KPI (Key Performance Indicator) visuals measure business performance against targets.

---

## Components

| Component  | Purpose           |
| ---------- | ----------------- |
| Indicator  | Current value     |
| Trend Axis | Performance trend |
| Goal       | Target value      |

---

## Example

| Metric        | Value      |
| ------------- | ---------- |
| Current Sales | ₹8,0,000   |
| Target Sales  | ₹10,0,000  |

---

## Uses in Decision Making

* Performance tracking
* Trend analysis
* Target monitoring
* Faster business decisions

---

### (c) Analyse how the matrix and table present complex data structure in power BI. [5]

#### Answer

## Table Visual

Displays detailed data in rows and columns.

Example:

| Product | Sales |
| ------- | ----- |
| Laptop  | 50000 |

---

## Matrix Visual

Displays summarized and hierarchical data.

Example:

| Region | Laptop | Mobile |
| ------ | ------ | ------ |
| West   | 50000  | 30000  |

---

## Advantages of Matrix

* Hierarchical analysis
* Drill-down support
* Aggregation functions

---

## Comparison

| Feature     | Table   | Matrix   |
| ----------- | ------- | -------- |
| Hierarchy   | No      | Yes      |
| Aggregation | Limited | Advanced |

---

### (d) Explore the concept of bookmark & selection pane in power BI. [5]

#### Answer

## Bookmarks

Bookmarks save the current state of a report page.

They store:

* Filters
* Visual visibility
* Navigation settings

---

## Selection Pane

Selection Pane controls visibility of visuals.

Navigate:

```text
View → Selection Pane
```

---

## Uses

* Interactive dashboards
* Report storytelling
* Dynamic navigation

---

## Example

```text
Button Click → Show Sales Dashboard
Button Click → Show Profit Dashboard
```

---

# Question 4

### (a) Apply M.Query Syntax to write a function that removes duplicate rows from any data set. [5]

#### Answer

## M Query for Removing Duplicates

```M
let
    Source = SalesData,
    RemovedDuplicates = Table.Distinct(Source)
in
    RemovedDuplicates
```

---

## Explanation

| Function         | Purpose                |
| ---------------- | ---------------------- |
| Table.Distinct() | Removes duplicate rows |

---

## Advantages

* Improves data quality
* Prevents duplicate calculations

---

### (b) What is pivoting and unpivoting in power BI. [5]

#### Answer

## Pivoting

Converts row values into columns.

---

## Example

### Before Pivot

| Month | Sales |
| ----- | ----- |
| Jan   | 1000  |

### After Pivot

| Jan  |
| ---- |
| 1000 |

---

## Unpivoting

Converts columns into rows.

---

## Applications

* Data normalization
* Better analysis
* Dashboard preparation

---

### (c) Implement a custom M function that converts all text values in a column to uppercase and lowercase. [5]

#### Answer

## Uppercase Transformation

```M
let
    Source = EmployeeData,
    UppercaseText =
    Table.TransformColumns(
        Source,
        {{"EmployeeName", Text.Upper, type text}}
    )
in
    UppercaseText
```

---

## Lowercase Transformation

```M
let
    Source = EmployeeData,
    LowercaseText =
    Table.TransformColumns(
        Source,
        {{"EmployeeName", Text.Lower, type text}}
    )
in
    LowercaseText
```

---

## Applications

* Standardizing text
* Data cleaning
* Email formatting

---

### (d) How to handle errors in M code using try.... otherwise construct. Provide an example. [5]

#### Answer

## try...otherwise

Used for error handling in M Query.

---

## Syntax

```M
try expression otherwise alternate_value
```

---

## Example

```M
let
    Source = SalesData,
    AddedColumn =
    Table.AddColumn(
        Source,
        "Result",
        each try [Sales]/[Quantity] otherwise 0
    )
in
    AddedColumn
```

---

## Advantages

* Prevents query failure
* Handles invalid data safely
* Improves reliability

---

# Question 5

### (a) Hospital Analytics Case Study using Power BI. [10]

#### Answer

# Hospital Analytics Solution

## Problem Statement

Hospital faces challenges in:

* Tracking patient recovery
* Appointment management
* Doctor scheduling
* Bed utilization

---

# (i) Steps to Connect Hospital Database

## Steps

1. Open Power BI Desktop
2. Navigate:

```text
Home → Get Data → SQL Server
```

3. Enter:

   * Server Name
   * Database Name

4. Select tables:

   * Patients
   * Appointments
   * Doctors

5. Click Load

---

## Sample SQL Query

```SQL
SELECT * FROM Patients;
SELECT * FROM Appointments;
SELECT * FROM Doctors;
```

---

# (ii) Steps to Clean Data

## Cleaning Activities

* Remove duplicates
* Handle null values
* Standardize text
* Convert data types

---

## M Query

```M
let
    Source = Patients,
    RemovedDuplicates = Table.Distinct(Source)
in
    RemovedDuplicates
```

---

# (iii) Two DAX Measures

## Recovery Rate

```DAX
Recovery Rate =
DIVIDE(
    COUNT(Patients[Recovered]),
    COUNT(Patients[PatientID])
) * 100
```

---

## Appointment Delay

```DAX
Appointment Delay =
AVERAGE(Appointments[DelayMinutes])
```

---

# (iv) Two M Queries

## Sort Patients by Severity

```M
let
    Source = Patients,
    SortedRows =
    Table.Sort(
        Source,
        {{"Severity", Order.Descending}}
    )
in
    SortedRows
```

---

## Merge Patient and Appointment Data

```M
let
    Source =
    Table.NestedJoin(
        Patients,
        {"PatientID"},
        Appointments,
        {"PatientID"},
        "AppointmentData"
    )
in
    Source
```

---

# (v) Sample Dashboard

```text
------------------------------------------------
| Total Patients | Recovery Rate | Bed Usage |
------------------------------------------------
| Appointment Delay Trend Chart              |
------------------------------------------------
| Doctor Availability Matrix                 |
------------------------------------------------
| Patient Severity Table                     |
------------------------------------------------
| Department-wise Recovery Analysis          |
------------------------------------------------
```

---

## Benefits

* Better patient care
* Efficient scheduling
* Reduced appointment delays
* Improved resource utilization

---

### (b) How did Tata Consultancy Services (TCS) and ICICI Bank benefited from BI implementation. [10]

#### Answer

# Tata Consultancy Services (TCS)

## Benefits of BI

* Project performance monitoring
* Employee productivity tracking
* Real-time dashboards
* Faster reporting
* Better resource allocation

---

## Example Applications

* Revenue analysis
* Project tracking dashboards
* Client analytics

---

# ICICI Bank

## Benefits of BI

* Fraud detection
* Customer behavior analysis
* Loan risk analysis
* Financial reporting
* Faster decision making

---

## Example Applications

* Transaction monitoring
* Customer segmentation
* Banking KPI dashboards

---

# Comparative Table

| Organization | BI Benefits                            |
| ------------ | -------------------------------------- |
| TCS          | Productivity and project monitoring    |
| ICICI Bank   | Fraud detection and customer analytics |

---

# Conclusion

Business Intelligence helped TCS and ICICI Bank improve operational efficiency, analytics, customer service and strategic decision making.
