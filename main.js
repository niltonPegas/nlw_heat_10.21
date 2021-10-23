const linksSocialMedia = {
  github: "niltonPegas",
  youtube: "sem_usuario",
  facebook: "sem_usuario",
  instagram: "nilton_pegas",
  twitter: "sem_usuário"
}
/* vírgulas para serparar os elementos dentro dos objetos */

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class")

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
  /* Arrow function: É uma contração da escrita das funções em javascript
  'function abc(){//code}' pode ser contraída para 'abc => //code' 
    Este recurso será utilizado em '.then()'*/
  /* 'fetch()' está pegando um resultado, mas ele não sabe que é um json. '.then()' está transformando a resposta em json */ 
}
getGitHubProfileInfos()
