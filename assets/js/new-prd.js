function ShowVoucher() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function copyText() {
      
    /* Copy text into clipboard */
    navigator.clipboard.writeText
        ("NEWARRIVALS1510");
}