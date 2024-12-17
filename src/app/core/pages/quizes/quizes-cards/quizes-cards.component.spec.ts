import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizesCardsComponent } from './quizes-cards.component';

describe('QuizesCardsComponent', () => {
  let component: QuizesCardsComponent;
  let fixture: ComponentFixture<QuizesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizesCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
