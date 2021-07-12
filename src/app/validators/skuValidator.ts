import { 
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';

export function skuValidator(control: AbstractControl): ValidationErrors | null {
  const isValid = !!control.value.match(/^123/);
  console.log('check validate', isValid, control.value)
  return !isValid ? { invalidSku: true } : null;
  // return (control: AbstractControl): ValidationErrors | null => {
  // };
}