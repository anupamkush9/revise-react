import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8000/users");
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={user.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;