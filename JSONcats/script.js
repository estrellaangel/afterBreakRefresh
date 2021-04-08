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
  for(let indiv in CATS){
    const ARTICLE = document.createElement('article');
    const CATNAME = document.createElement('h2');
    CATNAME.textContent = `${CATS[indiv]["name"]}'s Family`;
    const BREED = document.createElement('p');
    BREED.textContent = `Breed: ${CATS[indiv]["breed"]}`;
    const COLOR = document.createElement('p');
    COLOR.textContent = `Color: ${CATS[indiv]["color"]}`;
    const ALLKITS = document.createElement('ul');

    const KITTENS = CATS[indiv]["kittens"];
    for(kitty in KITTENS){
      const INDIVKIT = document.createElement('li')
      const KITNAME = document.createElement('div');
      KITNAME.classList.add('name')
      KITNAME.textContent = `${KITTENS[kitty]["name"]}`;
      const KITGEN = document.createElement('div');
      KITGEN.textContent = `Gender: ${KITTENS[kitty]["gender"]}`;
      INDIVKIT.appendChild(KITNAME);
      INDIVKIT.appendChild(KITGEN);
      ALLKITS.appendChild(INDIVKIT);
    }

    ARTICLE.appendChild(CATNAME);
    ARTICLE.appendChild(BREED);
    ARTICLE.appendChild(COLOR);
    ARTICLE.appendChild(ALLKITS);
    section.appendChild(ARTICLE);
  }

}

function init(string){
    let superduper = JSON.parse(string);
    createHeader(superduper);
    createSection(superduper);
}

init(cats);