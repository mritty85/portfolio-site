// Data Definitions
const workData = {
    tree: [
        {
            name: 'PORTFOLIO',
            type: 'folder',
            isOpen: true,
            children: [
                {
                    name: 'about',
                    type: 'folder',
                    isOpen: true,
                    children: [
                        { name: 'readme.md', type: 'file', icon: '📄', id: 'work-readme' },
                        { name: 'resume.pdf', type: 'file', icon: '📄', id: 'work-resume' }
                    ]
                },
                {
                    name: 'case-studies',
                    type: 'folder',
                    isOpen: true,
                    children: [
                        { name: 'gong-integration.md', type: 'file', icon: '📝', id: 'work-gong' },
                        { name: 'context-transfer.md', type: 'file', icon: '📝', id: 'work-context' }
                    ]
                },
                {
                    name: 'contact.json',
                    type: 'file',
                    icon: '⚙️',
                    id: 'work-contact'
                }
            ]
        }
    ],
    content: {
        'work-readme': `<h1>Martin Rittenhouse</h1>
<h2>Solutions Architect & Technical Consultant</h2>
<br>
<p>> Specializing in HubSpot architecture, Google Apps Script, and AI integrations.</p>
<p>> I build internal tools that solve real workflow problems.</p>
<br>
<h3>--- Professional Profile ---</h3>
<ul>
    <li><strong>Role:</strong> Solutions Architect</li>
    <li><strong>Focus:</strong> Systems Thinking, Automation, Efficiency</li>
    <li><strong>Location:</strong> Remote / Global</li>
</ul>
<br>
<p>I connect the dots between business requirements and technical implementation.</p>`,
        'work-resume': `<p>[Resume Preview Loading...]</p><br><p><a href="#">Download PDF</a></p>`,
        'work-gong': `<h1>Gong Integration</h1><p>Syncing call data to HubSpot custom objects.</p>`,
        'work-context': `<h1>Context Transfer</h1><p>Passing context from sales to CS via automated workflows.</p>`,
        'work-contact': `{
    "email": "martin@example.com",
    "linkedin": "linkedin.com/in/martinrittenhouse",
    "github": "github.com/mritty"
}`
    }
};

const funData = {
    tree: [
        {
            name: 'WORLD_1',
            type: 'folder',
            isOpen: true,
            children: [
                {
                    name: 'PLAYER_INFO',
                    type: 'folder',
                    isOpen: true,
                    children: [
                        { name: 'stats.txt', type: 'file', icon: '👤', id: 'fun-stats' },
                        { name: 'inventory.list', type: 'file', icon: '🎒', id: 'fun-inventory' }
                    ]
                },
                {
                    name: 'QUESTS',
                    type: 'folder',
                    isOpen: true,
                    children: [
                        { name: 'build_website.quest', type: 'file', icon: '⚔️', id: 'fun-website' },
                        { name: 'train_dogs.quest', type: 'file', icon: '🐕', id: 'fun-dogs' }
                    ]
                },
                {
                    name: 'cheat_codes.bin',
                    type: 'file',
                    icon: '👾',
                    id: 'fun-cheats'
                }
            ]
        }
    ],
    content: {
        'fun-stats': `<h1>PLAYER: MARTIN</h1>
<p>LEVEL: 34</p>
<p>CLASS: Tinkerer / Dog Dad</p>
<br>
<h3>[STATS]</h3>
<ul>
    <li>STR: 12</li>
    <li>INT: 18</li>
    <li>DEX: 10</li>
    <li>LUCK: 15</li>
</ul>
<br>
<p>SPECIAL ABILITY: Can fix things by staring at them intensely.</p>`,
        'fun-inventory': `<ul><li>MacBook Pro</li><li>Mechanical Keyboard</li><li>Coffee Mug (Empty)</li><li>Dog Treats</li></ul>`,
        'fun-website': `<h1>QUEST: Build Portfolio</h1><p>Objective: Make a cool website.</p><p>Status: IN PROGRESS</p>`,
        'fun-dogs': `<h1>QUEST: Train Dogs</h1><p>Objective: Teach them to sit.</p><p>Status: COMPLETED (Mostly)</p>`,
        'fun-cheats': `<p>01001000 01100101 01101100 01101100 01101111</p><p>There are no shortcuts.</p>`
    }
};

