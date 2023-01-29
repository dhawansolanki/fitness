   import axios from "axios"
import React, { Fragment, useState } from "react";

const Exe = () => {
    let name = 'KB';
    let [exercise, setExercise] = useState();
    let [email, setEmail] = useState('dhawansada@asd.sdad')
    let [level, setLevel] = useState()
    let [type, setType] = useState()
    // setEmail("dhawansada@asd.sdad")
    // console.log(email);
    const get_userdata = async () => {
        console.log("afgdsfgfg")
        let response = await axios.get(`http://localhost:8080/details/api/userdata`, {
          email: email,
        })
        .then(function (response) {
            var data = response.data.data.rows
            console.log("email", email)
            setLevel(data[0].level)
            console.log(response.data.data.rows)
            setType(data[0].exercise_type)
            console.log(level, type, 'ghseijndakfjfdk')
        })
        .catch(function (error) {
          alert("Errorrrrrrrrrrrr", );
        });
    };

    const getExercise = async () => {
        let response = await axios.get(`https://api.api-ninjas.com/v1/exercises`, {params: {difficulty: level, type: type}}
        )
        .then(function (response){
            console.log('ddasdsadsadsa', response)
        })
    }

  return (
    <div className="mx-auto my-10 max-w-sm w-full">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <button onClick={(e)=>get_userdata()}>faddsa</button>
            efkmscdx
    </div>
)
}

export default Exe