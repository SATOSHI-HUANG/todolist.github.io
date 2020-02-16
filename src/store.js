import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const LS = {
    load () {
        return JSON.parse(localStorage.getItem('vue-todos') || '[]')
    },
    save(data) {
        localStorage.setItem('vue-todos', JSON.stringify(data))
    }
}

const filter = {
    all (todos) {
        return todos
    },
    active(todos) {
        return todos.filter(todo => {
            return !todo.completed
        })
    },
    completed(todos) {
        return todos.filter(todo => {
            return todo.completed
        })
    }
}

export default new Vuex.Store({
    strict: true,
    state: {
        todos: [],
        selectItem: 'all'
    },
    getters: {
        todoIndex(state) {
            return filter[state.selectItem](state.todos).map(todo => state.todos.indexOf(todo))
        }
    },
    mutations: {
        SET_TODOS(state, data) {
            state.todos = data

            // save ls
            LS.save(state.todos)
        },
        ADD_TODO(state, data) {
            state.todos.push(data)
            LS.save(state.todos)
        },
        UPDATE_TODO(state, {index, data}) {
            state.todos[index].content = data.content
            state.todos[index].completed = data.completed
            LS.save(state.todos)
        },
        REMOVE_TODO(state, index) {
            state.todos.splice(index, 1)
            LS.save(state.todos)
        },
        SELECT_ITEM(state, item) {
            state.selectItem = item
        }
    },
    actions: {
        INIT_TODOS({ commit }) {
            // load ls
            commit('SET_TODOS', LS.load())
        }
    }
})