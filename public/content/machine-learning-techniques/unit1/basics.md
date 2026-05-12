# Introduction to Machine Learning

Machine Learning (ML) is the study of computer algorithms that improve automatically through experience.

## Types of Machine Learning

1. **Supervised Learning**: The model is trained on labeled data.
    - Regression
    - Classification
2. **Unsupervised Learning**: The model finds patterns in unlabeled data.
    - Clustering (K-Means)
    - Association
3. **Reinforcement Learning**: Learning through trial and error using rewards.

## Simple Linear Regression
The mathematical model for linear regression is:
`y = mx + c`

### Python Implementation
```python
import numpy as np
from sklearn.linear_model import LinearRegression

# Sample data
X = np.array([[1], [2], [3], [4]])
y = np.array([2, 4, 6, 8])

model = LinearRegression()
model.fit(X, y)

prediction = model.predict([[5]])
print(f"Prediction for 5: {prediction}")
```

## Comparison Table

| Feature | Supervised | Unsupervised |
|---------|------------|--------------|
| Input Data | Labeled | Unlabeled |
| Goal | Predict output | Find patterns |
| Examples | Spam detection | Customer segmentation |
