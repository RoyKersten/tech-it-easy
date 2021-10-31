// VOORRAAD ARRAY MET TV'S
const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

//Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.

const tvType = inventory.map((item) => {
    return item.type;
});

console.log("tvType:" + tvType);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

function soldout() {
    const soldOut = inventory.filter((item) => {
        let calculateSoldOut = item.originalStock - item.sold;
        return calculateSoldOut <= 0;
    });
    console.log(soldOut);
}


// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.

function ambilight() {
    const ambiLight = inventory.filter((item) => {
        return item.options.ambiLight;
    });
    console.log(ambiLight);
}

// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

function sortPrice() {
    const sortPrice = inventory.sort((a, b) => {
        return a.price - b.price;
    });
    console.log(sortPrice);
}

// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let countSoldTv = 0;

for (let i = 0; i < inventory.length; i++) {
    countSoldTv += inventory[i].sold;
}

console.log(countSoldTv);

//Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const elementSoldTV = document.getElementById("sold-tv")
elementSoldTV.textContent = countSoldTv;

// Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let countPurchasedTv = 0;

for (let i = 0; i < inventory.length; i++) {
    countPurchasedTv += inventory[i].originalStock;
}

console.log(countPurchasedTv);

// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const elementPurchasedTV = document.getElementById("purchashed-tv")
elementPurchasedTV.textContent = countPurchasedTv;


//Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const elementToBeSold = document.getElementById("tv-to-be-sold")
elementToBeSold.textContent = (countPurchasedTv - countSoldTv);

// Opdracht 3a: Gebruik een array-methode om alle tv merken (zoals Philips, NIKKEI, etc.) in een lijst op de pagina weer te geven.
// Zorg ervoor dat dit ook zou werken als we 200 tv's in onze array zouden hebben staan. Dat er dubbele namen in zitten, is niet erg.

//Maak een Array die alle merknamen bevat
const brandNames = inventory.map((item) => {
    return item.brand
});

//Print de merknamen op het scherm in een lijst
function printBrandNames() {                                                        // functie toegevoegd bij opdracht 4b
    for (let i = 0; i < brandNames.length; i++) {
        const printBrandNames = document.createElement('li');
        printBrandNames.textContent = brandNames[i];
        const brandList = document.getElementById("brand-list");
        brandList.appendChild(printBrandNames);
    }
}

// Opdracht 4b: Schrijf de code uit 4a om naar een functie die een array met tv-objecten verwacht.
// Het is handig om onze scripts als functies op te zetten, zodat we ze gemakkelijk kunnen hergebruiken. Tip: vergeet deze functie -declaratie niet aan te roepen!

printBrandNames();

// Opdracht 5a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv.
// Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6]) verwacht en
// de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function television(television) {
    return television.brand + " " + television.type + " " + television.name;
}

console.log(television(inventory[0]));


// Opdracht 5b: Zorg ervoor dat de prijs van een tv netjes geformat wordt. Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-.
// Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function price(television) {
    return "€" + television.price + ",-";
}

console.log(price(inventory[0]));

// Opdracht 5c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv, in zowel inches als cm.
// Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes)
// en de groottes op de volgende manier samenvoegt: [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc.
// Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm).
// Wanneer een tv vier schermgroottes heeft ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm).
// Test of jouw functie werkt in alle mogelijke gevallen.

//Aanroepen en loggen functie met als parameter inventory[x] array
console.log(getScreenSize(inventory[3]));

//Functie om screen sizes te printen, aangezien we te maken hebben met nested arrays (array in een array) dienen er twee for loops gebruikt te worden om tot de juiste string te komen
//String initializeren en declareren

function getScreenSize(screenSize) {
    let sizeString = "";
    for (let i = 0; i < screenSize.availableSizes.length; i++) {
        sizeString = sizeString + screenSize.availableSizes[i] + " inch" + " (" + (screenSize.availableSizes[i]) * 2.54 + " cm)";                     //opbouwen string
        if (screenSize.availableSizes.length > 1 && i !== screenSize.availableSizes.length - 1) {                                                     //Als er meerdere sizes bschikbaar zijn, dan scheiden door "|" teken
            sizeString = sizeString + " | "
        }
    }
    return sizeString;
}

// Opdracht 5d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
// Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

//UITGESCHAKELD IVM OPDRACHT 5E ANDERS WORDT INFORMATIE DUBBEL OP HET SCHERM GEPRINT !!!!
/**
 const summary = document.getElementById("summary");

 const printTvSummaryOne = document.createElement("div");
 printTvSummaryOne.textContent = television(inventory[3]);
 summary.appendChild(printTvSummaryOne);

 const printTvSummaryTwo = document.createElement("div");
 printTvSummaryTwo.textContent = price(inventory[3]);
 summary.appendChild(printTvSummaryTwo);

 const printTvSummaryThree = document.createElement("div");
 printTvSummaryThree.textContent = getScreenSize(inventory[3]);
 summary.appendChild(printTvSummaryThree);
 **/


// Opdracht 5e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
// Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
// Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten.
// De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten. Vergeet 'm niet aan te roepen!

const summary = document.getElementById("summary");

displayTVSummary(inventory);

function displayTVSummary(item) {
    for (let i = 0; i < item.length; i++) {
        const printTvSummaryOne = document.createElement("div");
        printTvSummaryOne.textContent = television(item[i]);
        summary.appendChild(printTvSummaryOne);

        const printTvSummaryTwo = document.createElement("div");
        printTvSummaryTwo.textContent = price(item[i]);
        summary.appendChild(printTvSummaryTwo);

        const printTvSummaryThree = document.createElement("div");
        printTvSummaryThree.textContent = getScreenSize(item[i]);
        summary.appendChild(printTvSummaryThree);

        const printSpace = document.createElement("br");
        summary.appendChild(printSpace);
    }
}

// Bonusopdracht
// Maak drie knoppen op de pagina: Sorteer op prijs, AmbiLight TV's en Uitverkochte exemplaren.
// Gebruik de code die je in opdracht 2b, 2c en 2d hebt gemaakt en schrijf dit om naar functies zodat je ze kunt aanroepen op het moment dat de buttons geklikt worden.
// Zorg ervoor dat de functies de uitkomsten in de de console loggen als de gebruiker op de bijbehorende knop klikt.
// Tip: lees hiervoor paragraaf 7.4 op EdHub eens door!

const sortPriceButton = document.getElementById("sort-price");
sortPriceButton.addEventListener("click", sortPrice);

const ambilightButton = document.getElementById("ambilight");
ambilightButton.addEventListener("click", ambilight);

const soldOutButton = document.getElementById("sold-out");
soldOutButton.addEventListener("click", soldout);


