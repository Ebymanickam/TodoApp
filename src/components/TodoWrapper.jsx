import React, { useState } from "react"
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid";
import TaskItem from "./TaskItem";


function TodoWrapper(){

    const [todos, setTodos] = useState([]); // to store & manage the dynamic data's

    function addTodo(todoName){
         setTodos([...todos, {task: todoName, completed:false, id:uuidv4()}])
    }

    function deleteTodo(todoId){
        console.log("Delete icon Clicked");
        console.log(todoId);

        setTodos(todos.filter(todo => todo.id !== todoId))
    }

    //id=arguments pass
    function handleTodoComplete(id){
        console.log("Task Item Clicked");
        console.log(id);

        setTodos(todos.map(todo=> todo.id === id ? {...todo, completed: !todo.completed} : todo))
    
    }

    console.log(todos);


    return(    
        <div className="todoWrapper">
        <h2>Todo-App</h2>
               {/* //property = {value} */}
           <TodoForm addTodo = {addTodo}/>   {/*// this addTodo is come form TodoForm */}


            {/* item.map((item,i)=>(
                )) */}

             {
            todos.map(todo=>(
                     //ex.task = property ={arg.value} 
                <TaskItem task = {todo.task} completed = {todo.completed} key = {todo.id}  id={todo.id} 
                handleTodoComplete={handleTodoComplete} deleteTodo={deleteTodo}/>             
            ))
            } 
        </div>
    )
}

export default TodoWrapper;