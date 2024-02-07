import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
