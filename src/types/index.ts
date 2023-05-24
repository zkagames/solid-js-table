
export type DailyCard = {
  inTime: string;
  outTime: string;
}

export type MonthlyCardsRow = DailyCard & { inTime: string;outTime: string;day: string, isFull:number}

