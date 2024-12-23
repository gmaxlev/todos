export type User = {
    id: number;
    username: string;
    name: string;
    phone: string
}

export type Todo = {
    userId: User["id"];
    id: number;
    title: string;
    completed: boolean
}

export interface TodoClient extends Todo {
    isFavorite: boolean
}