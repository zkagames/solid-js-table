import {MonthlyCardsRow } from "../types";
import { API_DELIMITER, DATE_DELIMITER } from "../utils/consts";
import { dailyCards } from "./data";

export const API = {

  getMonthlyCards: ()=>{

    const cards = Object.keys(dailyCards).reduce((acc, key)=>{
      const [cardDate] = key.split(API_DELIMITER);
      const [cardDaty, cardMonth, __] = cardDate.split(DATE_DELIMITER);
      
      const {inTime, outTime} = dailyCards[key];
      acc.push({day:cardDaty+DATE_DELIMITER+cardMonth, inTime, outTime, isFull: (inTime && outTime) ? 1 : 0});  

      return acc;
    },[] as Array<MonthlyCardsRow>);

    const LARGE_ARRAY = 100 ; 
    const arr = [].concat(...Array(LARGE_ARRAY).fill(cards)); // 1,000 rows
    return arr.map((row:MonthlyCardsRow)=>{return {...row, id: Math.random()}})
  }
}
