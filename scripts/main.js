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
                        { name: 'context-transfer.md', type: 'file', icon: '📝', id: 'work-context' },
                        { name: 'daily-dose.md', type: 'file', icon: '📝', id: 'work-daily-dose' },
                        { name: 'scoping-tool.md', type: 'file', icon: '📝', id: 'work-scoping' }
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
        'work-readme': `<h1>Martin Rittenberry</h1>
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
        'work-gong': `
<h1>Gong &lt;&gt; HubSpot AI Integration</h1>
<p class="subtitle">Automating Sales Intelligence for Aptitude 8</p>
<p class="tagline"><em>Turning sales calls into qualified opportunities—automatically</em></p>

<p class="image-placeholder">[Screenshot: HubSpot deal record showing AI-populated properties and MEDDIC fields]</p>

<hr>

<h2>The Problem</h2>
<p>Aptitude 8's sales team was drowning in post-call busywork. After every discovery call recorded in Gong, reps faced a familiar routine:</p>
<ul>
    <li><strong>Manual note-taking:</strong> Summarizing 30-60 minute calls into CRM entries</li>
    <li><strong>MEDDIC qualification:</strong> Extracting budget, timeline, decision-makers, and pain points from memory</li>
    <li><strong>Historical research:</strong> Digging through past projects to find relevant case studies for follow-up</li>
    <li><strong>Follow-up emails:</strong> Writing personalized recaps from scratch</li>
    <li><strong>Stakeholder tracking:</strong> Documenting who was on the call and their roles</li>
</ul>
<p>The real cost wasn't just time—it was inconsistency. Some calls got detailed notes, others got nothing. MEDDIC fields sat empty. Relevant case studies never surfaced. The intelligence locked in those Gong recordings wasn't making it into the sales process.</p>

<hr>

<h2>The Solution</h2>
<p>I built an AI-powered integration that transforms Gong call recordings into structured sales intelligence—automatically populating HubSpot, finding relevant historical projects, and generating follow-up documentation.</p>

<h3>Key design decisions:</h3>
<ul>
    <li><strong>Hybrid AI architecture.</strong> Claude Sonnet 4.5 handles primary analysis (summaries, MEDDIC extraction, stakeholder identification). OpenAI's vector search finds relevant historical projects. The combination outperforms either model alone.</li>
    <li><strong>Sequential intelligence flow.</strong> Raw transcripts make poor search queries—450+ lines of conversational noise. Claude first distills the conversation into structured context (industry, systems mentioned, complexity signals), then that context feeds OpenAI's vector search. This approach yields 3-5x more relevant project matches.</li>
    <li><strong>Multi-destination output.</strong> Different stakeholders need different views. HubSpot deal properties get structured data for reporting. HubSpot notes get related projects for quick reference. Google Docs get the full analysis with stakeholder details and follow-up templates.</li>
    <li><strong>Zero infrastructure costs.</strong> Everything runs on Google Apps Script—no servers, no subscriptions beyond the APIs themselves.</li>
</ul>

<p class="image-placeholder">[Screenshot: Google Doc with formatted call analysis, stakeholder list, and follow-up email template]</p>

<hr>

<h2>Features at a Glance</h2>
<ul>
    <li><strong>Transcript Analysis</strong> — Executive summary, key topics, pain points, sentiment, and deal health assessment</li>
    <li><strong>MEDDIC Qualification</strong> — Automatic extraction of budget, timeline, ROI, decision criteria, economic buyer, champion, and identified pain</li>
    <li><strong>Project Matching</strong> — Vector search surfaces relevant case studies, resource guides, and client references from past engagements</li>
    <li><strong>Smart Documentation</strong> — Google Docs updated with full analysis, stakeholder details, and follow-up templates</li>
    <li><strong>Follow-up Generation</strong> — Personalized email drafts based on actual conversation content</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<table>
    <tr><th>Layer</th><th>Technology</th></tr>
    <tr><td>Platform</td><td>Google Apps Script</td></tr>
    <tr><td>Primary AI</td><td>Claude Sonnet 4.5 (analysis, MEDDIC extraction)</td></tr>
    <tr><td>Secondary AI</td><td>OpenAI GPT-4o-mini (vector store search)</td></tr>
    <tr><td>CRM</td><td>HubSpot (deal properties, notes, associations)</td></tr>
    <tr><td>Call Recording</td><td>Gong (webhook integration)</td></tr>
    <tr><td>Documentation</td><td>Google Docs, Google Sheets (logging)</td></tr>
