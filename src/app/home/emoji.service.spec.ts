/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { EmojiService} from './emoji.service';

describe('Service: Emoji', () => {
  beforeEach(() => {
    addProviders([EmojiService]);
  });

  it('should ...',
    inject([EmojiService],
      (service: EmojiService) => {
        expect(service).toBeTruthy();
      }));
});
