import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.page.html',
  styleUrls: ['./verification.page.scss'],
  standalone: false,
})
export class VerificationPage implements OnInit {
  verificationForm!: FormGroup;
  @ViewChildren('input0, input1, input2, input3')
  inputs!: QueryList<ElementRef>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.verificationForm = this.formBuilder.group({
      digit1: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit2: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit3: ['', [Validators.required, Validators.pattern(/^\d$/)]],
      digit4: ['', [Validators.required, Validators.pattern(/^\d$/)]],
    });
  }

  onDigitInput(event: any, index: number) {
    const value = event.target.value;

    if (!/^\d$/.test(value) && value !== '') {
      event.target.value = '';
      return;
    }

    if (value && index < 3) {
      const nextInput = this.inputs.toArray()[index + 1];
      if (nextInput) {
        nextInput.nativeElement.focus();
      }
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    const target = event.target as HTMLInputElement;

    if (event.key === 'Backspace' && !target.value && index > 0) {
      const prevInput = this.inputs.toArray()[index - 1];
      if (prevInput) {
        prevInput.nativeElement.focus();
      }
    }
  }

  onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const pasteData = event.clipboardData?.getData('text') || '';

    if (/^\d{4}$/.test(pasteData)) {
      const digits = pasteData.split('');
      this.verificationForm.patchValue({
        digit1: digits[0],
        digit2: digits[1],
        digit3: digits[2],
        digit4: digits[3],
      });

      const lastInput = this.inputs.toArray()[3];
      if (lastInput) {
        lastInput.nativeElement.focus();
      }
    }
  }

  resendCode() {
    console.log('Resending code...');
  }

  onSubmit() {
    if (this.verificationForm.valid) {
      const code = Object.values(this.verificationForm.value).join('');
      console.log('Verification code:', code);
    } else {
      console.log('Form is not valid');
    }
  }
}
