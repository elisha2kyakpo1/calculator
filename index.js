const number = (value) => {
  document.form1.result.value += value;
}

const sqrt = () => {
  const val = Math.sqrt(document.getElementById("root").value);
  document.getElementById("root").value = val;
}

const clearArea = (value) => {
  document.form1.result.value = value;
}

const answer = () => {
  document.form1.result.value = eval(document.form1.result.value);
}