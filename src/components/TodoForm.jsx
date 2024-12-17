import React, { useState } from "react";

function TodoForm ({addTodo}){
        // (todo) to store and manage the dynamic datas (setTodo) to update the todo state
    const [todo , setTodo] = useState("");


    function handleTodoInputChange(e){ // to handle the changes on the todo input field
        console.log(e.target.value);

        setTodo(e.target.value) // to update the todo state with the current value in the todo input field
    }

     function handleTodoSubmit(e){
        e.preventDefault();  // before task will not erased by preventDefault()

        console.log("Add task clicked");

        // to create a todo list when the user click on the addtask button
        // passing the name to the task
        addTodo(todo); 

        setTodo("");// to delete or clear the input box
     }

    return(
        <form action="" className="todoForm">
            <input type="text" name="todo" className="todoForm_input" 

            placeholder="Enter your task"
            value={todo}   //state
            onChange={handleTodoInputChange} />

            <button className="todoForm_btn" onClick={handleTodoSubmit} 
            type="submit"> Add task </button>
        </form>
       
    );
}
export default TodoForm;