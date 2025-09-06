import {Component} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import {randomIndex} from '../_shared/constants/random-index.const'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex];

  get imagePath() {
    return 'assets/users/' + this.selectedUser.avatar
  }

  onSelectedUser() {
    this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
