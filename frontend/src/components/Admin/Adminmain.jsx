import React, { useState, useEffect } from "react";
import Adminnav from './Adminnav';
import "./Adminmain.css";

const Adminmain = () => {
  const initialCars = [
    {
      regNumber: "ABC123",
      carName: "Toyota Camry",
      customerName: "John Doe",
      services: [
        { type: "Oil Change", status: "Completed" },
        { type: "Tire Rotation", status: "Pending" },
        { type: "Brake Inspection", status: "In Progress" }
      ]
    },
    {
      regNumber: "DEF456",
      carName: "Honda Accord",
      customerName: "Jane Smith",
      services: [
        { type: "Battery Check", status: "Completed" },
        { type: "Engine Tune-up", status: "In Progress" },
      ]
    },
    {
      regNumber: "GHI789",
      carName: "Tesla Model S",
      customerName: "Alice Johnson",
      services: [
        { type: "Software Update", status: "Completed" },
        { type: "Tire Replacement", status: "Pending" },
      ]
    }
  ];

  const [cars, setCars] = useState(initialCars);

  useEffect(() => {
    const acc = document.getElementsByClassName("accordion");
    for (let i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        const panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    return () => {
      for (let i = 0; i < acc.length; i++) {
        acc[i].removeEventListener("click", function () {
          // Cleanup function
        });
      }
    };
  }, []);

  const handleStatusChange = (carIndex, serviceIndex, event) => {
    const newCars = [...cars];
    newCars[carIndex].services[serviceIndex].status = event.target.value;
    setCars(newCars);
  };

  return (
    <>
      <Adminnav />
      <div>
        {cars.map((car, carIndex) => (
          <div key={carIndex}>
            <button className="accordion">
              <p>Car Registration Number:{car.regNumber}</p> <br />
              <p>Car Name:{car.carName}</p> <br />
              <p>Customer Name{car.customerName}</p>
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
                      <td>{service.type}</td>
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
}

export default Adminmain;
