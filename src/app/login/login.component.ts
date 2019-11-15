import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl('', [<any>Validators.required]),
      userId: new FormControl('', [<any>Validators.required]),
      body: new FormControl('', [<any>Validators.required])
    });
  }

  registro: any = new Object();
  public myForm: FormGroup;

  constructor(private dataRegister: LoginService) { }

  async registrar(){
    let resp = await this.dataRegister.registrarClientes(this.registro);
    console.log(resp);
  }

}
