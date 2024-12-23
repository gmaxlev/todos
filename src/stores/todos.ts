import { defineStore } from "pinia";
import type { Todo, TodoClient, User } from "../types";
import { getTodos } from "../api";
import {
  getFavoriteTodosFromStorage,
  getTodosFromStorage,
  saveFavoriteTodosToStorage,
  saveTodosInStorage,
} from "../utils";

interface State {
  todos: Todo[] | null;
  favoriteTodos: Todo["id"][];
  clientTodos: Todo[];
  filters: {
    status: "all" | "completed" | "uncompleted" | "favorites";
    userId: User["id"] | null;
    title: string;
  };
}

export const useTodoStore = defineStore("todo", {
  state: (): State => ({
    todos: null,
    favoriteTodos: getFavoriteTodosFromStorage(),
    clientTodos: getTodosFromStorage(),
    filters: {
      status: "all",
      userId: null,
      title: "",
    },
  }),
  getters: {
    users() {
      if (!this.todos) {
        return [];
      }
      const set: Set<User["id"]> = new Set();

      this.todos.forEach((todo) => {
        set.add(todo.userId);
      });

      return Array.from(set);
    },
    normalizedTodos(state) {
      if (!state.todos) {
        return [];
      }

      const allTodos = [...state.clientTodos, ...state.todos];

      return allTodos.map((todo) => {
        const isFavorite = state.favoriteTodos.includes(todo.id);

        return {
          ...todo,
          isFavorite,
        };
      });
    },
    filteredTodos(): TodoClient[] {
      return this.normalizedTodos.filter((todo) => {
        /**
         * Status filter
         */
        if (this.filters.status === "completed" && !todo.completed) {
          return false;
        }

        if (this.filters.status === "uncompleted" && todo.completed) {
          return false;
        }

        if (this.filters.status === "favorites" && !todo.isFavorite) {
          return false;
        }

        /**
         * User filter
         */

        if (
          this.filters.userId !== null &&
          this.filters.userId !== todo.userId
        ) {
          return false;
        }

        /**
         * Title filter
         */

        if (
          !todo.title.toLowerCase().includes(this.filters.title.toLowerCase())
        ) {
          return false;
        }

        return true;
      });
    },
  },
  actions: {
    async fetchTodos() {
      this.todos = await getTodos();
    },
    addFavorite(todoId: Todo["id"]) {
      const set = new Set(this.favoriteTodos);
      set.add(todoId);

      const newFavoriteTodos = Array.from(set);

      this.favoriteTodos = newFavoriteTodos;
      saveFavoriteTodosToStorage(newFavoriteTodos);
    },
    removeFavorite(todoId: Todo["id"]) {
      const set = new Set(this.favoriteTodos);
      set.delete(todoId);

      const newFavoriteTodos = Array.from(set);

      this.favoriteTodos = newFavoriteTodos;
      saveFavoriteTodosToStorage(newFavoriteTodos);
    },
    addTodo(todo: Pick<Todo, "title" | "userId">) {
      const newTodo = {
        ...todo,
        id: Math.random(),
        completed: false,
      };

      this.clientTodos.unshift(newTodo);
      saveTodosInStorage(this.clientTodos);
    },
  },
});
