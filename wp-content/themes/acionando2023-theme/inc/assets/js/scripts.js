document.addEventListener('DOMContentLoaded', function() {

  /*window.onscroll = function() { scrollFixedHeader() };
  var header = document.getElementById("masthead");
  var sticky = header.offsetTop;
  function scrollFixedHeader() {
    if (window.pageYOffset > sticky) {
      header.classList.add("fixed-top");
    } else {
      header.classList.remove("fixed-top");
    }
  }*/

  document.getElementById('searchModalCenter').addEventListener('shown.bs.modal', function () {
    document.getElementById('searchfocus').focus()
  })

});