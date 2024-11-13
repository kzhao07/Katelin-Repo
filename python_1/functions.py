# def sayHello():
#     print("hello")
#     print("mr sarkar")

# sayHello()

def addNumbers(firstNum, secondNum):
    sum = firstNum + secondNum
    print("The sum of " , firstNum , " and " , secondNum , " is " , sum)

def subtractNumbers(firstNum, secondNum):
    difference = firstNum - secondNum
    print("The difference of " , firstNum , " and " , secondNum , " is " , difference)

def multiplyNumbers(firstNum, secondNum):
    product = firstNum * secondNum
    print("The product of " , firstNum , " and " , secondNum , " is " , product)

def divideNumbers(firstNum, secondNum):
    quotient = firstNum / secondNum
    print("The quotient of " , firstNum , " and " , secondNum , " is " , quotient)

def displayMenu():
    print("Welcome to my calculator")
    print("1. Additon")
    print("2. Subtraction")
    print("3. Multiplication")
    print("4. Division")

def main(): # this is the main program
    displayMenu()
    userOption =int(input("Please select an option: "))
    userFirstNum = int(input("What's your first number: "))
    userSecondNum = int(input("What's your second number: "))

    if userOption == 1:
        addNumbers(userFirstNum, userSecondNum)
    elif userOption == 2:
        subtractNumbers(userFirstNum, userSecondNum)
    elif userOption == 3:
        multiplyNumbers(userFirstNum, userSecondNum)
    elif userOption == 4:
        divideNumbers(userFirstNum, userSecondNum)
    else:
        print("Invalid Input. Please select another option")

main()