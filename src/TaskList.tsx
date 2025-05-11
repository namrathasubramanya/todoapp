
import * as React from "react";
import { Task, TaskCard } from "./TaskCard";
import DeleteTaskModal from './taskActions/DeleteTasks';
import { EditTask } from "./taskActions/EditTasks";

// TaskList functional component
export const TaskList = () => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const [openDeleteModal, setOpenDeleteModal] = React.useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = React.useState<boolean>(false);
  const [taskInput, setTaskInput] = React.useState<string>(''); // State for task input
  const [newTitle, setNewTitle] = React.useState<string>('');
  const renderTasksList = (): React.JSX.Element => {
    if (!!tasks?.length) {
      return (
        <>
          {tasks?.map((task: Task) => 
            <>
              <TaskCard
                task={task}
                handleToggle={handleToggle}
                setOpenEditModal={setOpenEditModal}
                setOpenDeleteModal={setOpenDeleteModal}
              />
              {openDeleteModal &&
                <DeleteTaskModal
                  isVisible={openDeleteModal}
                  taskTitle={task?.title}
                  onConfirm={() => deleteTask(task?.id)}
                  onCancel={() => setOpenDeleteModal(false)}
                />
              }
              {openEditModal &&
                <EditTask
                  isVisible={openEditModal}
                  taskTitle={task?.title}
                  onSave={() => ediTask(task?.id, newTitle)}
                  onCancel={() => setOpenEditModal(false)}
                  setNewTitle={setNewTitle}
                />
              }
            </>
          )}
        </>
      );
    } else {
      return (
        <p className="message">No tasks found! Please enter tasks list to continue</p>
      );
    }
  };

  const handleToggle = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const ediTask = (taskId: number, newTitle: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, title: newTitle } : task
      )
    );
    setOpenEditModal(false);
  };

  const deleteTask = (taskId: number) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) =>
        task.id !== taskId
      )
    );
    setOpenDeleteModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskInput(e.target.value); // Update taskInput state on user input
  };

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (taskInput.trim() === '') {
      alert('Task cannot be empty!');
      return;
    }

    const newTask: Task = {
      id: Date.now(), // Generate a unique ID
      title: taskInput,
      completed: false
    };

    setTasks([...tasks, newTask]); // Add new task to the list
    setTaskInput(''); // Clear the input field
  };

  return (
    <div className="container">
      <h2 className="heading">Task List</h2>
      <form className="form" onSubmit={addTask}>
        <input id="taskInput" className="input" onChange={handleInputChange} value={taskInput}/>
        <button type="submit">Add</button>
      </form>
      <div className="taskList">{renderTasksList()}</div>
    </div>
  );
};

