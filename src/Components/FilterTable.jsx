import { useState } from "react"
import {AllData} from "./Data.jsx"

const FilterTable = () => {
  const [data, SetAllData] = useState(AllData)

  const handle_sorting = (event) => {
    const selectedOrder = event.target.value;
    console.log("Selected Order:", selectedOrder);

    if (selectedOrder === "Product Z to A") {
      console.log("Sorting Z to A...");
      const sortedData = [...data].sort((a, b) => b.name.localeCompare(a.name));
      SetAllData(sortedData);
    }

    if (selectedOrder === "Product A to Z") {
      console.log("Sorting A to Z...");
      const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
      SetAllData(sortedData);
    }

    if (selectedOrder === "Price High to Low") {
      console.log("Sorting Price High to Low...");
      const sortedData = [...data].sort((a, b) => b.price - a.price);
      SetAllData(sortedData);
    }

    if (selectedOrder === "Price Low to High") {
      console.log("Sorting Price Low to High...");
      const sortedData = [...data].sort((a, b) => a.price - b.price);
      SetAllData(sortedData);
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">💻 Laptop Product List</h3>

      <div className="container my-4">
        <div className="row justify-content-end">
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-3">
              <label htmlFor="select" className="form-label fw-bold mb-0">
                Category:
              </label>
              <select
                id="select"
                className="form-select form-select-sm w-50"
                onChange={handle_sorting}
              >
                <option value="Product A to Z">Product A to Z</option>
                <option value="Product Z to A">Product Z to A</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Price Low to High">Price Low to High</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <img src={item.img} alt={item.name} style={{ width: "100px", height: "auto" }} />
              </td>
              <td>{item.name}</td>
              <td>{item.price.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FilterTable