import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick, onEditClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem
          key={index} // Ensure each child has a unique key
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
          onEditClick={onEditClick} // Pass the onEditClick handler
        />
      ))}
    </div>
  );
};

export default TodoItems;
