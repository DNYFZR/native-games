import css from '@/app/_styles';
import React, { useState } from 'react';
import { View, Image, Text, FlatList } from 'react-native';
import Button from '../Button';
import { PlayingCard, PlayingCardSet } from './cardTypes';

const Blackjack: React.FC = () => {
  const nDecks = 6;
  const [deckID, setDeckID] = useState<string|null>();
  const [activeGame, setActiveGame] = useState<boolean>(false);

  const [playerCards, setPlayerCards] = useState<PlayingCardSet>({cards: []} as PlayingCardSet);
  const [dealerCards, setDealerCards] = useState<PlayingCardSet>({cards: []} as PlayingCardSet);

  const [playerCardCount, setPlayerCardCount] = useState<number>(0);
  const [dealerCardCount, setDealerCardCount] = useState<number>(0);
  
  const setupDeck = async() => {
    // Set game state to active
    setActiveGame(true);

    // Get Deck 
    if(deckID == null) {
      let call = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${nDecks}`, { method: "GET" });
      await call.json().then(res => setDeckID(res.deck_id)).catch(error => console.error('Error:', error));
    }

    // Shuffle
    let shuffle = await fetch(`https://deckofcardsapi.com/api/deck/${deckID}/shuffle/`, { method: "GET" });
    await shuffle.json().then(res => setDeckID(res.deck_id)).catch(error => console.error('Error:', error));
  };

  const getACard = async(n:number) => {
    let useID = "";

    if(deckID == null){
      let call = await fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${nDecks}`, { method: "GET" });
      let res = await call.json();
      useID = res.deck_id;
      setDeckID(useID);
    } 
    
    else {
      useID = deckID;
    }
    
    // Draw n-cards from the deck
    let call = await fetch(`https://deckofcardsapi.com/api/deck/${useID}/draw/?count=${n}`, { method: "GET" });
    let res = await call.json();
    return {cards: res.cards as PlayingCard[]} as PlayingCardSet;
    
  };

  const mergeHands = (hand1: PlayingCardSet, hand2: PlayingCardSet): PlayingCardSet => {
    return { cards: [...hand1.cards, ...hand2.cards] };
  };

  const calculateScore = (hand: PlayingCardSet): number => {
    let cardScores: number[] = [];
    let aceCount:number = 0;
    
    // Get Card Tags
    let cardKeys =  hand.cards.map((v, _) => v["code"][0]);
    
    // Map Card Scores
    cardKeys.forEach(item => {
      if (item === "A"){
        cardScores.push(11);
        aceCount += 1;
      } 
      
      else if (item === "0" || item === "J" || item === "Q" || item === "K"){
        cardScores.push(10);
      }
      
      else {
        cardScores.push(Number(item));
      }
    });
    
    // Calculate Total
    let score = cardScores.reduce((accumulator, currentValue) => {
      return accumulator + currentValue
    },0);

    // if bust & had aces -> reduce score as close to 21 as possible
    if((score > 21 && aceCount > 0)){
      while (score > 21 && aceCount > 0){
        score -= 10;
        aceCount -= 1;
      }
    }

    // If still bust -> end the game
    if(score > 21){
      setActiveGame(false);
    }
    
    return score;
  };

  const clickNewGame = async() => {
    // Setup New Game 
    await setupDeck();
  
    // Get Cards
    let newCards = await getACard(4);
    let player = {cards: [newCards.cards[0], newCards.cards[2], ]} as PlayingCardSet;
    let dealer = {cards: [newCards.cards[1], newCards.cards[3], ]} as PlayingCardSet;

    // Update Hands
    setPlayerCards(player);
    setDealerCards(dealer);

    // Update Scores
    setPlayerCardCount(calculateScore(player));
    setDealerCardCount(calculateScore(dealer));

    // Blackjack Deal Check
    if(calculateScore(player) === 21 || calculateScore(dealer) === 21){
      setActiveGame(false);
    }
  };

  const clickHit = async() => {
    // Get a card
    let hand = await getACard(1);

    // Update player hand & score
    if(playerCards){
      hand = mergeHands(playerCards, hand);
    } 
    
    setPlayerCards(hand);
    setPlayerCardCount(calculateScore(hand));
  };

  const clickStick = async() => {
    // End active game
    setActiveGame(false);

    const dealerMin:number = 18;
    let hand = dealerCards;
    let score = calculateScore(hand);
    
    while(score < dealerMin){
      hand = mergeHands(hand, await getACard(1));
      score = calculateScore(hand);
    }
    
    setDealerCards(hand);
    setDealerCardCount(score);
  };


  return (
    <View>      
      <View style={css.row}>
        <Button style={css.nav} onPress={clickNewGame} name="New Game"/>
        {activeGame ? <Button style={css.nav} onPress={clickHit} name="Hit Me"/> : null}
        {activeGame ? <Button style={css.nav} onPress={clickStick} name="Stick" /> : null}
      </View>

      <View style={css.col}>
        {dealerCards && dealerCards.cards.length > 0 ? (
          <View>
            <Text style={css.text}>
              Dealer : {JSON.stringify(dealerCardCount)}
            </Text>
            <FlatList
              numColumns={5}
              data={dealerCards.cards} 
              renderItem={({item}) => <Image style={css.card} source={{uri: item.image}}/>}
              />
          </View>
        ) : null}
      </View>

      <View style={css.col}>
        {playerCards && playerCards.cards.length > 0 ? (
          <View> 
            <Text style={css.text}>
              Player : {JSON.stringify(playerCardCount)}
            </Text>
            <FlatList 
              numColumns={5}
              data={playerCards.cards} 
              renderItem={({item}) => <Image style={css.card} source={{uri: item.image}}/>}
              />
          </View>
        ) : null}
      </View>
    </View>
  );
};

export default Blackjack;