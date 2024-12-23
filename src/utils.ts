import type { Todo, User } from "./types";

export function getCurrentUser() {
   const user = localStorage.getItem("user");

   if (!user) {
       return null;
   }

   return JSON.parse(user) as User
}

export function setCurrentUser(user: User | null) {
   if (user) {
       localStorage.setItem("user", JSON.stringify(user));
   } else {
         localStorage.removeItem("user");
   }
}

export function getFavoriteTodosFromStorage() {
    const favoriteTodos = localStorage.getItem("favoriteTodos");

    if (!favoriteTodos) {
        return [];
    }

    return JSON.parse(favoriteTodos) as Todo["id"][];
}

export function saveFavoriteTodosToStorage(todoId: Array<Todo["id"]>) {
    localStorage.setItem("favoriteTodos", JSON.stringify(todoId));
}

export function saveTodosInStorage(todos: Todo[]) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

export function getTodosFromStorage() {
    const todos = localStorage.getItem("todos");

    if (!todos) {
        return [];
    }

    return JSON.parse(todos) as Todo[];
}