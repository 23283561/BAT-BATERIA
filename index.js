const PA = new Audio("SONS/pratodeataque.mp3");
const bombo = new Audio("SONS/bombo.mp3");
const choqueCLOSE = new Audio("SONS/choqueCLOSE.mp3");
const choqueOpen = new Audio("SONS/choqueOpen.mp3");
const conducao = new Audio("SONS/conducao.mp3");
const kick = new Audio("SONS/kick.mp3");
const tarola = new Audio("SONS/tarola.mp3");
const timbagrave = new Audio("SONS/timbagrave.mp3");
const timbalaoagudo = new Audio("SONS/timbalaoagudo.mp3");
const timbalaochao = new Audio("SONS/timbalaochao.mp3");

function PratoA() {
    PA.play()
}

function B() {
    bombo.play()
}

function CC() {
    choqueCLOSE.play()
}

function CO() {
    choqueOpen.play()
}

function CD() {
    conducao.play()
}

function KC() {
    kick.play()
}

function TR() {
    tarola.play()
}

function TG() {
    timbagrave.play()
}

function TA() {
    timbalaoagudo.play()
}

function TC() {
    timbalaochao.play()
}

function clickTeclado(e) {
console.log('chegou aq')
    switch (e.code) {
        case "KeyY":
            PratoA();
            break;

        case "KeyU":
            CD();
            break;

        case "KeyT":
            CC();
            break;

            case "KeyR":
                CC();
                break;

        case "KeyE":
            CO();
            break;
            case "KeyW":
                CO();
                break;

        case "KeyC":
            KC();
            break;

        case "KeyG":
            TA();
            break;

        case "KeyH":
            TG();
            break;

        case "KeyJ":
            TC();
            break;

        case "KeyS":
            TR();
            break;
            case "KeyA":
                TR();
                break;

        case "KeyX":
            B();
            break;
            case "KeyZ":
                B();
                break;

    }
}

window.addEventListener('keydown', (e) => clickTeclado(e))