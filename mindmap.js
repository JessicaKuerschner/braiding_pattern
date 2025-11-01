class InteractiveMindmap {
    constructor() {
        this.nodes = new Map();
        this.connections = new Map();
        this.isDragging = false;
        this.dragOffset = { x: 0, y: 0 };
        this.currentDragNode = null;
        this.scale = 1;
        this.panOffset = { x: 0, y: 0 };
        
        this.contentData = {
            central: {
                title: "MACHINE - Our Friend",
                week: "overview",
                content: `
                    <h3>Project Overview</h3>
                    <p>The machine as companion rather than master. A collaborative exploration of how technology can become a friend that enhances human creativity rather than replacing it.</p>
                    <p>This central concept bridges Marion's focus on reenchantment and Jess's exploration of community power through the development of a braiding machine.</p>
                    
                    <h4>Week 1 - Setting Up (09/09/2025)</h4>
                    <p>This first week, we set up a structure to work together. For the general workflow, we use Google Docs. For researching articles, we have a group library on Zotero. And for improving our website design and trying out different styles before "coding" them in github onto the website, we use Figma.</p>
                    
                    <h4>Week 2 - Braiding Machine & Experiments (16/09/2025)</h4>
                    <p>For this week, we tried to make an open-source braiding machine. But printing took longer than expected, so we are not finished yet. This is our work in progress.</p>
                `
            },
            reenchantment: {
                title: "Reenchantment",
                week: "week1",
                content: `
                    <h3>Week 1 - Setting Up (09/09/2025)</h3>
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
                        <li>What are current work paradigms?</li>
                        <li>How can we decentralize ways of production?</li>
                        <li>How can we find a way to bring back production to human scale?</li>
                    </ul>
                    <p><strong>Focus for the rope:</strong> mechanism</p>
                    
                    <h4>Weekly Process</h4>
                    <p>We made a mind-map for key words that we found during our research and tried to link them to each other. We worked on the graduation plan, including a schedule where we decided to both have two different research questions as focus points for conceptual research.</p>
                `
            },
            community: {
                title: "Community Power",
                week: "week1",
                content: `
                    <h3>Week 1 - Setting Up (09/09/2025)</h3>
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
            craft: {
                title: "Craft & Human Agency",
                week: "week1",
                content: `
                    <h3>Week 1 - Research Setup</h3>
                    <p><strong>Tools & Workflow for Collaborative Craft:</strong></p>
                    <p>This first week, we set up a structure to work together. For the general workflow, we use Google Docs. For researching articles, we have a group library on Zotero. And for improving our website design and trying out different styles before "coding" them in github onto the website, we use Figma.</p>
                    
                    <h4>Material Focus Decision</h4>
                    <p>We decided to both have different focus points for our material experimentation with the focus rope:</p>
                    <ul>
                        <li><strong>Marion:</strong> mechanism</li>
                        <li><strong>Jess:</strong> textile experiments, collaboration</li>
                    </ul>
                    
                    <p>This division allows us to explore how traditional craft knowledge can serve as a foundation for reimagining our relationship with making and technology, while maintaining our individual research focuses.</p>
                `
            },
            language: {
                title: "Language of Work",
                week: "research",
                content: `
                    <h3>Research on Language & Work</h3>
                    <p><strong>Etymology of "Work":</strong></p>
                    <p>The word "work" exists from the Middle English word "werk" or Old English "woerc/worc" meaning that something is done, whether it is voluntary or required. Only since around 1200, the meaning of physical effort and exertion is attested to it. And from 1300 the meaning became stronger of "labor as a measurable commodity".</p>
                    
                    <p>This is a time in the Middle Age that goes along with the period of the expansion of trade and cities. Through the Black Death, especially in England there were severe labour shortages and a shift in power dynamics, where feudalism declined. Artisan guilds became more wealthy and influential.</p>
                    
                    <h4>Contemporary Understanding</h4>
                    <p>Urban dictionary: "doing something you hate in a place you hate with people you grow to hate for the majority of your day for the majority of your life." by GreyAndBoring November 30, 2011</p>
                    
                    <p>The majority of synonyms of work (in google) are negatively connotated, except if it is relating to artistic production:</p>
                    <ul>
                        <li>"donkey work", "sweat blood", "work one's arse off", "exploit", "sweat of one's brow", "work one's finger's to the bone"</li>
                        <li>vs. "work of art", "achievement", "oeuvre", "work out"</li>
                    </ul>
                `
            },
            agency: {
                title: "Human Agency vs Machine Operators",
                content: `
                    <p>How to bring back agency and stop operating machines?</p>
                    <p>If disenchantment comes through rationalization and reification, how can design cultivate practices that reintroduce ambiguity?</p>
                    <p><strong>Current Challenge:</strong> Industrial paradigms that reduce humans to machine operators</p>
                    <p><strong>Potential Solutions:</strong></p>
                    <ul>
                        <li>Cultivating practices that reintroduce ambiguity</li>
                        <li>Creating "monster-like forms" that resist pure rationalization</li>
                        <li>Designing for human creativity and intuition</li>
                    </ul>
                `
            },
            myth: {
                title: "Myth & Animism in Technology",
                content: `
                    <p>Can design restore a sense of poetry, myth or animism in our relationship with technology?</p>
                    <p>Exploring how to dissolve technological myths while creating new, more human-centered narratives:</p>
                    <ul>
                        <li>Moving beyond purely rational approaches to technology</li>
                        <li>Embracing mystery and wonder in making</li>
                        <li>Creating space for intuition and feeling in technical processes</li>
                    </ul>
                    <p>The machine as a being with its own character, rather than a sterile tool.</p>
                `
            },
            collaboration: {
                title: "Collaborative Making",
                content: `
                    <p>How might amplifying overlooked voices and collective expressions generate alternative imaginaries?</p>
                    <p>From Braiding Sweetgrass: "Individuality is cherished and nurtured, because, in order to flourish, each of us has to be strong in who we are and carry our gifts with conviction, so they can be shared with others."</p>
                    <p><strong>Focus:</strong></p>
                    <ul>
                        <li>Textile experiments as collaborative practice</li>
                        <li>Community-driven making processes</li>
                        <li>Shared knowledge and skill exchange</li>
                    </ul>
                `
            },
            rope: {
                title: "Rope as Material Focus",
                content: `
                    <p>Our shared material exploration bringing together different approaches:</p>
                    <p><strong>Marion's Focus:</strong> Mechanism - understanding the technical aspects of rope manipulation</p>
                    <p><strong>Jess's Focus:</strong> Textile experiments and collaboration - exploring rope through hands-on experimentation and community practice</p>
                    <p>Rope as a medium that connects ancient techniques with contemporary questions about work, craft, and technology.</p>
                `
            },
            braiding: {
                title: "Braiding Technology",
                week: "week2",
                content: `
                    <h3>Week 2 - Braiding Research & Development</h3>
                    <p><strong>Technical Innovation Research:</strong></p>
                    <p>At the same time, there are other tools such as Texmind Braiding Machine Configurator software, which I experimented with during my first failed attempt to make a braid. I think it opens up a space of Trial and Errors, and also opens up the system, bringing a more playful way to approach it.</p>
                    
                    <p>By changing the gear settings of a typical maypole braiding machine, an operator can generate a remarkable variety of structures and volumes, lace tubular, 3d forms.</p>
                    
                    <h4>Images from Week 2</h4>
                    <p>Braided lace & Bifurcated braid while the pattern is changing</p>
                    
                    <h4>Bridging Ancient & Contemporary</h4>
                    <p>How can we bring this ancient craft into dialogue with contemporary questions about agency and poetry in making? The tension between Herzog's vision of operator-autonomous systems versus tools that encourage playful experimentation.</p>
                `
            },
            textile: {
                title: "Textile Experiments",
                week: "week2", 
                content: `
                    <h3>Week 2 - Braiding Machine & Experiments (16/09/2025)</h3>
                    <p><strong>Jess's Textile Experiments:</strong></p>
                    <p>Then I (Jess) also tried to do some simple textile experiments with the rope. In one I was just getting started with a simple hair rope-braiding technique (2). Then I tried to create volume with tying the rope in a specific way (1) and then I tried to use something similar to basket weaving (3).</p>
                    
                    <h4>Process Documentation</h4>
                    <p>Then, we discussed our topic from our research again and created a mindmap on the board. This then we used to update the abstract for the graduation plan, our research focus, as well as the research question.</p>
                    
                    <h4>Community Connections</h4>
                    <p>We also contacted more rope companies for a factory visit and the opportunity to ask some questions, as well as the social design tutor Gabriel Fontana, who creates (sport-) games as a way of activating the community and bringing diverse people together.</p>
                    
                    <p>Then we also researched the tradition of the Maypole and thought it is interesting to us because of the aspect of the community and emotions.</p>
                `
            },
            mechanism: {
                title: "Mechanism Design",
                week: "week2",
                content: `
                    <h3>Week 2 - Braiding Machine & Experiments (16/09/2025)</h3>
                    <p><strong>Open-Source Braiding Machine Development:</strong></p>
                    <p>For this week, we tried to make an open-source braiding machine (https://fraensengineering.com/3d-printed-braiding-machine/). But printing took longer than expected, so we are not finished yet. But this is our work in progress.</p>
                    
                    <h4>Mechanism Research & Development</h4>
                    <p>From the 3D printed Rope braiding machine was missing the track part, so we had to analyse it, 3D model it and then print it on paper to build it in wood.</p>
                    
                    <h4>Research on Rope Braiding Innovations</h4>
                    <p>I've been interested about the recent developments and new directions in Braiding Technologies. One of the main subjects of conflicts and research is about horn gear placement and prediction of the carrier path. These systems are complex, and their logic is often difficult to share or communicate to non-specialists.</p>
                    
                    <p>To address this, Herzog has created a simulation software capable of predicting carrier path and braiding pattern and supporting the development of operator-autonomous braiding systems. The ambition is to reach a stage where pattern changes without the operator intervention.</p>
                    
                    <h4>Bought a Motor</h4>
                    <p>I went to Emmaus this weekend and found an electric whisk. I disassembled the box around to reveal a universal motor, that we could use for our machine.</p>
                `
            },
            maypole: {
                title: "Maypole Tradition",
                week: "week2",
                content: `
                    <h3>Week 2 - Community Research</h3>
                    <p><strong>Maypole Discovery:</strong></p>
                    <p>Then we also researched the tradition of the Maypole and thought it is interesting to us because of the aspect of the community and emotions.</p>
                    
                    <h4>Community Activation</h4>
                    <p>We also contacted the social design tutor Gabriel Fontana, who creates (sport-) games as a way of activating the community and bringing diverse people together.</p>
                    
                    <p>The Maypole tradition connects to our research on how traditional community practices can inform contemporary approaches to collaborative making and technology - specifically how collective creation of braided patterns can serve as both ritual and practical skill-sharing.</p>
                    
                    <h4>Connection to Research Questions</h4>
                    <p>This relates directly to Jess's question: "How might amplifying overlooked voices and collective expressions generate alternative imaginaries of work and industry in a time of rapid technological change?"</p>
                `
            },
            disillusion: {
                title: "Industrial Disillusion",
                content: `
                    <p>The challenge we're responding to:</p>
                    <p>Industrial technology appears both as poison and remedy, dissolving myths while generating systemic disillusion.</p>
                    <p><strong>Symptoms:</strong></p>
                    <ul>
                        <li>Work as "something you hate in a place you hate with people you grow to hate"</li>
                        <li>Negatively connotated synonyms: "donkey work," "sweat blood," "exploit"</li>
                        <li>Rationalization and reification stripping meaning from work</li>
                    </ul>
                `
            },
            automation: {
                title: "Automation vs Human Creativity",
                content: `
                    <p>The tension between automated systems and human agency:</p>
                    <p>Herzog's ambition: "to reach a stage where pattern changes without the operator intervention."</p>
                    <p><strong>Counter-approach:</strong> Tools like Texmind that "open up a space of Trial and Errors" and bring "a more playful way to approach" complex systems.</p>
                    <p>How can we design automation that enhances rather than replaces human creativity?</p>
                `
            },
            scale: {
                title: "Human Scale Production",
                content: `
                    <p>How can we find a way to bring back production to human scale?</p>
                    <p><strong>Current Challenge:</strong> Industrial scale that alienates workers from the means and outcomes of production</p>
                    <p><strong>Alternative Vision:</strong></p>
                    <ul>
                        <li>Decentralized ways of production</li>
                        <li>Community-controlled making processes</li>
                        <li>Technology that serves human flourishing</li>
                        <li>Production as social and creative practice</li>
                    </ul>
                `
            },
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
            motor: {
                title: "Motor Discovery at Emmaus",
                week: "week2",
                content: `
                    <h3>Week 2 - Finding Components</h3>
                    <p><strong>Serendipitous Discovery:</strong></p>
                    <p>I went to Emmaus this weekend and found an electric whisk. I disassembled the box around to reveal a universal motor, that we could use for our machine.</p>
                    <p>This discovery connects to our research about bringing playfulness and serendipity back into technical making - finding unexpected solutions in everyday objects.</p>
                `
            },
            texmind: {
                title: "Texmind Braiding Configurator",
                week: "week2",
                content: `
                    <h3>Week 2 - Software Tools for Braiding</h3>
                    <p><strong>Texmind Braiding Machine Configurator:</strong></p>
                    <p>There are other tools such as Texmind Braiding Machine Configurator software, which I experimented with during my first failed attempt to make a braid. I think it opens up a space of Trial and Errors, and also opens up the system, bringing a more playful way to approach it.</p>
                    <p>This software represents the kind of tool we want to create - one that encourages experimentation rather than just automation.</p>
                `
            },
            gabriel: {
                title: "Gabriel Fontana - Social Design",
                week: "week2",
                content: `
                    <h3>Week 2 - Community Activation Research</h3>
                    <p><strong>Connecting with Social Design Experts:</strong></p>
                    <p>We contacted the social design tutor Gabriel Fontana, who creates (sport-) games as a way of activating the community and bringing diverse people together.</p>
                    <p>This connection helps us explore how traditional activities like Maypole dancing can inform contemporary community-building and collaborative making practices.</p>
                `
            },
            companies: {
                title: "Rope Company Visits",
                week: "week2",
                content: `
                    <h3>Week 2 - Industry Research</h3>
                    <p><strong>Factory Visits & Questions:</strong></p>
                    <p>We contacted more rope companies for a factory visit and the opportunity to ask some questions.</p>
                    <p>This research helps us understand:</p>
                    <ul>
                        <li>Current industrial rope production methods</li>
                        <li>The scale and mechanization of traditional crafts</li>
                        <li>Opportunities for human-scale alternatives</li>
                        <li>Worker experiences in industrial settings</li>
                    </ul>
                `
            },
            mindmap: {
                title: "Research Mindmap Creation",
                week: "week2",
                content: `
                    <h3>Week 2 - Synthesizing Research</h3>
                    <p><strong>Visual Thinking Process:</strong></p>
                    <p>We discussed our topic from our research again and created a mindmap on the board. This then we used to update the abstract for the graduation plan, our research focus, as well as the research question.</p>
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
                    <h3>Week 2 - Refining Project Focus</h3>
                    <p><strong>Abstract Development:</strong></p>
                    <p>Using insights from our research mindmap, we updated the abstract for the graduation plan, clarifying our research focus and research questions.</p>
                    <p>The updated abstract better reflects our approach of using the braiding machine as a lens to explore questions of reenchantment, community power, and the relationship between traditional craft and contemporary technology.</p>
                `
            }
        };
        
        this.init();
    }

    init() {
        this.initializeNodes();
        this.setupEventListeners();
        
        // Delay connection drawing to ensure nodes are positioned
        setTimeout(() => {
            this.updateNodePositions();
            this.drawConnections();
        }, 100);
        
        // Initial animation
        this.animateNodesIn();
    }

    updateNodePositions() {
        const nodeElements = document.querySelectorAll('.node');
        nodeElements.forEach(node => {
            const nodeId = node.dataset.node;
            const rect = node.getBoundingClientRect();
            const nodeData = this.nodes.get(nodeId);
            if (nodeData) {
                nodeData.position = {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                };
            }
        });
    }

    initializeNodes() {
        const nodeElements = document.querySelectorAll('.node');
        nodeElements.forEach(node => {
            const nodeId = node.dataset.node;
            const rect = node.getBoundingClientRect();
            
            this.nodes.set(nodeId, {
                element: node,
                id: nodeId,
                connections: node.dataset.connects ? node.dataset.connects.split(',') : [],
                position: {
                    x: rect.left + rect.width / 2,
                    y: rect.top + rect.height / 2
                }
            });
        });
    }

    setupEventListeners() {
        // Node click events
        document.querySelectorAll('.node').forEach(node => {
            node.addEventListener('click', (e) => {
                e.stopPropagation();
                this.selectNode(node.dataset.node);
            });

            // Node dragging
            node.addEventListener('mousedown', (e) => {
                if (e.button === 0) { // Left click only
                    this.startDrag(node, e);
                }
            });
        });

        // Mouse events for dragging
        document.addEventListener('mousemove', (e) => {
            if (this.isDragging) {
                this.drag(e);
            }
        });

        document.addEventListener('mouseup', () => {
            this.endDrag();
        });

        // Close background content when clicking elsewhere
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.node')) {
                this.closePanel();
            }
        });

        // Zoom with mouse wheel
        document.addEventListener('wheel', (e) => {
            e.preventDefault();
            this.zoom(e);
        });

        // Pan with right mouse button or middle mouse
        document.addEventListener('mousedown', (e) => {
            if (e.button === 2 || e.button === 1) { // Right or middle click
                e.preventDefault();
                this.startPan(e);
            }
        });

        // Disable context menu
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    selectNode(nodeId) {
        // Clear previous selections
        document.querySelectorAll('.node').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.connection-line').forEach(l => l.classList.remove('active', 'highlighted'));

        // Activate selected node
        const node = this.nodes.get(nodeId);
        if (node) {
            node.element.classList.add('active');
            
            // Highlight connections
            this.highlightConnections(nodeId);
            
            // Show detail panel
            this.showPanel(nodeId);
        }
    }

    highlightConnections(nodeId) {
        const node = this.nodes.get(nodeId);
        if (!node) return;

        // Highlight all connections to/from this node
        document.querySelectorAll('.connection-line').forEach(line => {
            const connects = line.dataset.connects.split('-');
            if (connects.includes(nodeId)) {
                line.classList.add('highlighted');
                
                // Also highlight connected nodes subtly
                connects.forEach(connectedId => {
                    if (connectedId !== nodeId) {
                        const connectedNode = this.nodes.get(connectedId);
                        if (connectedNode) {
                            connectedNode.element.style.borderColor = '#E818F2';
                        }
                    }
                });
            }
        });
    }

    showPanel(nodeId) {
        const backgroundContent = document.getElementById('background-content');
        const contentText = document.getElementById('content-text');
        
        const data = this.contentData[nodeId];
        if (data) {
            // Display the HTML content with proper formatting
            contentText.innerHTML = `<h2>${data.title}</h2>${data.content}`;
            backgroundContent.classList.add('active');
        }
    }

    closePanel() {
        const backgroundContent = document.getElementById('background-content');
        backgroundContent.classList.remove('active');
        
        // Clear active states
        document.querySelectorAll('.node').forEach(n => {
            n.classList.remove('active');
            n.style.borderColor = '';
        });
        document.querySelectorAll('.connection-line').forEach(l => {
            l.classList.remove('active', 'highlighted');
        });
    }

    startDrag(node, e) {
        this.isDragging = true;
        this.currentDragNode = node;
        
        const rect = node.getBoundingClientRect();
        this.dragOffset = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        };
        
        node.classList.add('dragging');
        document.body.style.cursor = 'grabbing';
    }

    drag(e) {
        if (!this.isDragging || !this.currentDragNode) return;
        
        const x = e.clientX - this.dragOffset.x;
        const y = e.clientY - this.dragOffset.y;
        
        this.currentDragNode.style.left = x + 'px';
        this.currentDragNode.style.top = y + 'px';
        this.currentDragNode.style.transform = 'none';
        
        // Update node position data
        const nodeId = this.currentDragNode.dataset.node;
        const nodeData = this.nodes.get(nodeId);
        if (nodeData) {
            nodeData.position = { x: x + 75, y: y + 35 }; // Approximate center
        }
        
        // Redraw connections
        this.drawConnections();
    }

    endDrag() {
        if (this.isDragging && this.currentDragNode) {
            this.currentDragNode.classList.remove('dragging');
            this.currentDragNode = null;
        }
        
        this.isDragging = false;
        document.body.style.cursor = '';
    }

    zoom(e) {
        const delta = e.deltaY > 0 ? 0.9 : 1.1;
        this.scale = Math.max(0.5, Math.min(2, this.scale * delta));
        
        const container = document.querySelector('.mindmap-container');
        container.style.transform = `scale(${this.scale}) translate(${this.panOffset.x}px, ${this.panOffset.y}px)`;
    }

    drawConnections() {
        const svg = document.querySelector('.connections');
        if (!svg) {
            console.error('SVG connections element not found');
            return;
        }
        
        svg.innerHTML = ''; // Clear existing connections
        
        console.log('Drawing connections, nodes available:', this.nodes.size);
        
        // Draw connections between nodes
        this.nodes.forEach((node, nodeId) => {
            console.log(`Node ${nodeId} has connections:`, node.connections);
            node.connections.forEach(connectionId => {
                const connectedNode = this.nodes.get(connectionId);
                if (connectedNode) {
                    console.log(`Creating line from ${nodeId} to ${connectionId}`);
                    this.createConnectionLine(node, connectedNode, `${nodeId}-${connectionId}`);
                } else {
                    console.warn(`Connected node ${connectionId} not found for ${nodeId}`);
                }
            });
        });
        
        console.log('Total connection lines created:', svg.children.length);
    }

    createConnectionLine(node1, node2, connectionId) {
        const svg = document.querySelector('.connections');
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        // Use actual pixel coordinates instead of percentages
        const startX = node1.position.x;
        const startY = node1.position.y;
        const endX = node2.position.x;
        const endY = node2.position.y;
        
        // Create curved path
        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        const controlX = midX + (startY - endY) * 0.3;
        const controlY = midY + (endX - startX) * 0.3;
        
        const pathData = `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`;
        
        line.setAttribute('d', pathData);
        line.setAttribute('class', 'connection-line');
        line.setAttribute('data-connects', connectionId);
        
        svg.appendChild(line);
    }

    animateNodesIn() {
        const nodes = document.querySelectorAll('.node');
        nodes.forEach((node, index) => {
            node.style.opacity = '0';
            node.style.transform += ' scale(0.5)';
            
            setTimeout(() => {
                node.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
                node.style.opacity = '1';
                node.style.transform = node.style.transform.replace('scale(0.5)', 'scale(1)');
            }, index * 150);
        });
    }
}

// Initialize the mindmap when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new InteractiveMindmap();
});