const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("number1");
const ans = document.getElementById("answer");

fetch("http://api.exchangeratesapi.io/v1/latest?access_key=fdcea8be3de7062eb3c6c212cac994a3")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
    convert(currency1, currency2, value);
  } else {
    alert("Choose Diffrent Currency");
  }
});


