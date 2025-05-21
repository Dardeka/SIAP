const form = document.getElementById('inputForm');

function togglePaymentMethod(){
    const input = document.querySelector('input[name="status"][value="sudah"]').checked;
    const method = document.getElementById('paymentMethod');

    if(input == true){
        method.style.display = "flex";
    }else{
        method.style.display = "none";
    }
}