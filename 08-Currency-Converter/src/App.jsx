import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);

  // Convert from :
  const [from, setFrom] = useState("USD");

  // Convert to :
  const [to, setTo] = useState("NPR");

  const [convertedAmount, setConvertedAmount] = useState(0);

  // so the data returned from our useCurrencyInfo hook is stored in currrencyInfo.
  const currencyInfo = useCurrencyInfo(from);
  // currencyInfo has the currency name and conversion-rate based on oyr "from" currency in key value pair but we don't pass the rate to the user right hence we get the keys only from the object which are the currencies name

  const options = Object.keys(currencyInfo);

  // The swap functionality working :
  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundColor: "#212121",
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-blue-100">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-black px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                isAmountDisabled
                value={convertedAmount}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-black px-4 py-3 rounded-lg"
              onClick={convert}
            >
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
