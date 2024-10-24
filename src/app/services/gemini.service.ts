import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  constructor(private http: HttpClient) {}

  getAnswer(prompt: any) {
    return this.http.post(
      environment.apiUrl,
      {
        prompt,
      },
      {
        responseType: 'text',
      }
    );
  }

  enhanceCV(file: any) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post(environment.apiUrl, formData, {
      responseType: 'text',
    });
  }
}
