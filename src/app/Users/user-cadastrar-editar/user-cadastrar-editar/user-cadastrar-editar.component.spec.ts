import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCadastrarEditarComponent } from './user-cadastrar-editar.component';

describe('UserCadastrarEditarComponent', () => {
  let component: UserCadastrarEditarComponent;
  let fixture: ComponentFixture<UserCadastrarEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCadastrarEditarComponent]
    });
    fixture = TestBed.createComponent(UserCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
