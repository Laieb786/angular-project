/*
TYPE: Wie ein Bauplan für ein Objekt Du sagst: "Ein User muss diese 3 Eigenschaften haben: id, name, avatar"
Kannst du dir wie ein Rezept vorstellen: Einmal definiert, bleibt es so
Beispiel: type Farbe = "rot" | "blau" | "grün" (mehrere Möglichkeiten)
type User = { id: string; // Eindeutige Nummer/Text für jeden User name: string; // Der Name des Users avatar: string; // Dateiname des Profilbilds (z.B. "user-1.jpg") }
 */

// type User = {
//   id: string;
//   name: string;
//   avatar: string;
// }

//oder

/*
INTERFACE: Auch ein Bauplan, aber flexibler
Macht das Gleiche wie type, ABER: Du kannst es später erweitern (z.B. in einer anderen Datei "email" hinzufügen)
Wird oft in größeren Projekten verwendet, wenn mehrere Entwickler am Code arbeiten
 */

interface User {
  id: string;
  name: string;
  avatar: string;
}
