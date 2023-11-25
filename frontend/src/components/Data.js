import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Data.css";
import { Link } from "react-router-dom";
export default function Data() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/delete/" + id)
      .then((res) => window.location.reload())
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>
        Customer <span>Details</span>
      </h1>
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Phone no</td>
            <td>Email</td>
            <td>Address</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((cust) => {
            return (
              <tr key={cust.customer_id}>
                <td>{cust.customer_id}</td>
                <td>{cust.name}</td>
                <td>{cust.phone}</td>
                <td>{cust.email}</td>
                <td>{cust.address}</td>
                <td>
                  <button
                    onClick={() => handleDelete(cust.customer_id)}
                    className="delete-button action-btn"
                  >
                    Delete
                  </button>
                  <Link
                    to={`/update/${cust.customer_id}`}
                    className="update-button action-btn"
                  >
                    Update
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Data.css";
// import { Link } from "react-router-dom";

// export default function Data() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/")
//       .then((res) => {
//         if (Array.isArray(res.data)) {
//           setData(res.data);
//         } else {
//           console.error("Invalid data format:", res.data);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);

//   console.log(data);

//   return (
//     <div>
//       <h1>
//         Customer <span>Details</span>
//       </h1>
//       <table>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Phone no</td>
//             <td>Email</td>
//             <td>Address</td>
//             <td>Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(data) && data.length > 0 ? (
//             data.map((cust) => (
//               <tr key={cust.customer_id}>
//                 <td>{cust.customer_id}</td>
//                 <td>{cust.name}</td>
//                 <td>{cust.phone}</td>
//                 <td>{cust.email}</td>
//                 <td>{cust.address}</td>
//                 <td>
//                   <button className="delete-button action-btn">Delete</button>
//                   <Link
//                     to={`/update/${cust.customer_id}`}
//                     className="update-button action-btn"
//                   >
//                     Update
//                   </Link>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6">No data available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./Data.css";
// import { Link } from "react-router-dom";

// export default function Data() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get("http://localhost:8000/");
//         console.log("Server Response:", res);

//         if (Array.isArray(res.data)) {
//           setData(res.data);
//         } else {
//           setError("Invalid data format");
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError("Error inside server");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div>
//       <h1>
//         Customer <span>Details</span>
//       </h1>
//       <table>
//         <thead>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Phone no</td>
//             <td>Email</td>
//             <td>Address</td>
//             <td>Actions</td>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((cust) => (
//             <tr key={cust.customer_id}>
//               <td>{cust.customer_id}</td>
//               <td>{cust.name}</td>
//               <td>{cust.phone}</td>
//               <td>{cust.email}</td>
//               <td>{cust.address}</td>
//               <td>
//                 <button className="delete-button action-btn">Delete</button>
//                 <Link
//                   to={`/update/${cust.customer_id}`}
//                   className="update-button action-btn"
//                 >
//                   Update
//                 </Link>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }
