import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatGptService {
  private readonly API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';

  constructor(private http: HttpClient) { }

  getRecipes(ingredients: { name: string, quantity: string }[]): Observable<any> {
    const messages = ingredients.map(ingredient => 
      `I have ${ingredient.quantity} of ${ingredient.name}.`
    );
    messages.push('What recipes can I make with these?');

    const body = {
      'prompt': messages.join('\n'),
      'max_tokens': 150
    };

    const headers = {
      'Authorization': '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',
      'Content-Type': 'application/json'
    };

    return this.http.post(this.API_URL, body, { headers });
  }
}