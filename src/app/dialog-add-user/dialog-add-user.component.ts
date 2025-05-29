import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';      // benötigt für [(ngModel)] im html


@Component({
   selector: 'app-dialog-add-user',
   standalone: true,
   imports: [MatDialogContent, MatDialogActions, MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, FormsModule],
   templateUrl: './dialog-add-user.component.html',
   styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {

   user = new User();
   birthDate!: Date;    // "!" heißt wir versprechen, dass ein wert zugewiesen wird

   constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>) { }

   onNoClick() {

   }

   saveUser() {
      this.user.birthDate = this.birthDate.getTime();
      console.log('current user is', this.user)
   }
}
