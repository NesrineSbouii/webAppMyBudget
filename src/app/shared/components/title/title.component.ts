import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'mybudget-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
    @Input('title') title: string = '';
    @Input('textButton') textButton: string = '';

    @Output() onCreate = new EventEmitter();

    constructor() { }

    handleClick(): void {
        this.onCreate.emit();
    }
}