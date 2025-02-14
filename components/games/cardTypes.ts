export type PlayingCard = {
  code: string 
  image: string 
  images: {
    svg: string 
    png: string
  } 
  value: string 
  suit: string
};

export interface PlayingCardSet {
  cards: PlayingCard[];
};
