import { useEffect } from 'react';
import axios from 'axios'
// limit, if 429 wait for 15 min and try again
const url = 'https://course-api.com/react-store-products';


// follow README.md file
// try catch block is not unique to axios,
// but it's always a good practice to use it
// axios(url) :   default get method

const FirstRequest = () => {

  const fetchData = async () => {
    try{
      const response = await axios(url);
      console.log("response : " ,response);
      console.log("Data : " ,response.data);
      console.log("Status : " ,response.status);
      console.log("statusText : " ,response.statusText);
      console.log("headers : " ,response.headers)
      console.log("request : " ,response.request)
      console.log("config : " ,response.config)
    } catch (error) {
      console.log(error.response);
      console.log(error.response.data);
    }
  }

  useEffect(() => {
    fetchData();
    // console.log('first axios request');
  }, []);


  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;



// FACT:
// AXIOS TREATS ALL OF THE ERRORS

// unlike FETCH :
// IT TREATS ONLY NETWORK ERRORS AS ERRORS