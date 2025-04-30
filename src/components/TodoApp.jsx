import React, { useState, useEffect } from "react";

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInput = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, isCompl: false, isEdit: false }]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updateTasks = tasks.filter((task, i) => i !== index);
    setTasks(updateTasks);
  };

  const toggCompl = (index) => {
    const updateTasks = tasks.map((task, i) =>
      i === index ? { ...task, isCompl: !task.isCompl } : task
    );
    setTasks(updateTasks);
  };

  const toggEdit = (index) => {
    const updateTasks = tasks.map((task, i) =>
      i === index ? { ...task, isEdit: !task.isEdit } : task
    );
    setTasks(updateTasks);
  };

  const handleEdit = (e, index) => {
    const updateTasks = tasks.map((task, i) =>
      i === index ? { ...task, text: e.target.value } : task
    );
    setTasks(updateTasks);
  };

  const saveEdit = (index) => {
    toggEdit(index);
  };

  return (
    <div
      style={{
        padding: "50px",
        maxWidth: "600px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#4CAF50"}}>TO-DO LIST APP</h1>

      <div style={{ marginBottom: "15px" }}>
        <label style={{ marginRight: "10px", fontSize: "16px"}}>
          ENTER TASKS :{" "}
        </label>
        <input
          type="text"
          value={newTask}
          onChange={handleInput}
          placeholder="Enter task"
          style={{
            padding: "8px",
            fontSize: "14px",
            width: "60%",
            marginRight: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 12px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </div>
      <ul
        style={{
          listStyleType: "none",
          paddingLeft: "0",
        }}
      >
        {tasks.length === 0 ? (
          <p
            style={{
              color: "#888",
            }}
          >
            No tasks added yet !
          </p>
        ) : (
          tasks.map((task, index) => (
            <li
              key={index}
              style={{
                marginBottom: "12px",
                backgroundColor: "#f9f9f9",
                padding: "10px",
                borderRadius: "4px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  marginRight: "10px",
                }}
              >
                {task.isEdit ? (
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => handleEdit(e, index)}
                    style={{
                      padding: "6px",
                      fontSize: "14px",
                      width: "100%",
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                ) : (
                  <span
                    style={{
                      textDecoration: task.isCompl ? "line-through" : "none",
                      color: task.isCompl ? "green" : "#333",
                      fontSize: "16px",
                    }}
                  >
                    {task.text}
                  </span>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "8px",
                }}
              >
                <button
                  onClick={() => toggCompl(index)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: task.isCompl ? "#808080" : "#2196F3",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  {task.isCompl ? "Undo": "Complete"}
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  style={{
                    padding: "6px 10px",
                    backgroundColor: "#f44336",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>

                {task.isEdit ? (
                  <button
                    onClick={() => saveEdit(index)}
                    style={{
                      padding: "6px 10px",
                      backgroundColor: "#4CAF50",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => toggEdit(index)}
                    style={{
                      padding: "6px 10px",
                      backgroundColor: "#FF9800",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                )}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoApp;
