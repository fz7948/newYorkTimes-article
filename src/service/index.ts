import axios from "axios";
// types
import { FormType } from "../types";
// utils
import { toStringByFormatting } from "../utils";

type Props = {
  form: FormType;
  page: number;
};

export async function getArticlesearchApi(props: Props) {
  const { form, page } = props;

  try {
    const response = await axios(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
        form.keyword
      }&sort=newest&fq=glocations:(${
        form.country
      })&page=${page}&begin_date=${toStringByFormatting(
        new Date(form.beginDate),
      )}&end_date=${toStringByFormatting(new Date(form.endDate))}&api-key=${
        process.env.REACT_APP_ARTICLE_SEARCH_KEY
      }`,
    ).then((res) => res);

    return response.data.response.docs;
  } catch (e) {
    console.error(e);
  }
}
