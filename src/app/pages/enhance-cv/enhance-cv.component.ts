import { Component } from '@angular/core';
import { GeminiService } from '../../services/gemini.service';
import { MarkdownComponent } from 'ngx-markdown';
import { first } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-enhance-cv',
  standalone: true,
  imports: [
    MarkdownComponent,
    ButtonModule,
    FileUploadModule,
    ProgressSpinnerModule,
  ],
  templateUrl: './enhance-cv.component.html',
  styleUrl: './enhance-cv.component.css',
})
export class EnhanceCvComponent {
  selectedFile: File | null = null;
  fileUploadCtrl: any;
  answer: any;
  loading = false;

  constructor(private geminiService: GeminiService) {}

  onSelectFile(e: any, fileUpload: any) {
    this.selectedFile = e.files[0];
    this.fileUploadCtrl = fileUpload;
  }

  onSend() {
    if (this.selectedFile) {
      this.loading = true;
      this.geminiService
        .enhanceCV(this.selectedFile)
        .pipe(first())
        .subscribe({
          next: (answer: any) => {
            this.selectedFile = null;
            this.fileUploadCtrl.clear();
            this.answer = answer;
            this.loading = false;
          },
          error: (e) => {
            this.loading = false;
          },
        });
    }
  }
}
