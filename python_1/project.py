
deck = []
class Card:
    def __init__(self):
        self.faceUp = False
        self.value = 3
    
    def printSymbol(self):
        return self.value if self.faceUp else "D"



def displayCards():
    for row in deck:
        print(" ".join(card.printSymbol() for card in row))

def generateCards():
    global deck
    deck = [
        [Card(), Card(), Card(), Card()], 
        [Card(), Card(), Card(), Card()],
        [Card(), Card(), Card(), Card()],
        ]


def main():
    generateCards()
    displayCards()
main()