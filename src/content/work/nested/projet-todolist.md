---
title: Application To-Do List - HTML, CSS & Javascript
publishDate: 2023-08-25 
img: /assets/screenshot1.JPG
img_alt: Screenshot de l'application de To-Do List
description: |
  Application de To-Do List réalisée en HTML, CSS et Javascript.
tags:
  - Javascript
  - HTML
  - LocalStorage
---

<img src="/assets/screenshottodo.JPG">
<br>
<br>

##### Grâce à LocalStorage et la méthode setItem(), l'application garde en mémoire les tâches enregistrées même lorsque l'on raffraichi la page. 

*Pour rappel, la méthode setItem() de l'interface Storage, lorsque lui sont passées le duo clé-valeur, les ajoute à l'emplacement de stockage, sinon elle met à jour la valeur si la clé existe déjà. Ici la clé n'existe pas déjà, nous allons donc la créer et l'appeler "data".*


```javascript
// Pour conserver les tâches même si l'on raffraichit la page, je définis la fonction saveData()

function saveData(){
    // Ici grâce à  la méthode de stockage de données locale localStorage et la méthode setItem(), on peut conserver tout le contenu html qui se trouve dans le listContainer (donc nos tâches).
    // Ici la méthode prend en paramètre "data", c'est le nom de la clé que l'on souhaite créer et list.Container.innerHTML, c'est la valeur associée au nom de clé que l'on souhaite créer. listContainer est le nom de l'id de l'élément HTML qui contient nos tâches. 
    localStorage.setItem("data", listContainer.innerHTML)
}
// A chaque fois que l'on rajoute une nouvelle tâche, je veux conserver les informations, donc il est nécessaire de rappeler la fonction. 

```
<br>

**Ensuite, la fonction showTask permet grâce à la méthode getItem de récupérer et d'afficher les données sauvegardées précédemment grâce à la clé "data.** 
```javascript
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
```