import { MatSort } from '@angular/material';
import { FixedService } from './service/fixed.service';
import { Component, OnInit, ViewEncapsulation, Input,Output,EventEmitter, ViewChild,Inject } from '@angular/core';
import { UserDataSource } from './helpers.data';
import {MatDialog, MatDialogRef} from '@angular/material';
import {MAT_DIALOG_DATA} from '@angular/material';
import { User } from '../../model/user.model';
import { HttpClient } from '@angular/common/http';


export interface DialogData {
  id:number;
  content:string;
}
@Component({
  selector: 'app-fixed-table',
  templateUrl: './fixed-table.component.html',
  styleUrls: ['./fixed-table.component.scss']
})
export class FixedTableComponent implements OnInit {

	public displayedColumns = ['id', 'content'];
	public dataSource: UserDataSource;

	@ViewChild(MatSort) sort: MatSort;
  @Input() status;
  @Input() actionStatus;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() view = new EventEmitter();
  @Output() page = new EventEmitter();
  @Output() dup = new EventEmitter();

  	constructor(private fixedService : FixedService,public dialog: MatDialog) { }
    id:number;
    content:string ;
  	ngOnInit() {
			this.dataSource = new UserDataSource(this.fixedService);
			this.dataSource.loadLessons();
    }
    openDialog() {
      const dialogRef = this.dialog.open(DialogOverviewExampleDialog ,{
        data: {this.post}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log("123" );
        console.log(result);
        this.dataSource.loadLessons();
        //  this.content = result;
      });
    }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  id:number;
  content:string;
  user:User;
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private fixedService: FixedService) {}

  onNoClick(): void {
    // this.user.id = this.id;
    // this.user.content = this.content;
    this.dialogRef.close();
      this.fixedService.createArticle(this.id,this.content).subscribe(
        result => {
          console.log(result);
        },
        err => {
          console.log(err);
        }
      );
  }


}
