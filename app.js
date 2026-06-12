// BANCO DE DADOS DE AULAS (MÉTODO RESPIRA E DESCE)
const DATABASE = {
    breathing: {
        name: "Método Respira e Desce",
        icon: "💨",
        lessons: [
            {
                id: "b1",
                category: "Módulo 1 • Fundamentos",
                title: "A Conexão Mente-Útero e o Medo",
                video: "https://www.youtube.com/embed/vDRC7PI2ucU",
                desc: "Entenda a fisiologia da Síndrome Medo-Tensão-Dor. Descubra como o estresse e a retenção de ar bloqueiam a dilatação e como o relaxamento muscular reduz o tempo de parto.",
                tip: "Quando sentir a contração chegar, solte os dentes! A mandíbula tensa manda um reflexo imediato para o seu períneo se contrair."
            },
            {
                id: "b2",
                category: "Módulo 2 • Fundamentos (Prática)",
                title: "Prática: Respiração de Relaxamento",
                video: "https://www.youtube.com/embed/u-BubB4tuUY",
                desc: "Nesta aula prática guiada, aprenderemos como respirar de forma suave para liberar as tensões do corpo inteiro e induzir o relaxamento imediato.",
                tip: "Treine piscar lentamente os olhos e soltar os lábios sempre que seu útero ficar rígido."
            },
            {
                id: "b3",
                category: "Módulo 3 • Dilatação",
                title: "Como Funciona a Respiração Flor & Vela",
                video: "https://www.youtube.com/embed/_0M4VMr3dxU",
                desc: "Aprenda por que o diafragma é o maior aliado do útero. Levar o ar até a barriga massageia o bebê e mantém o suprimento de oxigênio alto, acalmando o útero.",
                tip: "Pense em mandar o ar lá no fundo do quadril, expandindo as costelas e a barriga como um balão."
            },
            {
                id: "b4",
                category: "Módulo 4 • Dilatação (Prática)",
                title: "Prática: Respirando Flor & Vela",
                video: "https://www.youtube.com/embed/oOwtMZ4fXSM",
                desc: "Pratique comigo: Inspirar em 4 segundos pelo nariz imaginando o perfume de uma flor, e expirar soprando em 8 segundos como se estivesse balançando uma vela.",
                tip: "A expiração longa e controlada é o melhor analgésico natural do corpo humano."
            },
            {
                id: "b5",
                category: "Módulo 5 • Transição",
                title: "Sons Graves para Abertura Pélvica",
                video: "https://www.youtube.com/embed/w3umhk-fZqs",
                desc: "No pico das contrações (fase de transição), emitir sons graves e vogais abertas ajuda o assoalho pélvico a relaxar e se abrir naturalmente.",
                tip: "Evite gritos agudos na hora da dor. Gritos finos fecham a garganta e, por consequência, fecham o períneo."
            },
            {
                id: "b6",
                category: "Módulo 6 • Transição (Prática)",
                title: "Prática: Sopro Vocalizado Grave",
                video: "https://www.youtube.com/embed/C-HDK15NNuI",
                desc: "Acompanhe e treine as vocalizações graves de 'Ooooh' e 'Aaaaah' de forma coordenada com a soltura total do ar para aliviar contrações severas.",
                tip: "Direcione a voz para baixo. Deixe o ar sair vibrando o tórax e o abdômen."
            },
            {
                id: "b7",
                category: "Módulo 7 • Expulsivo",
                title: "O Puxo Fisiológico no Expulsivo",
                video: "https://www.youtube.com/embed/Uw1gVkR5PSo",
                desc: "Descubra a diferença crucial entre o puxo dirigido clássico (força extrema travada com glote fechada) e o puxo fisiológico, onde o sopro guia o bebê de forma suave.",
                tip: "A força certa não é na cabeça ou no pescoço. Deixe o corpo fazer o trabalho de empurrar enquanto você apenas sopra para abrir o canal."
            },
            {
                id: "b8",
                category: "Módulo 8 • Expulsivo (Prática)",
                title: "Prática: Sopro Resistente",
                video: "https://www.youtube.com/embed/oru1Msn8ruc",
                desc: "Exercício prático do 'sopro resistente'. Simulamos a saída controlando a velocidade com um sopro de lábios semicerrados para proteger o períneo e evitar lacerações.",
                tip: "Imagine que você está esvaziando um balão devagar com a respiração. Isso protege contra lacerações."
            },
            {
                id: "b9",
                category: "Módulo 9 • O Dia do Parto",
                title: "Contrapressão Lombar para o Acompanhante",
                video: "https://www.youtube.com/embed/FLofJV_cEWo",
                desc: "Aprenda exatamente onde massagear (região lombar, sacro e glúteos) e como realizar as técnicas de contrapressão lombar durante as contrações para aliviar o desconforto e a dor do parto.",
                tip: "O acompanhante deve usar um óleo de massagem para facilitar o deslizamento e aplicar pressão firme e constante na região sacral."
            },
            {
                id: "b10",
                category: "Módulo 10 • O Dia do Parto (Prática)",
                title: "Simulação Real com o Parceiro",
                video: "https://www.youtube.com/embed/YvE4cGrSWiU",
                desc: "Treino prático de simulação: veja como dar suporte físico à gestante em posições ativas (em pé, de joelhos ou na bola) e a conduzir e sincronizar a respiração junto com ela.",
                tip: "Pratiquem a respiração diafragmática in sintonia e ensaiem as posições físicas para que ambos se sintam seguros no dia."
            }
        ]
    }
};

