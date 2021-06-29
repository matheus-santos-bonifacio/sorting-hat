import { Component } from '@angular/core';

interface IUser {
  name?: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public student: IUser = {};
  public grifinoriaStudents: string[] = [];
  public lufaStudents: string[] = [];
  public corvinalStudents: string[] = [];
  public sonserinaStudents: string[] = [];

  constructor() {}

  insertStudentIntoHome() {
    var school = Math.floor(Math.random() * 4);

    switch (school) {
      case 0:
        this.grifinoriaStudents.push(this.student.name);
        break;
      case 1:
        this.lufaStudents.push(this.student.name);
        break;
      case 2:
        this.corvinalStudents.push(this.student.name);
        break;
      case 3:
        this.sonserinaStudents.push(this.student.name);
        break;
    }
  }
}
