export type SelectPropsType = {
  label: string;
  value: number;
};

export interface SelectBoxType {
  name: string;
  value: number;
}

export type FormType = {
  keyword: string;
  beginDate: string;
  endDate: string;
  country: string;
};

export type DataType = {
  id: string;
  date: Date;
  headline: string;
  journalist: string;
  source: string;
  web_url: string;
};

type KeywordType = {
  major: string;
  name: string;
  rank: number;
  value: string;
};

type PersonType = {
  firstname: string;
  lastname: string;
  middlename: null;
  organization: string;
  qualifier: null;
  rank: number;
  role: string;
  title: null;
};

type HeadlineType = {
  content_kicker: null;
  kicker: null;
  main: string;
  name: null;
  print_headline: null;
  seo: null;
  sub: null;
};

interface BylineInterface {
  organization: null;
  original: string;
  person: PersonType[] | undefined;
  document_type: string;
}

export interface DocsInterface {
  abstract: string;
  byline: BylineInterface;
  document_type: string;
  headline: HeadlineType;
  keywords: KeywordType[];
  lead_paragraph: string;
  multimedia: [];
  news_desk: string;
  pub_date: string;
  section_name: string;
  snippet: string;
  source: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
  _id: string;
}
