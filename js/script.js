const cursos = [
    {
        titulo: "Introdução à Programação",
        descricao: "Aprenda os conceitos básicos de programação com este curso introdutório.",
        duracao: "5 horas",
        nivel: "Iniciante",
        imagem: "curso1.jpg"
    },
    {
        titulo: "Design Gráfico Avançado",
        descricao: "Aperfeiçoe suas habilidades em design gráfico com técnicas avançadas.",
        duracao: "8 horas",
        nivel: "Intermediário",
        imagem: "curso2.jpg"
    },
    {
        titulo: "Marketing Digital para Iniciantes",
        descricao: "Entenda os fundamentos do marketing digital e como aplicá-los.",
        duracao: "6 horas",
        nivel: "Iniciante",
        imagem: "curso3.jpg"
    }
];

function carregarCursos() {
    const listaCursos = document.getElementById('curso-lista');
    listaCursos.innerHTML = ''; // Limpa a lista antes de adicionar os cursos

    cursos.forEach(curso => {
        const card = document.createElement('div');
        card.className = 'curso-card';

        card.innerHTML = `
            <img src="https://i0.wp.com/nmentors.com.br/wp-content/uploads/2021/04/Introducao-a-programacao-em-Java.jpg?fit=1200%2C675&ssl=1" alt="Imagem do curso ${curso.titulo}">
            <h2>${curso.titulo}</h2>
            <p>${curso.descricao}</p>
            <p>Duração: ${curso.duracao}</p>
            <p>Nível: ${curso.nivel}</p>
            <a href="#" class="btn">Saiba Mais</a>
        `;

        listaCursos.appendChild(card);
    });
}




document.addEventListener('DOMContentLoaded', carregarCursos);