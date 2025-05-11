import * as React from 'react';
import styles from '../css/EditTaskModal.module.css';

interface EditTaskModalProps {
  isVisible: boolean;
  taskTitle: string;
  onSave: () => void;
  onCancel: () => void;
  setNewTitle: (val: string) => void;
}

export const EditTasks: React.FC<EditTaskModalProps> = ({ isVisible, setNewTitle, onSave, onCancel }) => {

  if (!isVisible) return null;

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <h3>Edit Task</h3>
        <input
          type="text"
          onChange={(e) => setNewTitle(e.target.value)}
          className={styles.input}
        />
        <div className={styles.actions}>
          <button onClick={onSave} className={styles.saveButton}>
            Save
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
