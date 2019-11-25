import { TestBed } from '@angular/core/testing';

import { UtenteNewsLetterService } from './utente-news-letter.service';

describe('UtenteNewsLetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtenteNewsLetterService = TestBed.get(UtenteNewsLetterService);
    expect(service).toBeTruthy();
  });
});
