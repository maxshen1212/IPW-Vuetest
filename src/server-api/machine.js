import axios from "axios";

// user.js
const tempRequest = axios.create({
  baseURL: "http://127.0.0.1:3000/api/",
});

export const machineAll = () =>
  tempRequest.get("/get_machine_info").then((response) => {
    let sqlData = [
      response.data[0].spindle_speed,
      response.data[0].current,
      response.data[0].voltage,
      response.data[0].power,
      response.data[0].speed_loop_feedback,
      response.data[0].position_loop_feedback,
      response.data[0].spring_constant,
      response.data[0].quadrant_protrusion_correction,
      response.data[0].viscosity_coefficient,
      response.data[0].machine_processing_time,
    ];
    return sqlData;
  });

export const machineHistory = (dataType) =>
  tempRequest
    .get("/historical_machine_info", { params: { x: dataType } })
    .then((response) => {
      // console.log(response);
      return response.data;
    });

// export const postUserLogin = data => userRequest.post('/signIn', data)
