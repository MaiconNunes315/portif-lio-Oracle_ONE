export default function component(className, info, repo, demo, imageFilter) {

    const project = document.querySelector(".project_cards"); // pai da div card
    const projectCard = document.createElement("div"); // div card
    projectCard.classList.add(className.card); // classe
    project.appendChild(projectCard);


    // criando a tag img
    const image = document.createElement("img");
    image.setAttribute("src", `./assets/img/${imageFilter.src}`);
    image.setAttribute("alt", "Imagem do projeto pronto");
    image.classList.add(className.image);
    projectCard.appendChild(image);

    //criando outra div com as infomações do repositório
    const infos = document.createElement("div");
    infos.classList.add(className.infos);
    projectCard.appendChild(infos);

    const infoTitle = document.createElement("h5");
    infoTitle.classList.add(className.title)
    infoTitle.innerText = info.name;
    infos.appendChild(infoTitle)

    const infoDescription = document.createElement("p");
    infoDescription.classList.add(className.description)
    infoDescription.innerText = info.description;
    infos.appendChild(infoDescription)

    //Criando a div de botões
    const divButtons = document.createElement("div");
    divButtons.classList.add(className.buttons);
    infos.appendChild(divButtons);

    const link1 = document.createElement("a");
    link1.setAttribute("href", repo.clone_url);
    link1.classList.add('button_1')
    link1.setAttribute("target", "_blanck");
    divButtons.appendChild(link1);
    link1.innerText = "Repositório";

    const link2 = document.createElement("a");
    link2.setAttribute("target", "_blanck");
    link2.classList.add('button_2')
    divButtons.appendChild(link2);
    link2.setAttribute("href", demo)
    link2.innerText = "Ver demo";
}