let string = `{  
    "squadName": "Super hero squad",  
    "homeTown": "Metro City",  
    "formed": 2016,  
    "secretBase": "Super tower",  
    "active": true,  
    "members": [    
            {   
            "name": "Molecule Man",      
            "age": 29,      
            "secretIdentity": "Dan Jukes",      
            "powers": [        
                "Radiation resistance",        
                "Turning tiny",        
                "Radiation blast"      
            ]    
            },    
            {      
                "name": "Madame Uppercut",      
                "age": 39,      
                "secretIdentity": "Jane Wilson",      
                "powers": [        
                    "Million tonne punch",        
                    "Damage resistance",        
                    "Superhuman reflexes"      
                ]    
            },    
            {      
                "name": "Eternal Flame",      
                "age": 1000000,      
                "secretIdentity": "Unknown",      
                "powers": [        
                    "Immortality",        
                    "Heat Immunity",        
                    "Inferno",        
                    "Teleportation",        
                    "Interdimensional travel"      
                ]    
            }  
        ]
    }`


let header = document.getElementById(`header`);
let section = document.getElementById('section');

function createHeader(obj){
    //Create an H1 in the header using JSON
    const H1 = document.createElement("h1");
    //CONSTANTS ARE ALWAYS ALL CAPITAL
    H1.textContent = obj.squadName;
    //the same as obg['squadName']
    header.appendChild(H1);

    //creates isActive based on the obj['active']
    let isActive = '';
    if(obj["active"] == true){
        isActive = "Currently Active"
    }else{
        isActive = "They are currently on vacation"
    }

    //create a subheader
    const PARA = document.createElement("p");
    PARA.textContent = 
    `Home Town: ${obj["homeTown"]}  ||
    Formed: ${obj["formed"]}  ||
    ${isActive}`; //isActive is a state
    header.appendChild(PARA);
}

function createSection(obj){
    const HEROS = obj["members"];
    for(hero in HEROS){
        const ARTICLE = document.createElement("article");
        const H2 = document.createElement("h2");
        const P1 = document.createElement("p");
        const P2 = document.createElement("p");
        const P3 = document.createElement("p");
        const LIST = document.createElement("ul");
        H2.textContent = HEROS[hero]["name"];
        P1.textContent = `Secret Identity: ${HEROS[hero]["secretIdentity"]}`;
        P2.textContent = `Age: ${HEROS[hero]["age"]}`;
        P3.textContent = `Super Powers:`;

        const POWERS = HEROS[hero]["powers"];
        for(power in POWERS){
            const LISTITEM = document.createElement('li');
            LISTITEM.textContent = POWERS[power];
            LIST.appendChild(LISTITEM);
        }
        ARTICLE.appendChild(H2);
        ARTICLE.appendChild(P1);
        ARTICLE.appendChild(P2);
        ARTICLE.appendChild(P3);
        ARTICLE.appendChild(LIST);

        section.appendChild(ARTICLE);
    }
}

init(string);

function init(string){
    let superObj = JSON.parse(string);
    createHeader(superObj);
    createSection(superObj);
}

