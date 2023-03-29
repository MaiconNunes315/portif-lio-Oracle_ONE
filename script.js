import component from "./component.js";
import { infos } from "./infos.js";
import { className } from "./className.js"


(async () => {

    const getUrl = fetch('https://api.github.com/users/maiconnunes315/repos?per_page=2');

    const demoUrl = "https://maiconnunes315.github.io/"
    const resJson = await (await getUrl).json();

    resJson.map(repo => {
        const repoId = infos.findIndex(img => img.id == repo.id);
        component(className, repo, repo, demoUrl.concat(repo.name), infos[repoId])
    })
})()

const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const menssage = document.getElementById("menssage");


function sendEmail() {

    Email.send({
        SecureToken: "b944f4fd-9d13-48f8-a489-4d2fea9a370e",
        To: "mnunes315@hotmail.com",
        From: "mnunes315@hotmail.com",
        Subject: subject.value,
        Body: `Olá ! Meu nome é ${name.value} meu email ${email.value} 
        \n \n ${menssage.value}`
    }).then(() => alert("Email enviado com sucesso ! "))

}

const inputs = document.querySelectorAll('input');

inputs.forEach((input, index) => {

    input.addEventListener('blur', (event) => {
        validationForm(event.target, index)
    })

})

function validationForm(input, index) {
    const errorMenssage = document.querySelectorAll('.menssage_error')[index]
    console.log(input.validity)
    if (!input.validity.valid) {
        errorMenssage.classList.add('visible')
    } else {
        errorMenssage.classList.remove('visible')
    }
}

document.querySelector(".contact_button").addEventListener("click", function (event) {

    let checkValidation = 0;

    inputs.forEach((input, index) => {

        const errorMenssage = document.querySelectorAll('.menssage_error')[index]
        if (input.validity.valid && !input.validity.typeMismatch) {
            checkValidation++;
        } else {
            errorMenssage.innerHTML = "Informação incorreta"
        }
    })

    if (checkValidation == 3) {
        sendEmail()
    }


});
