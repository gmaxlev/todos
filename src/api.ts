import { ofetch } from "ofetch";
import type { Todo, User } from "./types";

export function getAllUsers() {
    return ofetch<User[]>(" https://jsonplaceholder.typicode.com/users");
}

export async function signUp(
    username: string,
    phonenumber: string,
) {
    const users = await getAllUsers();

    const foundUser = users.find((user) => user.username === username && user.phone === phonenumber);

    return foundUser;
}

export async function getTodos() {
    return ofetch<Todo[]>("https://jsonplaceholder.typicode.com/todos");
}