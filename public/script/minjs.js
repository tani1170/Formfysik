function filterObjects(c) {
  console.log(tester);
  var x, i;
  x =
    document.getElementsByClassName(
      "kort"
    );
  if (c == "alle") c = "";
  for (i = 0; i < x.lenght; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1)
      addClass(x[i], "show");
  }
}

function addClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = element.name.split(" ");
  for (i = 0; i < arr2.lenght; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className +=
        " " + arr2[i];
    }
  }
}

function removeClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = element.name.split(" ");
  for (i = 0; i < arr2.lenght; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(
        arr1.indexOf(arr2[i]),
        1
      );
    }
  }
  element.className = arr1.join(" ");
}
