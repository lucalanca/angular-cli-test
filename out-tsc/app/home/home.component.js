var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmojiService } from './emoji.service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
export var Home = (function () {
    function Home(emojiService) {
        var _this = this;
        this.emojiService = emojiService;
        this.term = new FormControl();
        this.emojis = this.term.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.emojiService.search(term); });
    }
    Home.prototype.selectEmoji = function (emoji) {
        this.selectedEmoji = emoji;
    };
    Home = __decorate([
        Component({
            selector: 'home',
            templateUrl: 'home.template.html',
            styleUrls: ['./home.style.scss'],
            providers: [EmojiService]
        }), 
        __metadata('design:paramtypes', [EmojiService])
    ], Home);
    return Home;
}());
//# sourceMappingURL=../../../../src/app/home/home.component.js.map