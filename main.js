// tady je místo pro náš program

let jmeno = prompt("Zadejte Vaše křestní jméno: ");

let prijmeni = prompt("Zadejte Vaše příjmení: ");

let rok = Number(prompt("Zadejte rok Vašeho narození: "));

let vek = (2023 - rok)

let vystup = document.querySelector(".vystupProgramu")

vystup.innerHTML = "Zde je Vaše jméno a věk: " + jmeno + " " + prijmeni + ", " + vek + " let"

vystup.style.fontWeight = "bold"

function barva(){
    	let oblibenaBarva = prompt("Jaká je Vaše oblíbená barva (anglicky): ")
        vystup.style.color = oblibenaBarva

}
