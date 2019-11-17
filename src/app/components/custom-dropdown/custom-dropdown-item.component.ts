import {Component, Input, ViewChild} from '@angular/core';

@Component({
    selector: 'app-custom-dropdown-item',
    template: '<ng-template #content><ng-content></ng-content></ng-template>'
})
export class CustomDropdownItemsComponent {
    @ViewChild('content', {static: false}) content: any;
    @Input() value: any;
}

