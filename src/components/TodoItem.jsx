
import { useState } from "react";

function TodoItem({ todoName, todoDate, onDeleteClick, onEditClick }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(todoName);
  const [editedDate, setEditedDate] = useState(todoDate);

  const handleSave = () => {
    onEditClick({ oldName: todoName, newName: editedName, newDate: editedDate });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedName(todoName);
    setEditedDate(todoDate);
    setIsEditing(false);
  };

  return (
    <div className="container">
      <div className="row kg-row">
        {isEditing ? (
          <>
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
              />
            </div>
            <div className="col-4">
              <input
                type="date"
                className="form-control"
                value={editedDate}
                onChange={(e) => setEditedDate(e.target.value)}
              />
            </div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-success me-2"
                onClick={handleSave}
              >
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="col-6">{todoName}</div>
            <div className="col-4">{todoDate}</div>
            <div className="col-2">
              <button
                type="button"
                className="btn btn-primary me-2"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDeleteClick(todoName)}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
