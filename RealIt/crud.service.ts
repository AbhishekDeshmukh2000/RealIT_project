// crud.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  private apiUrl = 'http://43.205.154.152:30171/entityBuilder/Gaurav_testing';

  constructor(private http: HttpClient) {}

  createRecord(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  getAllRecords() {
    return this.http.get(this.apiUrl);
  }

  updateRecord(id: number, data: any) {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deleteRecord(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
