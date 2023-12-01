const click123 = document.getElementsByClassName("menu_item");
const menuItemArray = [...click123];
menuItemArray.forEach(menuItem => {
  menuItem.addEventListener("click", () => {
    var height = document.getElementsByClassName("content_left")[0].style.height = 600 + "px";
    const menuBottom = menuItem.querySelector('.menu_bottom');
    const paragraph = menuBottom.querySelector('p');
    if (paragraph) {
      paragraph.classList.toggle('hide');
    }
    var w = window.innerWidth;

    if (w > 400 && w <= 768) {
      var height = document.getElementsByClassName("content_left")[0].style.height = 650 + "px";
      const hide123 = document.getElementsByClassName("hide");
      var total = 4
      var current = 4 - hide123.length;

      for (var i = 0; i < current; i++) {

        var { clientHeight } = document.getElementsByClassName("content_left")[0];
        var height1 = clientHeight + 80;

        var height = document.getElementsByClassName("content_left")[0].style.height = height1 + "px";


      }
    }
    else if (w <= 400) {
      var height = document.getElementsByClassName("content_left")[0].style.height = 691 + "px";
      const hide123 = document.getElementsByClassName("hide");
      var total = 4
      var current = 4 - hide123.length;

      for (var i = 0; i < current; i++) {

        var { clientHeight } = document.getElementsByClassName("content_left")[0];
        var height1 = clientHeight + 130;

        var height = document.getElementsByClassName("content_left")[0].style.height = height1 + "px";


      }
    }
  });
});