import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {IUser} from '../../interfaces/user';
import {FormGroup} from '@angular/forms';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
    selector: 'app-user-selector',
    templateUrl: './user-selector.component.html',
    styleUrls: ['./user-selector.component.scss'],
    animations: [
        trigger('signal', [
            state('void', style({
                transform: 'translateY(-10%)',
                opacity: 0
            })),
            transition('* => *', animate(200))
        ])
    ]
})
export class UserSelectorComponent implements OnDestroy {

    @Output() sendRemoveUser = new EventEmitter<string>();
    @Input() users: IUser[] = [];
    @Input() control: FormGroup;
    isSelectOpen = false;
    animationSignal;

    public removeUser(user) {
        this.sendRemoveUser.emit(user.username);
    }

    public setUsername(user) {
        this.control.get('username').setValue(user.username);
        this.isSelectOpen = false;
    }

    ngOnDestroy() {
        this.isSelectOpen = false;
    }
}
