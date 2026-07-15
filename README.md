# Ensinando na Era Digital - Tradução Brasileira

Este repositório contém a versão em português (tradução brasileira) do livro **"Teaching in a Digital Age – Second Edition"** de autoria de **A.W. (Tony) Bates**. 

A iniciativa visa difundir o trabalho de excelência do autor, facilitando e ampliando o acesso para educadores, gestores e pesquisadores no Brasil. O site foi projetado como um aplicativo web progressivo (PWA), oferecendo uma experiência moderna de leitura e um audiobook integrado por capítulos.

## 📋 Ficha Técnica e Apoio

*   **Autor Original:** A.W. (Tony) Bates
*   **Supervisão da Tradução:** Prof. Glauber Santiago (UFSCar)
*   **Realização/Apoio:** Grupo Horizonte (UFSCar) - [https://grupohorizonte.ufscar.br/](https://grupohorizonte.ufscar.br/)
*   **Tecnologia:** HTML5, CSS3, Javascript, PWA (Service Workers, Web App Manifest) e Audiobook integrado.

---

## ⚖️ Licença e Direitos Autorais

O livro **Ensinando na Era Digital - Segunda Edição** de **Anthony William (Tony) Bates** está licenciado sob uma **Licença Creative Commons Atribuição-NãoComercial 4.0 Internacional (CC BY-NC 4.0)**, exceto onde indicado de outra forma.

**© 2019 Anthony William (Tony) Bates**

A licença CC permite que você mantenha, reutilize, copie, redistribua e revise este livro — no todo ou em parte — para fins não comerciais, desde que o autor seja atribuído da seguinte forma:

> *Teaching in a Digital Age – Second Edition by A.W. (Tony) Bates is used under a CC BY-NC 4.0 Licence.*

### Exemplo de citação no estilo APA:
Bates, A.W. (2019). *Teaching in a Digital Age – Second Edition*. Vancouver, B.C.: Tony Bates Associates Ltd. Obtido de [https://pressbooks.bccampus.ca/teachinginadigitalagev2/](https://pressbooks.bccampus.ca/teachinginadigitalagev2/)

---

## 🎧 Audiobook

O projeto inclui uma versão de audiobook completa que totaliza cerca de 24 horas de reprodução. Para facilitar o acesso, os áudios foram organizados, limpos de metadados conflitantes e consolidados em **15 segmentos de arquivos MP3** disponíveis para reprodução online ou download na página inicial (`index.html`):
*   **Elementos Pré-Textuais** (10.21 MB)
*   **Capítulos 1 a 13** (variando de 21 MB a 61 MB)
*   **Apêndices e Anexos** (31.37 MB)

*Nota: Os arquivos finais do audiobook residem no diretório `/audiobook` local e estão listados no `.gitignore` devido ao seu grande volume (> 500 MB), não sendo enviados ao GitHub de forma a respeitar os limites de tamanho de arquivos da plataforma.*

---

## 🚀 Como Executar o Projeto

O projeto é constituído por arquivos estáticos e pode ser rodado localmente ou hospedado com facilidade em qualquer servidor web ou plataforma de hospedagem estática (como GitHub Pages, Netlify, Vercel, etc.).

1.  **Localmente:** Basta abrir o arquivo `index.html` no seu navegador de preferência ou utilizar uma extensão de servidor local (como *Live Server* do VS Code).
2.  **Produção:** Faça o upload do conteúdo do repositório para o seu servidor. Por utilizar HTTPS nativo em servidores de produção, os recursos PWA (como instalação no dispositivo e funcionamento offline) serão ativados automaticamente via Service Worker (`sw.js`).
