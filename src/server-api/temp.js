import axios from "axios";

// user.js
const tempRequest = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
});

export const tempAll = () =>
  tempRequest.get("/Temp_Perception").then((response) => {
    let sqlData = [
      response.data[0].tt1.toFixed(1),
      response.data[0].tt2.toFixed(1),
      response.data[0].tt3.toFixed(1),
      response.data[0].tt4.toFixed(1),
      response.data[0].tt5.toFixed(1),
      response.data[0].tt6.toFixed(1),
      response.data[0].tt7.toFixed(1),
      response.data[0].tt8.toFixed(1),
      response.data[0].tt9.toFixed(1),
      response.data[0].tt10.toFixed(1),
      response.data[0].tc1.toFixed(1),
      response.data[0].tc2.toFixed(1),
      response.data[0].tc3.toFixed(1),
      response.data[0].tc4.toFixed(1),
      response.data[0].tc5.toFixed(1),
      response.data[0].tc6.toFixed(1),
      response.data[0].tc7.toFixed(1),
      response.data[0].tc8.toFixed(1),
      response.data[0].tc9.toFixed(1),
      response.data[0].tc10.toFixed(1),
    ];
    return sqlData;
  });

export const tempHistory = (tempIndex) =>
  tempRequest
    .get("/Historical_Temp", { params: { x: tempIndex } })
    .then((response) => {
      // console.log(response);
      return response.data;
    });

// export const postUserLogin = data => userRequest.post('/signIn', data)
