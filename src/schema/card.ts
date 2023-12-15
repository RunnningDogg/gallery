import React from "react";

interface CardItem {
  header: string;
  content: string;
  tags: string[];
  date: string;
}

export interface ICardProps extends React.HTMLAttributes<HTMLElement> {
  cardSets: CardItem[];
}
