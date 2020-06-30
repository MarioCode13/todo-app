import uuidv4 from 'uuid/v4'

// Setup the empty todos array
let todos = []

// loadTodos
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos')
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []
    } catch (e) {
        todos = []
    }
}

// saveTodos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// getTodos
const getTodos = () => todos

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (text) => {
    if (text.length > 0) {
        // Add Todo value to array
        todos.push({
            id: uuidv4(),
            text: text,
            completed: false
        })
    } else {
        console.log('No content')
    }
    saveTodos()
}

// removeTodo
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
    saveTodos()
}

// toggleTodo
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id === id)

    if (todo) {
        todo.completed = !todo.completed
    }
    saveTodos()
}

loadTodos()

export { getTodos, createTodo, removeTodo, toggleTodo, loadTodos }
