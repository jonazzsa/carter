import React, { useState } from "react";
import api from "./../../api/api";

const MovieForm: React.FC = () => {
  const [formInfo, setFormInfo] = useState({
    firstName: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
  };

  return (
    <div className="movie-form">
      <form onSubmit={handleSubmit}>
        <input
          value={formInfo.firstName}
          name="firstName"
          onChange={handleChange}
          required
          placeholder="First Name *"
        />
        <input
          value={formInfo.surname}
          name="surname"
          onChange={handleChange}
          required
          placeholder="Surname *"
        />
        <input
          value={formInfo.email}
          name="email"
          onChange={handleChange}
          required
          type="email"
          placeholder="Email Address *"
        />
        <input
          value={formInfo.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          required
          placeholder="Phone Number *"
        />
        <input type="submit" value="Get movie" />
      </form>
    </div>
  );
};

export default MovieForm;
