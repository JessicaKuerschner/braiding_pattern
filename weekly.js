class WeeklyProcess {
    constructor() {
        this.elements = new Map();
        this.connections = new Map();
        this.isDragging = false;
        
        this.contentData = {
            docs: {
                title: "Google Docs - Workflow Setup",
                week: "week1",
                content: `
                    <h3>Week 1 - Setting Up Collaborative Workflow</h3>
                    <p><strong>Google Docs as Central Hub:</strong></p>
                    <p>This first week, we set up a structure to work together. For the general workflow, we use Google Docs to coordinate our research, planning, and documentation.</p>
                    <p>Google Docs serves as our primary tool for:</p>
                    <ul>
                        <li>Graduation plan development</li>
                        <li>Research question refinement</li>
                        <li>Weekly process documentation</li>
                        <li>Abstract updates and revisions</li>
                    </ul>
                `
            },
            zotero: {
                title: "Zotero - Research Library",
                week: "week1", 
                content: `
                    <h3>Week 1 - Building Shared Research Foundation</h3>
                    <p><strong>Zotero Group Library:</strong></p>
                    <p>For researching articles, we have a group library on Zotero. This allows us to collect and organize sources related to:</p>
                    <ul>
                        <li>Reenchantment of technology and work</li>
                        <li>Community power and collective action</li>
                        <li>Language and etymology of work</li>
                        <li>Traditional craft practices like braiding</li>
                        <li>Industrial automation vs human agency</li>
                    </ul>
                `
            },
            figma: {
                title: "Figma - Design Exploration",
                week: "week1",
                content: `
                    <h3>Week 1 - Visual Design Process</h3>
                    <p><strong>Figma for Website Design:</strong></p>
                    <p>For improving our website design and trying out different styles before "coding" them in github onto the website, we use Figma.</p>
                    <p>This allows us to:</p>
                    <ul>
                        <li>Experiment with visual concepts</li>
                        <li>Test different layouts and interactions</li>
                        <li>Prototype before implementation</li>
                        <li>Collaborate on design decisions</li>
                    </ul>
                `
            },
            reenchantment: {
                title: "Reenchantment Research",
                week: "week1",
                content: `
                    <h3>Week 1 - Marion's Research Focus</h3>
                    <p><strong>Marion's Research Questions:</strong></p>
                    <ul>
                        <li>How can design contribute to the reenchantment of the world in a time when industrial technology appears both as poison and remedy, dissolving myths while generating systemic disillusion?</li>
                        <li>How to reenchant the world?</li>
                        <li>How can we bring back poetry after disillusion of all the working processes?</li>
                        <li>How to bring back agency</li>
                        <li>How to stop operating machines?</li>
                        <li>If disenchantment comes through rationalization and reification, how can design cultivate practices that reintroduce ambiguity, some monster-like forms, Frankenstein?</li>
                        <li>Can design restore a sense of poetry myth or animism in our relationship with technology?</li>
                        <li>How can we imagine forms of production where humans regain agency rather than becoming operators of machines?</li>
                    </ul>
                    <p><strong>Focus for the rope:</strong> mechanism</p>
                `
            },
            community: {
                title: "Community Power Research",
                week: "week1",
                content: `
                    <h3>Week 1 - Jess's Research Focus</h3>
                    <p><strong>Jess's Research Questions:</strong></p>
                    <ul>
                        <li>What language are we using to refer to the world of work and industry and what are its implications?</li>
                        <li>In what ways can accessible media be used to make critical reflections on labor, autonomy, and technology understandable and relatable for non-designers?</li>
                        <li>How can we use the power of the community to meaningfully change the future of work or the industry?</li>
                        <li>How might amplifying overlooked voices and collective expressions generate alternative imaginaries of work and industry in a time of rapid technological change?</li>
                    </ul>
                    <p><strong>Focus for the rope:</strong> textile experiments, collaboration</p>
                    
                    <h4>Community Research Context</h4>
                    <p>From Braiding Sweetgrass: "Individuality is cherished and nurtured, because, in order to flourish, each of us has to be strong in who we are and carry our gifts with conviction, so they can be shared with others. Being among the sisters provides a visible manifestation of what a community can become when its members understand and share their gifts. In reciprocity, we fill our spirits as well as our bellies."</p>
                `
            },
            rope: {
                title: "Rope as Material Focus",
                week: "week1",
                content: `
                    <h3>Week 1 - Material Decision</h3>
                    <p><strong>Shared Material Exploration:</strong></p>
                    <p>We decided to both have different focus points for our material experimentation with the focus rope:</p>
                    <ul>
                        <li><strong>Marion:</strong> mechanism</li>
                        <li><strong>Jess:</strong> textile experiments, collaboration</li>
                    </ul>
                    <p>Rope as a medium that connects ancient techniques with contemporary questions about work, craft, and technology.</p>
                    <p>This division allows us to explore how traditional craft knowledge can serve as a foundation for reimagining our relationship with making and technology, while maintaining our individual research focuses.</p>
                `
            },
            machine: {
                title: "3D Printed Braiding Machine",
                week: "week2",
                content: `
                    <h3>Week 2 - Open-Source Machine Development</h3>
                    <p><strong>Building Process:</strong></p>
                    <p>For this week, we tried to make an open-source braiding machine (https://fraensengineering.com/3d-printed-braiding-machine/). But printing took longer than expected, so we are not finished yet. But this is our work in progress.</p>
                    
                    <h4>Technical Challenges</h4>
                    <p>From the 3D printed Rope braiding machine was missing the track part, so we had to analyse it, 3D model it and then print it on paper to build it in wood.</p>
                    
                    <h4>Research Context</h4>
                    <p>I've been interested about the recent developments and new directions in Braiding Technologies. One of the main subjects of conflicts and research is about horn gear placement and prediction of the carrier path. These systems are complex, and their logic is often difficult to share or communicate to non-specialists.</p>
                `
            },
            textile: {
                title: "Textile Experiments",
                week: "week2",
                content: `
                    <h3>Week 2 - Hand Braiding Experiments</h3>
                    <p><strong>Jess's Textile Experiments:</strong></p>
                    <p>Then I (Jess) also tried to do some simple textile experiments with the rope. In one I was just getting started with a simple hair rope-braiding technique (2). Then I tried to create volume with tying the rope in a specific way (1) and then I tried to use something similar to basket weaving (3).</p>
                    
                    <h4>Process Documentation</h4>
                    <p>These hands-on experiments complement the machine development, exploring the tactile and intuitive aspects of rope manipulation that contrast with automated systems.</p>
                `
            },
            motor: {
                title: "Motor Discovery at Emmaus",
                week: "week2",
                content: `
                    <h3>Week 2 - Serendipitous Discovery</h3>
                    <p><strong>Finding Components:</strong></p>
                    <p>I went to Emmaus this weekend and found an electric whisk. I disassembled the box around to reveal a universal motor, that we could use for our machine.</p>
                    <p>This discovery connects to our research about bringing playfulness and serendipity back into technical making - finding unexpected solutions in everyday objects.</p>
                    
                    <h4>Connecting to Research Themes</h4>
                    <p>This kind of resourceful discovery represents the opposite of purely industrial processes - instead of ordering precise components, we find creative solutions in unexpected places, bringing human ingenuity back into the making process.</p>
                `
            },
            texmind: {
                title: "Texmind Braiding Configurator",
                week: "week2",
                content: `
                    <h3>Week 2 - Software Tools for Braiding</h3>
                    <p><strong>Texmind Braiding Machine Configurator:</strong></p>
                    <p>There are other tools such as Texmind Braiding Machine Configurator software, which I experimented with during my first failed attempt to make a braid. I think it opens up a space of Trial and Errors, and also opens up the system, bringing a more playful way to approach it.</p>
                    
                    <h4>Philosophy of Tools</h4>
                    <p>This software represents the kind of tool we want to create - one that encourages experimentation rather than just automation. By changing the gear settings of a typical maypole braiding machine, an operator can generate a remarkable variety of structures and volumes, lace tubular, 3d forms.</p>
                `
            },
            herzog: {
                title: "Herzog Automation System",
                week: "week2",
                content: `
                    <h3>Week 2 - Automation vs Human Agency</h3>
                    <p><strong>The Automation Challenge:</strong></p>
                    <p>To address complexity in braiding systems, Herzog has created a simulation software capable of predicting carrier path and braiding pattern and supporting the development of operator-autonomous braiding systems. The ambition is to reach a stage where pattern changes without the operator intervention.</p>
                    
                    <h4>Critical Perspective</h4>
                    <p>This represents exactly what our research questions - systems designed to eliminate human input entirely. How can we design automation that enhances rather than replaces human creativity?</p>
                `
            },
            maypole: {
                title: "Maypole Tradition Research",
                week: "week2",
                content: `
                    <h3>Week 2 - Community Ritual Discovery</h3>
                    <p><strong>Maypole Connection:</strong></p>
                    <p>Then we also researched the tradition of the Maypole and thought it is interesting to us because of the aspect of the community and emotions.</p>
                    
                    <h4>Community Practice</h4>
                    <p>The Maypole tradition connects to our research on how traditional community practices can inform contemporary approaches to collaborative making and technology - specifically how collective creation of braided patterns can serve as both ritual and practical skill-sharing.</p>
                    
                    <p>This relates directly to Jess's question: "How might amplifying overlooked voices and collective expressions generate alternative imaginaries of work and industry in a time of rapid technological change?"</p>
                `
            },
            gabriel: {
                title: "Gabriel Fontana - Social Design Expert",
                week: "week2",
                content: `
                    <h3>Week 2 - Expert Consultation</h3>
                    <p><strong>Social Design Connection:</strong></p>
                    <p>We contacted the social design tutor Gabriel Fontana, who creates (sport-) games as a way of activating the community and bringing diverse people together.</p>
                    
                    <h4>Community Activation Methods</h4>
                    <p>Gabriel's work with games and community activation provides insights into how traditional activities like Maypole dancing can inform contemporary community-building and collaborative making practices.</p>
                    
                    <p>This consultation helps us explore practical methods for translating our research into community-engaging activities.</p>
                `
            },
            companies: {
                title: "Rope Company Research",
                week: "week2",
                content: `
                    <h3>Week 2 - Industry Context</h3>
                    <p><strong>Factory Visits Planned:</strong></p>
                    <p>We contacted more rope companies for a factory visit and the opportunity to ask some questions.</p>
                    
                    <h4>Understanding Industrial Context</h4>
                    <p>This research helps us understand:</p>
                    <ul>
                        <li>Current industrial rope production methods</li>
                        <li>The scale and mechanization of traditional crafts</li>
                        <li>Opportunities for human-scale alternatives</li>
                        <li>Worker experiences in industrial settings</li>
                    </ul>
                    
                    <p>Understanding the current industrial context is essential for imagining alternatives that are both meaningful and practical.</p>
                `
            },
            mindmap: {
                title: "Research Mindmap Creation",
                week: "week2",
                content: `
                    <h3>Week 2 - Visual Synthesis Process</h3>
                    <p><strong>Collaborative Thinking:</strong></p>
                    <p>We discussed our topic from our research again and created a mindmap on the board. This then we used to update the abstract for the graduation plan, our research focus, as well as the research question.</p>
                    
                    <h4>Connecting Ideas</h4>
                    <p>The mindmap helped us see connections between:</p>
                    <ul>
                        <li>Technical aspects (mechanisms, software)</li>
                        <li>Community elements (Maypole, collaboration)</li>
                        <li>Research questions (reenchantment, community power)</li>
                        <li>Material explorations (rope, braiding, textile)</li>
                    </ul>
                `
            },
            abstract: {
                title: "Updated Abstract",
                week: "week2",
                content: `
                    <h3>Week 2 - Project Focus Refinement</h3>
                    <p><strong>Abstract Development:</strong></p>
                    <p>Using insights from our research mindmap, we updated the abstract for the graduation plan, clarifying our research focus and research questions.</p>
                    
                    <h4>Clearer Direction</h4>
                    <p>The updated abstract better reflects our approach of using the braiding machine as a lens to explore questions of reenchantment, community power, and the relationship between traditional craft and contemporary technology.</p>
                    
                    <p>This synthesis represents how our hands-on making and theoretical research inform each other, creating a more integrated approach to our graduation project.</p>
                `
            }
        };
        
        this.init();
    }

    init() {
        this.initializeElements();
        this.setupEventListeners();
        
        // Delay connection drawing to ensure elements are positioned
        setTimeout(() => {
            this.updateElementPositions();
            this.drawConnections();
        }, 500);
    }

    initializeElements() {
        const elementNodes = document.querySelectorAll('.element-node');
        elementNodes.forEach(element => {
            const elementId = element.dataset.element;
            if (!elementId) return;
            
            const rect = element.getBoundingClientRect();
            
            this.elements.set(elementId, {
                element: element,
                id: elementId,
                connections: element.dataset.connects ? element.dataset.connects.split(',').filter(c => c.trim()) : [],
                position: {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                }
            });
        });
    }

    updateElementPositions() {
        const elementNodes = document.querySelectorAll('.element-node');
        elementNodes.forEach(element => {
            const elementId = element.dataset.element;
            if (!elementId) return;
            
            const rect = element.getBoundingClientRect();
            const elementData = this.elements.get(elementId);
            if (elementData) {
                elementData.position = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };
            }
        });
    }

    setupEventListeners() {
        // Element click events
        document.querySelectorAll('.element-node').forEach(element => {
            element.addEventListener('click', (e) => {
                e.stopPropagation();
                const elementId = element.dataset.element;
                if (elementId && this.contentData[elementId]) {
                    this.selectElement(elementId);
                }
            });
        });

        // Close background content when clicking elsewhere
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.element-node')) {
                this.closeContent();
            }
        });

        // Window resize
        window.addEventListener('resize', () => {
            setTimeout(() => {
                this.updateElementPositions();
                this.drawConnections();
            }, 100);
        });
    }

    selectElement(elementId) {
        // Clear previous selections
        document.querySelectorAll('.element-node').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.connection-line').forEach(l => l.classList.remove('active', 'highlighted'));

        // Activate selected element
        const elementData = this.elements.get(elementId);
        if (elementData) {
            elementData.element.classList.add('active');
            
            // Highlight connections
            this.highlightConnections(elementId);
            
            // Show content
            this.showContent(elementId);
        }
    }

    highlightConnections(elementId) {
        const elementData = this.elements.get(elementId);
        if (!elementData) return;

        // Highlight all connections to/from this element
        document.querySelectorAll('.connection-line').forEach(line => {
            const connects = line.dataset.connects.split('-');
            if (connects.includes(elementId)) {
                line.classList.add('highlighted');
            }
        });
    }

    showContent(elementId) {
        const backgroundContent = document.getElementById('background-content');
        const contentText = document.getElementById('content-text');
        
        const data = this.contentData[elementId];
        if (data) {
            contentText.innerHTML = `<h2>${data.title}</h2>${data.content}`;
            backgroundContent.classList.add('active');
        }
    }

    closeContent() {
        const backgroundContent = document.getElementById('background-content');
        backgroundContent.classList.remove('active');
        
        // Clear active states
        document.querySelectorAll('.element-node').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.connection-line').forEach(l => l.classList.remove('active', 'highlighted'));
    }

    drawConnections() {
        const svg = document.querySelector('.connections');
        if (!svg) return;
        
        svg.innerHTML = ''; // Clear existing connections
        
        // Draw connections between elements
        this.elements.forEach((element, elementId) => {
            element.connections.forEach(connectionId => {
                const connectedElement = this.elements.get(connectionId);
                if (connectedElement) {
                    this.createConnectionLine(element, connectedElement, `${elementId}-${connectionId}`);
                }
            });
        });
    }

    createConnectionLine(element1, element2, connectionId) {
        const svg = document.querySelector('.connections');
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        const startX = element1.position.x;
        const startY = element1.position.y;
        const endX = element2.position.x;
        const endY = element2.position.y;
        
        // Create curved path
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        const controlX = midX + (startY - endY) * 0.2;
        const controlY = midY + (endX - startX) * 0.2;
        
        const pathData = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
        
        line.setAttribute('d', pathData);
        line.setAttribute('class', 'connection-line');
        line.setAttribute('data-connects', connectionId);
        
        svg.appendChild(line);
    }
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    new WeeklyProcess();
});