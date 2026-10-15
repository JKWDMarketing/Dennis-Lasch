# dennislasch.com

Persönliche Seite von Dennis Lasch. Statisches HTML, CSS und JavaScript ohne Build-Schritt und ohne externe Abhängigkeiten (Schriften lokal).

## Struktur

```
index.html              Startseite
pm/index.html           PM-International (nur über die Startseite verlinkt)
impressum/index.html    Impressum
datenschutz/index.html  Datenschutzerklärung
dennis-lasch.vcf        Digitale Visitenkarte („Kontakt speichern“)
og.jpg                  Vorschaubild für WhatsApp, LinkedIn & Co.
robots.txt, sitemap.xml
assets/css/style.css    Gestaltung (Farben JKWD #FFBE40 / #302E2C)
assets/js/main.js       Terminauswahl und Scroll-Linie
assets/img/             Fotos
assets/logo/            JKWD- und IMPOLA-Logos
assets/fonts/           Outfit und Poppins (SIL Open Font License 1.1)
```

## Lokal ansehen

```bash
python3 -m http.server 8000
```
Dann http://localhost:8000 öffnen.

## Vor dem Go-live

- [ ] Adresse, Telefon und E-Mail in `impressum/` und `datenschutz/` eintragen (gelb markiert)
- [ ] Telefon und E-Mail in `dennis-lasch.vcf` ergänzen
- [ ] Vercel-Angaben in der Datenschutzerklärung mit dem aktuellen Vercel-DPA abgleichen
- [ ] Impressum und Datenschutz von René gegenlesen lassen
- [ ] PM-International-Logo einbauen, sobald die offizielle Datei vorliegt
