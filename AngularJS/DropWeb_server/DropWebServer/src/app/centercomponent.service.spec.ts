import { TestBed, inject } from '@angular/core/testing';

import { CenterComponentService } from './centercomponent.service';

describe('CenterComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CenterComponentService]
    });
  });

  it('should be created', inject([CenterComponentService], (service: CenterComponentService) => {
    expect(service).toBeTruthy();
  }));
});
