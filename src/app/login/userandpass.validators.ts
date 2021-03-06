import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserandpassValidators {

    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0)
            return { cannotContainSpace: true };
        return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "Fatima")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);

                control.markAsTouched();
            }, 2000);
        });
    }
}