import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamsLayoutComponent } from './exams-layout.component';

describe('ExamsLayoutComponent', () => {
  let component: ExamsLayoutComponent;
  let fixture: ComponentFixture<ExamsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExamsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExamsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
