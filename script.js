class ProcessDocumentation {
    constructor() {
        this.entries = this.getStaticEntries();
        this.revealedElements = new Set();
        this.initializeCollapsible();
        this.loadWeekContent();
        this.initializeRevealSystem();
        this.setupConnectionGradient();
    }

    initializeCollapsible() {
        const weekHeaders = document.querySelectorAll('.week-header');
        weekHeaders.forEach(header => {
            header.addEventListener('click', (e) => {
                const weekSection = e.currentTarget.closest('.week-section');
                this.toggleWeekSection(weekSection);
            });

            // Mouse tracking for circle
            header.addEventListener('mousemove', (e) => {
                const rect = header.getBoundingClientRect();
                const x = e.clientX - rect.left - 10; // -10 to center the circle
                const y = e.clientY - rect.top - 10; // -10 to center the circle
                header.style.setProperty('--mouse-x', `${x}px`);
                header.style.setProperty('--mouse-y', `${y}px`);
            });

            header.addEventListener('mouseenter', (e) => {
                header.classList.add('mouse-tracking');
            });

            header.addEventListener('mouseleave', (e) => {
                header.classList.remove('mouse-tracking');
            });
        });
    }

    toggleWeekSection(section) {
        section.classList.toggle('expanded');
    }

    loadWeekContent() {
        // Load content for each week
        this.entries.forEach(entry => {
            const weekSection = document.querySelector(`[data-week="${entry.id}"]`);
            if (weekSection) {
                const contentContainer = weekSection.querySelector('.week-content');
                contentContainer.innerHTML = this.renderWeekContent(entry);
            }
        });
    }

    initializeRevealSystem() {
        // Intersection Observer for scroll-based reveals
        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.revealElement(entry.target);
                }
            });
        }, observerOptions);

        // Observe all reveal elements
        document.querySelectorAll('.reveal-element').forEach(el => {
            observer.observe(el);
        });

        // Mouse movement reveals connections
        document.addEventListener('mousemove', (e) => {
            this.updateConnections(e);
        });

        // Simulate multiple users (for demo)
        this.simulateCollaboration();
    }

    revealElement(element) {
        const elementId = element.dataset.element;
        if (!this.revealedElements.has(elementId)) {
            element.classList.add('revealed');
            this.revealedElements.add(elementId);
            
            // Show connections when enough elements are revealed
            if (this.revealedElements.size >= 2) {
                this.activateConnections();
            }
            
            // Add connection visual when element connects to others
            if (this.revealedElements.size > 1) {
                element.classList.add('connected');
            }
        }
    }

    activateConnections() {
        const network = document.querySelector('.connection-network');
        if (network) {
            network.classList.add('active');
            
            // Show connection lines between revealed elements
            this.revealedElements.forEach(elementId => {
                const lines = document.querySelectorAll(`[data-connects*="${elementId}"]`);
                lines.forEach(line => {
                    const connects = line.dataset.connects.split(',');
                    if (connects.every(id => this.revealedElements.has(id))) {
                        line.classList.add('visible');
                    }
                });
                
                const node = document.querySelector(`[data-element="${elementId}"].connection-node`);
                if (node) {
                    node.classList.add('active');
                }
            });
        }
    }

    updateConnections(mouseEvent) {
        // Subtle connection line following mouse (very subtle)
        const network = document.querySelector('.connection-network');
        if (network && this.revealedElements.size >= 2) {
            const rect = network.getBoundingClientRect();
            const x = ((mouseEvent.clientX - rect.left) / rect.width) * 100;
            const y = ((mouseEvent.clientY - rect.top) / rect.height) * 100;
            
            // Slightly adjust connection paths based on mouse position (very subtle)
            document.querySelectorAll('.connection-line.visible').forEach(line => {
                const currentPath = line.getAttribute('d');
                // Add very subtle mouse influence to connection curves
                line.style.filter = `hue-rotate(${x}deg)`;
            });
        }
    }

    simulateCollaboration() {
        // Simulate other users revealing elements over time
        setTimeout(() => {
            const titleElement = document.querySelector('[data-element="title"]');
            if (titleElement && !this.revealedElements.has('title')) {
                this.revealElement(titleElement);
            }
        }, 2000);

        setTimeout(() => {
            const elements = document.querySelectorAll('.reveal-element:not(.revealed)');
            if (elements.length > 0) {
                this.revealElement(elements[0]);
            }
        }, 4000);
    }

    setupConnectionGradient() {
        // Add SVG gradient definition
        const svg = document.querySelector('.connection-network');
        if (svg) {
            const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
            const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
            gradient.id = 'connectionGradient';
            gradient.innerHTML = `
                <stop offset="0%" style="stop-color:#F26E69;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E818F2;stop-opacity:1" />
            `;
            defs.appendChild(gradient);
            svg.appendChild(defs);
        }
    }

    // Removed renderCurrentWeek - now using loadWeekContent for collapsible sections

    renderWeekContent(entry) {
        const formattedDate = this.formatDate(entry.date);
        const contentParagraphs = entry.content.split('\n').filter(p => p.trim()).map(p => `<p>${p}</p>`).join('');
        
        const imagesHtml = entry.images && entry.images.length > 0 
            ? `<div class="entry-images">
                ${entry.images.map(img => `<img src="${img.url}" alt="${img.name}" onclick="this.requestFullscreen()">`).join('')}
               </div>`
            : '';

        return `
            <div class="week-content-inner">
                <div class="entry-header">
                    <div class="entry-date">${formattedDate}</div>
                </div>
                <div class="entry-content">
                    ${contentParagraphs}
                </div>
                ${imagesHtml}
            </div>
        `;
    }

    // Removed renderEntry - now using renderWeekContent for tab navigation

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }

    getStaticEntries() {
        return [
            {
                id: 'week1',
                date: '2025-09-09',
                title: 'Week 1 - Setting Up',
                content: `This first week, we set up a structure to work together. For the general workflow, we use Google Docs. For researching articles, we have a group library on Zotero. And for improving our website design and trying out different styles before "coding" them in github onto the website, we use Figma.

We worked on the graduation plan, including a schedule. Here, we decided to both have two different research questions as focus points for conceptual research and different focus points for our material experimentation with the focus rope. We made a mind-map for key words that we found during our research and tried to link them to each other.

Marion RQ:

Research Questions Marion:
How can design contribute to the reenchantment of the world in a time when industrial technology appears both as poison and remedy, dissolving myths while generating systemic disillusion?
How to reenchant the world?
How can we bring back poetry after disillusion of all the working processes?
How to bring back agency
How to stop operating machines?
If disenchantment comes through rationalization and reification, how can design cultivate practices that reintroduce ambiguity, some monster-like forms, Frankenstein?
Can design restore a sense of poetry myth or animism in our relationship with technology?
How can we imagine forms of production where humans regain agency rather than becoming operators of machines?
What are current work paradigms?
How can we decentralize ways of production?
How can we find a way to bring back production to human scale?

focus for the rope: mechanism

Jess RQ:

What language are we using to refer to the world of work and industry and what are its implications?
In what ways can accessible media be used to make critical reflections on labor, autonomy, and technology understandable and relatable for non-designers?
How can we use the power of the community to meaningfully change the future of work or the industry?
How might amplifying overlooked voices and collective expressions generate alternative imaginaries of work and industry in a time of rapid technological change?

focus for the rope: textile experiments, collaboration`,
                images: [
                    {
                        url: 'images/Week1MindmapPostits.jpeg',
                        name: 'Week 1 Mindmap with Post-its'
                    },
                    {
                        url: 'images/week1collabpic.jpg',
                        name: 'Week 1 Collaboration Picture'
                    }
                ],
                timestamp: Date.now() - 86400000 * 42 // 42 days ago
            },
            {
                id: 'week2',
                date: '2025-09-16',
                title: 'Week 2 - Braiding Machine & Experiments',
                content: `For this week, we tried to make an open-source braiding machine (https://fraensengineering.com/3d-printed-braiding-machine/). But printing took longer than expected, so we are not finished yet. But this is our work in progress.

Then I (Jess) also tried to do some simple textile experiments with the rope. In one I was just getting started with a simple hair rope-braiding technique (2). Then I tried to create volume with tying the rope in a specific way (1) and then I tried to use something similar to basket weaving (3).

Then, we discussed our topic from our research again and created a mindmap on the board. This then we used to update the abstract for the graduation plan, our research focus, as well as the research question.

We also contacted more rope companies for a factory visit and the opportunity to ask some questions, as well as the social design tutor Gabriel Fontana, who creates (sport-) games as a way of activating the community and bringing diverse people together.

Then we also researched the tradition of the Maypole and thought it is interesting to us because of the aspect of the community and emotions.

Mechanism
From the 3D printed Rope braiding machine was missing the track part, so we had to analyse it, 3D model it and then print it on paper to build it in wood.

Research on Rope braiding innovations
I've been interested about the recent developments and new directions in Braiding Technologies.

One of the main subjects of conflicts and research is about horn gear placement and prediction of the carrier path. These systems are complex, and their logic is often difficult to share or communicate to non-specialists. To address this, Herzog has created a simulation software capable of predicting carrier path and braiding pattern and supporting the development of operator-autonomous braiding systems. The ambition is to reach a stage where pattern changes without the operator intervention.

At the same time, there are other tools such as Texmind Braiding Machine Configurator software, which I experimented with during my first failed attempt to make a braid. I think it opens up a space of Trial and Errors, and also opens up the system, bringing a more playful way to approach it.
By changing the gear settings of a typical maypole braiding machine, an operator can generate a remarkable variety of structures and volumes, lace tubular, 3d forms

Bought a motor
I went to Emmaus this weekend and found an electric whisk. I disassemblied the box around to reveal an universal motor, that we could use for our machine.

Researched Maypole thing`,
                images: [
                    {
                        url: 'images/IMG_0050.JPG',
                        name: 'Braiding Machine Work in Progress'
                    },
                    {
                        url: 'images/IMG_0055.JPG',
                        name: 'Textile Experiments with Rope'
                    },
                    {
                        url: 'images/IMG_0073.JPG',
                        name: 'Rope Braiding Technique'
                    }
                ],
                timestamp: Date.now() - 86400000 * 35 // 35 days ago
            }
        ];
    }

    // Read-only version - no import/export functionality needed
}

// Initialize the application
const app = new ProcessDocumentation();