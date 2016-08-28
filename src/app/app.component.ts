import { Component } from '@angular/core';
import {EmojiService} from './emoji.service';
import {FormControl} from "@angular/forms";

import {Observable} from "rxjs";
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  term = new FormControl();
  emojis : Observable<Array<string>>;
  selectedEmoji : string;

  constructor(private emojiService: EmojiService ) {

    this.emojis = this.term.valueChanges
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.emojiService.search(term))
      ;
  }

  selectEmoji(emoji) {
    this.selectedEmoji = emoji;
  }
}
