import { useState } from "react"
import InputField from "./Inputbox";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

export function Signincomp () {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();
    return <div className="h-screen flex justify-center flex-col">
    <div className="flex justify-center">
    <div className="block w-3/12  p-6 bg-white border border-gray-200 rounded-lg shadow">
            <div className="">
                <div className="pr-10 pl-2 my-6">
                    <div className="text-5xl  text-center font-extrabold">
                       <Link to="/signin"> SignIn </Link>
                    </div>
                </div>
                <div className="pt-2">
                    <InputField label={"Username"} placeholder={"example123"} onChange={(e)=>{
                        setUsername(e.target.value);
                    }} />
                    <InputField label={"Password"} placeholder={"123"} onChange={(e)=>{
                        setPassword(e.target.value);
                    }} />

                    <button onClick={async ()=>{ const request=await axios.post("http://localhost:3000/api/v1/user/signin",{
                        username,
                        password,
                    });
                    console.log(request);
                    if (request.status === 200) {
                        const token = request.data.token;
                        localStorage.setItem('token',token);
                        navigate('/LandingPage');
                    } else {
                        console.log("Error in creating user");
                    }
                    }} type="button" className="mt-4 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2">Sign in</button>

                    <div className="text-left mt-2 text-lg text-gray-600">
                        Don't have an account? <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-800">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

}