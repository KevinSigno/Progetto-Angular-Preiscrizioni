import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtenteNewsLetterDetailComponent } from './utente-news-letter-detail.component';

describe('UtenteNewsLetterDetailComponent', () => {
  let component: UtenteNewsLetterDetailComponent;
  let fixture: ComponentFixture<UtenteNewsLetterDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtenteNewsLetterDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtenteNewsLetterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
