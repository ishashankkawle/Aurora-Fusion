'use client';

import { useContext } from "react";
import { GlobalContext } from "@/app/_context/GlobalContext";

export default function Utilities() {

    const {protocol} = useContext(GlobalContext);

    return (
        <div className="p-5"  au-protocol={protocol}>
            <div className="flex-column">
                <span className="text-3xl text-accent text-glow">Utilities</span>
                <p>Utilites provide easy wa to perform adjustment with additional classes created to perfor specific action. Please refer below utilites and their respective usage</p>

                <h1>Width & Height</h1>
                <p>Aurora-Fusion provides muletiple Width & Height classes. These classes use format <code className="code">(property)-(width percentage)</code> format. Width percentage range as multipe of 10. The digits in classname denotes the percentage of width it will consume after applying the class. Below are the all classses available for width.</p>
                <p>Width classes starts with <code className="code">.w-</code> & height classes starts with <code className="code">.h-</code></p>
                <p>While width percentage ranges as below:</p>
                <ul className="list list-bullet">
                    <li className="list-item">10</li>
                    <li className="list-item">20</li>
                    <li className="list-item">25</li>
                    <li className="list-item">30</li>
                    <li className="list-item">40</li>
                    <li className="list-item">50</li>
                    <li className="list-item">60</li>
                    <li className="list-item">70</li>
                    <li className="list-item">75</li>
                    <li className="list-item">80</li>
                    <li className="list-item">90</li>
                    <li className="list-item">100</li>
                </ul>
                <p>Here is the example of single width class : <code className="code">.w-50</code></p>

                <h1>Margin & Padding</h1>
                <span>The classes are named using the format <code className="code">(property)(sides)-(size)</code>. Where property is one of:
                    <ul className="list list-bullet">
                        <li className="list-item"><code className="code">m</code> - for classes that set margin</li>
                        <li className="list-item"><code className="code">p</code> - for classes that set padding</li>
                    </ul>
                    <br />
                    Where sides is one of:

                    <ul className="list list-bullet">
                        <li className="list-item"><code className="code">t</code> - for classes that set margin-top or padding-top</li>
                        <li className="list-item"><code className="code">b</code> - for classes that set margin-bottom or padding-bottom</li>
                        <li className="list-item"><code className="code">s</code> - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL</li>
                        <li className="list-item"><code className="code">e</code> - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL</li>
                        <li className="list-item"><code className="code">x</code> - for classes that set both *-left and *-right</li>
                        <li className="list-item"><code className="code">y</code> - for classes that set both *-top and *-bottom</li>
                        <li className="list-item"><code className="code">blank</code> - for classes that set a margin or padding on all 4 sides of the element</li>
                    </ul>

                    <br />
                    Where size is one of:
                    <ul className="list list-bullet">
                        <li className="list-item"><code className="code">0</code> - for classes that eliminate the margin or padding by setting it to 0</li>
                        <li className="list-item"><code className="code">1</code> - (by default) for classes that set the margin or padding to $spacer * .25</li>
                        <li className="list-item"><code className="code">2</code> - (by default) for classes that set the margin or padding to $spacer * .5</li>
                        <li className="list-item"><code className="code">3</code> - (by default) for classes that set the margin or padding to $spacer</li>
                        <li className="list-item"><code className="code">4</code> - (by default) for classes that set the margin or padding to $spacer * 1.5</li>
                        <li className="list-item"><code className="code">5</code> - (by default) for classes that set the margin or padding to $spacer * 3</li>
                        <li className="list-item"><code className="code">auto</code> - for classes that set the margin to auto</li>
                    </ul>
                </span>

                <h1>Positioning</h1>
                <p>These utility classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Position</b> - Sets position type of element</li>
                    <li className="list-item">Sets offset directions like  <code className="code">top</code> ,  <code className="code">bottom</code> ,  <code className="code">start</code> ,  <code className="code">end</code></li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>For Position</b> - <code className="code">static</code>, <code className="code">relative</code>, <code className="code">absolute</code>, <code className="code">fixed</code>, <code className="code">sticky</code></li>
                    <li className="list-item"><b>For offset values</b> - 0, 50, 100 - which translate to % values like top: 50%</li>
                </ul>
                <br />
                <span className="text-lg text-accent">Position Types</span>
                <p>Below is the list of position types</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.position-static</code></li>
                    <li className="list-item"><code className="code">.position-relative</code></li>
                    <li className="list-item"><code className="code">.position-absolute</code></li>
                    <li className="list-item"><code className="code">.position-fixed</code></li>
                    <li className="list-item"><code className="code">.position-sticky</code></li>
                </ul>
                <br />
                <span className="text-lg text-accent">Offset Types</span>
                <p>Below is the list of Top types. Similary you can use for bottom , start , end offsets</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.top-0</code></li>
                    <li className="list-item"><code className="code">.top-50</code></li>
                    <li className="list-item"><code className="code">.top-100</code></li>
                </ul>
                <br />
                <span className="text-lg text-accent">Fixed and Sticky Positions</span>
                <p>These are shortcut classes to commonly used fixed or sticky layouts</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.fixed-top</code></li>
                    <li className="list-item"><code className="code">.fixed-bottom</code></li>
                    <li className="list-item"><code className="code">.sticky-top</code></li>
                    <li className="list-item"><code className="code">.sticky-bottom</code></li>
                </ul>


                <h1>Border</h1>
                <p>These border classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">border</code> - for setting border style, width, color, & side</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Style</b> - <code className="code">solid</code>, <code className="code">dashed</code>, <code className="code">dotted</code>, <code className="code">double</code>, <code className="code">none</code></li>
                    <li className="list-item"><b>Width</b> - <code className="code">thick</code>, <code className="code">thin</code></li>
                    <li className="list-item"><b>Color</b> - <code className="code">sub</code>, <code className="code">success</code>, <code className="code">warning</code>, <code className="code">danger</code>, <code className="code">info</code></li>
                    <li className="list-item"><b>Side</b> - <code className="code">top</code>, <code className="code">Bottom</code>, <code className="code">Start</code>, <code className="code">End</code></li>
                </ul>

                <h1>Overflow</h1>
                <p>These overflow classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">overflow</code> - for controlling content overflow on elements</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Behavior</b> - <code className="code">auto</code>, <code className="code">scroll</code>, <code className="code">hidden</code>, <code className="code">none</code></li>
                    <li className="list-item"><b>Axis</b> - <code className="code">x</code>, <code className="code">y</code></li>
                </ul>
                <br />

                <span className="text-lg text-accent">Overflow Behavior Classes</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.overflow-auto</code> - Enables scrollbars only when content overflows</li>
                    <li className="list-item"><code className="code">.overflow-hidden</code> - Completely hides overflowing content</li>
                    <li className="list-item"><code className="code">.overflow-scroll</code> - Always shows scrollbars</li>
                    <li className="list-item"><code className="code">.overflow-none</code> - Disables scrolling without using hidden layout (uses <code>clip</code>)</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Overflow Axis-Specific Classes</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.overflow-x-auto</code> - Enables horizontal scrolling when needed</li>
                    <li className="list-item"><code className="code">.overflow-y-auto</code> - Enables vertical scrolling when needed</li>
                    <li className="list-item"><code className="code">.overflow-x-hidden</code> - Hides horizontal overflow</li>
                    <li className="list-item"><code className="code">.overflow-y-hidden</code> - Hides vertical overflow</li>
                    <li className="list-item"><code className="code">.overflow-x-scroll</code> - Always show horizontal scrollbar</li>
                    <li className="list-item"><code className="code">.overflow-y-scroll</code> - Always show vertical scrollbar</li>
                    <li className="list-item"><code className="code">.overflow-x-none</code> - Disables horizontal scrolling using <code>clip</code></li>
                    <li className="list-item"><code className="code">.overflow-y-none</code> - Disables vertical scrolling using <code>clip</code></li>
                </ul>


                <h1>Border Radius</h1>
                <p>These border radius classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">rounded</code> - for setting border-radius globally or on specific sides</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Size</b> - <code className="code">0</code>, <code className="code">1</code>, <code className="code">2</code>, <code className="code">3</code>, <code className="code">4</code>, <code className="code">5</code></li>
                    <li className="list-item"><b>Shape</b> - <code className="code">circle</code>, <code className="code">pill</code></li>
                    <li className="list-item"><b>Side</b> - <code className="code">top</code>, <code className="code">bottom</code>, <code className="code">start</code>, <code className="code">end</code></li>
                </ul>
                <br />

                <span className="text-lg text-accent">Rounded Sizes</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.rounded-0</code> - No rounding (square corners)</li>
                    <li className="list-item"><code className="code">.rounded-1</code> - Small border radius</li>
                    <li className="list-item"><code className="code">.rounded-2</code> - Default border radius</li>
                    <li className="list-item"><code className="code">.rounded-3</code> - Large border radius</li>
                    <li className="list-item"><code className="code">.rounded-4</code> - Extra large border radius</li>
                    <li className="list-item"><code className="code">.rounded-5</code> - 2x Extra large border radius</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Rounded Shapes</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.rounded-circle</code> - Fully rounded (circular)</li>
                    <li className="list-item"><code className="code">.rounded-pill</code> - Capsule-shaped (pill)</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Rounded Sides</span>
                <p>Apply radius to specific sides with optional size or shape</p>

                <span className="text-lg text-accent">Top</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.rounded-top</code> - Default radius on top corners</li>
                    <li className="list-item"><code className="code">.rounded-top-0</code> to <code className="code">.rounded-top-5</code> - Sets varying sizes</li>
                    <li className="list-item"><code className="code">.rounded-top-circle</code>, <code className="code">.rounded-top-pill</code> - Shape-based rounding</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Bottom</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.rounded-bottom</code> - Default radius on bottom corners</li>
                    <li className="list-item"><code className="code">.rounded-bottom-0</code> to <code className="code">.rounded-bottom-5</code> - Sets varying sizes</li>
                    <li className="list-item"><code className="code">.rounded-bottom-circle</code>, <code className="code">.rounded-bottom-pill</code> - Shape-based rounding</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Start</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.rounded-start</code> - Default radius on left/start corners</li>
                    <li className="list-item"><code className="code">.rounded-start-0</code> to <code className="code">.rounded-start-5</code> - Sets varying sizes</li>
                    <li className="list-item"><code className="code">.rounded-start-circle</code>, <code className="code">.rounded-start-pill</code> - Shape-based rounding</li>
                </ul>
                <br />

                <span className="text-lg text-accent">End</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.rounded-end</code> - Default radius on right/end corners</li>
                    <li className="list-item"><code className="code">.rounded-end-0</code> to <code className="code">.rounded-end-5</code> - Sets varying sizes</li>
                    <li className="list-item"><code className="code">.rounded-end-circle</code>, <code className="code">.rounded-end-pill</code> - Shape-based rounding</li>
                </ul>

                <h1>Shadow</h1>
                <p>These shadow classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">shadow</code> - for applying elevation effects to elements using box shadows</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Size</b> - <code className="code">sm</code>, <code className="code">lg</code></li>
                    <li className="list-item"><b>None</b> - <code className="code">none</code> to remove shadow</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Shadow Sizes</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.shadow</code> - Applies default base shadow</li>
                    <li className="list-item"><code className="code">.shadow-sm</code> - Applies subtle/small shadow</li>
                    <li className="list-item"><code className="code">.shadow-lg</code> - Applies large/deep shadow</li>
                </ul>
                <br />

                <span className="text-lg text-accent">No Shadow</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.shadow-none</code> - Removes any existing box shadow</li>
                </ul>

                <h1>Display</h1>
                <p>These display classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">d</code> - for controlling the <code>display</code> behavior of elements</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Type</b> - <code className="code">block</code>, <code className="code">inline-block</code>, <code className="code">flex</code>, <code className="code">inline-flex</code></li>
                    <li className="list-item"><b>Visibility</b> - <code className="code">none</code> to hide elements</li>
                </ul>

                <span className="text-lg text-accent">Display Types</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.d-block</code> - Displays the element as a block</li>
                    <li className="list-item"><code className="code">.d-inline-block</code> - Displays the element as an inline-level block container</li>
                    <li className="list-item"><code className="code">.d-flex</code> - Displays the element as a flex container</li>
                    <li className="list-item"><code className="code">.d-inline-flex</code> - Displays the element as an inline-level flex container</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Visibility Control</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.d-none</code> - Completely hides the element from the layout</li>
                </ul>

                <h1>Flex & Float</h1>
                <p>These classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">flex</code> - for setting flex layout direction</li>
                    <li className="list-item"><code className="code">float</code> - for floating elements</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Direction</b> - <code className="code">row</code>, <code className="code">column</code></li>
                    <li className="list-item"><b>Side</b> - <code className="code">start</code>, <code className="code">end</code></li>
                </ul>
                <br />

                <span className="text-lg text-accent">Flex Direction</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.flex-row</code> - Applies <code>display: flex</code> in row direction with 8px gap</li>
                    <li className="list-item"><code className="code">.flex-column</code> - Applies <code>display: flex</code> in column direction with 8px gap</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Float Utilities</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.float-start</code> - Floats the element to the left</li>
                    <li className="list-item"><code className="code">.float-end</code> - Floats the element to the right</li>
                </ul>


                <h1>Vertical & Horizontal Alignment</h1>
                <p>These alignment classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">v-align</code> - for inline or table-cell vertical alignment</li>
                    <li className="list-item"><code className="code">justify-content</code> - for horizontal alignment in flex containers</li>
                    <li className="list-item"><code className="code">align-items</code> - for vertical alignment in flex containers</li>
                    <li className="list-item"><code className="code">align-content</code> - for vertical alignment across lines in flex-wrap layouts</li>
                    <li className="list-item"><code className="code">align-self</code> - for aligning a single item independently</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                    <li className="list-item"><b>Vertical</b> - <code className="code">top</code>, <code className="code">middle</code>, <code className="code">bottom</code>, <code className="code">baseline</code>, <code className="code">text-top</code>, <code className="code">text-bottom</code></li>
                    <li className="list-item"><b>Horizontal</b> - <code className="code">start</code>, <code className="code">end</code>, <code className="code">center</code>, <code className="code">between</code>, <code className="code">around</code>, <code className="code">stretch</code>, <code className="code">baseline</code>, <code className="code">auto</code></li>
                </ul>
                <br />

                <span className="text-lg text-accent">Vertical Alignment</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.v-align-baseline</code> - Aligns with the baseline of the parent</li>
                    <li className="list-item"><code className="code">.v-align-top</code> - Aligns to the top of the line box</li>
                    <li className="list-item"><code className="code">.v-align-middle</code> - Aligns to the middle of the line box</li>
                    <li className="list-item"><code className="code">.v-align-bottom</code> - Aligns to the bottom of the line box</li>
                    <li className="list-item"><code className="code">.v-align-text-top</code> - Aligns to the top of the parent text</li>
                    <li className="list-item"><code className="code">.v-align-text-bottom</code> - Aligns to the bottom of the parent text</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Horizontal Alignment</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.justify-content-start</code> - Aligns items to the start of the main (horizontal) axis</li>
                    <li className="list-item"><code className="code">.justify-content-end</code> - Aligns items to the end of the main axis</li>
                    <li className="list-item"><code className="code">.justify-content-center</code> - Centers items horizontally</li>
                    <li className="list-item"><code className="code">.justify-content-between</code> - Places space between items</li>
                    <li className="list-item"><code className="code">.justify-content-around</code> - Places space around items</li>
                    <li className="list-item"><code className="code">.justify-content-aunly</code> - Places equal space between and around items (note: check for typo — likely meant to be <code>evenly</code>)</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Vertical Flex Alignment</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.align-items-start</code> - Aligns items to the start of the cross (vertical) axis</li>
                    <li className="list-item"><code className="code">.align-items-end</code> - Aligns items to the end of the cross axis</li>
                    <li className="list-item"><code className="code">.align-items-center</code> - Centers items vertically</li>
                    <li className="list-item"><code className="code">.align-items-baseline</code> - Aligns items along the text baseline</li>
                    <li className="list-item"><code className="code">.align-items-stretch</code> - Stretches items to fill container height</li>
                </ul>
                <br />

                <span className="text-lg text-accent">Multi-line Vertical Alignment</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.align-content-start</code> - Aligns rows to the top</li>
                    <li className="list-item"><code className="code">.align-content-end</code> - Aligns rows to the bottom</li>
                    <li className="list-item"><code className="code">.align-content-center</code> - Centers rows vertically</li>
                    <li className="list-item"><code className="code">.align-content-between</code> - Distributes space between rows</li>
                    <li className="list-item"><code className="code">.align-content-around</code> - Distributes space around rows</li>
                    <li className="list-item"><code className="code">.align-content-stretch</code> - Stretches rows to fill vertical space</li>
                </ul>
                <br/>

                <span className="text-lg text-accent">Self Alignment</span>
                <ul className="list list-bullet">
                    <li className="list-item"><code className="code">.align-self-auto</code> - Resets to default alignment</li>
                    <li className="list-item"><code className="code">.align-self-start</code> - Aligns the item to the top of the cross axis</li>
                    <li className="list-item"><code className="code">.align-self-end</code> - Aligns the item to the bottom of the cross axis</li>
                    <li className="list-item"><code className="code">.align-self-center</code> - Centers the item on the cross axis</li>
                    <li className="list-item"><code className="code">.align-self-baseline</code> - Aligns the item to its text baseline</li>
                    <li className="list-item"><code className="code">.align-self-stretch</code> - Stretches the item to fill available space</li>
                </ul>

                <h1>Text Utilities</h1>
                <p>These text utility classes are named using the format <code className="code">(property)-(value)</code></p>
                <p>Where property is one of the</p>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">text</code> - for alignment, color, weight, size, and effects</li>
                <li className="list-item"><code className="code">line</code> - for controlling line height</li>
                </ul>
                <p>And value is one of the</p>
                <ul className="list list-bullet">
                <li className="list-item"><b>Alignment</b> - <code className="code">start</code>, <code className="code">end</code>, <code className="code">center</code></li>
                <li className="list-item"><b>Size</b> - <code className="code">xs</code>, <code className="code">sm</code>, <code className="code">lg</code>, <code className="code">xl</code>, <code className="code">2xl</code>, <code className="code">3xl</code>, <code className="code">4xl</code></li>
                <li className="list-item"><b>Weight</b> - <code className="code">light</code>, <code className="code">normal</code>, <code className="code">medium</code>, <code className="code">bold</code></li>
                <li className="list-item"><b>Line Height</b> - <code className="code">tight</code>, <code className="code">normal</code>, <code className="code">loose</code></li>
                <li className="list-item"><b>Color</b> - <code className="code">success</code>, <code className="code">warning</code>, <code className="code">danger</code>, <code className="code">info</code>, <code className="code">accent</code>, <code className="code">neutral</code></li>
                <li className="list-item"><b>Effect</b> - <code className="code">glow</code>, <code className="code">clear</code>, <code className="code">subbed</code></li>
                </ul>
                <br/>

                <span className="text-lg text-accent">Text Alignment</span>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">.text-start</code> - Aligns text to the left</li>
                <li className="list-item"><code className="code">.text-end</code> - Aligns text to the right</li>
                <li className="list-item"><code className="code">.text-center</code> - Centers the text</li>
                </ul>
                <br/>

                <span className="text-lg text-accent">Text Sizes</span>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">.text-xs</code> - 8px font size</li>
                <li className="list-item"><code className="code">.text-sm</code> - 10px font size</li>
                <li className="list-item"><code className="code">.text-lg</code> - 16px font size</li>
                <li className="list-item"><code className="code">.text-xl</code> - 20px font size</li>
                <li className="list-item"><code className="code">.text-2xl</code> - 24px font size</li>
                <li className="list-item"><code className="code">.text-3xl</code> - 32px font size</li>
                <li className="list-item"><code className="code">.text-4xl</code> - 40px font size</li>
                </ul>
                <br/>

                <span className="text-lg text-accent">Line Heights</span>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">.line-tight</code> - Sets line height to 1.2</li>
                <li className="list-item"><code className="code">.line-normal</code> - Sets line height to 1.5</li>
                <li className="list-item"><code className="code">.line-loose</code> - Sets line height to 1.75</li>
                </ul>
                <br/>

                <span className="text-lg text-accent">Font Weights</span>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">.text-light</code> - Applies font-weight: 300</li>
                <li className="list-item"><code className="code">.text-normal</code> - Applies font-weight: 400</li>
                <li className="list-item"><code className="code">.text-medium</code> - Applies font-weight: 500</li>
                <li className="list-item"><code className="code">.text-bold</code> - Applies font-weight: 600</li>
                </ul>
                <br/>

                <span className="text-lg text-accent">Text Colors</span>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">.text-success</code> - Success color (e.g., green)</li>
                <li className="list-item"><code className="code">.text-warning</code> - Warning color (e.g., yellow)</li>
                <li className="list-item"><code className="code">.text-danger</code> - Danger color (e.g., red)</li>
                <li className="list-item"><code className="code">.text-info</code> - Info color (e.g., blue)</li>
                <li className="list-item"><code className="code">.text-accent</code> - Accent color (theme-based highlight)</li>
                <li className="list-item"><code className="code">.text-neutral</code> - Subdued neutral text color</li>
                </ul>
                <br/>
                
                <span className="text-lg text-accent">Text Effects</span>
                <ul className="list list-bullet">
                <li className="list-item"><code className="code">.text-glow</code> - Applies glowing text-shadow effect</li>
                <li className="list-item"><code className="code">.text-clear</code> - Removes underline or other decorations</li>
                <li className="list-item"><code className="code">.text-subbed</code> - Applies smaller font, uppercase, spaced subtext styling</li>
                </ul>

            </div>
        </div>
    )
}