// State
let currentMode = 'work'; // 'work' or 'fun'
let currentFileId = 'work-readme';

// DOM Elements
const body = document.body;
const toggle = document.getElementById('mode-toggle');
const sidebar = document.querySelector('.sidebar');
const sidebarToggleBtn = document.getElementById('sidebar-toggle');
const fileTreeContainer = document.getElementById('file-tree');
const contentDisplay = document.getElementById('content-display');
const tabFilename = document.getElementById('tab-filename');

// Initialization
function init() {
    toggle.addEventListener('change', handleToggle);
    sidebarToggleBtn.addEventListener('click', handleSidebarToggle);
    renderState();
}

// Handlers
function handleToggle(e) {
    currentMode = e.target.checked ? 'fun' : 'work';

    // Set default file for the mode if switching
    if (currentMode === 'fun') {
        currentFileId = 'fun-stats';
    } else {
        currentFileId = 'work-readme';
    }

    renderState();
}

function handleSidebarToggle() {
    sidebar.classList.toggle('collapsed');
    const isCollapsed = sidebar.classList.contains('collapsed');

    // Update button text/icon
    const iconSpan = sidebarToggleBtn.querySelector('.icon');
    const textSpan = sidebarToggleBtn.querySelector('.text');

    if (isCollapsed) {
        textSpan.textContent = "Show Menu";
        // Icon rotation handled by CSS
    } else {
        textSpan.textContent = "Hide Menu";
    }
}

function handleFileClick(fileId, fileName) {
    currentFileId = fileId;
    renderContent(fileName);

    // Re-render tree to update active state
    renderTree();
}

// Rendering
function renderState() {
    // 1. Theme
    body.setAttribute('data-theme', currentMode);

    // 2. Tree
    renderTree();

    // 3. Content
    const data = currentMode === 'work' ? workData : funData;
    // Find filename for current ID (simple lookup for now)
    let fileName = 'unknown';
    // Helper to find name in tree
    const findName = (nodes) => {
        for (const node of nodes) {
            if (node.id === currentFileId) return node.name;
            if (node.children) {
                const found = findName(node.children);
                if (found) return found;
            }
        }
        return null;
    };
    fileName = findName(data.tree) || 'readme.md';

    renderContent(fileName);
}

function renderTree() {
    const data = currentMode === 'work' ? workData : funData;
    fileTreeContainer.innerHTML = generateTreeHTML(data.tree);

    // Add event listeners to new elements
    const fileElements = fileTreeContainer.querySelectorAll('.file');
    fileElements.forEach(el => {
        el.addEventListener('click', () => {
            handleFileClick(el.dataset.id, el.dataset.name);
        });
    });
}

function generateTreeHTML(nodes) {
    let html = '<ul class="tree-list">';
    nodes.forEach(node => {
        if (node.type === 'folder') {
            html += `
                <li>
                    <details ${node.isOpen ? 'open' : ''}>
                        <summary class="folder">${node.name}</summary>
                        ${generateTreeHTML(node.children)}
                    </details>
                </li>
            `;
        } else {
            const isActive = node.id === currentFileId ? 'active' : '';
            html += `
                <li class="file ${isActive}" data-id="${node.id}" data-name="${node.name}">
                    <span class="icon">${node.icon}</span> ${node.name}
                </li>
            `;
        }
    });
    html += '</ul>';
    return html;
}

function renderContent(fileName) {
    const data = currentMode === 'work' ? workData : funData;
    const content = data.content[currentFileId] || '<p>File not found.</p>';

    contentDisplay.innerHTML = content;
    tabFilename.textContent = fileName;
}

// Start
init();
