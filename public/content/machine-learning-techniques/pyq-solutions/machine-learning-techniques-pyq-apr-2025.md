# machine-learning-techniques-pyq-apr-2025.md

# Machine Learning Techniques PYQ — APR 2025

---

# Question 1

## (a) Differentiate between supervised and unsupervised learning. [5]

### Answer

| Basis             | Supervised Learning                | Unsupervised Learning         |
| ----------------- | ---------------------------------- | ----------------------------- |
| Definition        | Learning using labeled data        | Learning using unlabeled data |
| Goal              | Prediction or classification       | Discover hidden patterns      |
| Output            | Predicted output/class             | Clusters or associations      |
| Data Type         | Labeled data                       | Unlabeled data                |
| Algorithms        | Linear Regression, Decision Tree   | K-Means, DBSCAN               |
| Applications      | Spam Detection, Disease Prediction | Customer Segmentation         |
| Human Supervision | Required                           | Not required                  |

### Example

* **Supervised Learning:** Predicting whether email is spam or not.
* **Unsupervised Learning:** Grouping customers based on purchasing behavior.

### Conclusion

Supervised learning predicts outputs using labeled data, whereas unsupervised learning identifies hidden patterns in unlabeled data.

---

## (b) Explain logistic regression with suitable example. [5]

### Answer

# Logistic Regression

## Definition

Logistic Regression is a supervised machine learning algorithm used for classification problems where output values are categorical.

---

## Formula

[
P(Y=1)=\frac{1}{1+e^{-(b_0+b_1x)}}
]

Where:

* (P(Y=1)) = Probability of positive class
* (b_0) = Intercept
* (b_1) = Coefficient
* (x) = Input feature

---

## Working

1. Input data is collected.
2. Sigmoid function is applied.
3. Probability value between 0 and 1 is generated.
4. Output class is predicted.

---

## Example

### Student Pass/Fail Prediction

| Study Hours | Result |
| ----------- | ------ |
| 2           | Fail   |
| 6           | Pass   |

If probability > 0.5 → Pass
If probability < 0.5 → Fail

---

## Advantages

* Simple implementation
* Fast training
* Suitable for binary classification

---

## Limitations

* Works poorly with complex data
* Sensitive to outliers

---

## Applications

* Spam Detection
* Disease Prediction
* Fraud Detection

---

# OR

## (c) Explain the concept of dataset, labels and features. [5]

### Answer

# Dataset

## Definition

A dataset is a collection of related data used for machine learning training and testing.

### Example

| Age | Salary | Purchased |
| --- | ------ | --------- |
| 25  | 30000  | Yes       |
| 30  | 40000  | No        |

---

# Features

## Definition

Features are input variables used for prediction.

### Example

* Age
* Salary

---

# Labels

## Definition

Labels are target outputs predicted by the model.

### Example

* Purchased = Yes/No

---

# Diagram

| Features    | Label     |
| ----------- | --------- |
| Age, Salary | Purchased |

---

# Applications

* House Price Prediction
* Disease Prediction
* Student Performance Analysis

---

## (d) Explain dimensionality reduction techniques. [5]

### Answer

# Dimensionality Reduction

## Definition

Dimensionality reduction reduces the number of input features while preserving important information.

---

## Need

* Reduces computation time
* Improves accuracy
* Removes redundant data
* Reduces overfitting

---

# Types

## 1. Feature Selection

Selecting important features from dataset.

### Methods

* Filter Method
* Wrapper Method
* Embedded Method

---

## 2. Feature Extraction

Creating new reduced features from original features.

---

# Principal Component Analysis (PCA)

## Steps

1. Standardize data
2. Compute covariance matrix
3. Find eigenvalues
4. Select principal components
5. Transform dataset

---

## Advantages

* Faster processing
* Better visualization
* Noise reduction

---

## Applications

* Image Compression
* Face Recognition
* Data Visualization

---

# Question 2

## (a) (i) Calculate Accuracy and F1-Score. [5]

### Answer

# Given Data

* TP = 20
* FP = 10
* TN = 965
* FN = 5

---

# Confusion Matrix

| Actual / Predicted | Cancer  | Healthy  |
| ------------------ | ------- | -------- |
| Cancer             | TP = 20 | FN = 5   |
| Healthy            | FP = 10 | TN = 965 |

---

# Accuracy Formula

[
Accuracy = \frac{TP+TN}{TP+TN+FP+FN}
]

### Calculation

[
Accuracy = \frac{20+965}{20+965+10+5}
]

[
Accuracy = \frac{985}{1000}
]

[
Accuracy = 0.985
]

## Final Answer

[
\boxed{Accuracy = 98.5%}
]

---

# Precision Formula

[
Precision = \frac{TP}{TP+FP}
]

[
Precision = \frac{20}{20+10}
]

[
Precision = 0.667
]

---

# Recall Formula

