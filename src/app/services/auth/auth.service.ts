import {Injectable} from '@angular/core';
import {User} from '../../interfaces/user';

@Injectable()
export class AuthService {
    constructor() {
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }

    public setToken(): void {
        localStorage.setItem('token', Date.now().toString());
    }

    public setUser(user: User): void {
        const users = this.getUsers();
        users.push(user);
        this.setUsers(users);
    }

    public setUsers(users: Array<User>): void {
        localStorage.setItem('users', JSON.stringify(users));
    }

    public getUsers(): Array<User> {
        return JSON.parse(localStorage.getItem('users'));
    }

    public getUser(email: string): object {
        return this.getUsers().find(u => u.email === email);
    }

    public removeUser(email: string): void {
        this.setUsers(this.getUsers().filter(u => u.email !== email));
    }
}
