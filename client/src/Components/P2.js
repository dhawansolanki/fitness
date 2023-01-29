import React from 'react'
// import { useNavigate } from "react-router-dom";


const P2 = () => {
        let name = 'KB';
        // const navigate = useNavigate();
    
        // const handleClick = () => {
        //     console.log("snijfkasld")
        //     navigate('/q1')
        // }
          
      return (
        
        <div className="mx-auto my-10 max-w-sm w-full">
            <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="border p-4 rounded">
  <form>
        <h1 style={{fontWeight:'bold'}} className='text-center mb-4 text-2xl'>Great! You've just taken a big step on your journey.</h1>
        <div className='text-center'> <h1> </h1></div>
        <br/>
        <div><p className='text-center'>Did you know that tracking your food is a scientifically proven method to being successful? It's called “self-monitoring” and the more consistent you are, the more likely you are to hit your goals.</p>
        <br/>
        <p className='text-center'>Now, let's talk about your goal!.</p></div>
        <br/>
        <br/>
        
        {/* <div class="mb-4" >
        <button onClick={e => handleClick(e)} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
        Cardio
    </button>
        </div>
        <div class="mb-4" >
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
        Olympic Weightlifting
    </button>
        </div>
        <div class="mb-4" >
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
        Powerlifting
    </button>
        </div>
        <div class="mb-4" >
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
        Strength
    </button>
        </div>
        <div class="mb-4" >
        <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold w-full py-2 px-4 border border-gray-400 rounded shadow" >
        Stretching
    </button>
    <div>
        </div>
    
    </div> */}
    <div class="flex items-center justify-between">
    <p onClick={e=>window.location.href="/q1"} style={{cursor:'pointer'}} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  BACK
</p>
<p onClick={e=>window.location.href="/q3"} style={{cursor:'pointer'}} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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

export default P2