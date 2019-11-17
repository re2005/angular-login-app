import {Injectable} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class AuthService {

    private usersArray = new Subject<IUser[]>();

    constructor() {
    }

    public isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }

    public setToken(): void {
        localStorage.setItem('token', Date.now().toString());
    }

    public getUsersOb(): Observable<IUser[]> {
        return this.usersArray.asObservable();
    }

    public setUser(user: IUser): void {
        const users = this.getUsers() || [];
        users.push(user);
        this.setUsers(users);
        this.usersArray.next(users);
    }

    public setUsers(users: Array<IUser>): void {
        localStorage.setItem('users', JSON.stringify(users));
    }

    public getUsers(): Array<IUser> {
        return JSON.parse(localStorage.getItem('users'));
    }

    public getUser(email: string): object {
        return this.getUsers().find(u => u.username === email);
    }

    public removeUser(email: string): void {
        this.setUsers(this.getUsers().filter(u => u.username !== email));
    }
}
