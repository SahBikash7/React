import React, { useId } from "react";

// useId is the hook for generating unique IDsthat can be passed to accessibility attributes.

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  isAmountDisabled = false,
  isCurrencyDisabled = false,
  className = "",
}) {
  // uisng useId hook :
  const amountInputId = useId();

  // DO NOT call useId to generate keys in a list

  return (
    <div className={`bg-black p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-white/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5 bg-slate-600 rounded-xl text-center"
          type="number"
          placeholder="Amount"
          disabled={isAmountDisabled}
          value={amount}
          // we are passing onAmountChange as a prop which is a function and in order to prevent the app from crashing we used && that checks at first if onAmountCHnage is passed and then only calls it if it is passed as prop
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-white/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={isCurrencyDisabled}
        >
          {/* If we want to use loop to make component in an optimized way then never forget the key 
          key can be index,id,etc*/}
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