</table>
<p><strong>The beauty of this stack:</strong> Fully serverless. The entire system runs on infrastructure the team already had access to. Deployment takes minutes, not days.</p>

<hr>

<h2>How It Works</h2>
<p>The integration follows a 10-step flow triggered by Gong's webhook:</p>
<pre>
┌─────────────────────────────────────────────────────────────────┐
│                    GONG CALL COMPLETES                          │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  1. WEBHOOK RECEIVED                                            │
│     Gong sends call metadata, participant info, CRM context     │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  2-4. FETCH & PREPARE TRANSCRIPT                                │
│     • Call Gong API for full transcript                         │
│     • Consolidate consecutive speaker sentences (~28% smaller)  │
│     • Map speaker IDs to real names from webhook                │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  5. CLAUDE PRIMARY ANALYSIS                                     │
│     • Executive summary (150-250 words)                         │
│     • Key topics and pain points                                │
│     • MEDDIC qualification extraction                           │
│     • Client stakeholder identification                         │
│     • Follow-up email generation                                │
│     • Structured context for vector search                      │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  6. OPENAI VECTOR SEARCH                                        │
│     • Uses Claude's structured context (not raw transcript)     │
│     • Searches project library for relevant case studies        │
│     • Returns 3-5 matches with relevance scores                 │
│     • Extracts case study URLs, resource guides, references     │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  7-8. HUBSPOT UPDATES                                           │
│     • Update 15+ deal properties (AI analysis + MEDDIC)         │
│     • Create rich HTML note with related projects               │
│     • Include clickable links to case studies and contacts      │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  9. GOOGLE DOCS UPDATE                                          │
│     • Append full analysis to client summary document           │
│     • Include stakeholder details (not in HubSpot)              │
│     • Format with native Google Docs elements                   │
└─────────────────────────────────┬───────────────────────────────┘
                                  │
                                  ▼
┌─────────────────────────────────────────────────────────────────┐
│  10. LOGGING                                                    │
│     • Record execution to Google Sheets for debugging           │
│     • Full payload capture for troubleshooting                  │
└─────────────────────────────────────────────────────────────────┘
</pre>
<p><strong>Total processing time: 12-30 seconds</strong> from call completion to fully populated CRM.</p>

<hr>

<h2>The Hybrid AI Approach</h2>
<p>Why two AI models instead of one? Each excels at different tasks.</p>

<p><strong>Claude Sonnet 4.5</strong> handles nuanced analysis:</p>
<ul>
    <li>Understanding conversational context and subtext</li>
    <li>Extracting structured data from unstructured conversation</li>
    <li>Identifying stakeholders and their roles</li>
    <li>Generating contextually appropriate follow-up content</li>
</ul>

<p><strong>OpenAI GPT-4o-mini with vector search</strong> handles retrieval:</p>
<ul>
    <li>Semantic search against a library of past projects</li>
    <li>Matching current opportunity context to historical work</li>
    <li>Returning structured results with citations</li>
</ul>

<p>The key insight: <strong>Claude's structured output makes OpenAI's search dramatically better.</strong> Instead of searching with a raw 450-line transcript, we search with distilled context:</p>

<pre>
{
  "industry": "Healthcare",
  "projectType": "Salesforce to HubSpot Migration",
  "systemsMentioned": ["Salesforce", "HubSpot", "Marketo"],
  "complexitySignals": ["Multiple business units", "Custom objects", "Data migration"]
}
</pre>

<p>This approach yields 3-5x more relevant project matches compared to direct transcript search.</p>

<hr>

<h2>Results</h2>
<h3>Performance:</h3>
<ul>
    <li><strong>12-30 seconds</strong> end-to-end processing per call</li>
    <li><strong>~$0.10</strong> cost per analysis (Claude + OpenAI combined)</li>
    <li><strong>15+ HubSpot properties</strong> automatically populated</li>
    <li><strong>100% consistency</strong> in MEDDIC data capture</li>
</ul>

<h3>What gets automated:</h3>
<ul>
    <li>Call summaries that would take 10-15 minutes to write</li>
    <li>MEDDIC qualification that often got skipped</li>
    <li>Project research that required digging through old records</li>
    <li>Follow-up email drafts personalized to the actual conversation</li>
    <li>Stakeholder documentation with roles and involvement levels</li>
</ul>

<hr>

<h2>What I'd Do Differently</h2>
<p>If I were starting over, I'd consider:</p>
<ul>
    <li><strong>Processing status notifications</strong> — A Slack message when analysis completes would close the loop for reps</li>
    <li><strong>Richer vector store</strong> — More historical projects mean better matches; the system improves as the library grows</li>
    <li><strong>Enterprise scaling</strong> — For high-volume teams, PipeDream or Windmill could handle parallel processing and longer timeouts</li>
</ul>
<p>But the core architecture is solid. Sometimes the best solution is the one that ships and works—and this one does.</p>

<hr>
<p class="built-with"><em>Built with Google Apps Script, Claude Sonnet 4.5, OpenAI GPT-4o-mini, Gong API, and HubSpot API.</em></p>
`,
        'work-context': `
<h1>Context Transfer</h1>
<p class="subtitle">AI-Powered Deal Intelligence for Consulting Teams</p>
<p class="tagline"><em>Turning scattered sales context into living documents</em></p>

<p class="image-placeholder">[Screenshot: Main editor view showing document with inline AI suggestions]</p>

<hr>

<h2>The Problem</h2>
<p>At Aptitude 8, a HubSpot consulting firm, sales reps and solutions architects face a recurring challenge: keeping deal context documents up to date as information accumulates. Discovery calls happen. Emails fly back and forth. Requirements documents arrive. Meeting transcripts pile up.</p>

<p>The result? Context documents that are either:</p>
<ul>
    <li><strong>Perpetually stale</strong> — updated once, then forgotten</li>
    <li><strong>Scattered across tools</strong> — no single source of truth</li>
    <li><strong>Time-consuming to maintain</strong> — manual synthesis is tedious</li>
    <li><strong>Incomplete at handoff</strong> — delivery teams start projects with gaps</li>
</ul>

<p>Existing tools didn't fit the workflow. ChatGPT and Claude's web interfaces can't maintain a single document with incremental updates. Local files lack collaboration features. And Claude Code is too technical for non-developer sales teams.</p>

<p>I needed something purpose-built: a tool that could synthesize information from multiple sources into one evolving document, with human control over every change.</p>

<hr>

<h2>The Solution</h2>
<p>I'm building Context Transfer, a React-based web app that turns AI into a smart research assistant for deal documentation. The core innovation: <strong>Google Docs-style inline suggestions</strong> that let users accept or reject individual changes rather than dealing with AI output as a monolithic blob.</p>

<h3>Key design decisions:</h3>
<ul>
    <li><strong>Inline suggestions with rationale.</strong> Every AI-proposed change appears in context with an explanation of <em>why</em> it was suggested and <em>which asset</em> it came from.</li>
    <li><strong>Per-change granularity.</strong> Accept the new stakeholder name but reject the timeline update. Each suggestion is independent.</li>
    <li><strong>Section locking during processing.</strong> Edit freely in other sections while AI processes a new transcript — no waiting around.</li>
    <li><strong>Multi-format asset support.</strong> Transcripts, emails, notes, client documents — all processed into coherent updates.</li>
</ul>

<p class="image-placeholder">[Screenshot: Asset sidebar showing folder view with Transcripts, Notes, Emails, and Docs categories]</p>

<hr>

<h2>Features at a Glance</h2>
<ul>
    <li><strong>Deal Management</strong> — Switch between deals, each with its own context document and assets</li>
    <li><strong>Asset Timeline</strong> — View all inputs chronologically or grouped by type</li>
    <li><strong>AI Processing</strong> — Upload an asset, click "Process," and watch suggestions appear inline</li>
    <li><strong>Inline Suggestions</strong> — Green for additions, red for deletions, with accept/reject controls on each</li>
    <li><strong>Smart Editing</strong> — Sections unlock after accepting changes so you can refine the AI's work</li>
    <li><strong>Export</strong> — Copy to clipboard or export as Markdown for handoff</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<table>
    <tr><th>Layer</th><th>Technology</th></tr>
    <tr><td>Frontend</td><td>React 18, TypeScript, Vite</td></tr>
    <tr><td>Editor</td><td>TipTap (ProseMirror-based rich text)</td></tr>
    <tr><td>Backend</td><td>Supabase (PostgreSQL + Auth)</td></tr>
    <tr><td>AI</td><td>Claude API (Sonnet 3.5, 200K context)</td></tr>
    <tr><td>Styling</td><td>Custom CSS with Aptitude 8 design system</td></tr>
</table>
<p><strong>Why this stack?</strong> TipTap's decoration system is perfect for inline suggestions — each mark can carry metadata like rationale and source. Supabase provides instant backend infrastructure. And Claude's large context window means I can send the full document plus new assets without chunking.</p>

<hr>

<h2>The Core Innovation: Inline Suggestions</h2>
<p>Most AI writing tools present output as a complete replacement. You either take it or leave it. Context Transfer takes a different approach.</p>

<p>When you process a new asset (say, a discovery call transcript), the AI analyzes it against your existing document and generates <em>targeted suggestions</em>:</p>
<ul>
    <li><strong>Additions</strong> appear with a green highlight</li>
    <li><strong>Deletions</strong> show as red strikethrough</li>
    <li><strong>Modifications</strong> display both old and new versions</li>
</ul>

<p>Each suggestion includes:</p>
<ol>
    <li>The proposed content change</li>
    <li>A rationale explaining the reasoning</li>
    <li>The source asset that triggered it</li>
    <li>Independent accept/reject controls</li>
</ol>

<p>This means you can quickly scan AI suggestions, accept the ones that make sense, reject the noise, and refine anything that's close but not quite right. The document stays yours — AI just makes it easier to keep current.</p>

<hr>

<h2>Development Approach</h2>
<p>This project is being built iteratively in focused sessions, with clear phases:</p>
<ol>
    <li><strong>Foundation</strong> — Design system, component library, layout shell</li>
    <li><strong>Interactive Shell</strong> — Deal switching, asset management, local persistence</li>
    <li><strong>TipTap Integration</strong> — Rich text editor with custom suggestion decorations</li>
    <li><strong>Backend & AI</strong> — Supabase database, Claude API integration, processing flow</li>
    <li><strong>Polish</strong> — History tracking, error handling, demo preparation</li>
</ol>

<p>I'm using a real deal as the test case: a complex HubSpot-to-HubSpot migration with 700+ emails, 100+ forms, and multiple stakeholder calls. If the tool can handle that complexity, it can handle anything.</p>

<hr>

<h2>Projected Outcomes</h2>
<h3>For the POC demo:</h3>
<ul>
    <li>Asset upload to suggestion display in under 30 seconds</li>
    <li>Intuitive accept/reject workflow (&lt; 3 clicks per suggestion)</li>
    <li>Clean Markdown export for handoff documentation</li>
    <li>C-level stakeholders understand value proposition in a 5-minute demo</li>
</ul>

<h3>Expected long-term impact:</h3>
<ul>
    <li><strong>Reduced document maintenance time</strong> — AI handles synthesis, humans handle judgment</li>
    <li><strong>Better handoff quality</strong> — Delivery teams start with comprehensive, current context</li>
    <li><strong>Improved deal visibility</strong> — Track what changed and why across the sales cycle</li>
    <li><strong>Scalable knowledge capture</strong> — Every call and email contributes to the living document</li>
</ul>

<hr>

<h2>What I'd Do Differently</h2>
<p>If starting over, I'd prototype the TipTap suggestion system earlier — it's the core UX innovation and carries the most technical risk. I'd also consider a browser extension for capturing emails directly rather than copy-paste.</p>

<p>But honestly? Starting with a real, complex deal as the test case was the right call. It forced practical design decisions from day one.</p>

