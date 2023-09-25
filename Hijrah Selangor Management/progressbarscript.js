const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");

// Show/Hide Functions for the switching between Forms
function showpage(x) {
    if(x==1){
                document.getElementById("headingval").innerHTML = "Customer Onboarding Process";
                document.getElementById("CustomerOnboarding").style.display="block";
                document.getElementById("DocumentSubmission").style.display = "none";
                document.getElementById("DocumentVerification").style.display = "none";
                document.getElementById("ApplicationApproval").style.display = "none";
                one.classList.remove("active");
                two.classList.remove("active");
                three.classList.remove("active");
                four.classList.remove("active");
                topdoc();
            }
    
    else if(x==2){
                document.getElementById("headingval").innerHTML = "Document Submission Process";
                document.getElementById("CustomerOnboarding").style.display = "none";
                document.getElementById("DocumentSubmission").style.display = "block";
                document.getElementById("DocumentVerification").style.display = "none";
                document.getElementById("ApplicationApproval").style.display = "none";
                one.classList.add("active");
                two.classList.remove("active");
                three.classList.remove("active");
                four.classList.remove("active");
                topdoc();
            }
    
    else if(x==3) {
                document.getElementById("headingval").innerHTML = "Document Verification Process";
                document.getElementById("CustomerOnboarding").style.display="none";
                document.getElementById("DocumentSubmission").style.display = "none";
                document.getElementById("DocumentVerification").style.display = "block";
                document.getElementById("ApplicationApproval").style.display = "none";
                one.classList.add("active");
                two.classList.add("active");
                three.classList.remove("active");
                four.classList.remove("active");
                topdoc();
            }
   
    else if(x==4) {
                document.getElementById("headingval").innerHTML = "Application Approval";
                document.getElementById("CustomerOnboarding").style.display="none";
                document.getElementById("DocumentSubmission").style.display = "none";
                document.getElementById("DocumentVerification").style.display = "none";
                document.getElementById("ApplicationApproval").style.display = "block"; 
                one.classList.add("active");
                two.classList.add("active");
                three.classList.add("active");
                four.classList.remove("active");
                topdoc();
            }    
    
    else if(x==5) {
                document.getElementById("headingval").innerHTML = "Return Page";
                document.getElementById("CustomerOnboarding").style.display="none";
                document.getElementById("DocumentSubmission").style.display = "none";
                document.getElementById("DocumentVerification").style.display = "none";
                document.getElementById("ApplicationApproval").style.display = "none";
                document.getElementById("ReturnPage").style.display = "block";
                one.classList.add("active");
                two.classList.add("active");
                three.classList.add("active");
                four.classList.add("active");
                topdoc();
            }  
}

//Scroll to top on function call
function topdoc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Reload page on function call. Example: Used after the final submit button is clicked to initiate a new form, ideally.
function reload() {
    location.reload();
}

//To show updated alert after user hits update. Used in the first page
function updatestatus() {
    alert("Updates have been made successfully");
}

//REJECT TO APPROVE BLOCK START
function rejected(x,y) {
        if(x==0 && y==1) {
            document.getElementById("rtoa_1").style.background="#b4ff77";
            document.querySelector('#rtoa_1').disabled=true;  //Reject to Approve
        }
        else if(x==0 && y==2) {
            document.getElementById("rtoa_2").style.background="#b4ff77";
            document.querySelector('#rtoa_2').disabled=true;   //Reject to Approve
        }
        else if(x==0 && y==3) {
            document.getElementById("rtoa_3").style.background="#b4ff77";
            document.querySelector('#rtoa_3').disabled=true;   //Reject to Approve
        }
        else if(x==0 && y==4) {
            document.getElementById("rtoa_4").style.background="#b4ff77";
            document.querySelector('#rtoa_4').disabled=true;   //Reject to Approve
        }
        else if(x==0 && y==5) {
            document.getElementById("rtoa_5").style.background="#b4ff77";
            document.querySelector('#rtoa_5').disabled=true;   //Reject to Approve
        }
        else if(x==0 && y==6) {
            document.getElementById("rtoa_6").style.background="#b4ff77";
            document.querySelector('#rtoa_6').disabled=true;   //Reject to Approve
        }
        return;
    }

//REJECT TO APPROVE BLOCK END

//ACCEPT TO REJECT BLOCK START

