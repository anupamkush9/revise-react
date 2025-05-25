import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: []   // we have to take this 'todos' variable at the time of accessing in useSelectore
                //   const todos = useSelector((state) => state.todos)
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer