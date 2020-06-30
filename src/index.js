import { renderTodos } from './views'
import { setFilters } from './filters'
import { createTodo, loadTodos } from './todos'

renderTodos()

//Listen for search
document.querySelector('#search-text').addEventListener('input', (e) => {
    //input tracks individual keystrokes
    setFilters({
        searchText: e.target.value
    })
    renderTodos()
})

//Form submission
document.querySelector('#new-todo').addEventListener('submit', (e) => {
    e.preventDefault()
    const text = e.target.todoText.value.trim()
    console.log(text)
    if (text.length > 0) {
        // Add Todo value to array
        createTodo(text)
        renderTodos(todos)
        e.target.elements.todoText.value = ''
    } else {
        console.log('No content')
    }
})

//Listen for hide checkbox
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    setFilters({
        hideCompleted: e.target.checked
    })
    renderTodos()
})

window.addEventListener('storage', (e) => {
    if (e.key === 'todos') {
        loadTodos()
        renderTodos()
    }
})
