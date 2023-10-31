
import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  records: any[]; // Replace 'any' with your data model

  constructor(private crudService: CrudService) {}

  ngOnInit() {
    this.loadRecords();
  }

  loadRecords() {
    this.crudService.getAllRecords().subscribe((data: any) => {
      this.records = data;
    });
  }

  addRecord() {
    // Implement logic to open a form to add a new record
  }

  editRecord(id: number) {
    // Implement logic to open a form to edit a record
  }

  deleteRecord(id: number) {
    this.crudService.deleteRecord(id).subscribe(() => {
      this.loadRecords();
    });
  }
}
