import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Adminmain.css";
import Adminnav from './Adminnav';
const Adminmain = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
      const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/getallappointments");
        const data = response.data;
        if (data.status) {
          setCars(data.data);
        } else {
          console.log("Error fetching data:", data.msg);
        }
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };
    fetchAppointments();
  }, []);
  const handleStatusChange = async (carIndex, serviceIndex, event) => {
    const newStatus = event.target.value;
    const updatedCars = [...cars];
    const appointmentId = updatedCars[carIndex].appointment_id;
    const serviceName = updatedCars[carIndex].services[serviceIndex].service_name;
    updatedCars[carIndex].services[serviceIndex].status = newStatus;
    setCars(updatedCars);
    try {
      const response = await axios.post("http://localhost:3000/updateservicestatus", {
        appointment_id: appointmentId,
        service_name: serviceName,
        new_status: newStatus
      });
      const data = response.data;
      if (!data.status) {
        console.error("Error updating status:", data.msg);
        updatedCars[carIndex].services[serviceIndex].status = event.target.defaultValue;
        setCars(updatedCars);
      } else {
        console.log("Status updated successfully:", data.msg);
      }
    } catch (error) {
      console.error("Error updating service status:", error);
      updatedCars[carIndex].services[serviceIndex].status = event.target.defaultValue;
      setCars(updatedCars);
    }
  };
  const toggleAccordion = (index) => {
    const acc = document.getElementsByClassName("accordion");
    acc[index].classList.toggle("active");
    const panel = acc[index].nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };
  return (
    <>
      <Adminnav />
      <div>
        {cars.map((car, carIndex) => (
          <div key={carIndex}>
            <button className="accordion" onClick={() => toggleAccordion(carIndex)}>
              <p>Car Registration Number: {car.registration_number}</p> <br />
              <p>Car Name: {car.car_model}</p> <br />
              <p>Customer Name: {car.name}</p>
            </button>
            <div className="panel">
              <table>
                <thead>
                  <tr>
                    <th>Service Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {car.services.map((service, serviceIndex) => (
                    <tr key={serviceIndex}>
                      <td>{service.service_name}</td>
                      <td>
                        <select
                          value={service.status}
                          onChange={(event) => handleStatusChange(carIndex, serviceIndex, event)}
                          className="selectoption"
                        >
                          <option value="Completed" className="dropoptions">Completed</option>
                          <option value="Pending" className="dropoptions">Pending</option>
                          <option value="In Progress" className="dropoptions">In Progress</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Adminmain;