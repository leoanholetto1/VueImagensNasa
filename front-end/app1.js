document.getElementById('upload-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    
    if (file) {
        const reader = new FileReader();

        reader.onload = async function(e) {
            const content = e.target.result;
            try {
                const filmes = JSON.parse(content);

                const response = await fetch('http://localhost:8081/insere-filme', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(filmes)
                });
                
                const result = await response.json();
                if (result.sucesso) {
                    window.location.href = "busca.html";
                } else {
                    console.error("Falha ao adicionar filmes:", result.msg);
                }
            } 
            catch (error) {
                console.error("Erro ao processar o arquivo JSON", error);
            }
        };
        reader.readAsText(file);
    }
});