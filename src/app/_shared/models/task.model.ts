/**
 * Repräsentiert eine Aufgabe mit allen notwendigen Eigenschaften/Datenfeldern/Objekten, anhand der dummy-tasks.ts.
 * Definiert die Struktur für Task-Objekte im gesamten Projekt.
 */
interface Task {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
