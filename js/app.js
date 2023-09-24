// Her definerer jeg en funktion som sker når der bliver scrollet i vinduet.
window.onscroll = function () {
  stickyHeader();
};

// Her laver jeg en variabel 'header' som jeg siger er lig med header tagget i html.
let header = document.querySelector("header");
// Her laver jeg en variabel 'toppen' som er lige med toppen af elementet "header"
let toppen = header.offsetTop;
// Her laver jeg en funktion 'stickyHeader' og siger at når man er scrollet længere ned
// end toppen af headeren, så skal den tilføje en class der hedder 'sticky' som er styles i css.
function stickyHeader() {
  if (window.pageYOffset > toppen) {
    header.classList.add("sticky");
  }
}
