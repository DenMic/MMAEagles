import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStyleComponent } from './card-style.component';

describe('CardStyleComponent', () => {
  let component: CardStyleComponent;
  let fixture: ComponentFixture<CardStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardStyleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
