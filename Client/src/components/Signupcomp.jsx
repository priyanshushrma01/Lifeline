import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Inputbox } from "./Inputbox";



export const Signupcomp = ()=>{
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [phone_no,setPhone_no] = useState("");
    const [Dob,setDob] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    return <div className="flex">
        <div className="w-1/2 bg-[url('https://i.pinimg.com/originals/17/8b/a8/178ba868b08a89e06e120e7fddf71d8f.jpg')] bg-cover bg-center h-screen">
            <div className="text-white text-3xl font-extrabold p-5 pl-14">LifeLine</div>
        </div>
        <div className=" h-screen w-1/2 flex justify-center">
        <div className="flex flex-col w-full justify-center">
            <div className="bg-white rounded-lg w-3/5 mx-auto  text-center p-2 px-4 h-max">
                <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
                <div>
                    <Inputbox label={"FirstName"} placeholder={""} onChange={(e)=>{
                        setFirstName(e.target.value);
                    }}/>
                </div>
            </div>
            
        </div>
        
        </div>
    </div>
}