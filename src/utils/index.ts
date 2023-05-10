import { v4 as uuidv4 } from "uuid";

const leftPad = (value: number) => {
  if (value >= 10) {
    return value;
  }

  return `0${value}`;
};

export const toStringByFormatting = (source: Date, delimiter = "") => {
  const year = source.getFullYear();
  const month = leftPad(source.getMonth() + 1);
  const day = leftPad(source.getDate());

  return [year, month, day].join(delimiter);
};

export function getDayOfWeek(source: Date) {
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = week[source.getDay()];
  return dayOfWeek;
}

export const formatArticlesearchApi = (docs: any) => {
  if (!docs) return [];

  const newDocs = docs.reduce((res: any, cur: any) => {
    const {
      byline: { person },
      headline: { main },
      pub_date,
      source,
    } = cur;

    const personFullName = person.length
      ? `${person[0].firstname} ${person[0].lastname}`
      : "";

    return [
      ...res,
      {
        id: uuidv4(),
        journalist: personFullName,
        headline: main,
        date: new Date(pub_date),
        source,
      },
    ];
  }, []);
  return newDocs;
};
