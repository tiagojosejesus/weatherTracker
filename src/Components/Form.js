import React from "react";

const Form = ({
  inputCity,
  setInputCity,
  inputDays,
  setInputDays,
  inputValues,
  setInputValues,
  weatherData,
  setWeatherData,
}) => {
  const onInputHandler = (event) => {
    setInputCity(event.target.value);
  };
  const daysHandler = (event) => {
    setInputDays(event.target.value);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    setInputValues([...inputValues, { city: inputCity, days: inputDays }]);
    const url =
      "http://api.weatherapi.com/v1/forecast.json?key=971d4690217947ebb98152934201312&q=" +
      inputCity +
      "&days=" +
      inputDays;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData([{ data: data, loading: false }]);
  };

  return (
    <form className="search">
      <input
        onChange={onInputHandler}
        type="text"
        value={inputCity}
        placeholder="City"
      />
      <select onChange={daysHandler}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <button onClick={submitHandler} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
