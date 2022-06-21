function updateProductCost(product,price){
    const getFreeProduct = document.getElementById(product);
    const freeProduct = parseInt(getFreeProduct.innerText = price);
    getFreeProduct.innerText = freeProduct;
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