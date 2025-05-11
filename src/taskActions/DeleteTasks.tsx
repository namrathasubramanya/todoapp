import React from 'react';

interface DeleteTaskModalProps {
  isVisible: boolean;
  taskTitle: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteTaskModal: React.FC<DeleteTaskModalProps> = ({ isVisible, taskTitle, onConfirm, onCancel }) => {
  if (!isVisible) return null;

  return (
    <div className="backdrop">
      <div className="modal">
        <h3>Delete Task</h3>
        <p>Are you sure you want to delete the task "{taskTitle}"?</p>
        <div className="actions">
          <button onClick={onConfirm} className="confirmButton">
            Confirm
          </button>
          <button onClick={onCancel} className="cancelButton">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskModal;