import { Component, Inject, EventEmitter } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { emit } from "process";

@Component({
    selector: 'mybudget-delete-dialog',
    templateUrl: './delete-dialog.component.html',
    styleUrls: ['./delete-dialog.component.scss'],
})
export class DeleteDialogComponent {

    onDelete = new EventEmitter();
    constructor(
        public dialogRef: MatDialogRef<DeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) { }

    onCancel(): void {
        this.dialogRef.close();
    }
    handleClick(): void {
        this.onDelete.emit();
    }
}