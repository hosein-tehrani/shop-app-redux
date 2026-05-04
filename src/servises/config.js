import axios from "axios";

const api = axios.create({
    baseURL: "baseURL"
})

// api.interceptors.request.use(
//   (request)=> {//first function for successfull request
//     request.headers.Authorization = "token"
//     return request;//must return this
//   },
//   (error)=> {//second function for failed request
//     console.log(error);
//     return Promise.reject(error);//must return this
    
//   }
// )
api.interceptors.response.use(
  (response)=> {//first function for successfull response
    return response.data;//dige to component nemigim set kon res.data. faght data
  },
  (error)=> {//second function for failed response
    console.log(error);
    return Promise.reject(error);//must return this
    
  }
)

export default api;