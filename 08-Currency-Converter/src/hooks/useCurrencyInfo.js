// Making our custom hook :

import { useState, useEffect } from "react";

// Convention to write use in the hooks-name :

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    let URL = `https://open.er-api.com/v6/latest/${currency}`;
    fetch(URL)
      .then((res) => res.json())
      .then((res) => setData(res["rates"]));
  }, [currency]);

  return data; //returns the conversion rate for the passed currency into many different currencies
}

export default useCurrencyInfo;
