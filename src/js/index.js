document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.lks');
    // Seleciona as três grandes divs do seu <main>
    const secoes = document.querySelectorAll('.container_info, .meus_projetos, .container_outros');

    // Função para trocar de seção
    function trocarSecao(targetId) {
        secoes.forEach(sec => {
            // Remove a classe de exibição de todas
            sec.classList.remove('secao-ativa');
            
            // Verifica se a classe da seção coincide com o data-target do link
            if (sec.classList.contains(targetId)) {
                sec.classList.add('secao-ativa');
            }
        });
    }

    // Adiciona o evento de clique em cada link da navegação
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            trocarSecao(target);
        });
    });

    // Inicialização: Mostra apenas a primeira seção ao carregar
    trocarSecao('container_info');
});