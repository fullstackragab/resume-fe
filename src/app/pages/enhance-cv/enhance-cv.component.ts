import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { MarkdownComponent } from 'ngx-markdown';
import { first } from 'rxjs';

@Component({
  selector: 'app-enhance-cv',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './enhance-cv.component.html',
  styleUrl: './enhance-cv.component.css',
})
export class EnhanceCvComponent {
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  selectedFile: File | null = null;

  answer: any;
  constructor(private geminiService: GeminiService) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFile = input.files[0];
    }
  }

  onSend() {
    if (this.selectedFile)
      this.geminiService
        .enhanceCV(this.selectedFile)
        .pipe(first())
        .subscribe((answer: any) => {
          this.selectedFile = null;
          this.input.nativeElement.value = '';
          this.answer = answer;
        });
  }
}
