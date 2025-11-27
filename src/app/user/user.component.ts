import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from './models/user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*
  -- 1. Variante: mit Input/Output-Properties --
  Erklärung:
  @Input({required: true}) markiert eine Property als Pflicht-Input von der Elternkomponente. Das Ausrufezeichen "!" (Non-Null Assertion) teilt TypeScript mit, dass der Wert zur Laufzeit durch Angular gesetzt wird.
  Zugriff auf den Wert: this.avatar - direkt als Property ohne Klammern. get imagePath() ist eine Getter-Methode, die bei jedem Zugriff den Pfad neu berechnet.

  @Output() mit EventEmitter ermöglicht es, Events an die Parent-Component zu senden. Über emit() werden Daten (hier: die User-ID) an die Elternkomponente übergeben.

  Das Ausrufezeichen "!" (Non-Null Assertion-Operator) teilt TypeScript mit, dass avatar IMMER durch Angulars Datenbindung zur Laufzeit gesetzt wird.
  Der Wert außerhalb (in der Parent-Component) immer gesetzt.

  Das `{ required: true }`-Flag bei `@Input` ist eine Compile‑/Template‑Prüfung: es signalisiert dem Angular-Compiler, dass die Elternkomponente diese Property binden MUSS.
  Die Kombination aus `{ required: true }` und `!` hilft, sowohl Template-Checks als auch TypeScript‑Typprüfungen sauberer zu machen.

  Nachteil: Angular kann nicht automatisch erkennen, wann sich der Wert ändert - die Change Detection prüft dies manuell.
  */
  @Input({required: true}) user!: User;

  // Der Typ ist boolean, weil diese Property anzeigt, ob der aktuelle User ausgewählt ist oder nicht – es gibt nur zwei Zustände:
  // true = der User ist ausgewählt
  // false = der User ist nicht ausgewählt
  @Input({required: true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

  /*
  -- 2. Variante: mit Signal-Inputs & Output-Funktion --
  Erklärung:
  Signal-Inputs (input()) sind reaktive Werte, die sich automatisch aktualisieren. input.required<string>() erstellt ein Pflicht-Input von der Elternkomponente.
  Zugriff auf den Wert: this.avatar() - mit Klammern, weil es eine Funktion ist.
  computed() berechnet einen Wert automatisch neu, sobald sich avatar() ändert.
  Vorteil: Angular weiß genau, was sich geändert hat und aktualisiert nur das Nötige.

  Output-Funktion (output()) erstellt einen Output ohne separaten EventEmitter - Angular verwaltet die Event-Emission automatisch.
  */
  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>(); -> hat den Vorteil, dass man kein extra EventEmitter() deklarieren muss, sondern hier Angular das selbständig handelt!!

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // Benennungen für Methodiken, die für ein bestimmtes Event/Trigger aufgerufen werden, beginnen mit dem Präfix "on".
  onSelectedUser() {
    this.select.emit(this.user.id);
  }
}
