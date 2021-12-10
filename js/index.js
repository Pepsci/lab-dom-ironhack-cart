// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  return subtotal = price * quantity
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test
let totalAll = 0;
  // ITERATION 2
  document.querySelectorAll('.product').forEach(product => {
    product.querySelector('.subtotal span').textContent = updateSubtotal(product);
    totalAll += updateSubtotal(product)
  });

  // ITERATION 3
 document.querySelector('#total-value span').textContent = totalAll 
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.closest('tbody .product').remove();
  console.log('The target in remove is:', target);
}

// ITERATION 5"

function createProduct() {
  const tbody = document.querySelector('tbody');
  const price = document.querySelector('.price span').innerHTML;
  const productName = document.querySelector('.name span').innerHTML;
  const product = document.querySelector('.product')

  let inputName = document.querySelector('.create-product input[type=text]').textContent;
  let inputPrice = document.querySelector('.create-product input[type=number]').value
  
  console.log();
  let cloneProduct = product.cloneNode([]);
  productName.textContent = inputName;
  price.value = inputPrice;
  tbody.appendChild(cloneProduct);
        
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let btnRemoves = document.querySelectorAll('.btn-remove')
  btnRemoves.forEach(btnRs => {
    btnRs.addEventListener('click', removeProduct)
    
  });

  let btnAdd = document.getElementById('create').addEventListener('click', createProduct)

});
