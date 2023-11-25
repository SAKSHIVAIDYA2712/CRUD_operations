import React, { useState } from "react";
import "./Cust.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Cust() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const values = { name: name, phone: phone, email: email, address: address };

  const navigate = useNavigate();

  const submitData = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/cust", values)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="cust-form">
      <form action="" onSubmit={submitData}>
        <h1>
          Enter Your <span>Details</span>
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="mobile no"
          name="phone"
          id="phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        ></input>
        <input
          type="email"
          placeholder="Enter Your email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Address"
          name="address"
          id="address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></input>

        <button className="submit-btn btn">submit</button>
        <button className="update-btn  btn">update</button>
      </form>
    </div>
  );
}
