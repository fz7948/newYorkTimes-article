export type SelectPropsType = {
  label: string;
  value: number;
};

export interface SelectBoxType {
  name: string;
  value: number;
}

export const COUNTRY_TYPE = {
  all: "*",
  south_korea: "SOUTH KOREA",
  china: "CHINA",
  japan: "JAPAN",
  united_states: "UNITED STATES",
  north_korea: "NORTH KOREA",
  russia: "RUSSIA",
  france: "FRANCE",
  united_kingdom: "UNITED KINGDOM",
};

export type FormType = {
  page: number;
  keyword: string;
  beginDate: string;
  endDate: string;
  country: string;
};
