import { Component } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent {
  data = [
    { name: 'Jon', age: 22, job: 'Designer' },
    { name: 'James', age: 24, job: 'Engineer' },
    { name: 'Jim', age: 23, job: 'Developer' },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
  ];

}
