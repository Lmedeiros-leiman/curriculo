// Aqui será mais para declarações de variaveis globais e alguns efeitos extras.

// definições horario
const Segundo = 1000 // Ms
const Minuto = Segundo * 60
const Hora = Minuto * 60

// definições partes do documento
const Favmeta = document.querySelector("#favicon")
const Navbar = document.querySelector("navbar")

// definições variaveis globais
let FaviconIntervalID;

//
let userLanguage = navigator.language.split("-")[0] || navigator.userLanguage.split("-")[0] 
// TODO: adicionar checagem de linguagem e mudar conforme a localidade do usuário
// por padrão adicionar portugues e ingles.