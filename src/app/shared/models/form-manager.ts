import { FormGroup } from '@angular/forms';

export abstract class FormManager {
  constructor(public form: FormGroup) {}
}
