import axios from "axios";
// types
import { FormType } from "../types";
// utils
import { toStringByFormatting } from "../utils";

const API_KEY = "H7pMstaRIeiCReC8iOH52IFKmYFTUcZV";

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
      )}&end_date=${toStringByFormatting(
        new Date(form.endDate),
      )}&api-key=${API_KEY}`,
    ).then((res) => res);

    return response.data.response.docs;
  } catch (e) {
    console.error(e);
  }
}
