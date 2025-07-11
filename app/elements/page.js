'use client';
import styles from "./page.module.css";

export default function Elements() {

    return (
        <div className="p-5">
            <div className="flex-column">
                <span className="text-3xl text-accent text-glow">Elements</span>
                <p>Aurora-Fusion provides all necessary web elements tweaked to match the base theme and provides consistent user experieence. Below is te list of different elements present in Aurora-Fusion and code snippet on how you can use them as per your requirements. All these elements are re-configurable and designed do support dark backgrounds.</p>

                <h1>Panels</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <div className="panel d-flex align-items-center mx-0">
                            Welcome to Orbital Space Station
                        </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="panel">
    Welcome to Orbital Space Station
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                
                <h1>Typography</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                
                <span className="text-xl text-accent">1. Headers</span>
                <p>Aurora-Fusion supports all types of headings. Additionally you can use <code className="code">.h1</code> to  <code className="code">.h6</code> classes as well to specify header stylings to component. By default all headings will be in capitalized (Upper cased) format.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <h1>Forge Your Legacy Among the Stars</h1>
                            <h2>Forge Your Legacy Among the Stars</h2>
                            <h3>Forge Your Legacy Among the Stars</h3>
                            <h4>Forge Your Legacy Among the Stars</h4>
                            <h5>Forge Your Legacy Among the Stars</h5>
                            <h6>Forge Your Legacy Among the Stars</h6>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<h1>Forge Your Legacy Among the Stars</h1>
<h2>Forge Your Legacy Among the Stars</h2>
<h3>Forge Your Legacy Among the Stars</h3>
<h4>Forge Your Legacy Among the Stars</h4>
<h5>Forge Your Legacy Among the Stars</h5>
<h6>Forge Your Legacy Among the Stars</h6>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">2. Paragraph</span>
                <p>Styling for common inline HTML5 paragraph text elements.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <p>In the vast darkness of New Eden, power is measured not by strength alone, but by the alliances you forge and the empires you dare to build.</p>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<p>In the vast darkness of New Eden, power is measured not by strength alone, 
but by the alliances you forge and the empires you dare to build.</p>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">3. Code</span>
                <p>Styling inline snippets and code blocks is essential for clear and accessible technical documentation. By applying consistent formatting and syntax highlighting, you can make technical references stand out, improve readability, and help developers quickly grasp important details. This section explains and demonstrates how to apply effective, visually appealing styles to technical text elements.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <p>Align to the sun and prepare for immediate jump on my mark.<br/> 
                            Set <code className="code">warp : 154.125 0.242 35.120</code> as your next coordinates.</p>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<p>Align to the sun and prepare for immediate jump on my mark. 
Set <code class="code">warp : 154.125 0.242 35.120</code> as your next coordinates.</p>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">4. Text</span>
                <p>Choosing consistent text sizes helps establish a clear visual hierarchy and improves readability across your interface. By applying a well-defined scale for headings, subheadings, and body text, you ensure that users can quickly understand content relationships and navigate information smoothly. This section demonstrates how to apply and showcase various text sizes effectively.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <h3>Sizes</h3>
                        <span className="text-xs">Initiate jump sequence — all systems are green.</span>
                        <span className="text-sm">Initiate jump sequence — all systems are green.</span>
                        <span className="text-lg">Initiate jump sequence — all systems are green.</span>
                        <span className="text-xl">Initiate jump sequence — all systems are green.</span>
                        <span className="text-2xl">Initiate jump sequence — all systems are green.</span>
                        <span className="text-3xl">Initiate jump sequence — all systems are green.</span>
                        <span className="text-4xl">Initiate jump sequence — all systems are green.</span>
                        <h3>Weights</h3>
                        <span className="text-light">Initiate jump sequence — all systems are green.</span>
                        <span className="text-normal">Initiate jump sequence — all systems are green.</span>
                        <span className="text-medium">Initiate jump sequence — all systems are green.</span>
                        <span className="text-bold">Initiate jump sequence — all systems are green.</span>
                        <h3>Colors</h3>
                        <span className="text-success">Initiate jump sequence — all systems are green.</span>
                        <span className="text-warning">Initiate jump sequence — all systems are green.</span>
                        <span className="text-danger">Initiate jump sequence — all systems are green.</span>
                        <span className="text-neutral">Initiate jump sequence — all systems are green.</span>
                        <h3>Glow</h3>
                        <span className="text-glow">Initiate jump sequence — all systems are green.</span>
                        <h3>Sub-Text</h3>
                        <span className="text-subbed">Initiate jump sequence — all systems are green.</span>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<h3>Sizes</h3>
<span class="text-xs">Initiate jump sequence — all systems are green.</span>
<span class="text-sm">Initiate jump sequence — all systems are green.</span>
<span class="text-lg">Initiate jump sequence — all systems are green.</span>
<span class="text-xl">Initiate jump sequence — all systems are green.</span>
<span class="text-2xl">Initiate jump sequence — all systems are green.</span>
<span class="text-3xl">Initiate jump sequence — all systems are green.</span>
<span class="text-4xl">Initiate jump sequence — all systems are green.</span>


<h3>Weights</h3>
<span class="text-light">Initiate jump sequence — all systems are green.</span>
<span class="text-normal">Initiate jump sequence — all systems are green.</span>
<span class="text-medium">Initiate jump sequence — all systems are green.</span>
<span class="text-bold">Initiate jump sequence — all systems are green.</span>


<h3>Colors</h3>
<span class="text-success">Initiate jump sequence — all systems are green.</span>
<span class="text-warning">Initiate jump sequence — all systems are green.</span>
<span class="text-danger">Initiate jump sequence — all systems are green.</span>
<span class="text-neutral">Initiate jump sequence — all systems are green.</span>


<h3>Glow</h3>
<span class="text-glow">Initiate jump sequence — all systems are green.</span>


<h3>Sub-Text</h3>
<span class="text-subbed">Initiate jump sequence — all systems are green.</span>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">5. Notes</span>
                <p>Notes provide important context or reminders within your content. Use them to draw attention to critical details without disrupting the flow of information.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <p className="note">Update : Shield calibration completed</p>
                            <p className="note note-info">Info : Shield calibration completed</p>
                            <p className="note note-success">Success : Target secured and systems stable.</p>
                            <p className="note note-warning">Warning : Check your navigation systems before initiating warp.</p>
                            <p className="note note-danger">Alert : Shields compromised, hull damage imminent</p>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<p class="note">Update : Shield calibration completed</p>
<p class="note note-info">Info : Shield calibration completed</p>
<p class="note note-success">Success : Target secured and systems stable.</p>
<p class="note note-warning">Warning : Check your navigation systems before initiating warp.</p>
<p class="note note-danger">Alert : Shields compromised, hull damage imminent</p>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Buttons Styles</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                
                <span className="text-xl text-accent">1. Button</span>
                <p>Buttons provide clear, actionable triggers for users to interact with your interface. Consistent styling and intuitive placement ensure actions are easy to find and perform.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <div className="flex-row mb-2">
                                <button className="button">Deploy</button>
                            </div>
                            <div className="flex-row mb-2">
                                <button className="button button-info">Primary</button>
                                <button className="button button-success">Success</button>
                                <button className="button button-warning">Warning</button>
                                <button className="button button-danger">Error</button>
                            </div>
                            <div className="flex-row mb-2">
                                <button className="button button-outline-info">Primary</button>
                                <button className="button button-outline-success">Success</button>
                                <button className="button button-outline-warning">Warning</button>
                                <button className="button button-outline-danger">Error</button>
                            </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="flex-row mb-2">
    <button class="button">Deploy</button>
</div>
<div class="flex-row mb-2">
    <button class="button button-info">Primary</button>
    <button class="button button-success">Success</button>
    <button class="button button-warning">Warning</button>
    <button class="button button-danger">Error</button>
</div>
<div class="flex-row mb-2">
    <button class="button button-outline-info">Primary</button>
    <button class="button button-outline-success">Success</button>
    <button class="button button-outline-warning">Warning</button>
    <button class="button button-outline-danger">Error</button>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">2. Button Group</span>
                <p>Button groups organize related actions into a single, cohesive interface element. They help maintain visual consistency and improve usability by grouping similar tasks together.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <div className="button-group">
                                <button className="button" title="Overview">
                                    <i className="fas fa-folder"></i>
                                </button>
                                <button className="button" title="Fleet">
                                    <i className="fa-regular fa-comment-dots"></i>
                                </button>
                                <button className="button" title="Map">
                                    <i className="fa-regular fa-map"></i>
                                </button>
                            </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{` <div class="button-group">
    <button class="button" title="Overview">
        <i class="fas fa-folder"></i>
    </button>
    <button class="button" title="Fleet">
        <i class="fa-regular fa-comment-dots"></i>
    </button>
    <button class="button" title="Map">
        <i class="fa-regular fa-map"></i>
    </button>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">3. Close Button</span>
                <p>Buttons provide clear, actionable triggers for users to interact with your interface. Consistent styling and intuitive placement ensure actions are easy to find and perform.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <button className="button-close" aria-label="Close">&times;</button>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<button class="button-close" aria-label="Close">&times;</button>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Form Controls</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <span className="text-xl text-accent">1. Input</span>
                <p>Buttons provide clear, actionable triggers for users to interact with your interface. Consistent styling and intuitive placement ensure actions are easy to find and perform.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <label htmlFor="destination">Destination</label>
                            <input className="input-sm" type="text" id="destination" placeholder="Enter coordinates or system name"/>
                            <input type="text" id="destination" placeholder="Enter coordinates or system name"/>
                            <input className="input-lg" type="text" id="destination" placeholder="Enter coordinates or system name"/>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<label for="destination">Destination</label>
<input class="input-sm" type="text" placeholder="Enter coordinates or system name"/>
<input type="text" placeholder="Enter coordinates or system name"/>
<input class="input-lg" type="text" placeholder="Enter coordinates or system name"/>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">2. Select Dropdowns</span>
                <p>Buttons provide clear, actionable triggers for users to interact with your interface. Consistent styling and intuitive placement ensure actions are easy to find and perform.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <label htmlFor="ship-type">Ship Type</label>
                        <select className="select-sm">
                            <option>Frigate</option>
                            <option>Destroyer</option>
                            <option>Cruiser</option>
                            <option>Battlecruiser</option>
                            <option>Battleship</option>
                        </select>
                        <select>
                            <option>Frigate</option>
                            <option>Destroyer</option>
                            <option>Cruiser</option>
                            <option>Battlecruiser</option>
                            <option>Battleship</option>
                        </select>
                        <select className="select-lg">
                            <option>Frigate</option>
                            <option>Destroyer</option>
                            <option>Cruiser</option>
                            <option>Battlecruiser</option>
                            <option>Battleship</option>
                        </select>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<select class="select-sm">
    <option>Frigate</option>
    <option>Destroyer</option>
    <option>Cruiser</option>
    <option>Battlecruiser</option>
    <option>Battleship</option>
</select>
<select>
    <option>Frigate</option>
    <option>Destroyer</option>
    <option>Cruiser</option>
    <option>Battlecruiser</option>
    <option>Battleship</option>
</select>
<select class="select-lg">
    <option>Frigate</option>
    <option>Destroyer</option>
    <option>Cruiser</option>
    <option>Battlecruiser</option>
    <option>Battleship</option>
</select>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">3. Checkbox</span>
                <p>Buttons provide clear, actionable triggers for users to interact with your interface. Consistent styling and intuitive placement ensure actions are easy to find and perform.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <label className="checkbox">
                                <input type="checkbox" />
                                <span className="checkmark"></span>
                                Enable Warp Drive
                            </label>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<label class="checkbox">
    <input type="checkbox" />
    <span class="checkmark"></span>
    Enable Warp Drive
</label>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">3. Range</span>
                <p>Buttons provide clear, actionable triggers for users to interact with your interface. Consistent styling and intuitive placement ensure actions are easy to find and perform.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <div className="range">
                                <label htmlFor="eve-range" className="range-label">Thruster Output</label>
                                <input type="range" id="eve-range" className="range-control" min="0" max="100" defaultValue={50}   />
                                <div className="range-value">Value: <span id="eve-range-value">50</span>%</div>
                            </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="range">
    <label for="eve-range" class="range-label">Thruster Output</label>
    <input type="range" id="eve-range" class="range-control" min="0" max="100" value="50"/>
    <div class="range-value">Value: <span id="eve-range-value">50</span>%</div>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Table</h1>
                <p>Tables present structured data in a clear, organized format, making it easy to compare and analyze information. Consistent styling ensures tables remain readable and accessible across devices.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column" style={{width : '-webkit-fill-available'}}>
                        <span><b>Preview : </b></span>
                        <table className="table">
                            <thead>
                            <tr>
                                <th>Pilot</th>
                                <th>Ship</th>
                                <th>Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>CapsuleerX</td>
                                <td>Rifter</td>
                                <td className="text-success">Online</td>
                            </tr>
                            <tr>
                                <td>NovaPrime</td>
                                <td>Drake</td>
                                <td className="text-warning">Offline</td>
                            </tr>
                            <tr>
                                <td>VoidHunter</td>
                                <td>Maller</td>
                                <td className="text-danger">Idle</td>
                            </tr>
                            <tr>
                                <td>VoidHunter</td>
                                <td>Maller</td>
                                <td className="text-neutral">Idle</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<table class="table">
  <thead>
    <tr>
      <th>Pilot</th>
      <th>Ship</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CapsuleerX</td>
      <td>Rifter</td>
      <td class="text-success">Online</td>
    </tr>
    <tr>
      <td>NovaPrime</td>
      <td>Drake</td>
      <td class="text-warning">Offline</td>
    </tr>
    <tr>
      <td>VoidHunter</td>
      <td>Maller</td>
      <td class="text-danger">Idle</td>
    </tr>
    <tr>
      <td>VoidHunter</td>
      <td>Maller</td>
      <td class="text-neutral">Idle</td>
    </tr>
  </tbody>
</table>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <p>By default, text will be aligned to right. You can use additional classes <code className="code">.table-left</code> and <code className="code">.table-center</code> to align the text as per requirements. Below is the useage example.</p>
                <pre><code className="language-html">
{`<table class="table table-left">
<table class="table table-center">`}
                </code></pre>

                <h1>Badge</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <span className="badge">Default</span>
                        <span className="badge badge-info">Active</span>
                        <span className="badge badge-success">Online</span>
                        <span className="badge badge-warning">Offline</span>
                        <span className="badge badge-danger">Error</span>
                        <span className="badge badge-neutral">Unknown</span>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<span class="badge">Default</span>
<span class="badge badge-info">Active</span>
<span class="badge badge-success">Online</span>
<span class="badge badge-warning">Offline</span>
<span class="badge badge-danger">Error</span>
<span class="badge badge-neutral">Unknown</span>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Card</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                                <div className="card">
                                    <div className="card-header">
                                        Ship: Rifter
                                        <span className="badge badge-success">Online</span>
                                    </div>

                                    <div className="card-content">
                                        <p><strong>Pilot:</strong> Capsuleer X</p>
                                        <p>
                                        <strong>Location:</strong> Jita IV - Moon 4 - Caldari Navy Assembly
                                        Plant
                                        </p>
                                        <p>
                                        <strong>Status:</strong>
                                        <span className="text-success">Operational</span>
                                        </p>
                                    </div>

                                    <div className="card-footer">Last updated: 2 minutes ago</div>
                                </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="card">
    <div class="card-header">
        Ship: Rifter
        <span class="badge badge-success">Online</span>
    </div>

    <div class="card-content">
        <p><strong>Pilot:</strong> Capsuleer X</p>
        <p>
        <strong>Location:</strong> Jita IV - Moon 4 - Caldari Navy Assembly
        Plant
        </p>
        <p>
        <strong>Status:</strong>
        <span class="text-success">Operational</span>
        </p>
    </div>

    <div class="card-footer">Last updated: 2 minutes ago</div>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Alerts</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <div className="alert">Location : System-2 | Crane rift - Martow </div>
                        <div className="alert alert-info">Welcome to Orbital station Moon 4</div>
                        <div className="alert alert-success">✔ Operation completed successfully.</div>
                        <div className="alert alert-warning">⚠ Caution: Low fuel levels detected.</div>
                        <div className="alert alert-error">✖ Critical failure: Ship core breach!</div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="alert">Location : System-2 | Crane rift - Martow </div>
<div class="alert alert-info">Welcome to Orbital station Moon 4</div>
<div class="alert alert-success">✔ Operation completed successfully.</div>
<div class="alert alert-warning">⚠ Caution: Low fuel levels detected.</div>
<div class="alert alert-error">✖ Critical failure: Ship core breach!</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Breadcrumb</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <ul className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Fleet</a></li>
                            <li><a href="#">Operations</a></li>
                            <li className="current">Deployment</li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<ul class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Fleet</a></li>
    <li><a href="#">Operations</a></li>
    <li class="current">Deployment</li>
</ul>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Toast</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <div className="toast">
                          <span className="toast-message">Mission completed successfully.</span>
                          <button className="toast-close" aria-label="Close">&times;</button>
                        </div>
                        <div className="toast toast-info">
                          <span className="toast-message">Mission completed successfully.</span>
                          <button className="toast-close" aria-label="Close">&times;</button>
                        </div>
                        <div className="toast toast-success">
                          <span className="toast-message">Mission completed successfully.</span>
                          <button className="toast-close" aria-label="Close">&times;</button>
                        </div>
                        <div className="toast toast-warning">
                          <span className="toast-message">Mission completed successfully.</span>
                          <button className="toast-close" aria-label="Close">&times;</button>
                        </div>
                        <div className="toast toast-danger">
                          <span className="toast-message">Mission completed successfully.</span>
                          <button className="toast-close" aria-label="Close">&times;</button>
                        </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="toast">
  <span class="toast-message">Mission completed successfully.</span>
  <button class="toast-close" aria-label="Close">&times;</button>
</div>
<div class="toast toast-info">
  <span class="toast-message">Mission completed successfully.</span>
  <button class="toast-close" aria-label="Close">&times;</button>
</div>
<div class="toast toast-success">
  <span class="toast-message">Mission completed successfully.</span>
  <button class="toast-close" aria-label="Close">&times;</button>
</div>
<div class="toast toast-warning">
  <span class="toast-message">Mission completed successfully.</span>
  <button class="toast-close" aria-label="Close">&times;</button>
</div>
<div class="toast toast-danger">
  <span class="toast-message">Mission completed successfully.</span>
  <button class="toast-close" aria-label="Close">&times;</button>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Progress</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column" style={{width : '-webkit-fill-available'}}>
                        <span><b>Preview : </b></span>
                        <div className="progress">
                            <div className="progress-fill" style={{width: '70%'}}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="progress">
    <div class="progress-fill" style="width: 70%"></div>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Quotes</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column" style={{width : '-webkit-fill-available'}}>
                        <span><b>Preview : </b></span>
                        <blockquote className="quote">
                          <div className="quote-icon">✦</div>
                          <div className="quote-body">
                            <div className="quote-content">
                              "Capsuleers don't just fly ships, they become them."
                            </div>
                            <div className="quote-footer">— DED Records, YC122</div>
                          </div>
                        </blockquote>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<blockquote class="quote">
  <div class="quote-icon">✦</div>
  <div class="quote-body">
    <div class="quote-content">
      "Capsuleers don’t just fly ships, they become them."
    </div>
    <div class="quote-footer">— DED Records, YC122</div>
  </div>
</blockquote>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Nav Bar</h1>
                <p>By default navbar will use space between to separate brandd and navbar links as shown in 1st example.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column" style={{width : '-webkit-fill-available'}}>
                        <span><b>Preview : </b></span>
                        <nav className="navbar">
                            <div className="nav-brand">NEOCOM</div>
                            <ul className="nav-links">
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Fleet</a></li>
                                <li><a href="#">Map</a></li>
                                <li><a href="#">Fittings</a></li>
                            </ul>
                        </nav>
                        <nav class="navbar navbar-left">
                            <div class="nav-brand me-4">NEOCOM</div>
                            <ul class="nav-links">
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Fleet</a></li>
                                <li><a href="#">Map</a></li>
                                <li><a href="#">Fittings</a></li>
                            </ul>
                        </nav>
                        <nav class="navbar navbar-right">
                            <ul class="nav-links">
                                <li><a href="#">Overview</a></li>
                                <li><a href="#">Fleet</a></li>
                                <li><a href="#">Map</a></li>
                                <li><a href="#">Fittings</a></li>
                            </ul>
                            <div class="nav-brand ms-4">NEOCOM</div>
                        </nav>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<nav class="navbar">
    <div class="nav-brand">NEOCOM</div>
    <ul class="nav-links">
        <li><a href="#">Overview</a></li>
        <li><a href="#">Fleet</a></li>
        <li><a href="#">Map</a></li>
        <li><a href="#">Fittings</a></li>
    </ul>
</nav>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <p>You can define alignment as shown above by using <code className="code">.navbar-left</code> & <code className="code">.navbar-right</code> classes as shown below. Also, nav bars will have default background color rovided in theme. if you want to remove backround color, you can use <code className="code">.navbar-nobg</code> to make nav bar transparant.</p>
                <pre><code className="language-html">
{`<nav class="navbar navbar-left">">
<nav class="navbar navbar-right">
<nav class="navbar navbar-nobg">`}
                </code></pre>
                <span className="note">NOTE : Placenemt of items in navbar iss subjected to adding those items in navbar code</span>

                <h1>Lists</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                
                <span className="text-xl text-accent">1. Default List</span>
                <p>By default there will be no bullets for list item. <code className="code">.list-bullet</code> for default bullet style (square bullets). Bullets will have <b>accent</b> color by default.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <ul className="list">
                              <li className="list-item">Astero Covert Ops</li>
                              <li className="list-item">Stratios Recon Vessel</li>
                              <li className="list-item">Nestor Battleship</li>
                            </ul>
                            <ul className="list list-bullet">
                              <li className="list-item">Astero Covert Ops</li>
                              <li className="list-item">Stratios Recon Vessel</li>
                              <li className="list-item">Nestor Battleship</li>
                            </ul>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<ul class="list">
  <li class="list-item">Astero Covert Ops</li>
  <li class="list-item">Stratios Recon Vessel</li>
  <li class="list-item">Nestor Battleship</li>
</ul>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <p>You can also use classes <code className="code">.list-bullet-circle</code> & <code className="code">.list-bullet-square</code> to define the type of bullets you want to use. </p>
                <pre><code className="language-html">
{`<ul class="list list-bullet-circle">
<ul class="list list-bullet-square">`}
                </code></pre>
                <span className="text-xl text-accent">2. Hover List</span>
                <p>You can add hover effect to list item just by adding <code className="code">.list-item-hover</code> class. </p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                            <ul className="list">
                                <li className="list-item list-item-hover">Astero Covert Ops</li>
                                <li className="list-item list-item-hover">Stratios Recon Vessel</li>
                                <li className="list-item list-item-hover">Nestor Battleship</li>
                            </ul>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<ul class="list">
    <li class="list-item list-item-hover">Astero Covert Ops</li>
    <li class="list-item list-item-hover">Stratios Recon Vessel</li>
    <li class="list-item list-item-hover">Nestor Battleship</li>
</ul>`}
                            </code></pre>
                        </div>
                    </div>
                </div>


                <h1>Code Block</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <pre className="code-block"><code>
{`function activateWarpDrive() 
{
    console.log("Warp drive active.");
}`}
          </code></pre>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<pre class="code-block"><code>
function activateWarpDrive() 
{
    console.log("Warp drive active.");
}
</code></pre>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Links</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column">
                        <span><b>Preview : </b></span>
                        <a href="https://example.com" className="link" target="_blank" rel="noopener noreferrer"> Capsuleer Profile </a>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<a href="https://example.com" class="link" target="_blank" rel="noopener noreferrer"> Capsuleer Profile </a>`}
                            </code></pre>
                        </div>
                    </div>
                </div>

                <h1>Tabs</h1>
                <p>Panels are reusable containers for grouping related interface elements and content within a distinct, visually separated block. They provide a flexible, consistent way to present information while maintaining clarity and hierarchy in a futuristic dark theme. Use panels to structure dashboards, sidebars, or modular content layouts for an intuitive and cohesive user experience.</p>
                
                <span className="note"><b>NOTE</b> : For tabs to work properly and to maintain simplicity, Aurora-Fusion will only provide ability to create UI elements. You will need to add below code block modified as per your requirements.
                    <pre className="code-block"><code>
{`/*-----------------------
DO NOT CHANGE BELOW CLASS CONTENTS
-----------------------*/
.tab-content
{
  display: none;
}
/*-----------------------*/

.tabs:has(#tab-a-toggle:checked) #tab-a-content{
  display: block;
}
.tabs:has(#tab-b-toggle:checked) #tab-b-content{
  display: block;
}
.tabs:has(#tab-c-toggle:checked) #tab-c-content{
  display: block;
}
.tabs-vertical:has(#tab-a-toggle-v:checked) #tab-a-content-v{
  display: block;
}
.tabs-vertical:has(#tab-b-toggle-v:checked) #tab-b-content-v{
  display: block;
}
.tabs-vertical:has(#tab-c-toggle-v:checked) #tab-c-content-v{
  display: block;
}`}
                    </code> </pre>
                You will need to replace element ids like <code className="code">#tab-a-toggle</code> as per your requirements and defined in code <br/><span className="mb-3"></span>
                </span>

                <span className="text-xl text-accent">1. Horizontal Tabs</span>
                <p>By default there will be no bullets for list item. <code className="code">.list-bullet</code> for default bullet style (square bullets). Bullets will have <b>accent</b> color by default.</p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column" style={{width : '-webkit-fill-available'}}>
                        <span><b>Preview : </b></span>
                            <div className="tabs tabs-horizontal">  
                              <nav className="tabs-menu">
                                <label htmlFor="tab-a-toggle" className="tab-item">
                                  <span>Tab A</span>
                                  <input defaultChecked name="tabs-toggle" id="tab-a-toggle" type="radio" />
                                </label>
                                <label htmlFor="tab-b-toggle" className="tab-item">
                                  <span>Tab B</span>
                                  <input name="tabs-toggle" id="tab-b-toggle" type="radio" />
                                </label>
                                <label htmlFor="tab-c-toggle" className="tab-item">
                                  <span>Tab C</span>
                                  <input name="tabs-toggle" id="tab-c-toggle" type="radio" />
                                </label>
                              </nav>

                              <div className="tab-content" id="tab-a-content">
                                I am Tab A content
                              </div>
                              <div className="tab-content" id="tab-b-content">
                                I am Tab B content
                              </div>
                              <div className="tab-content" id="tab-c-content">
                                I am Tab C content
                              </div>
                            </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="tabs tabs-horizontal">  
  <nav class="tabs-menu">
    <label for="tab-a-toggle" class="tab-item">
      <span>Tab A</span>
      <input checked name="tabs-toggle" id="tab-a-toggle" type="radio" />
    </label>
    <label for="tab-b-toggle" class="tab-item">
      <span>Tab B</span>
      <input name="tabs-toggle" id="tab-b-toggle" type="radio" />
    </label>
    <label for="tab-c-toggle" class="tab-item">
      <span>Tab C</span>
      <input name="tabs-toggle" id="tab-c-toggle" type="radio" />
    </label>
  
  <div class="tab-content" id="tab-a-content">
    I am Tab A content
  </div>
  <div class="tab-content" id="tab-b-content">
    I am Tab B content
  </div>
  <div class="tab-content" id="tab-c-content">
    I am Tab C content
  </div>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>
                <span className="text-xl text-accent">2. Vertical Tabs</span>
                <p>You can add hover effect to list item just by adding <code className="code">.list-item-hover</code> class. </p>
                <div className="panel flex-row justify-content-around">
      
                    <div className="flex-column" style={{width : '-webkit-fill-available'}}>
                        <span><b>Preview : </b></span>
                            <div className="tabs tabs-vertical">  
                              <nav className="tabs-menu">
                                <label htmlFor="tab-a-toggle-v" className="tab-item">
                                  <span>Tab A</span>
                                  <input defaultChecked name="tabs-toggle-v" id="tab-a-toggle-v" type="radio" />
                                </label>
                                <label htmlFor="tab-b-toggle-v" className="tab-item">
                                  <span>Tab B</span>
                                  <input name="tabs-toggle-v" id="tab-b-toggle-v" type="radio" />
                                </label>
                                <label htmlFor="tab-c-toggle-v" className="tab-item">
                                  <span>Tab C</span>
                                  <input name="tabs-toggle-v" id="tab-c-toggle-v" type="radio" />
                                </label>
                              </nav>
                    
                              <div className="tab-content" id="tab-a-content-v">
                                I am Tab A content
                              </div>
                              <div className="tab-content" id="tab-b-content-v">
                                I am Tab B content
                              </div>
                              <div className="tab-content" id="tab-c-content-v">
                                I am Tab C content
                              </div>
                            </div>
                    </div>
                    <div>
                        <div className="flex-column">
                            <span><b>Code : </b></span>
                            <pre><code className="language-html">
{`<div class="tabs tabs-vertical">  
  <nav class="tabs-menu">
    <label for="tab-a-toggle-v" class="tab-item">
      <span>Tab A</span>
      <input checked name="tabs-toggle-v" id="tab-a-toggle-v" type="radio" />
    </label>
    <label for="tab-b-toggle-v" class="tab-item">
      <span>Tab B</span>
      <input name="tabs-toggle-v" id="tab-b-toggle-v" type="radio" />
    </label>
    <label for="tab-c-toggle-v" class="tab-item">
      <span>Tab C</span>
      <input name="tabs-toggle-v" id="tab-c-toggle-v" type="radio" />
    </label>
  </nav>

  <div class="tab-content" id="tab-a-content-v">
    I am Tab A content
  </div>
  <div class="tab-content" id="tab-b-content-v">
    I am Tab B content
  </div>
  <div class="tab-content" id="tab-c-content-v">
    I am Tab C content
  </div>
</div>`}
                            </code></pre>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}