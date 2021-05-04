
var index = 1;
let Products = [];
const Add = (ev)=>{
    ev.preventDefault();
    let prod = JSON.stringify({
        id: index,
        ProductsName  : $("#txtpName").val(),
        ProductsDescription : $("#txtPdesc").val(),
        Price: $("#price").val(),
        Currency : $("#currency").val()
    });
    Products.push(prod);
    index=index+1;
    document.forms[0].reset();
    console.warn('added' , {Products} );
    localStorage.setItem('ProductList', JSON.stringify(Products) );
    alert("The data was saved.");
    return true;

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btnSave').addEventListener('click', Add);

});




