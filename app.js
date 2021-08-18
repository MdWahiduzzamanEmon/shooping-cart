const phonePlus = document.getElementById('phone-plus').addEventListener('click', function () {
    valueUpgrade("phone-number", true, "phone-price", 1219);
     totalPrice();

})

const phoneMinus = document.getElementById('phone-minus').addEventListener('click', function () {
    valueUpgrade("phone-number",false,"phone-price",1219)
    totalPrice();
})
const casePlus = document.getElementById('case-plus').addEventListener('click', function () {
    valueUpgrade("case-Number",true,"case-price",59)
    totalPrice();
})

const caseMinus = document.getElementById('case-minus').addEventListener('click', function () {
    valueUpgrade("case-Number",false,"case-price",59)
    totalPrice();
})


function valueUpgrade(productsNumber,increaseNumber,productPrice,price) {
    const productNumber = document.getElementById(productsNumber);
    let productNumberValue = productNumber.value;

    if (increaseNumber == true) {
        productNumberValue = parseInt(productNumberValue) + 1;
        
    } else if(productNumberValue>0){
        productNumberValue = parseInt(productNumberValue) - 1;
        
    }

    let prices = document.getElementById(productPrice);
    prices.innerText = productNumberValue * price;
    productNumber.value = productNumberValue;
    
   

    return productNumberValue;
    
}

function totalPrice() {
    const phoneNumber = document.getElementById("phone-number");
    const phoneNumberValue = parseInt(phoneNumber.value);
    const phoneTotal = phoneNumberValue * 1219;
    const caseNumber = document.getElementById("case-Number");
    const caseNumberValue = parseInt(caseNumber.value);
    const caseTotal = caseNumberValue * 59;

    const subTotal = phoneTotal + caseTotal;
    const taxPrice = subTotal / 10;
    const total = subTotal + taxPrice;
    document.getElementById('subtotalPrice').innerText = subTotal;
    document.getElementById('taxPrice').innerText = taxPrice;
    document.getElementById('totalPrice').innerText = total;

    

}
