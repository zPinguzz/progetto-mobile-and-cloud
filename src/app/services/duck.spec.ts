import { TestBed } from '@angular/core/testing';
import { Duck } from './duck';

describe('Duck', () => {
  let service: Duck;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Duck);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
