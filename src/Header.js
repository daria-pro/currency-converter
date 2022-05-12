import React from "react";

export default function Header(props) {
  const { rates } = props;
  const usd = (rates.UAH / rates.USD).toFixed(4);
  const eur = (+rates.UAH).toFixed(4);

  return (
    <div>
      <h1>Currency Converter</h1>
      <h2>
        Current Rates in UAH: <strong>EUR:</strong> {eur} |{" "}
        <strong>USD:</strong> {usd}
      </h2>
    </div>
  );
}
