function calcTabuada() {
  let num = document.getElementById("numTabu");
  let tab = document.getElementById("selTab");

  if (num.value.length == 0) {
    alert("Insira um número válido.");
  } else {
    let n = Number(num.value);
    let c = 1;
    tab.innerHTML = "";
    while (c <= 10) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }

    // for (let c = 1; c <= 10; c++) {
    //   let item = document.createElement("option");
    //   item.text = `${n} x ${c} = ${n * c}`;
    //   item.value = `tab${c}`;
    //   tab.appendChild(item);
    // }
  }
}
