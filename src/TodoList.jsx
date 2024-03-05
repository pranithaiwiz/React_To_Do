import React, { useState } from 'react'; // Import React and useState hook from 'react' library

function TodoList() { // Define a functional component named TodoList
    const [todos, setTodos] = useState([]); // Declare state variable 'todos' using useState hook, initialized as an empty array
    const [inputValue, setInputValue] = useState(''); // Declare state variable 'inputValue' using useState hook, initialized as an empty string

    function handleSubmit(e) { // Define a function to handle form submission
        e.preventDefault(); // Prevent default form submission behavior
        if (inputValue.trim() !== '') { // Check if input value is not empty
          setTodos([...todos, inputValue]); // Add new todo to the 'todos' array using spread operator
          setInputValue(''); // Clear the input field by resetting 'inputValue' to an empty string
        }
    }

    return ( // Return JSX to render the TodoList component
        <div>
            <h1>Todo List</h1> {/* Render a heading */}
            <form onSubmit={handleSubmit}> {/* Form to add new todo items */}
                <input
                    type="text"
                    value={inputValue} // Bind input value to 'inputValue' state variable
                    onChange={(e) => setInputValue(e.target.value)} // Update 'inputValue' state variable as input value changes
                    />
                <button type="submit">Add Todo</button> {/* Submit button to add todo */}
            </form>
                    <ul>
                        {/* Map through the 'todos' array and render each todo item as a list item */}
                        {todos.map((todo, index) => (
                            <li key={index}>{todo}</li> // Render each todo item as a list item, using 'index' as the key
                        ))}
                    </ul>
        </div>
    );
}

export default TodoList; // Export the TodoList component
