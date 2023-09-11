
name=input("enter your name")
print("welcome",name,"to this adventure game")

answer=input("you are the dirt road which comes to an end please let me know do you want to go left or right")

if answer == "left":
    answer= input("you came to the end of the river,you can walk on bridge or swim")
    
    if answer == "walk":
        print("you walked for many miles from water you lost:(")
    elif answer == "swim":
        print("you have reached the golden treasure YOU WON:)!")
    else:
        print("choose a valid option!!")
if answer == "right":
    answer = input("you came to a bride ,it looks like wobbly,do you want to cross it ot=r get back(cross/back)")

    if answer == "cross":
        answer=input("you crossed a bridge do you want to meet a stranger(yes/no)")
        
        if answer == "yes":
            print("You met a stranger and  ask the desire you want to achieve")
        elif answer == "no":
            print("sorry you can go back to your home,Bye")
    elif answer == "back":
        print("you go back to the main road")
    
else:
    print("choose a valid option")