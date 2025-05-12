import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { environment } from '../environments/environments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  pergunta: string = '';
  resposta: string = '';
  geminiApiKey: string = environment.geminiApiKey; // Assumindo que você tem a chave no environment

  constructor(private http: HttpClient) {}

  enviarPergunta() {
    if (!this.geminiApiKey) {
      this.resposta = 'Chave da API do Gemini não configurada.';
      return;
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      contents: [
        {
          parts: [{ text: this.pergunta }],
        },
      ],
    };

    this.resposta = 'Carregando resposta...';

    this.http
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${this.geminiApiKey}`,
        body,
        { headers }
      )
      .subscribe(
        (res: any) => {
          if (
            res &&
            res.candidates &&
            res.candidates[0] &&
            res.candidates[0].content &&
            res.candidates[0].content.parts &&
            res.candidates[0].content.parts[0].text
          ) {
            this.resposta = res.candidates[0].content.parts[0].text;
          } else {
            this.resposta = 'Não consegui gerar resposta do Gemini.';
          }
        },
        (err) => {
          console.error('Erro ao obter resposta do Gemini:', err);
          this.resposta = 'Erro ao obter resposta da API do Gemini.';
        }
      );
  }
}
