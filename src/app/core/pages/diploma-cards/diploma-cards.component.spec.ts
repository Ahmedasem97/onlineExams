import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplomaCardsComponent } from './diploma-cards.component';

describe('DiplomaCardsComponent', () => {
  let component: DiplomaCardsComponent;
  let fixture: ComponentFixture<DiplomaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiplomaCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiplomaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
