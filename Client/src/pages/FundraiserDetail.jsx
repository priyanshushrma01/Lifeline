import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const FundraiserDetail = () => {
  const { id } = useParams(); 
  const [fundraiser, setFundraiser] = useState(null);

  function daysleft () {
    if(fundraiser){
      const currdate = Date.now();
      const futdate = fundraiser.date;
      const diff = Math.abs(futdate - currdate);
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      return days;
    }
  }

  // const fetchdata = async () => {
  //   const response = await axios.get(`http://localhost:3000/api/v1/post/single/${id}`);
  //   if (response.status === 200) {
  //     setFundraiser(response.data);
  //   } else {
  //     console.error("Failed to fetch fundraiser");
  //   }
  // }

  useEffect(() => {
    // Fetch the correct fundraiser based on id
    const fetchFundraiser = async () => {
      const data = [
        {
          id: 1,
          title: "Your support gave my son a second chance at life",
          target: "₹10,00,000",
          raised: "₹5,00,000",
          supporters: 1200,
          daysLeft: 20,
          image: "https://kettocdn.gumlet.io/media/banner/0/94/image/26fe5c8a80fe779e091bd15f4de3c80224ca7c5b.jpg",
          about: "This fundraiser helped John's son recover from a critical illness.",
          bankInfo: "Account Name: John Doe | Account Number: 123456789 | IFSC: ABCD1234",
          campaigner: "John Doe",
          beneficiary: "John's Son"
        },
        {
          id: 2,
          title: "My daughter finally gets to enjoy her childhood",
          target: "₹8,00,000",
          raised: "₹4,50,000",
          supporters: 980,
          daysLeft: 30,
          image: "https://kettocdn.gumlet.io/media/banner/0/95/image/bc5ae443b8da492ff0c97082e2981ada078e385d.jpg",
          about: "This fundraiser was for Jane's daughter to receive medical treatment.",
          bankInfo: "Account Name: Jane Smith | Account Number: 987654321 | IFSC: WXYZ5678",
          campaigner: "Jane Smith",
          beneficiary: "Jane's Daughter"
        },
        // Add more data as needed
      ];

      const selectedFundraiser = data.find(f => f.id === parseInt(id));
      setFundraiser(selectedFundraiser);
    };
    fetchFundraiser();
  }, [id]);

  if (!fundraiser) {
    return <div className="text-center py-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">{fundraiser.title}</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="w-full md:w-2/5 mb-4 md:mb-0">
          <img src={fundraiser.image} alt="Fundraiser" className="rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105" />
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200 w-full">
            Share This Fundraiser
          </button>
        </div>

        <div className="w-full md:w-3/5">
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <p className="text-gray-700 text-lg font-semibold">Raised: <span className="text-green-600">{fundraiser.raised}</span> of {fundraiser.target}</p>
            <p className="text-gray-700 mt-2">Supporters: <span className="text-gray-800 font-semibold">{fundraiser.supporters}</span></p>
            <p className="text-gray-700 mt-2">Days Left: <span className="text-red-600 font-semibold">{daysleft()}</span></p>
            <div className="relative mt-4 h-4 rounded-full overflow-hidden bg-gray-200">
              <div className="absolute top-0 left-0 h-full bg-green-500" style={{ width: `${(parseInt(fundraiser.raised.replace(/[^0-9]/g, "")) / parseInt(fundraiser.target.replace(/[^0-9]/g, ""))) * 100}%` }}></div>
            </div>
            <button className="bg-teal-500 text-white px-6 py-2 my-2 rounded hover:bg-teal-600 transition duration-200">
              Contribute Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Boxed Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold">About the Fundraiser</h2>
          <p className="mt-2 text-gray-700">{fundraiser.about}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold">Bank Info</h2>
          <p className="mt-2 text-gray-700">{fundraiser.bankInfo}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold">Campaigner</h2>
          <p className="mt-2 text-gray-700">{fundraiser.campaigner}</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-bold">Beneficiary</h2>
          <p className="mt-2 text-gray-700">{fundraiser.beneficiary}</p>
        </div>
      </div>
    </div>
  );
};
