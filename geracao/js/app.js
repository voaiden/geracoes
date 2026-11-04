document.addEventListener('DOMContentLoaded', () => {
    // --- 1. DARK/LIGHT MODE PERSISTENTE ---
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('theme') || 'dark';
    htmlElement.setAttribute('data-bs-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeButtonText(newTheme);
    });

    function updateThemeButtonText(theme) {
        themeToggleBtn.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
    }

    // --- 2. GRÁFICOS INTERATIVOS (CHART.JS) ---
    // Gráfico de Barras: Principais Desafios Relatados
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Síndrome do Impostor', 'Sobrecarga de Telas', 'Dependência de LLMs', 'Ansiedade de Prazo'],
            datasets: [{
                label: 'Índice de Incidência (%)',
                data: [78, 85, 64, 71],
                backgroundColor: ['#3b82f6', '#06b6d4', '#6366f1', '#8b5cf6'],
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, max: 100 }
            }
        }
    });

    // Gráfico de Rosca: Nível de Dependência de LLMs
    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Auditoria Crítica', 'Revisão Parcial', 'Cópia Cega (Passiva)'],
            datasets: [{
                data: [25, 45, 30],
                backgroundColor: ['#10b981', '#f59e0b', '#ef4444'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom' }
            }
        }
    });

    // --- 3. SIMULADOR INTERATIVO DE SOBRECARGA COGNITIVA ---
    const cognitiveForm = document.getElementById('cognitiveForm');
    const resultadoSimulador = document.getElementById('resultadoSimulador');
    const tituloDiagnostico = document.getElementById('tituloDiagnostico');
    const textoDiagnostico = document.getElementById('textoDiagnostico');

    cognitiveForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const horas = parseInt(document.getElementById('horasTela').value);
        const dependencia = parseInt(document.getElementById('dependenciaIA').value);
        const pausas = parseInt(document.getElementById('pausas').value);

        let score = (horas * 2) + (dependencia * 5) + (pausas * 4);
        
        resultadoSimulador.classList.remove('d-none', 'border-success', 'border-warning', 'border-danger');

        if (score < 25) {
            resultadoSimulador.classList.add('border-success', 'bg-success-subtle');
            tituloDiagnostico.textContent = "🟢 Baixo Risco de Burnout e Dependência";
            textoDiagnostico.textContent = "Excelente equilíbrio! Você mantém hábitos saudáveis de pausa e exerce forte auditoria crítica sobre as ferramentas de IA.";
        } else if (score < 40) {
            resultadoSimulador.classList.add('border-warning', 'bg-warning-subtle');
            tituloDiagnostico.textContent = "🟡 Risco Moderado de Fadiga Cognitiva";
            textoDiagnostico.textContent = "Atenção: sua carga horária ou dependência de assistentes virtuais está elevada. Recomenda-se implementar pausas ativas e revisar algoritmos manualmente.";
        } else {
            resultadoSimulador.classList.add('border-danger', 'bg-danger-subtle');
            tituloDiagnostico.textContent = "🔴 Alto Risco de Sobrecarga e Analfabetismo Funcional";
            textoDiagnostico.textContent = "Alerta crítico! O uso excessivo sem pausas combinado com aceitação cega de código gera alta vulnerabilidade a burnout e perda de autoeficácia técnica.";
        }
    });
});