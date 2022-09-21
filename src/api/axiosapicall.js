import React from 'react'
import axios from 'axios'


 //Weather api
  const getWeatherNews = () => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: { q: "Karachi, Sindh, Pakistan", days: "3" },
    headers: {
      "X-RapidAPI-Key": "4dee516275mshb9f4158543c2b31p1fb2d2jsn183e51d773bc",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      // setWeatherNews(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
export{
  getWeatherNews
}
// const axiosapicall = () => {
    
//   return (
//     <>
//     </>
//   )
// }

// export default axiosapicall