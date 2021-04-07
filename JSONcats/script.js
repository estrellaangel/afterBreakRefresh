let cats = `{
  "title": "Cat Families",
  "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
  "cats": [
    {
      "name": "Lindy",
      "breed": "Cymric",
      "color": "white",
      "kittens": [
        {
          "name": "Percy",
          "gender": "m"
        },
        {
          "name": "Thea",
          "gender": "f"
        },
        {
          "name": "Annis",
          "gender": "f"
        }
      ]
    },
    {
      "name": "Mina",
      "breed": "Aphrodite Giant",
      "color": "ginger",
      "kittens": [
        {
          "name": "Doris",
          "gender": "f"
        },
        {
          "name": "Pickle",
          "gender": "f"
        },
        {
          "name": "Max",
          "gender": "m"
        }
      ]
    },
    {
      "name": "Antonia",
      "breed": "Ocicat",
      "color": "leopard spotted",
      "kittens": [
        {
          "name": "Bridget",
          "gender": "f"
        },
        {
          "name": "Randolph",
          "gender": "m"
        }
      ]
    }
  ]
}`;
  
let header = document.getElementById('header');
let section = document.getElementById('section');

function createHeader(obj){
    const H1 = document.createElement('h1');
    const H2 = document.createElement('h2');
    H1.textContent = obj["title"];
    H2.textContent = obj["intro"];
    header.appendChild(H1);
    header.appendChild(H2);
}

function createSection(obj){
  const CATS = obj["cats"];
  for(let indiv in cats){
    const CATNAME = document.createElement('h2');
    CATNAME.textContent = `Cat Name: ${CATS[indiv]["name"]}`;
    const BREED = document.createElement('p');
    BREED.textContent = `Breed: ${CATS[indiv]["breed"]}`;
    const COLOR = document.createElement('p');
    COLOR.textContent = `Color: ${CATS[indiv]["color"]}`;
  }

}

function init(string){
    let superduper = JSON.parse(string);
    createHeader(superduper);
    createSection(superduper);
}

init(cats);