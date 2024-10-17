import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import InputField from "./Inputbox";

export const Signupcomp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone_no, setPhone_no] = useState("");
    const [Dob, setDob] = useState("");
    const [email, setEmail] = useState("");
    const [File, setFile] = useState(null);
    const [Selected, setSelected] = useState(null);
    const [photourl, setPhotourl] = useState("https://t4.ftcdn.net/jpg/04/98/72/43/360_F_498724323_FonAy8LYYfD1BUC0bcK56aoYwuLHJ2Ge.jpg");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlefileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelected(file);
            setFile(file);
            const fileurl = URL.createObjectURL(file);
            setPhotourl(fileurl);
        }
    }

    const handleCreate = async () => {
        const formData = new FormData();
        formData.append('file', File);
        formData.append('firstname', firstName);
        formData.append('lastname', lastName);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('phone_number', phone_no);
        formData.append('date_of_birth', Dob);
        formData.append('password', password);

        setLoading(true); // Start loading

        try {
            const request = await axios.post("http://localhost:3000/api/v1/user/signup", formData);
            console.log(request);
            if (request.status === 200) {
                navigate('/');
            } else {
                console.log("Error in creating user");
            }
        } catch (error) {
            console.error("Signup error:", error);
            alert("An error occurred while signing up. Please try again.");
        } finally {
            setLoading(false); // End loading
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="bg-white rounded-lg w-3/4 text-center p-2 px-4 h-max">
                <div className="flex justify-around">
                    <div className="w-2/6">
                        <h1 className="text-5xl font-bold mt-4 mb-8">Sign Up</h1>
                        <InputField label={"FirstName"} onChange={(e) => setFirstName(e.target.value)} />
                        <InputField label={"LastName"} onChange={(e) => setLastName(e.target.value)} />
                        <InputField label={"Username"} onChange={(e) => setUsername(e.target.value)} />
                        <InputField label={"Email"} onChange={(e) => setEmail(e.target.value)} />
                        <InputField label={"Phone No."} type={"number"} onChange={(e) => setPhone_no(e.target.value)} />
                        <InputField label={"D.O.B"} type={"date"} onChange={(e) => setDob(e.target.value)} />
                        <InputField label={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="w-2/6 flex flex-col my-auto">
                        <div className="w-52 h-52 m-4 border-2 border-black border-solid flex justify-center items-center rounded-full overflow-hidden">
                            <img src={photourl} className="object-cover w-full h-full" alt="Rounded example" />
                        </div>
                        <div className="flex flex-col">
                            <input type="file" onChange={handlefileChange} className="mt-2 mb-4" />
                        </div>
                    </div>
                </div>
                <button 
                    className={`border-2 border-black border-solid text-3xl mt-2 rounded-2xl p-4 ${loading ? "bg-gray-500" : "bg-red-500"}`} 
                    onClick={handleCreate} 
                    disabled={loading} 
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>
            </div>
        </div>
    );
}
