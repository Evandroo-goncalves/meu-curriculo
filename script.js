// script.js

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleTheme');
    const toggleCursos = document.getElementById('toggleCursos');
    const cursosSection = document.getElementById('cursos-section');

    // Aplica o tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Alterna o tema
    toggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Mostra/oculta a seção de cursos
    toggleCursos.addEventListener('click', () => {
        cursosSection.style.display = 
            cursosSection.style.display === 'none' ? 'block' : 'none';
    });

    // Inicializa a seção de cursos como oculta
    cursosSection.style.display = 'none';
});
