# -*- coding: utf-8 -*-
"""seaborn_practise.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1AiJ5ttaftOMhuxVnN6kr2SY5YJ65G1qp
"""

import seaborn as sns

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

roll_no=[45,56,78,98,54,34,47,78,94,76]
marks=[90,67,89,20,45,99,58,94,67,97]
df=pd.DataFrame({'Rollno':roll_no,'Marks':marks})

df.head()

"""line plot"""

sns.lineplot(x='Rollno',y='Marks',data=df)
plt.title('students marks')

df=pd.read_csv('/content/hr_data.csv')

df.head()

sns.lineplot(x='number_project', y='left',data=df)

sns.lineplot(x='salary' , y='promotion_last_5years', data=df)

plt.figure(figsize=(12,6))
sns.lineplot(x='department', y='left', data=df)

sns.lineplot(x='number_project', y='average_montly_hours', data=df, hue='left')

"""Dist plot


"""

sns.distplot(df['time_spend_company'])

sns.distplot(df['average_montly_hours'])

bins=[2,4,6,8,10,12]
sns.distplot(df['time_spend_company'],bins=bins)
plt.xticks(bins)#xticks-in xaxis we are using bins

"""# scatter plot"""

df=pd.read_csv('/content/Salaries.csv')
df.head()

sns.scatterplot(x='Agency' , y='Year', data=df)

sns.scatterplot(x='OtherPay' , y='Id', data=df , hue='TotalPay')

"""# bar plot"""

df.head()



sns.barplot(y='EmployeeName', x='TotalPay', data=df.head())

sns.barplot(y='EmployeeName', x='TotalPay', data=df.head() , hue='Year')

