const radioButtons = document.querySelectorAll(".zoo__amount-radio");
const amountNumber = document.querySelector("#amount-number");
function selectRadio() {
  let setAmount = function (event) {
    amountNumber.value = event.target.getAttribute("value");
  };
  let selectPoint = function () {
    if (String(amountNumber.value).length > 4)
      amountNumber.value = parseInt(String(amountNumber.value).slice(1, 5));
    let checkedRadio = document.querySelector(
      '[data-id = "' + amountNumber.value + '"]'
    );
    if (checkedRadio) {
      checkedRadio.checked = true;
    } else {
      for (let radioButton of radioButtons) {
        radioButton.checked = false;
      }
    }
  };
  amountNumber.value = 100;
  amountNumber.addEventListener("input", selectPoint);
  for (let radioButton of radioButtons) {
    radioButton.addEventListener("click", setAmount);
  }
}

export { selectRadio };
