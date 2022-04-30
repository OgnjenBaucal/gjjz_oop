var x = 5;

function myTest() {
  console.log("Testiram x = " + x);
  console.log("Testiram x = ${x}");

  console.log("Musterija" + musterija.ime + " " + musterija.prezime);

  musterija.printInfo();
}

function foo() {
  let x = 3;
}

var musterija = {
  ime: "petar",
  prezime: "petrovic",
  printInfo: function() {
    document.write("ovo je metod musterije");
  }
}