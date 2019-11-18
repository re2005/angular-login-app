import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class AuthService {

    private usersArray = new BehaviorSubject<IUser[]>(this.getUsers());

    getToken(): string {
        return localStorage.getItem('token');
    }

    constructor() {
    }

    public isPasswordValid(username, password) {
        const user = this.getUser(username);
        return user.password === password;
    }


    public isAuthenticated(): boolean {
        return this.getToken() !== null;
    }

    public setToken(username): void {
        localStorage.setItem('token', username);
    }

    public removeToken(): void {
        localStorage.removeItem('token');
    }

    public getUsersOb(): Observable<IUser[]> {
        return this.usersArray;
    }

    public setUser(user: IUser): void {
        const users = this.getUsers() || [];
        users.push(user);
        this.setUsers(users);
        this.usersArray.next(users);
    }

    public setUsers(users: Array<IUser>): void {
        this.usersArray.next(users);
        localStorage.setItem('users', JSON.stringify(users));
    }

    public getUsers(): Array<IUser> {
        return JSON.parse(localStorage.getItem('users'));
    }

    public getUser(username: string): IUser {
        return this.getUsers().find(u => u.username === username);
    }

    public removeUser(username: string): void {
        this.setUsers(this.getUsers().filter(u => u.username !== username));
    }

    public getCurrentUser(): IUser {
        return this.getUser(this.getToken());
    }

}