function accepted(x,y) {
    if(x==0 && y==1) {
        document.getElementById("ator_1").style.background="#ffb774";
        document.querySelector('#ator_1').disabled=true;  //Approve to Reject
    }
    else if(x==0 && y==2) {
        document.getElementById("ator_2").style.background="#ffb774";
        document.querySelector('#ator_2').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==3) {
        document.getElementById("ator_3").style.background="#ffb774";
        document.querySelector('#ator_3').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==4) {
        document.getElementById("ator_4").style.background="#ffb774";
        document.querySelector('#ator_4').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==5) {
        document.getElementById("ator_5").style.background="#ffb774";
        document.querySelector('#ator_5').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==6) {
        document.getElementById("ator_6").style.background="#ffb774";
        document.querySelector('#ator_6').disabled=true;   //Approve to Reject
    }
    return;
}



function rejected2(x,y) {
    if(x==0 && y==1) {
        document.getElementById("apptor_1").style.background="#b4ff77";
        document.querySelector('#apptor_1').disabled=true;  //Reject to Approve
    }
    else if(x==0 && y==2) {
        document.getElementById("apptor_2").style.background="#b4ff77";
        document.querySelector('#apptor_2').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==3) {
        document.getElementById("apptor_2").style.background="#b4ff77";
        document.querySelector('#apptor_3').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==4) {
        document.getElementById("apptor_4").style.background="#b4ff77";
        document.querySelector('#apptor_4').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==5) {
        document.getElementById("apptor_5").style.background="#b4ff77";
        document.querySelector('#apptor_5').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==6) {
        document.getElementById("apptor_6").style.background="#b4ff77";
        document.querySelector('#apptor_6').disabled=true;   //Reject to Approve
    }
    return;
}

function approved2(x,y) {
    if(x==0 && y==1) {
        document.getElementById("rtoa_12").style.background="#ffb774";
        document.querySelector('#rtoa_12').disabled=true;  //Approve to Reject
    }
    else if(x==0 && y==2) {
        document.getElementById("rtoa_22").style.background="#ffb774";
        document.querySelector('#rtoa_22').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==3) {
        document.getElementById("rtoa_32").style.background="#ffb774";
        document.querySelector('#rtoa_32').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==4) {
        document.getElementById("rtoa_42").style.background="#ffb774";
        document.querySelector('#rtoa_42').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==5) {
        document.getElementById("rtoa_52").style.background="#ffb774";
        document.querySelector('#rtoa_52').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==6) {
        document.getElementById("rtoa_62").style.background="#ffb774";
        document.querySelector('#rtoa_62').disabled=true;   //Approve to Reject
    }
    return;
}
//ACCEPT TO REJECT BLOCK END



//APPROVE 2 TO REJECT BLOCK START
function rejected21(x,y) {
    if(x==0 && y==1) {
        document.getElementById("apptor_11").style.background="#b4ff77";
        document.querySelector('#apptor_11').disabled=true;  //Reject to Approve
    }
    else if(x==0 && y==2) {
        document.getElementById("apptor_21").style.background="#b4ff77";
        document.querySelector('#apptor_21').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==3) {
        document.getElementById("apptor_21").style.background="#b4ff77";
        document.querySelector('#apptor_31').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==4) {
        document.getElementById("apptor_41").style.background="#b4ff77";
        document.querySelector('#apptor_41').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==5) {
        document.getElementById("apptor_51").style.background="#b4ff77";
        document.querySelector('#apptor_51').disabled=true;   //Reject to Approve
    }
    else if(x==0 && y==6) {
        document.getElementById("apptor_61").style.background="#b4ff77";
        document.querySelector('#apptor_61').disabled=true;   //Reject to Approve
    }
    return;
}

function approved21(x,y) {
    if(x==0 && y==1) {
        document.getElementById("rtoa_121").style.background="#ffb774";
        document.querySelector('#rtoa_121').disabled=true;  //Approve to Reject
    }
    else if(x==0 && y==2) {
        document.getElementById("rtoa_221").style.background="#ffb774";
        document.querySelector('#rtoa_221').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==3) {
        document.getElementById("rtoa_321").style.background="#ffb774";
        document.querySelector('#rtoa_321').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==4) {
        document.getElementById("rtoa_421").style.background="#ffb774";
        document.querySelector('#rtoa_421').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==5) {
        document.getElementById("rtoa_521").style.background="#ffb774";
        document.querySelector('#rtoa_521').disabled=true;   //Approve to Reject
    }
    else if(x==0 && y==6) {
        document.getElementById("rtoa_621").style.background="#ffb774";
        document.querySelector('#rtoa_621').disabled=true;   //Approve to Reject
    }
    return;
}
//APPROVE 2 TO REJECT BLOCK END















//Selectcheck from deletecustomer - To hide the search button when the modal is open

function selectcheck(x) {
    
    if(x==0)
    {
        
        document.getElementById('disapperio').style.display="none";
    }
    else
    {
        document.getElementById('disapperio').style.display="block"
    }

}