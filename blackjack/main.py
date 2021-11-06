from replit import clear
from art import logo
import random

cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
player_cards = []
computer_cards = []
player_scores_card = []
computer_scores_card = []
player_scores = 0
computer_scores = 0

def clean_data():
  global player_cards
  global computer_cards
  global player_scores_card
  global computer_scores_card
  player_cards = []
  computer_cards = []
  player_scores_card = []
  computer_scores_card = []


def random_card():
  return (random.choice(range(len(cards))))

def final_hand():
  player_scores = total_score(player_scores_card)
  computer_scores = total_score(computer_scores_card)
  print(f"Your final hand: {player_cards}, final_score: {player_scores}")
  print(f"Computer final hand: {computer_cards}, final_score: {computer_scores}")
  if player_scores == 21:
    print("BlackJack.You win!")
  elif player_scores > 21:
    print("You went over. Your lose!") 
  elif player_scores > computer_scores or computer_scores > 21:
    print("You win.") 
  elif player_scores < computer_scores or computer_scores == 21:
    print("You lose.")  
  else:
    print("Draw")



def short_count():
  player_scores = total_score(player_scores_card)
  print(f"Your cards: {player_cards} current scores: {player_scores}")    
  print(f"Computer's first card : {computer_cards[0]}")
  next_card = input("Type 'y' to get another card, type 'n' to pass: ")
  if next_card == "y":
    render_card()
  if next_card == "n":
    final_hand()   

def ace_checker(card):
  if 11 in card:
   card[card.index(11)] = 1

def render_card():
  render_player()
  if player_scores >= 21:
    final_hand()
    return
  render_computer()
  if computer_scores >= 21 :
    final_hand()
    return
  short_count()


def render_player():
  global player_scores
  player_card_i = random_card()
  player_scores_card.append(cards[player_card_i])  
  player_scores = total_score(player_scores_card)
  player_cards.append(player_card_i + 1)
  if player_scores > 21:
    ace_checker(player_scores_card)
    player_scores = total_score(player_scores_card)


def render_computer():
  global computer_scores
  computer_card_i = random_card()
  computer_scores_card.append(cards[computer_card_i])  
  computer_scores = total_score(computer_scores_card)  
  computer_cards.append(computer_card_i + 1)
  if computer_scores > 21:
    ace_checker(computer_scores_card)
    computer_scores = total_score(computer_scores_card) 

def total_score(card):
  return sum(card)

def blackjack():
  print(logo)
  clean_data()  
  render_player()
  render_player()
  render_computer()
  render_computer()
  if computer_scores == 21 or player_scores == 21:
    final_hand() 
  short_count()

should_run = True
while should_run:
  play_game = input("Do you want to play a game of Blackjact?Type'y' or 'n': ")
  if play_game == "n":
    should_run = False
  if should_run:
    clear()
    blackjack()