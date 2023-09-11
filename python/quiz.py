print("welcome to Quizz game!")
question=input("Do you want continue? ")
if question != "yes":
    quit()
print("you are ready for the game:)")
score=0

question2=input("what does GPU stand for")
if question2 == "graphic processing unit":
    print("yeah!correct")
    score +=1
else:
    print("oops!Wrong")

question2=input("what does JS stand for")
if question2 == "Java script":
    print("yeah!correct")
    score +=1
else:
    print("oops!Wrong")

question2=input("what does RAM stand for")
if question2 == "random access memory":
    print("yeah!correct")
    score +=1
else:
    print("oops!Wrong")

question2=input("what does ROM stand for")
if question2 == "read only memory":
    print("yeah!correct")
    score +=1
else:
    print("oops!Wrong")

print("you got " + str(score)  + " "+ "questions correct")