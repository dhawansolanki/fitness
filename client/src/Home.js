import React from "react";
import Hero from "./Components/Hero";
import Homecard from "./Components/Homecard";
import Stats from "./Components/Stats";
import Trainers from "./Components/Trainers";
import Testimonals from "./Testimonals";
const Home=()=>{
    return(
        <div>
            <Hero/>
            <Homecard/>
            <Stats/>
            <Testimonals/>
            <Trainers/>
        </div>
    )
}
export default Home
