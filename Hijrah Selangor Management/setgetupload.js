//Upload document functions in the document submission process section
function ctos_upload1() {
    let uploadButton = document.getElementById("ctosupload");
    let fileName = document.getElementById("ctosfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("ctosuploaded").innerText="Uploaded";
    document.getElementById("ctosuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P1').classList.remove("disabledbutton");
    document.getElementById('previewlink_P1').classList.add("previewbtn");
    document.getElementById('previewlink_P12').classList.remove("disabledbutton");
    document.getElementById('previewlink_P12').classList.add("previewbtn");
    document.getElementById('previewlink_P13').classList.remove("disabledbutton");
    document.getElementById('previewlink_P13').classList.add("previewbtn");
    document.getElementById('prev_eye_P1').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P1').classList.add("fa-eye");
    document.getElementById('prev_eye_P12').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P12').classList.add("fa-eye");
    document.getElementById('prev_eye_P13').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P13').classList.add("fa-eye");
    }
}

function ssmregdoc_upload2() {
    let uploadButton = document.getElementById("ssmregdocupload");
    let fileName = document.getElementById("ssmregdocfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("ssmuploaded").innerText="Uploaded";
    document.getElementById("ssmuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P2').classList.remove("disabledbutton");
    document.getElementById('previewlink_P2').classList.add("previewbtn");
    document.getElementById('previewlink_P22').classList.remove("disabledbutton");
    document.getElementById('previewlink_P22').classList.add("previewbtn");
    document.getElementById('previewlink_P23').classList.remove("disabledbutton");
    document.getElementById('previewlink_P23').classList.add("previewbtn");
    document.getElementById('prev_eye_P2').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P2').classList.add("fa-eye");
    document.getElementById('prev_eye_P22').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P22').classList.add("fa-eye");
    document.getElementById('prev_eye_P23').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P23').classList.add("fa-eye");
    }
}

function dirIDdoc_upload3() {
    let uploadButton = document.getElementById("dirIDdocupload");
    let fileName = document.getElementById("dirIDdocfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("didocuploaded").innerText="Uploaded";
    document.getElementById("didocuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P3').classList.remove("disabledbutton");
    document.getElementById('previewlink_P3').classList.add("previewbtn");
    document.getElementById('previewlink_P32').classList.remove("disabledbutton");
    document.getElementById('previewlink_P32').classList.add("previewbtn");
    document.getElementById('previewlink_P33').classList.remove("disabledbutton");
    document.getElementById('previewlink_P33').classList.add("previewbtn");
    document.getElementById('prev_eye_P3').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P3').classList.add("fa-eye");
    document.getElementById('prev_eye_P32').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P32').classList.add("fa-eye");
    document.getElementById('prev_eye_P33').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P33').classList.add("fa-eye");
    
    }
}

function bankstate_upload4() {
    let uploadButton = document.getElementById("bankstateupload");
    let fileName = document.getElementById("bankstatefile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("bankstateuploaded").innerText="Uploaded";
    document.getElementById("bankstateuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P4').classList.remove("disabledbutton");
    document.getElementById('previewlink_P4').classList.add("previewbtn");
    document.getElementById('previewlink_P42').classList.remove("disabledbutton");
    document.getElementById('previewlink_P42').classList.add("previewbtn");
    document.getElementById('previewlink_P43').classList.remove("disabledbutton");
    document.getElementById('previewlink_P43').classList.add("previewbtn");
    document.getElementById('prev_eye_P4').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P4').classList.add("fa-eye");
    document.getElementById('prev_eye_P42').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P42').classList.add("fa-eye");
    document.getElementById('prev_eye_P43').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P43').classList.add("fa-eye");
    }
}

function picofBusinessprem_upload5() {
    let uploadButton = document.getElementById("picofBusinesspremupload");
    let fileName = document.getElementById("picofBusinesspremfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("picofbuspremuploaded").innerText="Uploaded";
    document.getElementById("picofbuspremuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P5').classList.remove("disabledbutton");
    document.getElementById('previewlink_P5').classList.add("previewbtn");
    document.getElementById('previewlink_P52').classList.remove("disabledbutton");
    document.getElementById('previewlink_P52').classList.add("previewbtn");
    document.getElementById('previewlink_P53').classList.remove("disabledbutton");
    document.getElementById('previewlink_P53').classList.add("previewbtn");
    document.getElementById('prev_eye_P5').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P5').classList.add("fa-eye");
    document.getElementById('prev_eye_P52').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P52').classList.add("fa-eye");
    document.getElementById('prev_eye_P53').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P53').classList.add("fa-eye");
    }
}

function picofPP_upload6() {
    let uploadButton = document.getElementById("picofPPupload");
    let fileName = document.getElementById("picofPPfile");

    uploadButton.onchange = () => {
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        chosenImage.setAttribute("src",reader.result);
    }
    fileName.textContent = uploadButton.files[0].name;
    //Change the "Pending" status to "successful"
    document.getElementById("pipassuploaded").innerText="Uploaded";
    document.getElementById("pipassuploaded").style.background="#5dfd65";
    document.getElementById('previewlink_P6').classList.remove("disabledbutton");
    document.getElementById('previewlink_P6').classList.add("previewbtn");
    document.getElementById('previewlink_P62').classList.remove("disabledbutton");
    document.getElementById('previewlink_P62').classList.add("previewbtn");
    document.getElementById('previewlink_P63').classList.remove("disabledbutton");
    document.getElementById('previewlink_P63').classList.add("previewbtn");
    document.getElementById('prev_eye_P6').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P6').classList.add("fa-eye");
    document.getElementById('prev_eye_P62').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P62').classList.add("fa-eye");
    document.getElementById('prev_eye_P63').classList.remove("fa-eye-slash");
    document.getElementById('prev_eye_P63').classList.add("fa-eye");
    }
}




//To allow preview for uploaded documents in document submission


//Uploaded Ctos file
const upinput1 = document.getElementById('ctosupload');
const downlink1 = document.getElementById('previewlink_P1');
const downlink12 = document.getElementById('previewlink_P12');
const downlink13 = document.getElementById('previewlink_P13');
let objectURL_P1;

upinput1.addEventListener('change', function () {

const file = this.files[0];
objectURL_P1 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink1.href = objectURL_P1;
downlink1.window.open(objectURL_P1,'_blank').focus();
});

//Uploaded Ctos file 2
upinput1.addEventListener('change', function () {

const file = this.files[0];
objectURL_P1 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink12.href = objectURL_P1;
downlink12.window.open(objectURL_P1,'_blank').focus();
});


//Uploaded Ctos file 3
upinput1.addEventListener('change', function () {

const file = this.files[0];
objectURL_P1 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink13.href = objectURL_P1;
downlink13.window.open(objectURL_P1,'_blank').focus();
});









//Uploaded SSM Registration file
const upinput2 = document.getElementById('ssmregdocupload');
const downlink2 = document.getElementById('previewlink_P2');
const downlink22 = document.getElementById('previewlink_P22');
const downlink23 = document.getElementById('previewlink_P23');

let objectURL_P2;

upinput2.addEventListener('change', function () {

const file = this.files[0];
objectURL_P2 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink2.href = objectURL_P2;
downlink2.window.open(objectURL_P2,'_blank').focus();
});
//Uploaded Ctos file 2
upinput2.addEventListener('change', function () {

    const file = this.files[0];
    objectURL_P2 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink22.href = objectURL_P2;
    downlink22.window.open(objectURL_P2,'_blank').focus();
    });
    
    
    //Uploaded Ctos file 3
    upinput2.addEventListener('change', function () {
    
    const file = this.files[0];
    objectURL_P2 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink23.href = objectURL_P2;
    downlink23.window.open(objectURL_P2,'_blank').focus();
    });
    










//Uploaded Director Identification Doc file
const upinput3 = document.getElementById('dirIDdocupload');
const downlink3 = document.getElementById('previewlink_P3');
const downlink32 = document.getElementById('previewlink_P32');
const downlink33 = document.getElementById('previewlink_P33');
let objectURL_P3;

upinput3.addEventListener('change', function () {
if (objectURL_P3) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P3);  
}

const file = this.files[0];
objectURL_P3 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink3.href = objectURL_P3;
downlink3.window.open(objectURL_P3,'_blank').focus();
});
//Uploaded Ctos file 2
upinput3.addEventListener('change', function () {

    const file = this.files[0];
    objectURL_P3 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink32.href = objectURL_P3;
    downlink32.window.open(objectURL_P3,'_blank').focus();
    });
    
    
    //Uploaded Ctos file 3
    upinput3.addEventListener('change', function () {
    
    const file = this.files[0];
    objectURL_P3 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink33.href = objectURL_P3;
    downlink33.window.open(objectURL_P3,'_blank').focus();
    });
    







// Bank Statement (3 months) file
const upinput4 = document.getElementById('bankstateupload');
const downlink4 = document.getElementById('previewlink_P4');
const downlink42 = document.getElementById('previewlink_P42');
const downlink43 = document.getElementById('previewlink_P43');
let objectURL_P4;

upinput4.addEventListener('change', function () {
if (objectURL_P4) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P4);  
}

const file = this.files[0];
objectURL_P4 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink4.href = objectURL_P4
downlink4.window.open(objectURL_P4,'_blank').focus();
});

