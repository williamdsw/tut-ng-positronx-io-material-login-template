import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles: string[] = ['Admin', 'Author', 'Reader'];

  constructor() { }

  ngOnInit() {
  }

}
