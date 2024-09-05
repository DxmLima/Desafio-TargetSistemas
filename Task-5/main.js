// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


const str = "TargetSistemas"

const reverse = reverseString(str);

function reverseString(str) {
    let reverse = "";

    for (const c of str) {
        reverse = c + reverse;
    }

    console.log(reverse)

}