[
Recall = \frac{TP}{TP+FN}
]

[
Recall = \frac{20}{20+5}
]

[
Recall = 0.8
]

---

# F1-Score Formula

[
F1 = \frac{2 \times Precision \times Recall}{Precision + Recall}
]

### Calculation

[
F1 = \frac{2 \times 0.667 \times 0.8}{0.667 + 0.8}
]

[
F1 \approx 0.73
]

## Final Answer

[
\boxed{F1\ Score \approx 0.73}
]

---

## (a) (ii) Estimate sales in 2020 using regression line. [5]

### Answer

# Given Data

| Year  | 2015 | 2016 | 2017 | 2018 | 2019 |
| ----- | ---- | ---- | ---- | ---- | ---- |
| Sales | 12   | 19   | 29   | 37   | 45   |

---

# Regression Equation

[
y = a + bx
]

---

# Coding Table

| x  | y  | xy  | x² |
| -- | -- | --- | -- |
| -2 | 12 | -24 | 4  |
| -1 | 19 | -19 | 1  |
| 0  | 29 | 0   | 0  |
| 1  | 37 | 37  | 1  |
| 2  | 45 | 90  | 4  |

---

# Summation

[
\Sigma y = 142
]

[
\Sigma xy = 84
]

[
\Sigma x^2 = 10
]

---

# Calculate a

[
a = \frac{\Sigma y}{n}
]

[
a = \frac{142}{5} = 28.4
]

---

# Calculate b

[
b = \frac{\Sigma xy}{\Sigma x^2}
]

[
b = \frac{84}{10} = 8.4
]

---

# Regression Equation

[
y = 28.4 + 8.4x
]

For year 2020:

[
x = 3
]

[
y = 28.4 + 8.4(3)
]

[
y = 53.6
]

## Final Answer

[
\boxed{Estimated\ Sales = 53.6\ million}
]

---

# PART 2

# Question 2 (b)

## Construct a decision tree using CART algorithm. [10]

### Answer

# Dataset

| Instance | Study Hours | Attendance | Previous Grades | Result |
| -------- | ----------- | ---------- | --------------- | ------ |
| 1        | High        | Good       | Excellent       | Pass   |
| 2        | Low         | Poor       | Low             | Fail   |
| 3        | High        | Poor       | Average         | Pass   |
| 4        | Low         | Good       | Average         | Pass   |
| 5        | High        | Good       | Excellent       | Pass   |
| 6        | Low         | Poor       | Low             | Fail   |
| 7        | High        | Poor       | Low             | Fail   |
| 8        | Low         | Good       | Average         | Pass   |

---

# CART Algorithm

## Definition

CART (Classification and Regression Tree) is a supervised learning algorithm used for classification and prediction.

---

# Decision Tree Construction

The best splitting attribute is:

## Previous Grades

### Decision Tree

```text
              Previous Grades
            /       |         \
     Excellent   Average      Low
         |           |          |
       Pass        Pass       Fail
```

---

# Prediction

## Given Instance

| Attribute       | Value     |
| --------------- | --------- |
| Study Hours     | High      |
| Attendance      | Poor      |
| Previous Grades | Excellent |

From decision tree:

[
Excellent \Rightarrow Pass
]

## Final Answer

[
\boxed{Predicted\ Result = Pass}
]

---

# Question 3

## (a) K-Means Clustering using Euclidean Distance. [10]

### Answer

# Given Data

| Point | Coordinates |
| ----- | ----------- |
| A1    | (2,10)      |
| A2    | (2,5)       |
| A3    | (8,4)       |
| A4    | (5,8)       |
| A5    | (7,5)       |
| A6    | (6,4)       |
| A7    | (1,2)       |
| A8    | (4,9)       |

Initial Centroids:

* C1 = A1 = (2,10)
* C2 = A4 = (5,8)
* C3 = A7 = (1,2)

---

# Euclidean Distance Formula

[
d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}
]

---

# Cluster Assignment

| Point | Cluster |
| ----- | ------- |
| A1    | C1      |
| A2    | C3      |
| A3    | C2      |
| A4    | C2      |
| A5    | C2      |
| A6    | C2      |
| A7    | C3      |
| A8    | C2      |

---

# Final Clusters

## Cluster C1

[
{A1}
]

## Cluster C2

[
{A3,A4,A5,A6,A8}
]

## Cluster C3

[
{A2,A7}
]

---

# New Centroids

## C1

[
(2,10)
]

## C2

[
(6,6)
]

## C3

[
(1.5,3.5)
]

---

# Final Answer

| Cluster | Points             |
| ------- | ------------------ |
| C1      | A1                 |
| C2      | A3, A4, A5, A6, A8 |
| C3      | A2, A7             |

---

## (b) Complete Linkage Agglomerative Hierarchical Clustering. [10]

### Answer

# Distance Matrix

