(() => {
    
    async function getRepo() {
        
        const getUrl =  fetch('https://api.github.com/users/maiconnunes315/repos', {
            auth:"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",
        })
        
        console.log(await (await getUrl).json())
    }

    getRepo()

})()