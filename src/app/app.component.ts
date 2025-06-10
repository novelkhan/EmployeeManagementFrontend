import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  downloadReport() {
    this.http.get('https://localhost:7152/api/Report/employee-report', { responseType: 'blob' })
      .subscribe((blob: Blob) => {
        saveAs(blob, 'EmployeeReport.pdf');
      });
  }
}