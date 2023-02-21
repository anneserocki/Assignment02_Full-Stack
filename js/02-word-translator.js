// DEFINE VARIABLES
language = prompt("There are four languages: \"es\", \"de\", \"en\", \"fr\", please choose one of them: ").toLowerCase();

// TRANSLATE HELLO WORLD WITH THE LANGUAGE YOU CHOSE
if (language === "es"){
    console.log("Hello World translated in Spanish is: Hola Mundo")
} else if (language === "de"){
    console.log("Hello World translated in German is: Hallo Welt")
} else if (language === "fr"){
    console.log("Hello World translated in French is: Bonjour le monde")
} else {
    console.log("Hello World translated in English is: Hello World")
};