//Uploaded Ctos file 2
upinput4.addEventListener('change', function () {

    const file = this.files[0];
    objectURL_P4 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink42.href = objectURL_P4;
    downlink42.window.open(objectURL_P4,'_blank').focus();
    });
    
    
    //Uploaded Ctos file 3
    upinput4.addEventListener('change', function () {
    
    const file = this.files[0];
    objectURL_P4 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink43.href = objectURL_P4;
    downlink43.window.open(objectURL_P4,'_blank').focus();
    });
    




















//Pic of Premesis file
const upinput5 = document.getElementById('picofBusinesspremupload');
const downlink5 = document.getElementById('previewlink_P5');
const downlink52 = document.getElementById('previewlink_P52');
const downlink53 = document.getElementById('previewlink_P53');
let objectURL_P5;

upinput5.addEventListener('change', function () {
if (objectURL_P5) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P5);  
}

const file = this.files[0];
objectURL_P5 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink5.href = objectURL_P5;
downlink5.window.open(objectURL_P5,'_blank').focus();
});




//Uploaded Ctos file 2
upinput5.addEventListener('change', function () {

    const file = this.files[0];
    objectURL_P5 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink52.href = objectURL_P5;
    downlink52.window.open(objectURL_P5,'_blank').focus();
    });
    
    
    //Uploaded Ctos file 3
    upinput5.addEventListener('change', function () {
    
    const file = this.files[0];
    objectURL_P5 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink53.href = objectURL_P5;
    downlink53.window.open(objectURL_P5,'_blank').focus();
    });
    














