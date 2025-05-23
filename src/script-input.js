const form = document.getElementById('inputForm');

let dataStorage = [];

console.log('The inside of Data storage : ', dataStorage);

let mailNum;
let companyName;
let purchaseDate;
let paymentMethod;
let paymentStatus;
let fileInput;

// For preview pdf file
document.getElementById('dropFile').addEventListener('change', (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if(file && file.type === "application/pdf"){
        const fileReader = new FileReader();

        fileReader.onload = function () {
            const pdfData = fileReader.result;

            const previewBox = document.getElementById('preview');
            const image = document.getElementById('upImage');
            const span = document.getElementById('spanText');
            previewBox.innerHTML = `<embed src="${pdfData}" type="application/pdf" width="100%" height="358px" class="rounded border" />`;
            image.style.display = "none";
            span.style.display = "none";
        };

        fileReader.readAsDataURL(file);
    }else{
        alert("File bukan PDF!");
    }
});

// This function is to accept input after button pressed
document.getElementById("unggah").onclick = function(e){
    e.preventDefault();

    mailNum = document.getElementById("nomorSurat").value;
    companyName = document.getElementById("namaPerusahaan").value;
    purchaseDate = document.getElementById("tanggalBeli").value;
    paymentStatus = document.querySelector('input[name="status"][value="sudah"]').checked;
    if(paymentStatus == true){
        paymentStatus = "Paid";
        paymentMethod = document.getElementById('method').value;
    }else{
        paymentStatus = "Unpaid";
        paymentMethod = "-";
    }

    fileInput = document.getElementById('dropFile').value;

    // Entry data
    let entry = {
        mailNum,
        companyName,
        purchaseDate,
        paymentStatus,
        paymentMethod,
        fileInput
    }

    dataStorage.push(entry);

    console.log(mailNum);
    console.log(companyName);
    console.log(purchaseDate);
    console.log(paymentStatus);
    console.log(paymentMethod);
    console.log(fileInput);
}


function togglePaymentMethod(){
    const input = document.querySelector('input[name="status"][value="sudah"]').checked;
    const method = document.getElementById('paymentMethod');

    if(input == true){
        method.style.display = "flex";
    }else{
        method.style.display = "none";
    }
}