import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloboxComponent } from './hellobox.component';

describe('HelloboxComponent', () => {
  let component: HelloboxComponent;
  let fixture: ComponentFixture<HelloboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
