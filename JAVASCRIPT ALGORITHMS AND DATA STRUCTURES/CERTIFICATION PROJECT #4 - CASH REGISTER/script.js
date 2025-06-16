let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const changeDue = document.getElementById('change-due');
const customerCash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const totalPrice = document.getElementById('total-price');
const cashInDrawer = document.getElementById('cash-in-drawer');

//MOSTRAR EL PRECIO DEL PRODUCTO
totalPrice.textContent = `Total price: ${price}`;

//MOSTRAR EL BALANCE DE LA CAJA
const showCashRegisterBalance = () => {
  cashInDrawer.innerHTML = `<ol class='cid-list'><span class='list-title'>Change in drawer:</span>
  <li class='cid-list-content'>Pennies: ${cid[0][1].toFixed(2)}</li>
  <li class='cid-list-content'>Nickels: ${cid[1][1].toFixed(2)}</li>
  <li class='cid-list-content'>Dimes: ${cid[2][1].toFixed(2)}</li>
  <li class='cid-list-content'>Quarters: ${cid[3][1].toFixed(2)}</li>
  <li class='cid-list-content'>Ones: ${cid[4][1].toFixed(2)}</li>
  <li class='cid-list-content'>Fives: ${cid[5][1].toFixed(2)}</li>
  <li class='cid-list-content'>Tens: ${cid[6][1].toFixed(2)}</li>
  <li class='cid-list-content'>Twenties: ${cid[7][1].toFixed(2)}</li>
  <li class='cid-list-content'>Hundreds: ${cid[8][1].toFixed(2)}</li></ol>`;
}

showCashRegisterBalance();

const monetaryDenominationsValues = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

const purchase = () => {
  let totalCashRegisterAmount = cid.reduce((acummulator, currentValue) => acummulator += currentValue[1], 0);
  totalCashRegisterAmount = parseFloat(totalCashRegisterAmount.toFixed(2));
  const customerCashValue = parseFloat(customerCash.value);
  
  if (customerCashValue < price) {
    alert('Customer does not have enough money to purchase the item');
  } else if (customerCashValue === price) {
    changeDue.innerHTML = 'No change due - customer paid with exact cash';
  } else {
    let change = parseFloat((customerCashValue - price).toFixed(2));
    let resultArray = [];

    if (totalCashRegisterAmount < change) {
      if (change > 0) {
        changeDue.textContent = 'Status: INSUFFICIENT_FUNDS';
      } else {
        changeDue.textContent = 'Status: OPEN ' + resultArray.map(el => `${el[0]}: $${el[1].toFixed(2)}`).join(' ');
      }
    } else if (Math.abs(totalCashRegisterAmount - change) < 0.01) {
      changeDue.textContent = 'Status: CLOSED ' + cid.map(el => `${el[0]}: $${el[1].toFixed(2)}`).join(' ');
    } else {
      for (let index = cid.length - 1; index >= 0; index--) {
        if (change >= monetaryDenominationsValues[index] && cid[index][1] >= monetaryDenominationsValues[index]) {
          resultArray.push([cid[index][0], 0]);
          while(cid[index][1] >= monetaryDenominationsValues[index] && change >= monetaryDenominationsValues[index]) {
            change -= monetaryDenominationsValues[index];
            change = parseFloat(change.toFixed(2)); 
            cid[index][1] -= monetaryDenominationsValues[index];
            resultArray[resultArray.length - 1][1] += monetaryDenominationsValues[index];
          }
        }
      }
      changeDue.innerHTML = 'Status: OPEN ' + resultArray.map(el => `${el[0]}: $${el[1].toFixed(2)}`).join(' ');
      showCashRegisterBalance();
    }
    console.log(totalCashRegisterAmount)
  }
}

purchaseBtn.addEventListener('click', purchase);