<hr>
<p class="built-with"><em>Built with React, TipTap, Supabase, and Claude API.</em></p>
`,
        'work-daily-dose': `
<h1>Daily Dose</h1>
<p class="subtitle">A Fitness Challenge Platform for A8</p>
<p class="tagline"><em>Turning workplace wellness into a team sport</em></p>

<p class="image-placeholder">[Screenshot: Today page showing workout card with exercises and "Complete Workout" button]</p>

<hr>

<h2>The Problem</h2>
<p>A8, a creative agency, wanted to boost employee wellness through fitness challenges. The catch? Off-the-shelf fitness apps felt disconnected from company culture, and tracking participation via spreadsheets was a recipe for low engagement and admin headaches.</p>

<p>They needed something that felt native to how they already worked—lightweight, team-oriented, and zero friction.</p>

<hr>

<h2>The Solution</h2>
<p>I led the development of Daily Dose, a custom fitness platform that turns workouts into a team sport. The core idea: make logging a workout as easy as tapping a button, then let friendly competition do the rest.</p>

<h3>Key design decisions:</h3>
<ul>
    <li><strong>No passwords, no app downloads.</strong> Users bookmark a personalized URL and they're in.</li>
    <li><strong>Team-based challenges</strong> with collective goals—everyone contributes to hitting the target together.</li>
    <li><strong>Year-round flexibility.</strong> Log workouts during challenges or anytime in between.</li>
    <li><strong>AI-powered variety.</strong> Integrated Claude API generates fresh workouts on demand.</li>
</ul>

<p class="image-placeholder">[Screenshot: Team Progress page with goal progress bar and team workout totals]</p>

<hr>

<h2>Features at a Glance</h2>
<ul>
    <li><strong>Today's Workout</strong> — See the prescribed workout and complete it with one tap</li>
    <li><strong>Team Leaderboards</strong> — Track your team's contribution to the collective goal</li>
    <li><strong>Personal Calendar</strong> — Browse your entire workout history across all challenges</li>
    <li><strong>AI Workout Generator</strong> — Get custom workouts based on time, difficulty, and equipment</li>
    <li><strong>Admin Dashboard</strong> — Manage email campaigns, view analytics, and build workouts visually</li>
</ul>

<p class="image-placeholder">[Screenshot: Challenge Analytics dashboard showing trend chart and team performance]</p>

<hr>

<h2>Tech Stack</h2>
<table>
    <tr><th>Layer</th><th>Technology</th></tr>
    <tr><td>Frontend</td><td>HTML, CSS, JavaScript (GitHub Pages)</td></tr>
    <tr><td>Backend</td><td>Google Apps Script</td></tr>
    <tr><td>Database</td><td>Google Sheets</td></tr>
    <tr><td>AI</td><td>Claude API (Haiku 4.5)</td></tr>
</table>
<p><strong>The beauty of this stack:</strong> zero server costs, zero subscriptions, and deployments that take 30 seconds. Everything runs on infrastructure the agency already had access to.</p>

<hr>

<h2>Development Approach</h2>
<p>This project came together over several weeks in focused 1-2 hour sessions. Two things made that possible:</p>
<ol>
    <li><strong>Domain expertise.</strong> My background as a trainer meant I understood exactly what the solution needed to do—no spec required.</li>
    <li><strong>AI-assisted development.</strong> Using Claude for rapid iteration ("vibe coding") let me move from idea to working feature fast, then refine based on real feedback.</li>
</ol>
<p>The build progressed iteratively: core workout logging first, then team features, then AI workouts, then a full admin dashboard with email campaigns and analytics.</p>

<hr>

<h2>Results</h2>
<h3>October 2025 Challenge:</h3>
<ul>
    <li><strong>28 active participants</strong> across 6 teams</li>
    <li><strong>300+ workouts logged</strong> in a single month</li>
    <li><strong>~11 workouts per person</strong> on average</li>
</ul>
<p>Beyond the numbers, the platform replaced manual spreadsheet tracking with a proper admin toolkit—email campaigns, challenge analytics, workout scheduling—all accessible from a web dashboard.</p>

<hr>

