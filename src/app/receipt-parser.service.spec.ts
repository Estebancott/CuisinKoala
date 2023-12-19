import { TestBed } from '@angular/core/testing';

import { ReceiptParserService } from './receipt-parser.service';

describe('ReceiptParserService', () => {
  let service: ReceiptParserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReceiptParserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
