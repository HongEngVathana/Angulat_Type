import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSingleComponent } from './user-single.component';

describe('UserSingleComponent', () => {
  let component: UserSingleComponent;
  let fixture: ComponentFixture<UserSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
