import { useState } from "react";
import { Data } from "./Data.jsx";

const Search = () => {
  const [data, setData] = useState(Data);
  const [searchTerm, setSearchTerm] = useState("");

  const filtered_data = data.filter((item)=>{
                            return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            item.brand.toLowerCase().includes(searchTerm.toLowerCase())
                        })


  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Search Food</h1>

      {/* Search Input */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search food by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="table table-bordered table-striped text-center align-middle">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Food Name</th>
            <th>Brand</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filtered_data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.brand}</td>
              <td>
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100px", height: "80px", objectFit: "cover" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