<h2>Benefits to A8</h2>
<ul>
    <li><strong>Employee wellness</strong> without enterprise software costs</li>
    <li><strong>Team building</strong> through friendly competition</li>
    <li><strong>Participation data</strong> for tracking engagement over time</li>
    <li><strong>Scalability</strong> for future challenges with different formats</li>
    <li><strong>Built on familiar tools</strong> (Google Suite) with zero new subscriptions</li>
</ul>

<hr>

<h2>What I'd Do Differently</h2>
<p>If I were starting over, I'd consider adding push notifications for workout reminders (currently handled via Slack integration) and exploring a simple leaderboard animation for when teams hit milestones. But honestly? The lean approach worked. Sometimes the best product is the one people actually use.</p>

<hr>
<p class="built-with"><em>Built with GitHub Pages, Google Apps Script, and Claude API.</em></p>
`,
        'work-scoping': `
<h1>Scoping Tool</h1>
<p class="subtitle">A Custom CPQ Platform for Aptitude 8</p>
<p class="tagline"><em>Transforming spreadsheet chaos into professional, shareable proposals</em></p>

<p class="image-placeholder">[Screenshot: Sales proposal page showing collapsible workstream sections with customer stories and investment totals]</p>

<hr>

<h2>The Problem</h2>
<p>Aptitude 8, a growing HubSpot Partner Agency, had a scoping problem. Solutions Architects were spending hours on every proposal—not on scoping the work itself, but on wrestling with Google Sheets formatting, copying data into documents, and praying no one accidentally exposed hidden pricing tabs to clients.</p>

<p>The reality was messy: 15+ Google Sheets files with complex formulas, hidden rows containing internal calculations, and constant permission anxiety. Every proposal sent risked exposing internal data. Every scope change during delivery meant more spreadsheet gymnastics.</p>

<p>They needed something that felt like a real CPQ tool, but built on infrastructure they already had—no new subscriptions, no migration headaches.</p>

<hr>

<h2>The Solution</h2>
<p>I led the development of a custom CPQ platform that transforms Google Sheets data into three distinct client-facing applications, all powered by Google Apps Script.</p>

<h3>Key design decisions:</h3>
<ul>
    <li><strong>Google Sheets as the source of truth.</strong> SAs continue working where they're comfortable—the tool just presents it beautifully.</li>
    <li><strong>Zero-permission sharing.</strong> Clients see branded proposals via URL, never the underlying spreadsheet.</li>
    <li><strong>Three-domain architecture.</strong> Sales proposals, delivery change orders, and internal dashboards—each optimized for its audience.</li>
    <li><strong>Flexible display modes.</strong> Move from Draft → Hide Financials → Show Ranges → Final Presentation as conversations progress.</li>
</ul>

<p class="image-placeholder">[Screenshot: Multi-mode display showing the same proposal in different modes]</p>

<hr>

<h2>System Architecture</h2>
<p>The platform uses a <strong>multi-page web app architecture</strong> with three distinct domains:</p>

<h3>1. Sales Page (CPQ Tool)</h3>
<p>Client-facing proposal generator that transforms the SalesInput sheet into branded, interactive proposals.</p>
<ul>
    <li><strong>6 display modes</strong> from Draft through Archived</li>
    <li><strong>Two-tier hierarchy:</strong> Customer Stories grouped by Workstreams</li>
    <li><strong>Collapsible sections</strong> with hours and investment rollups</li>
    <li><strong>PDF generation</strong> via Google Docs API (zero external costs)</li>
    <li><strong>Rich text support</strong> including hyperlinks in assumptions</li>
</ul>

<h3>2. Delivery Page (Change Order Tracker)</h3>
<p>Client-facing scope evolution tracker using a ledger-based approach to hours.</p>
<ul>
    <li><strong>Ledger accounting:</strong> Each row is a transaction (positive or negative hours)</li>
    <li><strong>Visual badges:</strong> "Sold", "Story Revision", "New Story" indicators</li>
    <li><strong>Change order summary:</strong> OG scope vs. Current scope with cumulative tracking</li>
    <li><strong>Automated workflows:</strong> Prep sheets, formula application, URL generation</li>
</ul>

