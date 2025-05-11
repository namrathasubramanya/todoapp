import * as React from 'react';

// Define the Task interface
export interface Task {
  id: number;
  title: string;
  completed: boolean;
}

// Define the props for the TaskCard component
interface TaskCardProps {
  task: Task;
  handleToggle: (taskId: number) => void;
  setOpenEditModal: (val: boolean) => void
  setOpenDeleteModal: (val: boolean) => void
}

// Inline styles for the component
const styles = {
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '10px',
    backgroundColor: '#f9f9f9',
  },
  checkbox: {
    marginRight: '10px',
  },
  title: {
    flex: 1,
    marginRight: '10px',
    cursor: 'pointer',
  },
  input: {
    flex: 1,
    marginRight: '10px',
    padding: '5px',
    fontSize: '14px',
  },
  editButton: {
    marginRight: '10px',
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
};

// TaskCard functional component
export const TaskCard: React.FC<TaskCardProps> = ({ task, handleToggle, setOpenEditModal, setOpenDeleteModal }) => {

  const handleEdit = () => {
    setOpenEditModal(true); // Call the parent-provided editTask function
  };

  // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === 'Enter') {
  //     handleEdit(); // Save the title and exit edit mode
  //   }
  // };

  return (
    <div style={styles.card}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => handleToggle(task.id)}
        style={styles.checkbox}
      />
      <span
        style={{
          ...styles.title,
          textDecoration: task.completed ? 'line-through' : 'none',
        }}
      >
        {task.title}
      </span>
      {/* {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={styles.input}
        />
      ) : (
        <span
          style={{
            ...styles.title,
            textDecoration: task.completed ? 'line-through' : 'none',
          }}
        >
          {task.title}
        </span>
      )} */}
      <button onClick={handleEdit} style={styles.editButton}>
        ✏️
      </button>
      <button 
        onClick={() => setOpenDeleteModal(true)} 
        style={styles.deleteButton}
      >
        🗑️
      </button>
    </div>
  );
};