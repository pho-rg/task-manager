import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTaskComponent } from './main-task.component';

describe('MainTaskComponent', () => {
  let component: MainTaskComponent;
  let fixture: ComponentFixture<MainTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
