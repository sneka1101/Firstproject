# -*- coding: utf-8 -*-
"""BMI calculator using python.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1d4S27yJkWqcQG5Z9esXIzaKmoJ730fgO
"""

name = input(' ENTER YOUR NAME ')

weight = int(input(' enter your weight '))

height = int(input(" enter your height "))

BMI=(weight*730)/(height *height)

print(BMI)

if BMI>0:
  if(BMI < 18.5):
    print(name + " you are underweight")
  elif(BMI<=24.9):
    print(name + " you are normal weight")
  elif(BMI< 29.9):
    print(name + " you are over weight")
  elif(BMI< 34.9):
    print(name + " you are obese")
  elif(BMI< 39.9):
    print(name + " you are over obese")
  else:
    print(name + " you are morbidly obese")
else:
  print("enter valid input")