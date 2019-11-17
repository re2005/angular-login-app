import {Component, ContentChildren, EventEmitter, Input, Output, QueryList, ViewChild} from '@angular/core';
import {MatSelect, MatSelectChange} from '@angular/material/select';
import {CustomDropdownItemsComponent} from './custom-dropdown-item.component';

@Component({
    selector: 'app-custom-dropdown',
    templateUrl: './custom-dropdown.component.html',
    styleUrls: ['./custom-dropdown.component.scss']
})
export class CustomDropdownComponent {
    @ViewChild('matSelect', {static: false}) matSelect: MatSelect;
    @Output() valueChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
    @Output() openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() value: any;
    @Input() items: string[];
    @Input() placeholder: string;
    @Input() dropdownTitle: string;
    @Input() addDynamicContent = false;

    @ContentChildren(CustomDropdownItemsComponent)
    ddItems: QueryList<CustomDropdownItemsComponent>;

    valueChanged(event: MatSelectChange) {
        this.valueChange.emit(event.value);
    }
}
