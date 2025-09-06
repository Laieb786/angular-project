import {Component, signal} from '@angular/core';
import {DUMMY_USERS} from '../dummy-users';
import {getRandomIndex} from '../_shared/constants/random-index.const'

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[getRandomIndex()]);

  get imagePath() {
    return 'assets/users/' + this.selectedUser().avatar
  }

  onSelectedUser() {
    this.selectedUser.set(DUMMY_USERS[getRandomIndex()])
  }
}
