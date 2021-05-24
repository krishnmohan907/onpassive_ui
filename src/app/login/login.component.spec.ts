import { HttpClientModule } from '@angular/common/http';
import { ExamsectionService } from './../examsection.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  // let service : ExamsectionService;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [ LoginComponent ],

      providers : [
        ExamsectionService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('product list has a componet style', async(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.debugElement.componentInstance;
      expect(component.title).toEqual('Product List Component');
  }));
});
