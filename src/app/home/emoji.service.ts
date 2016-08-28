import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

interface EmojiResult {
  score: number;
  text: string;
}

@Injectable()
export class EmojiService {
  private emojisUrl = 'http://emoji.getdango.com/api/emoji';

  constructor(private http: Http) { }

  search(query: string): Promise<string[]> {
    return this.http.get(`${this.emojisUrl}?q=${query}`)
      .toPromise()
      .then(this.extractData)
      .then((results: EmojiResult[]) => results.map(r => r.text))
      .catch(this.handleError);
  }

  private extractData (res: Response): EmojiResult[] {
    return res.json().results || [];
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Promise.reject(errMsg);
  }
}
