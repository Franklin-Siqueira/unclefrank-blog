import { TestBed } from '@angular/core/testing';

import { MessageFromAppFormService } from './MessageFromAppFormService.service';

describe('ContactService', () => {
  let service: MessageFromAppFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFromAppFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
