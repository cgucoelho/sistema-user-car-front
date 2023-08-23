import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-cadastrar-editar',
  templateUrl: './user-cadastrar-editar.component.html',
  styleUrls: ['./user-cadastrar-editar.component.scss']
})
export class UserCadastrarEditarComponent {

  formGroup: FormGroup;

  constructor(private formBuider: FormBuilder ){}

  ngOnInit(){
    this.formGroup = this.formBuider.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.email],
      birthday: ["", Validators.required],      
      login: ["", Validators.required],    
      password: ["", Validators.required], 
      phone: ["", Validators.required]    
    })
  }

}
