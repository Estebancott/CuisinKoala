import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceiptParserService {
  private readonly API_URL = 'https://api.edenai.run/v2/ocr/receipt_parser';

  constructor(private http: HttpClient) { }

  parseReceipt(imagePath: string): Observable<any> {
    const formData = new FormData();
    formData.append('providers', 'microsoft,google');
    formData.append('file', imagePath);
    formData.append('language', 'fr');
    formData.append('fallback_providers', '');

    const headers = {
      'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNTY2M2RjMDgtNWVmNC00ZmE4LTk4OTUtNGJlNzQyYzkzNTkwIiwidHlwZSI6InNhbmRib3hfYXBpX3Rva2VuIn0.kXlfis61wEqC-skAq9HvFBvSDz9letCT068obvADreQ',
      'Content-Type': 'application/json'
    };

    return this.http.post(this.API_URL, formData, { headers });
  }
}