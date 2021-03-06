export const shortenedSummary = (string: string): string => {
  const textArr = string.split(' ');
  return textArr.length > 50
    ? `${textArr.slice(0, 50).join(' ')}`
    : textArr.join(' ');
};

export const dateConverter = (date: string): string => new Date(date).toDateString();
