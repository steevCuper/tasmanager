
import React from 'react'
import { RiCheckDoubleLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { BsTrash3Fill } from "react-icons/bs";

const Task = ({id, name, date, complete, editTask, deleteTask, completeTask }) => {
  return (
    <div key={id} className={complete ? "task complete" : "task"}>
      <span>
        <p><b>Task:</b> {name}</p>
        <p><b>Date:</b>{date}</p>
      </span>
      <span>
        <button onClick={() => editTask(id)}>
          <FaEdit color="green" />
        </button>
        <button onClick={() => deleteTask(id)}>
          <BsTrash3Fill color="red" />
        </button>
        <button onClick={() => completeTask(id)}>
          <RiCheckDoubleLine color="purple" />
        </button>
      </span>
    </div>
  )
}

export default Task
