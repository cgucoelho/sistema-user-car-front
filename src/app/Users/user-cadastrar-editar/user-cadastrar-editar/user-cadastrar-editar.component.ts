import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../user.model';

@Component({
  selector: 'app-user-cadastrar-editar',
  templateUrl: './user-cadastrar-editar.component.html',
  styleUrls: ['./user-cadastrar-editar.component.scss']
})
export class UserCadastrarEditarComponent {

  formGroup: FormGroup;
  user: User;

  constructor(private formBuider: FormBuilder, 
              private userService: UserService,
              private router: Router,
              private activateRoute: ActivatedRoute ){}

  ngOnInit(){
    this.user = this.activateRoute.snapshot.data["idUser"];
    
    this.formGroup = this.formBuider.group({
      id:         [(this.user && this.user.id)        ? this.user.id : null],
      firstName:  [(this.user && this.user.firstName) ? this.user.firstName :  "", Validators.required],
      lastName:   [(this.user && this.user.lastName)  ? this.user.lastName : "", Validators.required],
      email:      [(this.user && this.user.email)     ? this.user.email : "", Validators.email],
      birthday:   [(this.user && this.user.birthday)  ? this.user.birthday : "", Validators.required],      
      login:      [(this.user && this.user.login)     ? this.user.login : "", Validators.required],    
      password:   [(this.user && this.user.password)  ? this.user.password : "", Validators.required], 
      phone:      [(this.user && this.user.phone)     ? this.user.phone : "", Validators.required]
      //cars: this.formBuider.group({})    
    })
  }

  salvar(){
    if(this.user && this.user.id){
      this.userService.atualizar(this.formGroup.value).subscribe(
        userAtualizado => {
          this.router.navigateByUrl("/users");
        },
        error =>{
          alert("Erro ao atualizar" + JSON.stringify(error));
        }      
      )

    } else {
      this.userService.criar(this.formGroup.value).subscribe(
        userCad => {
          this.router.navigateByUrl("/users");
        },
        error =>{
          alert("Erro ao cadastrar" + JSON.stringify(error));
        }      
      )
    }
    
  }

  deletar(){
    if(confirm("Excluir o usuário " + this.user.login)){
      this.userService.deletar(this.user).subscribe(
        response => {
          this.router.navigateByUrl("/users");
        },
        error => {
          alert("Erro ao excluir" + JSON.stringify(error));
        }
      )
    }
  }

}
