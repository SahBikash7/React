import React from "react";
function Button({ buttonText = "Default", clickedThenDo }) {
  return (
    <button
      className="outline-none px-5 py-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: buttonText.toLowerCase() }}
      onClick={clickedThenDo}
    >
      {buttonText}
    </button>
  );
}
export default Button;
