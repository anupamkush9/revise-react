import { useReducer } from "react";
const userdata = {first_name:"",
  last_name:"",
  age:0,
  email:"",
  submitted:false
}

const reduce = (prev_data, action) => {
  switch (action.type) {
    case "first_name":
      return { ...prev_data, first_name: action.val };
    case "last_name":
      return { ...prev_data, last_name: action.val };
    case "age":
      return { ...prev_data, age: action.val };
    case "email":
      return { ...prev_data, email: action.val };
    case 'submit':
        return { ...prev_data, submitted: true };
    default:
      return { ...prev_data };
  }
};

function App() {

  const [data, dispatch] = useReducer(reduce, userdata)

  const handleSubmit = () => {
      dispatch({ type: 'submit' });
  };

  return (
      <div className="container mt-5">
        <form>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              value={data.first_name}
              onChange={(e)=>(dispatch({"val": e.target.value, "type":"first_name"}))}
              placeholder="Enter First Name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              value={data.last_name}
              onChange={(e)=>(dispatch({"val": e.target.value, "type":"last_name"}))}
              placeholder="Enter Last Name"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={data.age}
              onChange={(e)=>(dispatch({"val": e.target.value, "type":"age"}))}
              placeholder="Enter Age"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email ID</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={data.email}
              onChange={(e)=>(dispatch({"val": e.target.value, "type":"email"}))}
              placeholder="Enter Email"
              required
            />
          </div>
          <button className="btn btn-success" onClick={handleSubmit}>Submit</button>
          {data.submitted && <p>Form Submitted!</p>}
          <br />
          <br />

          <h5>First Name : {data.first_name}</h5>
          <h5>Last Name : {data.last_name}</h5>
          <h5>Age : {data.age}</h5>
          <h5>Email : {data.email}</h5>
        </form>
      </div>
  );
}

export default App;