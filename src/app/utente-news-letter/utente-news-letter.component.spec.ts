import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteNewsLetterComponent } from './utente-news-letter.component';

describe('UtenteNewsLetterComponent', () => {
  let component: UtenteNewsLetterComponent;
  let fixture: ComponentFixture<UtenteNewsLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtenteNewsLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtenteNewsLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
