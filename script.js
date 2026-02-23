function add(val) {
  document.getElementById("display").value += val;
}

function clr() {
  document.getElementById("display").value = "";
}

function calc() {
  let result = document.getElementById("display").value;
  document.getElementById("display").value = eval(result);
}
