import { useEffect, useState } from 'react';
import axios from 'axios';

export function Browsefunds() {
  const [Data, setData] = useState(null);

  const fetchdata = async () => {
    const info = await axios.get('http://localhost:3000/api/v1/post/bulk');
    setData(info);
    console.log(Data);
  };

  useEffect(() => {
    fetchdata();
  }, []); 

  return (
    <div className="">
        <div></div>
        <div>
            {Data &&
                Data.data.map((post) => (
                    <Card key={post._id} props={post} />
                ))
            }
                        
        </div>
    </div>
  );
}