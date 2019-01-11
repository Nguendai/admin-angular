import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Component, Inject} from '@angular/core';
import {Issue} from '../../../model/issue.model';
import {IssueService} from '../../../service/issue.service';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../../dialogs/delete/delete.dialog.html',
  styleUrls: ['../../dialogs/delete/delete.dialog.css']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public issueService: IssueService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

   confirmDelete(): void {
     this.issueService.deleteIssue(this.data.id);
   }
}
