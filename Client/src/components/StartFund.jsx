import React, { useState } from 'react';
import axios from 'axios';

export const StartFundcomp = () => {
    const [PageNo,setPageno] = useState("0");
    const [relationparent, setRelationparent] = useState('');
    const [educationparent, setEducationparent] = useState('');
    const [employmentparent, setEmploymentparent] = useState('');
    const [amountparent, setAmountparent] = useState('');
    const [optfile, setOptfile] = useState(null); 

    const Fund1page = () => {
        const [relation, setRelation] = useState('');
        const [education, setEducation] = useState('');
        const [employment, setEmployment] = useState('');
        const [amount, setAmount] = useState('');
        const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRelationparent(relation);
    setEducationparent(education);
    setEmploymentparent(employment);
    setAmountparent(amount);
    setOptfile(file);
    setPageno("1");
  };

  const handlefileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
        const fileurl = URL.createObjectURL(file);
        setFile(fileurl);
    }
    }

  return (
    <div className="max-w-lg mx-auto mt-20 p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">Tell us more about your Fundraiser</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-sm font-medium text-gray-600">
          Raising funds for <span className="font-bold">Medical Treatment</span> purpose
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
            How much do you want to raise? *
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Should be minimum ₹2000"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
          />
        </div>
        <div>
          <label htmlFor="relation" className="block text-sm font-medium text-gray-700">
            The Patient is my... *
          </label>
          <select
            id="relation"
            value={relation}
            onChange={(e) => setRelation(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Select...</option>
            <option value="self">Self</option>
            <option value="father">Father</option>
            <option value="mother">Mother</option>
            <option value="grandfather">Grandfather</option>
            <option value="grandmother">Grandmother</option>
          </select>
        </div>
        <div>
          <label htmlFor="education" className="block text-sm font-medium text-gray-700">
            Categeory *
          </label>
          <select
            id="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Select...</option>
            <option value="highschool">Children</option>
            <option value="bachelor">Animal</option>
            <option value="master">Food And Hunger</option>
            <option value="phd">Women</option>
            <option value="phd">Men</option>
          </select>
        </div>

        <div>
          <label htmlFor="employment" className="block text-sm font-medium text-gray-700">
            Your Employment Status *
          </label>
          <select
            id="employment"
            value={employment}
            onChange={(e) => setEmployment(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="">Select...</option>
            <option value="student">Student</option>
            <option value="employed">Employed</option>
            <option value="unemployed">Unemployed</option>
            <option value="selfemployed">Self-Employed</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Add fundraiser image/video (Optional)
          </label>
          <input
            type="file"
            onChange={handlefileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600"
          >
            Save and continue
          </button>
        </div>
      </form>
    </div>
  );
    }

    const Fund2page = () => {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const [urgent, setUrgent] = useState(false);
        const [operationDate, setOperationDate] = useState(null);
        const [pdffile,setPdffile] = useState(null);

        const handlefileChange = (e) => {
            const file = e.target.files[0];
            if (file) {
                const fileurl = URL.createObjectURL(file);
                setPdffile(fileurl);
            }
        }

        const handleSubmit = async (e) => {
          e.preventDefault();
          const formdata = new FormData();
          formdata.append('file', pdffile);
          formdata.append('title', title);
          formdata.append('description', description);
          formdata.append('urgent', urgent);
          formdata.append('operationDate', operationDate);
          formdata.append('relation', relationparent);
          formdata.append('education', educationparent);
          formdata.append('employment', employmentparent);
          formdata.append('target', amountparent);
          
          const upl = await axios.post('http://localhost:3000/api/v1/post/create',formdata);

          if(upl.status === 200) {
            console.log("Success!");
          }
          else{
            console.log("Not successfull : ",upl);
          }


        };
      
        return (
            <div className="max-w-lg mt-20 mx-auto p-6 bg-white rounded-lg shadow-2xl">
              <h2 className="text-2xl font-semibold mb-4">Operation Fundraiser</h2>
        
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title *
                  </label>
                  <input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description *
                  </label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                    rows="4"
                  />
                </div>
        
                <div>
                  <label htmlFor="medicalDocument" className="block text-sm font-medium text-gray-700">
                    Medical Document *
                  </label>
                  <input
                    id="medicalDocument"
                    type="file"
                    onChange={handlefileChange}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-teal-50 file:text-teal-700 hover:file:bg-teal-100"
                    required
                  />
                </div>
        
                <div className="flex items-center justify-between">
                  <label htmlFor="urgent" className="block text-sm font-medium text-gray-700">
                    Mark as Urgent
                  </label>
                  <div
                    className={`relative inline-block w-12 h-6 rounded-full transition duration-200 ease-in-out cursor-pointer ${urgent ? 'bg-teal-500' : 'bg-gray-300'}`}
                    onClick={() => setUrgent(!urgent)}
                  >
                    <div
                      className={`absolute left-0 top-0 h-6 w-6 bg-white rounded-full transition-transform duration-200 ease-in-out transform ${urgent ? 'translate-x-6' : ''}`}
                    ></div>
                  </div>
                </div>
                <div>
                  <label htmlFor="operationDate" className="block text-sm font-medium text-gray-700">
                    Operation Date *
                  </label>
                  <input
                    id="operationDate"
                    type="date"
                    value={operationDate}
                    onChange={(e) => setOperationDate(e.target.value)}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
        
                <div className="flex">
                    <button className='w-1/4 mr-4 bg-red-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600' onClick={()=>{
                        setPageno("0");
                    }}>
                      &lt; Back
                    </button>
                  <button
                    type="submit"
                    className="w-full bg-teal-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-teal-600"
                  >
                    Create Fundraiser
                  </button>
                </div>
              </form>
            </div>
          );
        };
    return (
        <div>
            {PageNo == "0" ? <Fund1page /> : <Fund2page />}
        </div>
    );

};
