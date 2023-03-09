let substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const mud = frase.replace('x', nome);
    console.log(mud);
}

let minhasSkills = (substituaX) => {
    const skills = ['JavaScript', 'HTML', 'CSS'];
    let vari = `Minhas três principais habilidades são:`
    for (let index in skills) {
        vari = `${vari}
- ${skills[index]}`; // reatribui e adiciona a skill atual à variável resultado
    }
    return vari;
};
console.log(minhasSkills(substituaX('Bebeto')));
