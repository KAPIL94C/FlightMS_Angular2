import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsHttpComponent } from './accounts-http.component';

describe('AccountsHttpComponent', () => {
  let component: AccountsHttpComponent;
  let fixture: ComponentFixture<AccountsHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
