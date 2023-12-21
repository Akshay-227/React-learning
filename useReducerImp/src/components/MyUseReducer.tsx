import React, { useReducer, useState } from "react";

const initialState = {
  list: [],
};
const myReducerFunc = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        list: [...state.list, action.data],
      };
    case "delete":
      return {
        ...state,
        list: state.list.filter((_, index) => index !== action.index),
      };
    case "edit":
      const editedList = [...state.list];
      editedList[action.index] = action.data;
      return {
        ...state,
        list: editedList,
      };
    default:
      return state;
  }
};

function MyUseReducer() {
  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(myReducerFunc, initialState);
  const [editIndex, setEditIndex] = useState(null);

  const handleAddToList = () => {
    if (input === "") return;

    if (editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing item
      dispatch({ type: "edit", index: editIndex, data: input });
      setEditIndex(null); // Reset editIndex after editing
    } else {
      dispatch({ type: "add", data: input });
    }

    setInput("");
  };

  const handleDelete = (index) => {
    dispatch({ type: "delete", index: index });
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setInput(state.list[index]); // Set the input field value to the item being edited
  };

  return (
    <div className="flex items-center text-center justify-center h-screen p-8">
      <div className="p-4 bg-gray-200 shadow-lg rounded-md w-full max-w-md h-full overflow-y-auto flex flex-col">
        <h1 className="text-xl font-bold mb-4">Use Reducer Hook Implementation</h1>
        <div className="mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() => handleAddToList()}
            className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            {editIndex !== null ? "Update" : "Add To List"}
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {state &&
            state.list.map((ele, index) => (
              <div key={index} className="border p-4 mb-4 rounded-md flex justify-between items-center">
                <div>{ele}</div>
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="mr-2 p-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MyUseReducer;
