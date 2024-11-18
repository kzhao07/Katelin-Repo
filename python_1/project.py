import random
import numpy as np

deck = [] # store the deck of cards
pairs = [] # store the values of the cards (pairs)
table = []
class Card: 
    def __init__(self, value):
        self.faceUp = False # start each card face down 
        self.value = value # assign the value of the card to the parameter passed
    
    def printSymbol(self): # return the value of the card if it is faceUp, otherwise return "D"
        return self.value if self.faceUp else "D" 



def displayCards(): # display the cards in a 3x4 format
    for row in table:
        print(" ".join(card.printSymbol() for card in row))

    print()

def generateCards(): # generate the pairs of numbers to assign to cards and create a deck of cards
    global deck # globalize deck
    global pairs # globalize pairs
    for i in range(6): # repeat for 6 pairs of cards
        x = random.randint(1, 13) # generate a random value from 1-13
        pairs.append(str(x)) # add the random number to the list of pairs
        pairs.append(str(x)) # add the random number to the list of pairs

    for i in range(12):
        deck.append(Card(pairs[i])) # create a deck of cards with values

    np.random.shuffle(deck) # shuffle the order of the cards in the deck
    
    pos = 0 # keep track of position in deck
    for rows in range(3):
        tempArray = []
        for cols in range(4):
            tempArray.append(deck[pos])
            pos += 1
        table.append(tempArray)
    
    # create a deck of cards in a 3x4 format

def allFlipped():
    for rows in range(3):
        for cols in range(4):
            if table[rows][cols].faceUp == False:
                return False
    return True
def main(): # main function
    generateCards() 
    displayCards()
    prevValue = -1
    prevRow = -1
    prevCol = -1
    print("Welcome to Matching Madness! Enter the row and column of the card you would like to flip.")
    while(allFlipped() == False):
        userRow = int(input("Enter the row: "))-1
        userCol = int(input("Enter the column: "))-1
        if (userRow >= 3 or userRow < 0 or userCol < 0 or userCol >= 4):
            print("Invalid input. Please try again")
        else:
            currentVal = table[userRow][userCol].value
            table[userRow][userCol].faceUp = True
            if prevValue == currentVal:
                displayCards()
                table[prevRow][prevCol].faceUp = True
            elif prevValue != -1:
                displayCards()
                table[userRow][userCol].faceUp = False
                table[prevRow][prevCol].faceUp = False
            else: 
                displayCards()
            prevValue = currentVal
            prevRow = userRow
            prevCol = userCol
    print("Game Over")
main()
