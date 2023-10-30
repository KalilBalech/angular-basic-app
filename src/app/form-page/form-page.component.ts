import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  name: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    const formData = { name: this.name };
    this.http.post('http://localhost:3000/submit-form', formData)
      .subscribe(response => {
        console.log(response);
      });
  }
}
