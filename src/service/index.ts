import axios from "axios";
// types
import { FormType } from "../types";
// utils
import { toStringByFormatting } from "../utils";

const API_KEY = "Bn2ldE3pKPUQ7uwPzw9k4i2BtCzq8SLp";

export async function getArticlesearchApi(form: FormType) {
  try {
    const response = await axios(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${
        form.keyword
      }&sort=newest&fq=glocations:(${form.country})&page=${
        form.page
      }&begin_date=${toStringByFormatting(
        form.beginDate,
      )}&end_date=${toStringByFormatting(form.endDate)}&api-key=${API_KEY}`,
    ).then((res) => res);

    return response.data.response.docs;
  } catch (e) {
    console.error(e);
  }
}
