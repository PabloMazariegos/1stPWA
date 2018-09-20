# PWA
> Pagina web que puede ser instalada en cualquier smartphone
---
Contiene el archivo manifest.json donde se especifica, los objetos que deberan ser interpretados por el motor de chromium en el smartphone, desde colores hasta las fuentes, posiciones, etc.

## Scripts.js
Contiene unicamente el codigo JavaScript para el cambio del tamaño de la fuente y el texto a mostrar.

## SW.js
Contiene el ServiceWorker que hace ejecutar la pagina web desde el motor de chromium del smartphone, usando asincronismos y callbacks, es fundamental, en el se coloca los callbacks de cache, que se desea cachear y los datos fijos de la app, tambien el asincronico "fetch" para comprobar el cache contra el web service, si difieren en algun archivo este procede a descargar y remplazar el cache antiguo, el asincronico "wait" espera hasta que la app se instala en el smartphone y procede a descargar el cache necesario.
