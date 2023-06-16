import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditionUserComponent } from './edition-user.component';

describe('EditionUserComponent', () => {
  let component: EditionUserComponent;
  let fixture: ComponentFixture<EditionUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditionUserComponent]
    });
    fixture = TestBed.createComponent(EditionUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