<h3>3. Dashboard Page (Internal Metrics)</h3>
<p>Internal delivery dashboard for project managers and leadership.</p>
<ul>
    <li>Change order tracking and health metrics</li>
    <li>Project resource visibility</li>
    <li>Performance analytics</li>
</ul>

<p class="image-placeholder">[Screenshot: Delivery page showing change order summary with OG vs Current scope comparison]</p>

<hr>

<h2>Features at a Glance</h2>
<ul>
    <li><strong>Proposal Generator</strong> — Transform spreadsheet data into branded proposals with one click</li>
    <li><strong>Display Mode Control</strong> — 6 modes from Draft to Archived for different sales stages</li>
    <li><strong>Change Order Tracking</strong> — Ledger-based system shows exactly how scope evolved</li>
    <li><strong>PDF Export</strong> — Native Google Docs generation, no third-party APIs</li>
    <li><strong>Automated Prep</strong> — One-click transition from sales to delivery sheets</li>
    <li><strong>AI Research Assistant</strong> — Claude-powered scope research for customer stories</li>
    <li><strong>Custom Menu System</strong> — All operations accessible from Google Sheets toolbar</li>
</ul>

<hr>

<h2>Tech Stack</h2>
<table>
    <tr><th>Layer</th><th>Technology</th></tr>
    <tr><td>Frontend</td><td>HTML, CSS, JavaScript (native web app)</td></tr>
    <tr><td>Backend</td><td>Google Apps Script</td></tr>
    <tr><td>Database</td><td>Google Sheets (SalesInput, DeliveryInput, Config sheets)</td></tr>
    <tr><td>Hosting</td><td>Google Apps Script Web App</td></tr>
    <tr><td>PDF</td><td>Google Docs API</td></tr>
    <tr><td>AI</td><td>Claude API (Scope Research Assistant)</td></tr>
</table>
<p><strong>The beauty of this stack:</strong> zero server costs, zero new subscriptions, and deployments that take 30 seconds. Everything runs on infrastructure the agency already pays for—Google Workspace.</p>

<hr>

<h2>Results</h2>
<h3>For Solutions Architects:</h3>
<ul>
    <li>Proposals that took 60+ minutes of formatting now generate instantly</li>
    <li>No more copy-pasting between Sheets and Docs</li>
    <li>Confident sharing without permission anxiety</li>
</ul>

<h3>For Delivery Teams:</h3>
<ul>
    <li>Clear change order history visible to clients</li>
    <li>Automated transitions from sales to delivery</li>
    <li>Formulas that just work, even when columns move</li>
</ul>

<h3>For Clients:</h3>
<ul>
    <li>Professional, branded proposals instead of spreadsheet exports</li>
    <li>Transparent scope evolution during delivery</li>
    <li>Mobile-friendly viewing anywhere</li>
</ul>

<h3>For Leadership:</h3>
<ul>
    <li>Structured data enables retrospective analysis</li>
    <li>Consistent proposal quality across all SAs</li>
    <li>Foundation for service library improvements</li>
</ul>

<hr>

<h2>What I'd Do Differently</h2>
<p>If I were starting over, I'd consider a few refinements:</p>
<ul>
    <li><strong>Earlier abstraction of the orchestration layer.</strong> The multi-page routing pattern that now cleanly separates Sales/Delivery/Dashboard domains would have been valuable from day one.</li>
    <li><strong>More aggressive formula validation.</strong> The header-based column detection system that makes everything resilient to reordering was a late addition—building that pattern in from the start would have prevented several debugging sessions.</li>
    <li><strong>Push notifications for change orders.</strong> Currently clients revisit the delivery URL to see updates. A lightweight email notification when change orders are processed would close the loop.</li>
</ul>
<p>But honestly? The iterative approach worked. Building what was needed when it was needed, rather than over-engineering upfront, kept the project moving and the feedback loops tight. Sometimes the best architecture is the one that emerges from real use.</p>

<hr>
<p class="built-with"><em>Built with Google Apps Script, Google Sheets, and Claude API.</em></p>
`,
        'work-contact': `{
    "email": "martin@example.com",
    "linkedin": "linkedin.com/in/martinrittenberry",
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
