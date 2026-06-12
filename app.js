// BANCO DE DADOS DE AULAS (MÉTODO RESPIRA E DESCE)
const DATABASE = {
    breathing: {
        name: "Método Respira e Desce",
        icon: "💨",
        lessons: [
            {
                id: "b1",
                category: "Aula 1 • Fundamentos",
                title: "A Conexão Mente-Útero e o Medo",
                teoria: {
                    video: "https://www.youtube.com/embed/vDRC7PI2ucU", // Dra. Ana Bárbara - Será que aguento a dor?
                    desc: "Entenda a fisiologia da Síndrome Medo-Tensão-Dor. Descubra como o estresse e a retenção de ar bloqueiam a dilatação e como o relaxamento muscular reduz o tempo de parto.",
                    tip: "Quando sentir a contração chegar, solte os dentes! A mandíbula tensa manda um reflexo imediato para o seu períneo se contrair."
                },
                pratica: {
                    video: "https://www.youtube.com/embed/u-BubB4tuUY", // Aline Pélvica - A melhor respiração
                    desc: "Nesta aula prática guiada, aprenderemos como respirar de forma suave para liberar as tensões do corpo inteiro e induzir o relaxamento imediato.",
                    tip: "Treine piscar lentamente os olhos e soltar os lábios sempre que seu útero ficar rígido."
                }
            },
            {
                id: "b2",
                category: "Aula 2 • Dilatação",
                title: "Respiração Diafragmática (Flor & Vela)",
                teoria: {
                    video: "https://www.youtube.com/embed/_0M4VMr3dxU", // Respiração Diafragmática - Tutorial
                    desc: "Aprenda por que o diafragma é o maior aliado do útero. Levar o ar até a barriga massageia o bebê e mantém o suprimento de oxigênio alto, acalmando o útero.",
                    tip: "Pense em mandar o ar lá no fundo do quadril, expandindo as costelas e a barriga como um balão."
                },
                pratica: {
                    video: "https://www.youtube.com/embed/oOwtMZ4fXSM", // Claudia Loureiro - 5 Dicas essenciais
                    desc: "Pratique comigo: Inspirar em 4 segundos pelo nariz imaginando o perfume de uma flor, e expirar soprando em 8 segundos como se estivesse balançando uma vela.",
                    tip: "A expiração longa e controlada é o melhor analgésico natural do corpo humano."
                }
            },
            {
                id: "b3",
                category: "Aula 3 • Transição",
                title: "O Sopro Vocalizado para Dor Forte",
                teoria: {
                    video: "https://www.youtube.com/embed/w3umhk-fZqs", // Juliana Lucena - Como é a respiração
                    desc: "No pico das contrações (fase de transição), emitir sons graves e vogais abertas ajuda o assoalho pélvico a relaxar e se abrir naturalmente.",
                    tip: "Evite gritos agudos na hora da dor. Gritos finos fecham a garganta e, por consequência, fecham o períneo."
                },
                pratica: {
                    video: "https://www.youtube.com/embed/C-HDK15NNuI", // Jana Peixer - Exercícios
                    desc: "Acompanhe e treine as vocalizações graves de 'Ooooh' e 'Aaaaah' de forma coordenada com a soltura total do ar para aliviar contrações severas.",
                    tip: "Direcione a voz para baixo. Deixe o ar sair vibrando o tórax e o abdômen."
                }
            },
            {
                id: "b4",
                category: "Aula 4 • Expulsivo",
                title: "A Respiração da Saída (Puxo Fisiológico)",
                teoria: {
                    video: "https://www.youtube.com/embed/Uw1gVkR5PSo", // Força no trabalho de parto
                    desc: "Descubra a diferença crucial entre o puxo dirigido clássico (força extrema travada com glote fechada) e o puxo fisiológico, onde o sopro guia o bebê de forma suave.",
                    tip: "A força certa não é na cabeça ou no pescoço. Deixe o corpo fazer o trabalho de empurrar enquanto você apenas sopra para abrir o canal."
                },
                pratica: {
                    video: "https://www.youtube.com/embed/oru1Msn8ruc", // Como evitar laceração no parto
                    desc: "Exercício prático do 'sopro resistente'. Simulamos a saída controlando a velocidade com um sopro de lábios semicerrados para proteger o períneo e evitar lacerações.",
                    tip: "Imagine que você está esvaziando um balão devagar com a respiração. Isso protege contra lacerações."
                }
            },
            {
                id: "b5",
                category: "Aula 5 • O Dia do Parto",
                title: "Simulação Real com o Parceiro",
                teoria: {
                    video: "https://www.youtube.com/embed/FLofJV_cEWo", // Aline Pélvica - Massagem no trabalho de parto
                    desc: "Aprenda exatamente onde massagear (região lombar, sacro e glúteos) e como realizar as técnicas de contrapressão lombar durante as contrações para aliviar o desconforto e a dor do parto.",
                    tip: "O acompanhante deve usar um óleo de massagem para facilitar o deslizamento e aplicar pressão firme e constante na região sacral."
                },
                pratica: {
                    video: "https://www.youtube.com/embed/YvE4cGrSWiU", // Como o acompanhante ajuda de verdade / Posições
                    desc: "Treino prático de simulação: veja como dar suporte físico à gestante em posições ativas (em pé, de joelhos ou na bola) e a conduzir e sincronizar a respiração junto com ela.",
                    tip: "Pratiquem a respiração diafragmática em sintonia e ensaiem as posições físicas para que ambos se sintam seguros no dia."
                }
            }
        ]
    }
};

// ESTADO GLOBAL DO APLICATIVO
let currentCategory = "breathing";
let currentLessonIndex = 0;
let currentTab = "teoria";

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

const tabButtons = document.querySelectorAll(".tab-btn");

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
    
    // Resetar para a aba teórica por padrão ao trocar de aula
    currentTab = "teoria";
    tabButtons.forEach(btn => {
        if (btn.getAttribute("data-tab") === "teoria") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    renderLessonLists();
    updatePlayerContent();
}

// ATUALIZAR INFORMAÇÕES DO PLAYER E VIDEO
function updatePlayerContent() {
    // Esconder outras telas
    ebookCard.classList.add("hidden");
    viewerCard.classList.remove("hidden");

    const lesson = DATABASE.breathing.lessons[currentLessonIndex];
    const data = lesson[currentTab];

    displayCategory.innerText = lesson.category;
    displayTitle.innerText = `${lesson.title} (${currentTab === 'teoria' ? 'Conceito Teórico' : 'Exercício Prático'})`;
    displayDesc.innerText = data.desc;
    displayConceptText.innerText = data.tip;
    
    // Carregar o iframe com o vídeo correto
    videoPlayer.src = data.video;
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
    // Abas Teoria / Prática
    tabButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            tabButtons.forEach(b => b.classList.remove("active"));
            const tab = btn.getAttribute("data-tab");
            currentTab = tab;
            btn.classList.add("active");
            updatePlayerContent();
        });
    });

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
