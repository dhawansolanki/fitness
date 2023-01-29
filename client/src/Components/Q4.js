import React, { Fragment, useState } from "react";

import axios from "axios"

const Q4 = () => {
    let [Gender, setGender] = useState();

  // let levels = {"Male": 'beginner', "Intermediate": 'intermeddiate', "Expert": 'expert'};
  const postGender = async (lv) => {
    console.log("level", lv);
    let response = await axios.post(`http://localhost:8080/details/post/gender`, {
      gender: lv,
    })
    .then(function (response) {
      window.location.href = "/q5";

    })
    .catch(function (error) {
      alert("Errorrrrrrrrrrrr", );
    });
  }
  return (
    <div className="mx-auto my-10 max-w-sm w-full">
           <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="border p-4 rounded">
  <form>
    <h1 style={{fontWeight:'bold'}} className='text-center mb-4 text-2xl'>What is your Gender?</h1>
    <div className='text-center'> Select one of the below.</div>
    <br/>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setGender(e.target.innerHTML);
      postGender(e.target.innerHTML);
    }}  style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Male
</p>
    </div>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setGender(e.target.innerHTML);
      postGender(e.target.innerHTML);
    }}  style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Female
    </p>
    </div>
    <div class="mb-6">
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setGender(e.target.innerHTML);
      postGender(e.target.innerHTML);
    }}  style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 w-full px-4 border border-gray-400 rounded shadow">
    Rather not say
</p>
    </div>
    <div class="flex items-center justify-between">
    <p onClick={e=>window.location.href="/q3"} style={{cursor:'pointer'}} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  BACK
</p>
<p onClick={e=>window.location.href="/q5"} style={{cursor:'pointer'}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  NEXT
</p>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;©2023 Fitnezz Corp. All rights reserved.
  </p>
</div>
    </div>
  )
}

export default Q4