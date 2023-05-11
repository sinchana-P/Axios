import { useEffect } from 'react';
import axios from 'axios';

// these r 2 different SERVERS :
const productsUrl = 'https://course-api.com/react-store-products';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    // console.log('global axios instance');
    try {
      const resp1 = await axios(productsUrl);
      console.log(resp1);
      const resp2 = await axios(randomUserUrl);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;




// look output under :
// NETWORK > Name : react-store-products > Request Headers > Accept : application/json
// So, any request u will set up u will have this, Accept header added because 
// we did tht set up GLOBAL INSTANCE

// refer README.md