import { useState } from "react";

const Login = () =>{
   
  const [account , toggleAccount]=useState('login');
  const toggleSignUp =() =>{
    account==='signup'? toggleAccount('login'): toggleAccount('signup');

  }
    return(
     account === 'login'?
     <>
    <div className="flex h-screen">
      <div className="flex col w-3/5  h-full bg-[#fcfcfe]">
      <div className=" w-full">
    
        <div className="flex row text-2xl font-bold justify-start  pt-7 mt-14 ml-16">
            Log in
        </div>
        <div className="flex row text-sm text-sm font-semibold pt-2 ml-16 text-gray-500">
            Enter your credentials to access your account
        </div>
        <div className="flex row ml-16 mt-10 ">
        <button class=" flex w-3/5 justify-center bg-transparent hover:bg-blue-500 shadow text-gray-500 font-semibold hover:text-white py-2 border border-black-500 hover:border-transparent rounded ">
          <img src="https://madeby.google.com/static/images/google_g_logo.svg" className="flex w-6  ml-3 mr-3" alt="sorry"/>Log In with Google
        </button>
        </div>
         <div class="relative flex py-5 ml-16 w-3/5 pr-10 items-center ">
            <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">OR</span>
            <div class="flex-grow border-t border-gray-400"></div>
         </div>
         
          <label className="flex row text-l font-semibold pt-6 ml-16 text-gray-500">Email address</label>
         <input className=" flex row shadow appearance-none border rounded mt-3 py-3 ml-16 px-3 w-3/5 mr-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="xyz@company.com">
         </input>
         <label className="flex row text-l font-semibold pt-6 ml-16 text-gray-500"> Password </label>
         <input className=" flex row shadow appearance-none border rounded mt-3 py-3 ml-16 px-3 w-3/5 mr-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your password">
         </input>
         <div className="form-check flex row ml-16 mt-5">
      <input className="flex form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      </input>
      <label class=" flex form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Remember information
      </label>
    </div>
         <div className="flex row ml-16  mt-14  ">
          <button class=" flex w-3/5 justify-center bg-blue-700 shadow text-white font-semibold hover:text-gray-300 py-2 border border-black-500 hover:border-transparent rounded ">
              Login
          </button>
         </div>
      
         <div className="flex row">
         <div className="flex ml-16 mt-8 ">
         Don't have an account?
         </div>
         <div onClick={()=>toggleSignUp()} className="flex ml-2 mt-8 text-blue-700">
      
         Sign up
         </div>
         </div>
        
         
    </div>
         
      </div>
    
      <div className="flex col w-2/5 h-full bg-[url('E:\Blog-application\client\public\LoginPage1.jpg')]  bg-center pl-14  bg-contain bg-no-repeat bg-[#edf0f5] bg-top">
        
      </div>
      </div>
      </>
      :
  <>
      <div className="flex h-screen">
      <div className="flex col w-3/5  h-full bg-[#fcfcfe]">
      <div className=" w-full">
        <div className="flex row text-2xl font-bold justify-start  pt-7 mt-14 ml-16">
            Sign Up
        </div>
        <div className="flex row text-sm text-sm font-semibold pt-2 ml-16 text-gray-500">
            Enter your credentials to access your account
        </div>
        {/* <div className="flex row ml-16 mt-10 ">
        <button class=" flex w-3/5 justify-center bg-transparent hover:bg-blue-500 shadow text-gray-500 font-semibold hover:text-white py-2 border border-black-500 hover:border-transparent rounded ">
          <img src="https://madeby.google.com/static/images/google_g_logo.svg" className="flex w-6  ml-3 mr-3" alt="sorry"/>Log In with Google
        </button>
        </div>
         <div class="relative flex py-5 ml-16 w-3/5 pr-10 items-center ">
            <div class="flex-grow border-t border-gray-400"></div>
              <span class="flex-shrink mx-4 text-gray-400">OR</span>
            <div class="flex-grow border-t border-gray-400"></div>
         </div> */}
         <label className="flex row text-l font-semibold pt-6 ml-16 text-gray-500">Name</label>
         <input className=" flex row shadow appearance-none border rounded mt-3 py-3 ml-16 px-3 w-3/5 mr-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="xyz@company.com">
         </input>
         
          <label className="flex row text-l font-semibold pt-6 ml-16 text-gray-500">Email address</label>
         <input className=" flex row shadow appearance-none border rounded mt-3 py-3 ml-16 px-3 w-3/5 mr-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="xyz@company.com">
         </input>
         <label className="flex row text-l font-semibold pt-6 ml-16 text-gray-500"> Password </label>
         <input className=" flex row shadow appearance-none border rounded mt-3 py-3 ml-16 px-3 w-3/5 mr-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter your password">
         </input>
         <div className="form-check flex row ml-16 mt-5">
      <input className="flex form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault">
      </input>
      <label class=" flex form-check-label inline-block text-gray-800" for="flexCheckDefault">
        Remember information
      </label>
    </div>
         <div className="flex row ml-16  mt-14  ">
          <button class=" flex w-3/5 justify-center bg-blue-700 shadow text-white font-semibold hover:text-gray-300 py-2 border border-black-500 hover:border-transparent rounded ">
              Sign Up
          </button>
         </div>
      
         <div className="flex row">
         <div className="flex ml-16 mt-8 ">
         Already have an account?
         </div>
         <div onClick={()=>toggleSignUp()} className="flex ml-2 mt-8 text-blue-700">
         Log In
      
         </div>
         </div>
        
         
    </div>
         
      </div>
    
      <div className="flex col w-2/5 h-full bg-[url('E:\Blog-application\client\public\LoginPage1.jpg')]  bg-center pl-14  bg-contain bg-no-repeat bg-[#edf0f5] bg-top">
        
      </div>
      </div>
      </>
    
    
    
    
    )
}
export default Login;