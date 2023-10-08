

atm_card = 'card'
pin = 1234 
temp =0

for i in range(1):
    print("Welcome to ATM ")
    print("Insert your card ")
    pin=int(input("enter ur pin number "))
   
    if(atm_card == 'card' and pin == 1234):
        print(" Withdraw from the   1.current 2.savings ")
        print("your details are correct proceed ")
    else:
        print("please provide the correct details ")
        quit()
amount =int(input("enter the amount ")) 
while temp < amount :
    temp += 100
    print(" the  money for the ", temp ," for your entered amount  ",amount)
print("Take your money ")

print("Thank you for visiting :) ")








