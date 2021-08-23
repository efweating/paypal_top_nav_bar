window.onload = function() {

let dropdowns = document.getElementsByClassName("dropdown");


for (let i = 0; i < dropdowns.length; i++) {
  let dropdown = dropdowns[i];

  dropdown.addEventListener("mouseenter", function( event ) {
    event.target.style.color = "purple";

   setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

  dropdown.addEventListener("mouseover", function( event ) {
    event.target.style.color = "red";

   setTimeout(function() {
      event.target.style.color = "";
    }, 500);
  }, false);

}
  //debugger;
}

