function dropdisbursementdetails(x) {
    if(x==0)
    {
        //show disbursement details
        document.getElementById("dis_finance_app_dropdown").style.display="block";
    }
    else if(x==1)
    {
        document.getElementById("dis_finance_app_dropdown").style.display="none";
    }

}




//This is to change the button background once it has been clicked 
function dfa_btn_drop(x) {
    if(x==1)
    {
        //Opens this
        document.getElementById("applicantdetails").classList.remove("closebtns");
        document.getElementById("applicantdetails").classList.add("openbtns");

        //Closes rest
        document.getElementById("financeappdetails").classList.remove("openbtns");
        document.getElementById("financeappdetails").classList.add("closebtns");
        document.getElementById("attachmentsdetails").classList.remove("openbtns");
        document.getElementById("attachmentsdetails").classList.add("closebtns");

        //Show information of Application Details
        document.getElementById("appdetailsdrop1").style.display="flex";
        document.getElementById("financeappdrop2").style.display="none";
        document.getElementById("attachmentsdrop3").style.display="none";
    }
    else if(x==2)
    {
        //Opens this
        document.getElementById("financeappdetails").classList.remove("closebtns");
        document.getElementById("financeappdetails").classList.add("openbtns");

        //Closes rest
        document.getElementById("applicantdetails").classList.remove("openbtns");
        document.getElementById("applicantdetails").classList.add("closebtns");
        document.getElementById("attachmentsdetails").classList.remove("openbtns");
        document.getElementById("attachmentsdetails").classList.add("closebtns");

        //Show information of Financiing Application Details 
        document.getElementById("appdetailsdrop1").style.display="none";
        document.getElementById("financeappdrop2").style.display="flex";
        document.getElementById("attachmentsdrop3").style.display="none";
    }
    else if(x==3)
    {
        //Opens this
        document.getElementById("attachmentsdetails").classList.remove("closebtns");
        document.getElementById("attachmentsdetails").classList.add("openbtns");
        //Closes rest
        document.getElementById("applicantdetails").classList.remove("openbtns");
        document.getElementById("applicantdetails").classList.add("closebtns");
        document.getElementById("financeappdetails").classList.remove("openbtns");
        document.getElementById("financeappdetails").classList.add("closebtns");

        //Show information of Financiing Application Details 
        document.getElementById("appdetailsdrop1").style.display="none";
        document.getElementById("financeappdrop2").style.display="none";
        document.getElementById("attachmentsdrop3").style.display="flex";
    }
    else if(x==0)
    {
        //Closes all on radio button click
        document.getElementById("applicantdetails").classList.remove("openbtns");
        document.getElementById("applicantdetails").classList.add("closebtns");
        document.getElementById("financeappdetails").classList.remove("openbtns");
        document.getElementById("financeappdetails").classList.add("closebtns");
        document.getElementById("attachmentsdetails").classList.remove("openbtns");
        document.getElementById("attachmentsdetails").classList.add("closebtns");
    }

}