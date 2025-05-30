import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

import { User } from '../../models/user.class';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatDialogModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  user = new User();

  constructor(public dialog: MatDialog) { }

  openDialog() {
    (document.activeElement as HTMLElement)?.blur();  // Fokus vom aktuellen Element nehmen
    this.dialog.open(DialogAddUserComponent);
  }
}