//Pic of Passport file
const upinput6 = document.getElementById('picofPPupload');
const downlink6 = document.getElementById('previewlink_P6');
const downlink62 = document.getElementById('previewlink_P62');
const downlink63 = document.getElementById('previewlink_P63');
let objectURL_P6;

upinput6.addEventListener('change', function () {
if (objectURL_P6) {
    // revoke the old object url to avoid using more memory than needed
    URL.revokeObjectURL(objectURL_P6);  
}

const file = this.files[0];
objectURL_P6 = URL.createObjectURL(file);
// downlink.download = file.name; // this name is used when the user downloads the file
downlink6.href = objectURL_P6;
downlink6.window.open(objectURL_P6,'_blank').focus();
});



//Uploaded Ctos file 2
upinput6.addEventListener('change', function () {

    const file = this.files[0];
    objectURL_P6 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink62.href = objectURL_P6;
    downlink62.window.open(objectURL_P6,'_blank').focus();
    });
    
    
    //Uploaded Ctos file 3
    upinput6.addEventListener('change', function () {
    
    const file = this.files[0];
    objectURL_P6 = URL.createObjectURL(file);
    // downlink.download = file.name; // this name is used when the user downloads the file
    downlink63.href = objectURL_P6;
    downlink63.window.open(objectURL_P6,'_blank').focus();
    });
    





