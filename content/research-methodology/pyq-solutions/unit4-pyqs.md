# Unit 4: Data Analysis & Statistical Testing (PYQ Solutions)

> [!NOTE]
> This unit covers statistical tests like Chi-Square, T-Test, and ANOVA. Expect at least one 10-mark numerical on Chi-Square or T-Test.

---

## 1. What is Chi-Square ($\chi^2$) Test?
**[APR-2025 | JAN-2026 | 5 Marks]**

Chi-square test is a non-parametric test used to determine if there is a significant association between two categorical variables.

**Formula:** $\chi^2 = \sum \frac{(O - E)^2}{E}$
Where:
* $O$ = Observed Frequency
* $E$ = Expected Frequency

---

## 2. Numerical: Chi-Square Test
**[APR-2025 | 10 Marks]**

**Problem:** Relationship between Gender and Colour Preference.
| Gender | Pink | Black | Yellow | Total |
| :--- | :--- | :--- | :--- | :--- |
| **Male** | 10 | 70 | 30 | 110 |
| **Female** | 40 | 30 | 20 | 90 |
| **Total** | 50 | 100 | 50 | 200 |

### Step 1: Null Hypothesis ($H_0$)
There is no significant relationship between Gender and Colour Preference.

### Step 2: Calculate Expected Frequencies ($E$)
$E = \frac{(\text{Row Total} \times \text{Column Total})}{\text{Grand Total}}$
* $E(\text{Male, Pink}) = (110 \times 50) / 200 = 27.5$
* $E(\text{Male, Black}) = (110 \times 100) / 200 = 55$
* $E(\text{Male, Yellow}) = (110 \times 50) / 200 = 27.5$
* $E(\text{Female, Pink}) = (90 \times 50) / 200 = 22.5$
* $E(\text{Female, Black}) = (90 \times 100) / 200 = 45$
* $E(\text{Female, Yellow}) = (90 \times 50) / 200 = 22.5$

### Step 3: Calculate $\chi^2$
$\chi^2 = \frac{(10-27.5)^2}{27.5} + \frac{(70-55)^2}{55} + \dots$
$\chi^2 = 11.13 + 4.09 + 0.22 + 13.61 + 5.0 + 0.27 = \mathbf{34.32}$

### Step 4: Conclusion
Table value at $\alpha=0.05, df=2$ is **5.99**.
Since calculated $\chi^2$ (34.32) > 5.99, we **reject $H_0$**.
**Result:** Gender significantly influences Colour Preference.

---

## 3. What is t-test? When is it used?
**[APR-2025 | 10 Marks]**

A t-test is a parametric test used to compare the means of two groups. It is used when:
* The population standard deviation is unknown.
* The sample size is small ($n < 30$).

### Types:
1. **One-sample t-test:** Compare sample mean with population mean.
2. **Independent two-sample t-test:** Compare means of two independent groups.
3. **Paired t-test:** Compare means from the same group at different times.

---

> [!TIP]
> **Exam Hack:** For Chi-Square, always check the Degree of Freedom ($df$).
> Formula: $df = (r-1)(c-1)$
> For a $2 \times 3$ table: $df = (2-1)(3-1) = 2$.
