function updateProductCost(product,price){
    const getFreeProduct = document.getElementById(product);
    const freeProduct = parseInt(getFreeProduct.innerText = price);
    getFreeProduct.innerText = freeProduct;

    // get total price
    priceTotal();
}

// Total price
function priceTotal(){
    const bestPrice = document.getElementById('best-price');
    const bestPriceNumber = parseInt(bestPrice.innerText);

    const extraMemory = document.getElementById('memory-extra');
    const extraMemoryNumber = parseInt(extraMemory.innerText);

    const extraStorage = document.getElementById('storage-extra');
    const extraStorageNumber = parseInt(extraStorage.innerText);

    const costDelivery = document.getElementById('delivery-charge');
    const costDeliveryNumber = parseInt(costDelivery.innerText);

    // Calculate cost
    const totalPrice = bestPriceNumber + extraMemoryNumber + extraStorageNumber + costDeliveryNumber;

    // get Total cost
    const costTotal = document.getElementById('cost-total');
    costTotal.innerText = totalPrice;

    // get Total
    const total = document.getElementById('total');
    total.innerText = totalPrice;
    

}

// Memory====================================
// 8gb memory using event handle
document.getElementById('memory-8gb').addEventListener('click', function(){
    updateProductCost('memory-extra', 0);

});
// 16gb memory using event handle
document.getElementById('memory-16gb').addEventListener('click', function(){
    updateProductCost('memory-extra', 180);

});
// Storage====================================
// 256gb ssd storage using event handle
document.getElementById('storage-256gb').addEventListener('click', function(){
    updateProductCost('storage-extra', 0);

});
// 512gb ssd storage using event handle
document.getElementById('storage-512gb').addEventListener('click', function(){
    updateProductCost('storage-extra', 100);

});
// 512gb ssd storage using event handle
document.getElementById('storage-1tb').addEventListener('click', function(){
    updateProductCost('storage-extra', 180);

});

// Delivery Charge===============================
// free delivery
document.getElementById('delivery-free').addEventListener('click', function(){
    updateProductCost('delivery-charge', 0);
})
// delivery cost $20
document.getElementById('delivery-20').addEventListener('click', function(){
    updateProductCost('delivery-charge', 20);
})

// Discount Button===============================
document.getElementById('apply-btn').addEventListener('click', function(){
    const promoField = document.getElementById('promo-field');
    const promoFieldValue = promoField.value;
    const total = document.getElementById('total');
    let totalAmount = parseFloat(total.innerText);
    const discount = totalAmount / 20;
    if(promoFieldValue == 'stevejob'){
        totalAmount = totalAmount - discount;
    }
    else{
        console.log(alert('Wrond code!'));
    }
    total.innerText = totalAmount;

    // clear the promoField
    promoField.value = '';
})