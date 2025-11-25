import {Component, Input} from '@angular/core';
import {TaskComponent} from '../components/task/task.component';
import {DUMMY_TASKS} from '../../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [
    TaskComponent
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  // Das Fragezeichen markiert die Property als optional. Das bedeutet, dass selectedUser entweder vom Typ string sein kann oder undefined. Die Komponente funktioniert also auch, wenn kein Wert übergeben wird.
  @Input({required: true}) userId!: string;
  @Input({required: true}) name?: string;

  //Alternative Schreibweise: Explizite Union mit undefined statt optionalem Fragezeichen
  //@Input() name: string | undefined;

  dummyTasks = DUMMY_TASKS

  get selectedUserTasks() {
    return this.dummyTasks.filter((dummyTask) => dummyTask.userId === this.userId);
  }
}
