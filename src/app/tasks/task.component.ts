import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  // Das Fragezeichen markiert die Property als optional. Das bedeutet, dass selectedUser entweder vom Typ string sein kann oder undefined. Die Komponente funktioniert also auch, wenn kein Wert übergeben wird.
  @Input() selectedUser?: string ;

  //Alternative Schreibweise: Explizite Union mit undefined statt optionalem Fragezeichen
  //@Input() selectedUser: string | undefined;
}
