import React from "react"
import Cookies from "universal-cookie";
const Header=()=>{
    const cookies = new Cookies();
  const email = cookies.get("Email") || null;
  console.log("Cookiee is : ",email)
  const logout=()=>{
    cookies.remove("Authorization");
    cookies.remove("Email");
    console.log("Logout Successfully")
  }
    return(
        <div style={{background:"white",padding:"10px","position":"fixed",width:"100%"}}>
          <div class="flex justify-center  ">
                                            <nav class="self-center w-full max-w-7xl  ">
                                                <div class="flex flex-col lg:flex-row justify-around items-center ">
                                                    {/* <h1 class="uppercase pl-5 py-4 text-lg font-sans font-bold">hero</h1> */}
                                                    <img src="./logo.png" style={{width:"150px",height:"50px"}} />
                                                    <ul class="hidden lg:flex items-center text-[18px] font-semibold pl-32">
                                                        <li class="hover:underline  underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5">
                                                            <a href="./">Home</a>
                                                        </li>
                                                        <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="#">Contact</a></li>
                                                        <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="#">Services</a></li>
                                                        <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="#">About</a></li>
                                                        <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="#">Pricing</a></li>
                                                                {email == null ? 
                                                                <>
                                                        <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="./login">Login</a></li>
                                                        <li class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="./register">Signup</a></li>
                                                                </>:
                                                                <div>
                                                                <li  onClick={(e)=>logout()} class="hover:underline underline-offset-4 decoration-2 decoration-white py-2 rounded-lg px-5"><a
                                                                href="./login">Logout</a></li>
                                                                </div>}
                                                    </ul>
                                                    <div class=" text-center text-base pr-5  inline-flex"> <a href="#"
                                                            class="w-8 h-8 inline-block rounded-full pt-[6px] hover:text-blue-500"><i
                                                                class="fa fa-twitter"></i></a> <a href="#"
                                                            class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                class="fa fa-instagram"></i></a> <a href="#"
                                                            class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                class="fa fa-facebook"></i></a> <a href="#"
                                                            class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                class="fa fa-google"></i></a> <a href="#"
                                                            class="w-8 h-8 inline-block rounded-full pt-[5px] hover:text-blue-500"><i
                                                                class="fa fa-linkedin"></i></a> </div>
                                                </div>
                                            </nav>
                                        </div>

        </div>
    )
}

export default Header