// ESTADO GLOBAL DO APLICATIVO
let currentCategory = "breathing";
let currentLessonIndex = 0;

// ELEMENTOS DOM
const lessonsBreathingContainer = document.getElementById("lessons-breathing");
const btnGuia = document.getElementById("btn-guia");

const contentDisplay = document.getElementById("content-display");
const viewerCard = document.getElementById("viewer-card");
const ebookCard = document.getElementById("ebook-card");

const videoPlayer = document.getElementById("video-player");
const displayCategory = document.getElementById("display-lesson-category");
const displayTitle = document.getElementById("display-lesson-title");
const displayDesc = document.getElementById("display-lesson-desc");
const displayConceptText = document.getElementById("display-concept-text");

// ELEMENTOS E-BOOK
const btnCloseEbook = document.getElementById("btn-close-ebook");
const btnDownloadPdf = document.getElementById("btn-download-pdf");

// RENDERIZAR LISTAS DE AULAS NA SIDEBAR
function renderLessonLists() {
    lessonsBreathingContainer.innerHTML = "";
    DATABASE.breathing.lessons.forEach((lesson, index) => {
        const li = document.createElement("li");
        li.className = `lesson-item ${currentLessonIndex === index ? "active" : ""}`;
        
        li.innerHTML = `
            <span class="lesson-icon">${DATABASE.breathing.icon}</span>
            <span class="lesson-title-text">${lesson.title}</span>
        `;
        
        li.addEventListener("click", () => {
            selectLesson(index);
        });
        
        lessonsBreathingContainer.appendChild(li);
    });
}

// SELECIONAR AULA E RENDERIZAR NO PLAYER
function selectLesson(index) {
    currentLessonIndex = index;
    
    renderLessonLists();
    updatePlayerContent();
}

// ATUALIZAR INFORMAÇÕES DO PLAYER E VIDEO
function updatePlayerContent() {
    // Esconder outras telas
    ebookCard.classList.add("hidden");
    viewerCard.classList.remove("hidden");

    const lesson = DATABASE.breathing.lessons[currentLessonIndex];

    displayCategory.innerText = lesson.category;
    displayTitle.innerText = lesson.title;
    displayDesc.innerText = lesson.desc;
    displayConceptText.innerText = lesson.tip;
    
    // Carregar o iframe com o vídeo correto
    videoPlayer.src = lesson.video;
}

// CONTROLE DO E-BOOK (GUIA DE BOLSO)
function openEbook() {
    viewerCard.classList.add("hidden");
    ebookCard.classList.remove("hidden");
    
    // Pausar vídeo ao abrir ebook
    videoPlayer.src = "";
}

function closeEbook() {
    ebookCard.classList.add("hidden");
    updatePlayerContent();
}

// INICIALIZADORES DOS EVENTOS
function initEvents() {
    // Ebook
    btnGuia.addEventListener("click", openEbook);
    btnCloseEbook.addEventListener("click", closeEbook);
    btnDownloadPdf.addEventListener("click", () => {
        window.print();
    });
}

// INICIALIZAÇÃO COMPLETA
function init() {
    // Verificar se está abrindo via arquivo local (file://)
    if (window.location.protocol === 'file:') {
        const warningModal = document.getElementById("protocol-warning");
        if (warningModal) {
            warningModal.classList.remove("hidden");
        }
    }
    
    renderLessonLists();
    selectLesson(0);
    initEvents();
}

// Executar ao carregar a página
window.onload = init;
