//Add array of data or call an API

//Here we gonna do with fixed data
var accessData = [
    {
        login: "convidado",
        pass: "senhaconvidado"
    }
]

//Function to show the Modal
function noAccessShow(){
    var modalNoAccess = document.getElementById("staticBackdrop");
    if(modalNoAccess.style.display = "none"){
        modalNoAccess.style.display = "block";
    }
}

//Function to hide the Modal
function noAccessHide(){
    var modalNoAccess = document.getElementById("staticBackdrop");
    if(modalNoAccess.style.display = "block"){
        modalNoAccess.style.display = "none";
        document.getElementById("formFull").reset();
    }
}


function tryEnter() {
    var login = document.getElementById("inputLogin").value;
    var pass = document.getElementById("inputPass").value;
    for(i = 0; i < accessData.length; i++){
        if(login == accessData[i].login && pass == accessData[i].pass){
            console.log("Done");
            return
        }
    }
    noAccessShow();
}