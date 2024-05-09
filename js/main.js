// Aqui será mais para declarações de variaveis globais e alguns efeitos extras.

// definições horario
const Segundo = 1000 // Ms
const Minuto = Segundo * 60
const Hora = Minuto * 60

// definições partes do documento
const Favmeta = document.querySelector("#favicon")
const Navbar = document.querySelector("navbar")

//
const userLanguage = navigator.language || navigator.userLanguage; 
// TODO: adicionar checagem de linguagem e mudar conforme a localidade do usuário
// por padrão adicionar portugues e ingles.