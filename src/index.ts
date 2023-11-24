let ButtonSubmit = document.getElementById("button-submit") as HTMLButtonElement;
let MobileButtonSubmit = document.getElementById("button-submit-mobile") as HTMLButtonElement;
let firstname = document.getElementById("firstname") as HTMLInputElement;
let email = document.getElementById("email") as HTMLInputElement;
let City = document.getElementById("City") as HTMLInputElement;
let Subject = document.getElementById("Subject") as HTMLInputElement;
let Spam = document.getElementById("label-spam") as HTMLInputElement;
let Name = document.getElementById("Name") as HTMLInputElement;
let Company = document.getElementById("Company") as HTMLInputElement;
let message = document.getElementById("message-input") as HTMLTextAreaElement;
let NumberPhone = document.getElementById("NumberPhone") as HTMLInputElement;
let checkbox = document.getElementById("checkbox") as HTMLInputElement;
let spanFirstName = document.getElementById("warning-firstname") as HTMLSpanElement;
let spanEmail = document.getElementById("warning-mail") as HTMLSpanElement;
let spanCity = document.getElementById("warning-city") as HTMLSpanElement;
let spanSubject = document.getElementById("warning-subject") as HTMLSpanElement;
let spanSpam = document.getElementById("warning-spam") as HTMLSpanElement;
let SpanCompany = document.getElementById("warning-company") as HTMLSpanElement;
let spanName = document.getElementById("warning-name") as HTMLSpanElement;
let spanPhone = document.getElementById("warning-phone-number") as HTMLSpanElement;
let spanMessage = document.getElementById("warning-text-area") as HTMLSpanElement;
let spanChecked = document.getElementById("warning-checked") as HTMLSpanElement;


const letters = /[0-9]/g;
const CheckMail = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/g;
const CheckPhone = /[0-9]{10}/g;
const CheckMessage = /[0-9a-zA-Z]{1,400}/g;

function MessageSpan(span: HTMLSpanElement){
    span.textContent = "Ce Champs est nécessaire";
    span.style.fontWeight = "600";
    span.style.color = "#990000";
    span.style.marginTop = "5px";
    span.style.marginBottom = "15px";
}
function EmptySpan(span: HTMLSpanElement){
    span.textContent = "";
    span.style.marginBottom = "0px";
}
function WarningSpan(span: HTMLSpanElement, message: string){
    span.textContent = `${message}`;
    span.style.fontWeight = "600";
    span.style.color = "#990000";
    span.style.marginBottom = "15px";
}

const Tab = [
    {input : firstname, span: spanFirstName},
    {input : email, span: spanEmail},
    {input : City, span: spanCity},
    {input : Subject, span: spanSubject},
    {input : Name, span: spanName},
    {input : Company, span: SpanCompany},
    {input : NumberPhone, span: spanPhone},
    {input : message, span: spanMessage},
]

firstname.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
  console.log("Value:", value); 
  if(!value.match(letters)){ EmptySpan(spanFirstName);}
    else{
      WarningSpan(spanFirstName, "Le champs que vous avez renseignez n'est pas valide");
    }
})

Name.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
  if(!value.match(letters)){EmptySpan(spanName);}
    else{
      WarningSpan(spanName, "Le champs que vous avez renseignez n'est pas valide");
    }
})

email.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if(value.match(CheckMail)){EmptySpan(spanEmail);}
    else{
      WarningSpan(spanEmail, "L\'email n\'est pas valide");  
    }
})

City.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if(!value.match(letters)){EmptySpan(spanCity);}
    else{
      WarningSpan(spanCity, "Le champs que vous avez renseignez n'est pas valide");
    }
})

NumberPhone.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if(value.match(CheckPhone)){EmptySpan(spanPhone);}
    else{
      WarningSpan(spanPhone, "Le numéro de téléphone indiquer n\'est pas valide");
    }
})

message.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;    
    if(value.match(CheckMessage)){EmptySpan(spanMessage);}
    if(value.length >= 399){
        WarningSpan(spanMessage, "La zone de message est limité à 400 caractères.");
    }
})

Company.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if(value !== ""){EmptySpan(SpanCompany);}
})

Subject.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if(value !== ""){EmptySpan(spanSubject);}
})
Spam.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    if(value !== ""){EmptySpan(spanSpam);}
})

checkbox.addEventListener("input", (e) => {
    const target = e.target as HTMLInputElement;
    const value = target.checked;
    if(value === false){MessageSpan(spanChecked);}
    else{
        EmptySpan(spanChecked);
    }
})

ButtonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const Checked = checkbox.checked === false;
    const ValueSpam = Spam.value !== "2";
    if(ValueSpam){
        WarningSpan(spanSpam, "La valeur de vérification du spam est incorrect");
    }
    if(Checked){
        MessageSpan(spanChecked);
    }
    Tab.forEach((element) => {
        if(element.input.value === ""){
            MessageSpan(element.span);
        }
    })
    const ValidationInput = Tab.every(items => items.input.value !== "");
    const ValidationSpan = Tab.every(items => items.span.textContent === "");
    console.log("verifications", ValidationInput, ValidationSpan);
    if(ValidationInput && ValidationSpan && !Checked && !ValueSpam){
        Tab.forEach(items => {
            items.input.value = "";
        })
        Spam.value = "";
        checkbox.checked = false;
        alert("Vos informations ont bien été envoyées");
    }
})

MobileButtonSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const Checked = checkbox.checked === false;
    const ValueSpam = Spam.value !== "1";
    if(ValueSpam){
        WarningSpan(spanSpam, "La valeur de vérification du spam est incorrect");
    }
    if(Checked){
        MessageSpan(spanChecked);
    }
    Tab.forEach((element) => {
        if(element.input.value === ""){
            MessageSpan(element.span);
        }
    })
    const ValidationInput = Tab.every(items => items.input.value !== "");
    const ValidationSpan = Tab.every(items => items.span.textContent === "");
    console.log("verifications", ValidationInput, ValidationSpan);
    if(ValidationInput && ValidationSpan && !Checked && !ValueSpam){
        Tab.forEach(items => {
            items.input.value = "";
        })
        Spam.value = "";
        checkbox.checked = false;
        alert("Vos informations ont bien été envoyées");
    }
})




