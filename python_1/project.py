import random
import numpy as np

deck = [] # store the deck of cards
pairs = [] # store the values of the cards (pairs)
table = [] # store the layout of the cards on the table (3x4)
class Card: # define Card class
    def __init__(self, value): # card constructor
        self.faceUp = False # start each card face down 
        self.value = value # assign the value of the card to the parameter passed
    
    def printSymbol(self): # return the value of the card if it is faceUp, otherwise return "D"
        return self.value if self.faceUp else "X" 



def displayCards(): # display the cards in a 3x4 format
    for row in table:
        print(" ".join(card.printSymbol() for card in row))
    print() # print a blank line

def generateCards(): # generate the pairs of numbers to assign to cards and create a deck of cards
    global deck # globalize deck
    global pairs # globalize pairs
    numList = random.sample(range(1, 14), 6) # generate a random list of 6 values from 1-13
    for x in numList: # repeat for 6 pairs of cards
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

def allFlipped(): #check if all cards flipped
    for rows in range(3):
        for cols in range(4):
            if table[rows][cols].faceUp == False: # check if card at row and column is face down
                return False # if face down, turn fales
    return True # return true if no face down card found
def main(): # main function
    generateCards()
    displayCards() 
    prevValue = -1 # -1 value indicates no value stored
    prevRow = -1 # -1 value indicates no value stored
    prevCol = -1 # -1 value indicates no value stored
    print("Welcome to Matching Madness! Enter the row and column of the card you would like to flip.")
    while(allFlipped() == False):
        userRow = int(input("Enter a row: "))-1 
        userCol = int(input("Enter a column: "))-1
        if (userRow >= 3 or userRow < 0 or userCol < 0 or userCol >= 4):
            print("Invalid input. Please try again") # row and/or col out of range
        elif (table[userRow][userCol].faceUp == True):
            print("Already face up! Try another card.") # chose already face up card
        else:
            currentVal = table[userRow][userCol].value 
            table[userRow][userCol].faceUp = True 
            if prevValue == currentVal: # if value of current card equals value of previous card
                table[prevRow][prevCol].faceUp = True 
                print() # print a blank line
                print("Match! New Board:")
                displayCards()
                prevValue = -1
            elif prevValue != -1:  # if there is a previous value but it does not equal current value
                displayCards()
                table[userRow][userCol].faceUp = False
                table[prevRow][prevCol].faceUp = False
                print("Not a Match! New Board:")
                displayCards()
                prevValue = -1
            else: # if no previous value stored
                displayCards()
                prevValue = currentVal
                prevRow = userRow
                prevCol = userCol
    print("You Win!") # Win Ending
main()
