import {Component} from '@angular/core';
import {HeaderComponent} from './header/header.component';
import {UserComponent} from './user/user.component';
import {DUMMY_USERS} from './dummy-users';
import {TaskComponent} from './tasks/task.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  // Initialisiert das users-Array mit Dummy-Daten und setzt die selectedUserId auf die ID des ersten Users.
  users = DUMMY_USERS;
  selectedUserId = this.users[0].id;

  //Dieser Code ist ein Getter, der den aktuell ausgewählten User aus dem users-Array zurückgibt, indem er nach der selectedUserId sucht. Das ! am Ende bedeutet, dass TypeScript garantiert wird, dass ein User gefunden wird.
  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  //Handler-Methode "onSelectUser" aktualisiert die selectedUserId mit der übergebenen ID, wenn ein User ausgewählt wird.
  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}
