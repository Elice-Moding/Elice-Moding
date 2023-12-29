export const formatPrice = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatDate = (date: Date): string => {
  return `${date.toString().slice(0, -16)}년 ${date
    .toString()
    .slice(5, -13)}월 ${date.toString().slice(8, -10)}일`;
};

export const formatPercentage = (current: number, goal: number) => {
  return Math.floor((current / goal) * 100);
};