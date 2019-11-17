import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IUser} from '../../interfaces/user';

@Component({
    selector: 'app-user-selector',
    templateUrl: './user-selector.component.html',
    styleUrls: ['./user-selector.component.scss']
})
export class UserSelectorComponent implements OnInit {

    @Output() sendRemoveUser = new EventEmitter<number>();
    @Output() sendUsername = new EventEmitter<string>();
    @Input() users: IUser[];

    username = 0;

    constructor() {
    }

    ngOnInit() {
    }

    public removeUser(user) {
        this.sendRemoveUser.emit(user);
    }

    public setUsername(data) {
        let username;
        data === 0 ? username = 0 : username = data.value.username;
        this.sendUsername.emit(username);
    }
}
