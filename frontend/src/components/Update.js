import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/update/" + id)
      .then((res) => {
        console.log(res);
        setValues({
          ...values,
          name: res.data[0].name,
          phone: res.data[0].phone,
          email: res.data[0].email,
          address: res.data[0].address,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/updatedata/" + id, values)
      .then((res) => {
        console.log(res);
        navigate("/details");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="cust-form">
      <form action="" onSubmit={handleUpdate}>
        <h1>
          Update Your <span>Details</span>
        </h1>
        <input
          type="text"
          placeholder="Enter Your Name"
          name="name"
          id="name"
          value={values.name}
          onChange={(e) => {
            setValues({ ...values, name: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="mobile no"
          name="phone"
          id="phone"
          value={values.phone}
          onChange={(e) => {
            setValues({ ...values, phone: e.target.value });
          }}
        ></input>
        <input
          type="email"
          placeholder="Enter Your email"
          name="email"
          id="email"
          value={values.email}
          onChange={(e) => {
            setValues({ ...values, email: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Address"
          name="address"
          id="address"
          value={values.address}
          onChange={(e) => {
            setValues({ ...values, address: e.target.value });
          }}
        ></input>

        <button className="submit-btn btn">submit</button>
        <button className="update-btn  btn">update</button>
      </form>
    </div>
  );
}
