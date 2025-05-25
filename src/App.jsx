import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./features/todo/todoSlice.js";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.todos);

  console.log("State", state);

  if (state.isLoading) {
    return (
      <div className="container text-center mt-5">
        <h3 className="text-primary">Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h2 className="text-success">Todo List</h2>
        <button
          className="btn btn-primary mt-2"
          onClick={() => dispatch(fetchTodos())}
        >
          Fetch Todos
        </button>
      </div>

      {state.data && state.data.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Completed</th>
              </tr>
            </thead>
            <tbody>
              {state.data.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.id}</td>
                  <td>{todo.title}</td>
                  <td>
                    <span
                      className={`badge ${
                        todo.completed ? "bg-success" : "bg-warning text-dark"
                      }`}
                    >
                      {todo.completed ? "Yes" : "No"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-muted">No todos available.</p>
      )}
    </div>
  );
}

export default App;

// Ref : https://redux-toolkit.js.org/api/createAsyncThunk
// https://www.youtube.com/watch?v=2JBx_06dD1k
