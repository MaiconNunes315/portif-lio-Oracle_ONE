import component from "./component.js";
import { infos } from "./infos.js";
import { className } from "./className.js"


(async function () {

    const getUrl = fetch('https://api.github.com/users/maiconnunes315/repos?per_page=2');

    const demoUrl = "https://maiconnunes315.github.io/"
    const resJson = await (await getUrl).json();

    resJson.map(repo => {
        const repoId = infos.findIndex(img => img.id == repo.id);
        component(className, repo, repo, demoUrl.concat(repo.name), infos[repoId])
    })
})()



