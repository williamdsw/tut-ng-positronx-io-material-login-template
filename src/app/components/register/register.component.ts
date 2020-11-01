import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  public roles: string[] = ['Admin', 'Author', 'Reader'];

  constructor() { }

  ngOnInit() {}

}
