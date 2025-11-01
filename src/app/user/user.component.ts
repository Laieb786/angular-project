import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*
  Hier wird eine Input-Property verwendet, um Daten von der Elternkomponente (app.component.ts) zu empfangen.
  Die Elternkomponente übergibt einzelne Avatar-Werte aus dem users-Array.

  Das Ausrufezeichen "!" (Non-Null Assertion-Operator) teilt TypeScript mit, dass avatar IMMER durch Angulars Datenbindung zur Laufzeit gesetzt wird.
  Der Wert außerhalb (in der Parent-Component) immer gesetzt.

  Das `{ required: true }`-Flag bei `@Input` ist eine Compile‑/Template‑Prüfung: es signalisiert dem Angular-Compiler, dass die Elternkomponente diese Property binden MUSS.
  Die Kombination aus `{ required: true }` und `!` hilft, sowohl Template-Checks als auch TypeScript‑Typprüfungen sauberer zu machen.
  */

  /*
  -- 1. Variante: mit Input-Properties --
  Erklärung:
  @Input({required: true}) markiert eine Property als Pflicht-Input von der Elternkomponente. Das Ausrufezeichen "!" (Non-Null Assertion) teilt TypeScript mit, dass der Wert zur Laufzeit durch Angular gesetzt wird.
  Zugriff auf den Wert: this.avatar - direkt als Property ohne Klammern. get imagePath() ist eine Getter-Methode, die bei jedem Zugriff den Pfad neu berechnet.
  Nachteil: Angular kann nicht automatisch erkennen, wann sich der Wert ändert - die Change Detection prüft dies manuell.
  */
  @Input ({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // @Output() ermöglicht es dieser Child-Component, Events an die Parent-Component (app.component.ts) zu senden. EventEmitter sendet die User-ID bei Klick.
  @Output() select = new EventEmitter();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }


  /*
  -- 2. Variante: mit Signal-Inputs --
  Erklärung:
  Signal-Inputs sind reaktive Werte, die sich automatisch aktualisieren. input.required<string>() erstellt ein Pflicht-Input von der Elternkomponente.
  Zugriff auf den Wert: this.avatar() - mit Klammern, weil es eine Funktion ist.
  computed() berechnet einen Wert automatisch neu, sobald sich avatar() ändert.
  Vorteil: Angular weiß genau, was sich geändert hat und aktualisiert nur das Nötige.
  */
  // avatar = input.required<string>();
  // name = input.required<string>();
  //
  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // Benennungen für Methodiken, die für ein bestimmtes Event aufgerufen werden, beginnen mit dem Präfix "on".
  onSelectedUser() {
    this.select.emit(this.id);
  }
}
