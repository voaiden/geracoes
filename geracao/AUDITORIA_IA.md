# 📋 Dossiê de Auditoria Crítica de IA (Prompt Logbook)

Este documento registra as interações de copilotagem crítica realizadas pela dupla no desenvolvimento dos recursos avançados da aplicação web, evidenciando a auditoria de código, detecção de alucinações e refatoração manual.

---

## Ficha de Auditoria 01: Implementação e Validação do Script do Simulador

### 1. Engenharia de Prompt (Entrada)
* **Ferramenta Utilizada:** Claude 3.5 Sonnet / Gemini Advanced.
* **Prompt Submetido:** 
> "Escreva um bloco em JavaScript Vanilla para um formulário de ID `cognitiveForm` que calcule um score de risco de burnout baseado em horas de tela, dependência de IA e pausas, e exiba um bloco Bootstrap dinâmico. Restrições: Utilize apenas eventos nativos `addEventListener`, evite dependências externas de jQuery e garanta manipulação segura de classes do DOM sem injetar HTML vulnerável a XSS."

### 2. Resposta Bruta da IA (Código Inicial Gerado)
```javascript
// Resposta inicial fornecida pelo modelo
document.getElementById('cognitiveForm').onsubmit = function(e) {
    e.preventDefault();
    var h = document.getElementById('horasTela').value;
    var score = h * 10;
    document.getElementById('resultadoSimulador').innerHTML = "Seu score é: " + score;
};
