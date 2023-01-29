import React, { useState } from "react";
import axios from "axios";

const Q5 = () => {
  const a = 3;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedHeight, setSelectedHeight] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    console.log(selectedDate);
  };

  const handleSubmit = async () => {
    
    console.log(selectedDate);
    let response = await axios
      .post(`http://localhost:8080/details/post/submit`, {
        date: selectedDate,
        weight: selectedWeight,
        height: selectedHeight,
      })
      .then(function (response) {
        window.location.href = "/";
      })
      .catch(function (err){
        console.log(err)
      })
  };
  return (
    <div className="mx-auto my-10 max-w-sm w-full">
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="border p-4 rounded">
        <form>
          <h1
            style={{ fontWeight: "bold" }}
            className="text-center mb-4 text-2xl"
          >
            Tell us a bit more about yourself.
          </h1>
          {/* <div className='text-center'> Select one of the below ranges.</div> */}
          <br />
          <div class="relative mb-4">
            {/* <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    
</button> */}
            <input
              type="date"
              className="form-input text-center w-full rounded-md bg-gray-200 p-2"
              value={selectedDate}
              onChange={(e) => handleDateChange(e)}
            />
          </div>
          <div class="mb-4">
            <input
              onChange={(e) => {
                e.preventDefault();
                setSelectedWeight(e.target.value);
              }}
              className="w-full text-center rounded-md bg-gray-200 p-2"
              placeholder="Enter Weight(in kgs)"
            ></input>
          </div>
          <div class="mb-6">
            <input
              onChange={(e) => {
                e.preventDefault();
                setSelectedHeight(e.target.value);
              }}
              className="w-full text-center rounded-md bg-gray-200 p-2"
              placeholder="Enter Height(in m)"
            ></input>
          </div>
          <div class="flex items-center justify-between">
            <p
              onClick={(e) => (window.location.href = "/q4")}
              style={{ cursor: "pointer" }}
              class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              BACK
            </p>
            <p
              onClick={handleSubmit} style={{ cursor: "pointer" }}
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            >
              SUBMIT
            </p>
          </div>
        </form>
        <p class="text-center text-gray-500 text-xs">
          &copy;©2023 Fitnezz Corp. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Q5;
