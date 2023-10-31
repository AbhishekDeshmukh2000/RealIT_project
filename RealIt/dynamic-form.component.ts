
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  dynamicForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }

  ngOnInit() {
    // Fetch JSON data and create form controls dynamically
    // Example: Assuming jsonData contains your JSON structure
    for (const field of jsonData.fields) {
      this.dynamicForm.addControl(field.name, this.fb.control(''));
    }
  }

  onSubmit() {
    const formData = this.dynamicForm.value;
    // Use formData to populate your 'json' variable and submit to the server
  }
}
