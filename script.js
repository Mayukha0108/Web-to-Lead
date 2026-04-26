// let validationRule = (event) => {
//     let firstName = document.getElementById("first_name").value;
//     let lastName = document.getElementById("last_name").value;
//     let email = document.getElementById("email").value;
//     let leadDate = document.getElementById("lead_date").value;

//    if (firstName==null) {
//     alert("The First Name field is mandatory")
//     event.preventDefault();
//     return;
//    }
//    if (lastName==null) {
//     alert("The Last Name field is mandatory")
//     event.preventDefault();
//     return;
//    }
//    if (email==null) {
//     alert("The Email field is mandatory")
//     event.preventDefault();
//     return;
//    }
//    if (lead_date==null) {
//     alert("The Lead Date field is mandatory")
//     event.preventDefault();
//     return;
//    }
// }

// let populateHiddenField = () => {
//    let value = document.querySelector(".inputdate").value;
//    console.log(value);
//    let formatDate = new Date(value).toLocaleDateString("en-IN");
//    console.log(formatDate);
//    document.querySelector(".outputdate").value=formatDate;
// }

let populateHiddenField = () => {
   let input = document.querySelector(".inputdate");
   let output = document.querySelector(".outputdate");
   console.log(input.value);
   let formatDate = new Date(input.value).toLocaleDateString("en-IN");
   console.log(formatDate);
   output.value=formatDate;
}