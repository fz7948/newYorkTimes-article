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

export const formatArticlesearchApi = (docs: any) => {
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
        journalist: personFullName,
        headline: main,
        date: toStringByFormatting(new Date(pub_date)),
        source,
      },
    ];
  }, []);
  return newDocs;
};
