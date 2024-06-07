import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTranerComponent } from './card-traner.component';

describe('CardTranerComponent', () => {
  let component: CardTranerComponent;
  let fixture: ComponentFixture<CardTranerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTranerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTranerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
