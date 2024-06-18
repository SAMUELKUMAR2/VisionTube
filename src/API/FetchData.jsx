import axios from "axios";
// const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// const BASE_URL ='https://youtube-v311.p.rapidapi.com';

const options = { 
   
    params: {
      
      maxResults: '50'
    },
    headers: {
      // 'X-RapidAPI-Key': 'ca1084edb5mshfd96c592b39fa1ep1d9064jsnb9a248678b94',
      // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
      'X-RapidAPI-Key': 'dc7ad32174msha2b93b940102a2bp14042ejsnc666a54e2fa6',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //   'X-RapidAPI-Key': 'dc7ad32174msha2b93b940102a2bp14042ejsnc666a54e2fa6',
    // 'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
    }
  };
  

export const FetchData = async(url)=>{
const {data} =await axios.get(`${BASE_URL}/${url}`,options);
return data;
}