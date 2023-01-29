import axios from "axios"
import React, { Fragment, useState } from "react";

const Q1 = () => {
//   let response_name= await axios.get(`http://localhost:8080/details/getName`, {
//   email: cookies.get('username')
//   .then(function(response){
//       console.log(response.data);
//   })
// });
    let name = 'KB';
    let exercises = {'Cardio':'cardio', 'Olympic Weightlifting':'olympic_weightlifting', 'Powerlifting':'powerlifting', 'Strength':'strength', 'Stretching':'stretching', 'Strongman':'strongman'}
    let [exercise, setExercise] = useState();
    var ex;
    const postexercise = async (ex) => {
        console.log("exercise", exercises[ex]);
        let response = await axios.post(`http://localhost:8080/details/post/exercise`, {
          exercise: exercises[ex],
        })
        .then(function (response) {
          window.location.href = "/p2";
  
        })
        .catch(function (error) {
          alert("Errorrrrrrrrrrrr", );
        });
  
       
// }
    };
  return (
    <div className="mx-auto my-10 max-w-sm w-full">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="border p-4 rounded">
  <form>
    <h1 style={{fontWeight:'bold'}} className='text-center mb-4 text-2xl'>Thanks {name}!</h1>
    <div className='text-center'> Select which one is the most important to you.</div>
    <br/>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }}
    style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Cardio
</p>
    </div>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }}style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Olympic Weightlifting
</p>
    </div>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }} style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Powerlifting
</p>
    </div>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }} style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Strength
</p>
    </div>
    <div class="mb-4" >
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }} style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
    Stretching
</p>
    </div>
    <div class="mb-6">
    <p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }} style={{cursor:'pointer'}} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 w-full px-4 border border-gray-400 rounded shadow">
    Strongman
</p>
    </div>
    <div class="flex items-center justify-between">
    {/* <button onClick={e=>} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  BACK TO HOME
</button> */}
<p></p>
<p onClick={(e)=>{
      e.preventDefault();
      console.log(e.target.innerHTML);
      setExercise(e.target.innerHTML);
      postexercise(e.target.innerHTML);
    }} style={{cursor:'pointer'}} class="bg-blue-500 hover:bg-blue-700 hover:curser-pointer text-white font-bold py-2 px-4 border border-blue-700 rounded">
  NEXT
</p>
    </div>
  </form>
  <p class="text-center text-gray-500 text-xs">
    &copy;2023 Fitnezz Corp. All rights reserved.
  </p>
</div>
    </div>
  )
}

export default Q1