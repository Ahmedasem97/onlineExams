import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiResponseErrorComponent } from './api-response-error.component';

describe('ApiResponseErrorComponent', () => {
  let component: ApiResponseErrorComponent;
  let fixture: ComponentFixture<ApiResponseErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiResponseErrorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiResponseErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