| Item | A  | B  | C | D | E  |
| ---- | -- | -- | - | - | -- |
| A    | 0  | 9  | 3 | 6 | 11 |
| B    | 9  | 0  | 7 | 5 | 10 |
| C    | 3  | 7  | 0 | 9 | 2  |
| D    | 6  | 5  | 9 | 0 | 8  |
| E    | 11 | 10 | 2 | 8 | 0  |

---

# Clustering Steps

## Step 1

Minimum distance:

[
C-E = 2
]

Cluster formed:

[
(C,E)
]

---

## Step 2

Next minimum:

[
A-(C,E)=11
]

Cluster:

[
(A,C,E)
]

---

## Step 3

Next minimum:

[
B-D = 5
]

Cluster:

[
(B,D)
]

---

# Dendrogram

```text
C ---- E
        \
         \
          A

B ---- D
```

---

# PART 3

# Question 4

## (a) Update Q-value using Q-Learning. [5]

### Answer

# Given Data

* Learning Rate (\alpha = 0.2)
* Reward (r_t = 10)
* Current Q-value = 5
* Next Q-value = 8
* Discount Factor (\gamma = 0.9)

---

# Formula

[
Q(s_t,a_t)=Q(s_t,a_t)+\alpha[r_t+\gamma Q(s_{t+1},a_{t+1})-Q(s_t,a_t)]
]

---

# Calculation

[
Q = 5 + 0.2[10 + 0.9(8) - 5]
]

[
Q = 5 + 0.2[10 + 7.2 - 5]
]

[
Q = 5 + 0.2(12.2)
]

[
Q = 5 + 2.44
]

[
Q = 7.44
]

## Final Answer

[
\boxed{Updated\ Q\ Value = 7.44}
]

---

## (b) Explain self-training and co-training techniques. [5]

### Answer

# Self-Training

## Definition

Self-training is a semi-supervised learning technique where a model trains itself using its own predictions.

---

## Steps

1. Train model using labeled data
2. Predict unlabeled data
3. Select confident predictions
4. Retrain model

---

## Advantages

* Simple implementation
* Reduces labeling cost

---

# Co-Training

## Definition

Co-training uses two classifiers trained on different feature sets.

---

## Steps

1. Split features into two sets
2. Train two classifiers
3. Exchange confident predictions
4. Retrain models

---

## Advantages

* Better accuracy
* Reduces overfitting

---

## Difference

| Basis      | Self-Training | Co-Training |
| ---------- | ------------- | ----------- |
| Models     | One           | Two         |
| Complexity | Simple        | Complex     |

---

## (c) Explain DQN and compare DQN with Q-Learning. [5]

### Answer

# Deep Q-Network (DQN)

## Definition

DQN combines:

* Q-Learning
* Deep Neural Networks

to solve complex reinforcement learning problems.

---

# Working

1. Agent interacts with environment
2. Experiences stored in replay memory
3. Neural network predicts Q-values
4. Best action selected

---

# Advantages

* Handles large state spaces
* Better learning efficiency

---

# Comparison

| Basis        | Q-Learning      | DQN                  |
| ------------ | --------------- | -------------------- |
| Storage      | Q-table         | Neural Network       |
| State Space  | Small           | Large                |
| Complexity   | Low             | High                 |
| Applications | Simple problems | Complex environments |

---

# Question 5

## (a) Credit Card Fraud Detection using ML. [10]

### Answer

# Problem Statement

A bank wants to detect fraudulent credit card transactions using machine learning.

---

# (i) Python Implementation

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression

data = pd.read_csv("creditcard.csv")

X = data.drop("Fraud", axis=1)
y = data["Fraud"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)

model = LogisticRegression()

model.fit(X_train, y_train)

y_pred = model.predict(X_test)

print(y_pred)
```

---

# (ii) Variables

## Independent Variables

* Transaction Amount
* Time
* Location
* Merchant Details

## Dependent Variable

* Fraud Status

---

# (iii) Importance of Data Preprocessing

* Removes missing values
* Removes noise
* Improves accuracy
* Handles imbalanced data
* Reduces training time

---

# OR

## (b) Retail Store Sales Prediction using ML. [10]

### Answer

# Problem Statement

A retail company wants to predict store sales using machine learning.

---

# (i) Python Implementation

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor

data = pd.read_csv("sales.csv")

X = data.drop("Sales", axis=1)
y = data["Sales"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2
)

model = RandomForestRegressor()

model.fit(X_train, y_train)

prediction = model.predict(X_test)

print(prediction)
```

---

# (ii) Variables

## Independent Variables

* Store ID
* Day of Week
* Date
* Promotions

## Dependent Variable

* Sales

---

# (iii) Importance of Data Preprocessing

* Handles missing values
* Feature scaling
* Improves model performance
* Removes duplicate data
* Improves prediction accuracy

---

# End of File
