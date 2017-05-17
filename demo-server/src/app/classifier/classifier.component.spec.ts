import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifierComponent } from './classifier.component';

describe('ClassifierComponent', () => {
  let component: ClassifierComponent;
  let fixture: ComponentFixture<ClassifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
