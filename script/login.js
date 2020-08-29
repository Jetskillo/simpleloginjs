//Add array of data or call an API

//Here we gonna do with fixed data
const accessData = [
    {
        login: "convidado",
        pass: "senhaconvidado"
    }
]

//Function to show the Modal
function noAccessShow(){
    let modalNoAccess = document.getElementById("staticBackdrop");
    if(modalNoAccess.style.display = "none"){
        modalNoAccess.style.display = "block";
    }
}

//Function to hide the Modal
function noAccessHide(){
    let modalNoAccess = document.getElementById("staticBackdrop");
    if(modalNoAccess.style.display = "block"){
        modalNoAccess.style.display = "none";
        document.getElementById("formFull").reset();
    }
}


function tryEnter() {
    let login = document.getElementById("inputLogin").value;
    let pass = document.getElementById("inputPass").value;
    for(i = 0; i < accessData.length; i++){
        if(login == accessData[i].login && pass == accessData[i].pass){
            console.log("Done");
            return
        }
    }
    noAccessShow();
}