import { ComponentFixture, TestBed } from '@angular/core/testing';

import { allUsersComponent } from './allUsers.component';

describe('UsersComponent', () => {
  let component: allUsersComponent;
  let fixture: ComponentFixture<allUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ allUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(allUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
