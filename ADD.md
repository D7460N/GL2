---
title: "APPLICATION DESIGN DOCUMENT : :"
---

<h1 id="add">APPLICATION DESIGN DOCUMENT : :</h1>

<br>

<h2 id="toc">TABLE OF CONTENTS : :</h2>

- [Table of Contents](#toc)
- [TL;DR](#tldr)
- [Fair Warning](#fair)
- [What if?](#what)
- [Must Haves](#must)
  - [Standards](#standards)
  - [W3C](#w3c)
  - [Accessibility](#access)
  - [Usability](#usable)
  - [Web Developer Experience (WEBDX)](#webdx)
    - [Minimal Abstraction](#abstract)
  - [User Experience (UX)](#ux)
    - [UX To Remember](#ux2)
    - [Security](#sec)
    - [Content Security Policy (CSP)](#csp)
    - [Web Application Firewall (WAF)](#waf)
    - [HTTP/3 | QUIC](#http3)
  - [Sustainability (Future Proofing)](#sustain)
- [Integration (WIP)](#inte)
  - [Frameworks/CMSs](#frameworks) [ coming soon ]
    - Angular
    - Vue.js
    - React
  - Content Management Systems (CMS)
    - WordPress
    - Drupal
    - Magento
    - SharePoint
- [Infrastructure](#infra)
- [Governance/Principles](#principles)
  - [Intrinsic Design](#intrinsic)
  - [Single Responsibility](#single)
  - [Least Power](#least)
  - [Separation of Concerns](#separation)
  - [Perfect Storm](#perfect)
- [Development Techniques](#dev)
  - [Web Components](#components)
  - [Classless CSS](#classless)
  - [Logical Properties](#logical)
  - [CSS @layer](#layer)
  - [Semantic HTML Elements](#semantic)
  - [DIV-less HTML](#divless)
  - [Custom (semantic) HTML](#custom)
  - [CSS Variables](#variables)
  - [Responsive Design](#responsive)
  - [Progressive Enhancement](#progress)
  - [Minimal Third Party Dependencies](#minimal)
  - [Squishy Layout](#squishy)
  - [Self-Aware](#self)
  - [Natural "Truthful" Loading State](#loading)
  - [Customization](#custom)
- [Search Engine Optimization (SEO)](#seo)
- [Style Guide](#style)
  - [Color Themes](#themes)
  - [Corporate Branding](#corporate)
- [Architecture](#arc)
  - [Micro-frontend](#micro)
  - [JAMstack](#jam)
  - [HTML/CSS](#html)
  <!-- * [JavaScript Rules Engine](#javascript-rules-engine) -->
- [Single Page Application (SPA)](#spa)
  - [Perspective](#perspective)
  - [Alternate Layouts](#alt)
- [Progressive Web Application (PWA)](#pwa)
  - [Cross Platform Interoperability](#cross)
  - [Immersive Experience](#immersive)
  - [Progressively Enhanced](#progress)
  - [It's A Desktop App](#desktop)
  - [It's A Website](#website)
  - [Advantages](#advantages)
- [Browser Compatibility](#compatible)
- [Directory Structure](#directory)
  <br>

---

<h3 id="tldr">TL;DR</h3>

<b>D7460N Me</b> - 20+ years of designing and creating clean inclusive enjoyable user experiences for the <em>Wild Wild Web</em>.

<b>D7460N UI</b> - Minimal professional passively-reactive HTML/CSS seed/template for building fast, robust, adaptable, and scalable web applications and websites. All native. Minimal 3rd party dependencies.

<b>D7460N Theory</b> - Modern CSS will supplant much of the GUI logic JS does today. Decoupling GUI logic from data logic allows both to thrive. These combined will change the way see, interact, design and develope the <em>Wild Wild Web</em>

Let the CSS renaissance begin . . .

<em>Coming soon to a browser near you</em>

<br>

> <b>Separation of Concerns</b> (GUI logic from data logic)
> * JS framework agnostic
> * no monolithic "opinionated" (AKA controlled) development decision trees

> <b>Modern CSS functionality</b>
> * no preprocessors
> * much less LOE
> * 100 to 1K times faster rendering speed than JS equivalents

> <b>Future proofed</b>
> * vanilla/native to the browser
> * no extra deployment or build steps required to get around non-native JS framework browser incompatibility
> * no version upgrade purgatory
> * no vendor lock
> * minimal dependencies
> * no NPM/NVM security vulnerabilities

>  <b>No/build/compile/serve process required</b>
> * faster and more productive development

> <b>No training requirement</b> for third party software (js frameworks)
> * time and taxpayer savings

---

<br>

<h3 id="fair">FAIR WARNING : :</h3>

> Eleven out of ten clinical trials have shown that prolonged exposure to _***delusions of grandeur***_ may, in severe cases, be linked to or even cause \_industry changing innovation.
>
> _PROCEED WITH CAUTION_

<br>

---

<br>

<h3 id="question">THE QUESTION : :</h3>

> <i><b>Morpheus</b>:<br>
> This is your last chance. After this, there is no turning back. You take the blue pill - the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill - you stay in Wonderland and I show you how deep the rabbit hole goes.</i><br>

~ [The Matrix](https://abovelogic.org/)<br>
Andy Wachowski & Larry Wachowski

<br>

---

<br>

> Given a (front-loading) JAMstack architecture and the ability to _PASSIVELY_ 'react' to dynamic changes with `:has()` (no scripting), container queries, contextual view-port units, and other new exciting upcoming features, it is time to finally find out how much GUI and business logic can be off-loaded onto pure native CSS.<br>
> ~ Unknown

<br>

---

<br>

<h2 id="what">WHAT IF : :</h2>

<i>What if</i> . . . a development project could be set up and running, just as they are typically today with JS frameworks, but . . .

- in <b>< 50% the time</b>,
- with <b>< 50% the codebase</b>,
- and with <b>< 50% the effort</b>?

<br>

<i>What if</i> . . . that development project's front-end could be <b>decoupled</b> and <b>independent</b> from, yet <b>compatible</b> with, any standards-compliant JS framework?<br>
([Separation of Concerns](#separation) - GUI and business logic from data logic)

<br>

<i>What if</i> . . . that development project's front-end was dependency free, fully responsive, accessible, usable, keyboard navigable, and <b>worked with all modern and future browsers</b> and <b>across all media platforms out-of-the-box</b>?

<br>

<i>What if</i> . . . that development project's front-end was <b>easy and intuitive</b> to understand, implement, and maintain for <b>current and future developers</b>?

<br>

<i>What if</i> . . . that development project's (<i>decoupled and independent</i>) front-end is able to be <b>changed on the fly for rapid prototyping</b>?

<br>

<i>What if</i> . . . that development project's (<i>decoupled and independent</i>) front-end is able to automatically rearrange itself <b><i>on the fly</i></b> based on dynamically changing data inside it? As if it were . . . "<i>[self-aware](#self)</i>"?

<br>

<i>What if</i> . . . that development project's (<i>decoupled and independent</i>) front-end could be iterated and maintained across multiple projects from a single enterprise repo'd source?

<br>

<i>( . . . evil maniacal giggle . . . )</i>

<br>

```
         '  )      *           `
   *  )   (    . ) `    '         '
 ` .       ;      ( `  )           ;
    ,)     )) *     )  /( .   (   (
  .((  /     / (  \(     \   `  *   )
 /   _   \|   \|   |   ___|  ))  (`
|   (_)   |   .`   |   _|  .( `    ))
 \_______/|___|\___|______|   ).  ( \
  |     |     |     |                |
  |     |     |     |_____      _____|    .             .
  |     |     |     |    |      |        : .          : .: .
  |     |_____|     |____|      |____    ` *          ` *` *
  |                 |                |   .))         .)) .))
   \_______________/|________________|  .(( \       .(( \.(( \
    |_    _|/  _  \ |  _  \  | |  |  |  |  __|      |   ||   |
      |  | |  (_)  ||  .  /  |_|  |  |__|  _|       |   ||   |
      |__|__\_____/ |__|__\\_____/|_____|____|      |   ||   |
      |__     __|   |__|   |   ___|    \/    |      |   ||   |
         |   |  |    __    |   _| |   |\/|   |   .  |   ||   |
         |___|__|___|  |___|______|___| _|___|   ,  |   ||   |
        /         \    |      |       |      |  `   |   ||   |
       /     ^     \   |      |       |      |  ))  |___||___|
      /     ___     \  |      |______ |      |.(( \  ___  ___
     /     /   \     \ |             ||            ||   ||   |
    /_____/     \_____\|_____________||____________||___||___|

```

<br>

<i>. . . err . . . umm . . .</i>

<br>

<i>Where was I . . .</i>

- Significantly less developer ramp-up time
- much more efficient
- flexible
- performant
- scalable
- longer lasting
- much smaller digital footprint
- less costly to maintain
- accessible
- intuitive
- secure
- standards compliant
- works across all media platforms

<br>

This front-end would be a win for developers, end-users, and stakeholders alike.

**_These are the questions this project seeks to answer._**

Native browser support for modern HTML and CSS functionality and accompanying design and development techniques may allow for these questions to be answered by literally "doing more with less". ([Least Power Principle](#least))

_We shall see . . ._

---

<br>

TYPICAL SETUP : :

DEFINITIONS : :

- <b>User Agent</b> = Web browser

- <b>Front-End</b> (FE) = Gui, business, and data logic integrated with and controlled by Framework

- <b>Back-End</b> (FE) = Data storage, database(s), data source(s) of various types, formats, and configurations

```

           // FRONT END - - - - - - - - - - - - - - - - - - - //          // BACK END
          /___________________________________________________/          /_____ _  _ _
         /\                                                   \         /\                 `
        /::\ Framework driven "happy path" design/development  \       /::\  mystery      `
       /::::\ Build \ Compile \ Serve for Typescript and        \     /::::\  meat       `
_ _ _ /::::::\ cross browser compatibility                       \___/::::::\           `
\    /: User::\___________________________________________________\ /::::::::\_______ _`  _
 \   \:Agent::/                                                   / \::::::::/` ` ` ` `
  \   \::::::/ Gui, business, and data logic integrated with     /   \::::::/          `
   \   \::::/ and controlled by Framework                       / \   \::::/            `
    \   \::/                                                   /\  \   \::/              `
     \   \/___________________________________________________/  \  \   \/______ __  _    `
      \                                                           \  \
       \_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\  \_ _ _ _ _ _ _ _ _   _


```

<!--
PROs and CONs : :

| Pros                       |        | Cons                                                          |
| :---                       | :----: | :---                                                          |
| Free                       |        | Large initial cognitive load                                  |
| CLI quick setup            |        | Forced development "happy paths"                              |
| Handles complex data logic |        | Vendor lock                                                   |
| Large dev community        |        | Upgrade purgatory                                             |
| Reusable components        |        | Squelched innovation                                          |
| Encourages modular approach|        | Hundreds of 3rd party dependencies                            |
| Uniform development        |        | Dependency hamster wheel (latest fad)                         |
| Pre-built common tasks     |        | Custom work breaks upgrade path                               |
| Developer perspective      |        | TOTAL SDLC time/effort/money > most other comparable solutions|
|                            |        | Encourages "elite" dev class                                  |
|                            |        | Not standard - requires compilation for browser compatibility |
|                            |        | Obfuscates standard browser core langs                        |
|                            |        | Never as fast as direct core langs                            |
|                            |        | Bloated markup                                                |
|                            |        | Slow cumbersome process to update GUI discourages said updates|
-->

---

PROPOSED SETUP : :

DEFINITIONS : :

<b>Front-Front-End</b> (FFE) = Decoupled standards compliant vanilla HTML, modern CSS, and (minimal presentation and or fallback related) JS. See [Least Power Principle](#least).

- User focused design/development
- Accessibility
- Usability
- Input validation
- Responsiveness
- Themes
- Progressive enhancement
- Graceful degradation
- Modern HTML and CSS techniques
- Template based rapid development/deployment

<b>Front-Back-End</b> (FBE) = Optional framework and or other means by which to write the data logic. API abstract connecting FFE and FBE in combination with web components. See [Separation of Concerns](#separation).

<b>Air-Gap</b> (AG) = Separation of Concerns (GUI logic from data logic)

- Pre-rendered, pre-delivered, divless, classless, structural/layout HTML
- No scripting in HTML (inline)
- CSS must (eventually) be HTML (inline)
- Modern native "self-aware" CSS leverages passively reactive change detection to govern all layout, environment, platform, and interactive elements based on dynamic <b>data</b> changes
- Secure

```
    // Built-in "truthful" loading state
   // Upgrade/security path NOT controlled by third party dependencies
  // Custom (vanilla) changes DON'T break upgrade/security path
 // Flexible, unopinionated, user-driven (front to back) design and development

                    // FRONT-END - - - - - - - - - - - - - - - - - - - - //
                   /                                                     /
                  // FFE         // FBE         // Framework(s)         /
                 // Micro-FE    /              // CMS(s)               /
                /____          /____          /_______________________/
               /\    \   AIR  /\    \   AIR  /\          \            \
              /::\HTML\ GAP  /::\REST\ GAP  /::\  Build   \  Data      \
             /::::\CSS \    /::::\JSON\    /::::\  Compile \  Logic     \
      _ _ _ /::::::\JS  \_ /::::::\XML \_ /::::::\  Serve   \            \
     /\    /: User :\____\/: API ::\____\/::::::::\__________\____________\
    /  \   \: Agent:/    /\::::::::/    /\::::::::/          /            /
        \   \::::::/ UI /  \::::::/    /  \::::::/  Angular / Typescript /
         \   \::::/ UX / \  \::::/    / \  \::::/  Vue     / JavaScript /
          \   \::/ DX /   \  \::/    /   \  \::/  React   /            /
           \   \/____/ \   \  \/____/ \   \  \/__________/____________/ \
            \_ _ _ _ _ _\   \_ _ _ _ _ \   \_ _ _ _ _ _ _ _ _ _ _ _ _ _ _\
            /           /   /              /                             /
           // JAMstack     // Separation of Concerns (decoupled GUI logic from data logic)
          // Flexible     // Connected via API.                       /
         // Scalable                    /                            /
        // Secure                      /                            /
       // Modular                     /
      // Framework, data, and platform agnostic
     // GUI & business logic       /
    // Decoupled and independent GUI allows templating across applications
   // Semantic HTML and native web components for dynamic data hooks
  // Leverages native CSS passive reactiveness
 // Smaller codebase

```

<br>

---

<!-- <h2 id="measured-goals">MEASURED GOALS : :</h2>

<br>

All issues and metrics are driven (at least in part) by JIRA and Lighthouse and are mapped/referenced (linked) MEASURED GOALS by their [ ? ] numbers.

<br>

<table>
  <tr>
    <td><b>GOAL</b> (** WIP **)</td>
    <td><b>MEASURE</b> (** WIP **)</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">1</a> ] Do no harm.<br>Minimize impact on legacy project O&M development timeline/schedule to </td>
    <td>0</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">2</a> ] Reduce digital footprint by </td>
    <td>75%+</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current company GUI digital footprint = </td>
    <td>1.64MB</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current D7460N GUI digital footprint = </td>
    <td>112k</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Digital footprint reduction of</td>
    <td>1464%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">3</a> ] Increase load performance by</td>
    <td>200%+</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current company load performance = </td>
    <td>5000ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current D7460N load performance = </td>
    <td>200ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Load performance increase of</td>
    <td>700%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">4</a> ] Increase render performance by</td>
    <td>200%+</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current company render performance = </td>
    <td>5000ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Current D7460N render performance = </td>
    <td>200ms</td>
  </tr>
  <tr></tr>
  <tr>
    <td>Load render increase of</td>
    <td>700%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">5</a> ] Reduce dependencies to <br>
     Current company is dependent on Bootstrap 3 which is dependent on jQuery</td>
    <td>0</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">6</a> ] Reduce continuity LoE by </td>
    <td>50%</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">7</a> ] Ensure mission continuity at minimum cost and LoE</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">8</a> ] Ensure end-user ease of use. (Usability)</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">9</a> ] Ensure developer ease of use. (Usability)</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">10</a> ] Ensure accessibility as defined by accessibility.gov</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>&#160;</td>
    <td>&#160;</td>
  </tr>
  <tr></tr>
  <tr>
    <td>[ <a href="#">11</a> ] Conform to company goals and themes</td>
    <td>&#160;</td>
  </tr>
</table> -->

<br>

_Let's start with the..._

<h2 id="must">MUST-HAVES : :</h2>

<details>
  <summary id="standards"><h3>WEB STANDARDS</h3></summary>

<!--  <table>
   <tr>
     <td><b>Name</b></td>
     <td><b>Standards Compliant</b></td>
     <td><b>Backwards Compatible</b></td>
     <td><b>Future Proofed</b></td>
     <td><b>% Complete</b></td>
   </tr>
   <tr></tr>
   <tr>
     <td>Name</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>100%</td>
   </tr>
   <tr></tr>
   <tr>
     <td>Name</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>100%</td>
   </tr>
   <tr></tr>
   <tr>
     <td>Name</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>100%</td>
   </tr>
   <tr></tr>
   <tr>
     <td>Name</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>[ x ]</td>
     <td>100%</td>
   </tr>
 </table> -->

  <p><i>Web standards are the building blocks of a consistent and harmonious digitally connected world. They are implemented in browsers, blogs, search engines, and other software that power our experience on the Web.</i></p>

  <p><i>W3C is an international community where Member organizations, a full-time staff, and the public work together to develop web standards.</i></p>
  <a href="https://www.w3.org/standards/">Web Standards | W3.org</a>
</details>

<details>
  <summary id="w3c"><h3>W3C/WHATWG "LIVING" STANDARD</h3></summary>

  <p>To ensure future compatibility for websites or web applications, adherence to W3C/WHATWG standards is crucial. Additionally, accessibility across any device equipped with an authorized network-connected web browser, from any location worldwide, is key.</p>

> <i>These standards exist as long technical documents called specifications, which detail exactly how the technology should work. These documents are not very useful for learning how to use the technologies they describe (this is why we have sites like [MDN Web Docs](https://developer.mozilla.org/en-US/)), but instead are intended to be used by software engineers to implement these technologies (usually in web browsers).</i>
>
> <i>For example, the [HTML Living Standard](https://html.spec.whatwg.org/multipage/) describes exactly how HTML (all the HTML elements, and their associated APIs, and other surrounding technologies) should be implemented.</i>
>
> <i>Web standards are created by standards bodies — institutions that invite groups of people from different technology companies to come together and agree on how the technologies should work in the best way to fulfill all of their use cases. The W3C is the best known web standards body, but there are others such as the [WHATWG](https://whatwg.org/) (who maintain the living standards for the HTML language), [ECMA](https://www.ecma-international.org/) (who publish the standard for ECMAScript, which JavaScript is based on), [Khronos](https://www.khronos.org/) (who publish technologies for 3D graphics, such as WebGL), and others.</i><br>

<a href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards">~ The Web and Web Standards | MDN Web Docs</a>

</details>

<details>
  <summary id="access"><h3>ACCESSIBILITY</h3></summary>

> Accessibility isn’t about compliance. It’s not about ticking off checkboxes in an accessibility checklist. It’s not about accessibility overlays either. Instead, it’s about designing with <b>a wide range of people in mind</b>. It’s about including and respecting everyone — independent of what skills and preferences they have.<br>

[~ Smashing Magazine Newsletter-Issue #412, July 4, 2023](https://mailchi.mp/smashingmagazine/412-accessibility-and-inclusive-design?e=af6b6893ef)

Accessibility relates to the technical side of a website, while usability refers to the quality of a person's experience when interacting with it. Accessibility guidelines can improve usability for all users, including those with disabilities or impairments.

<p><b>ACCESSIBILITY IS NOT USABILITY.</b> A screen full of unstructured unformatted unstyled data is accessible, but hardly usable. Accessibility is the beginning of usability best practices.</p>

> <i>"Whereas accessibility relates to the technical side of a website, usability relates to the quality of a person's experience when interacting with your website, the efficiency with which that person can accomplish a task, and the satisfaction of the person completing the task. Although accessibility guidelines focus primarily on people with disabilities and impairments, such as vision loss, many of the guidelines for accessibility can also improve usability for all.</i><br>

<a href="https://blog.usablenet.com/accessibility-vs-usability-what-is-the-difference-to-the-disability-community">~ UsableNet Aug 22, 2022</a>

  <ul>
    <li><a href="https://www.section508.gov/manage/section-508-assessment/">Government-wide Section 508 Assessment | section508.gov</a></li>
    <li><a href="https://www.ada.gov/resources/web-guidance/">Guidance on Web Accessibility and the ADA | ada.gov</a></li>
    <li><a href="https://digital.gov/">Guidance on building better digital services in government | digital.gov</a></li>
    <li><a href="https://www.access-board.gov/ict/">U.S. Access Board Revised 508 Standards and 255 Guidelines | access-board.gov</a></li>
  </ul>
</details>

<details>
  <summary id="usable"><h3>USABILITY</h3></summary>

<p>For many end-users (not all), the difference between Apple and Microsoft is design over function (respectively). For many developers (not all), the inevitable form/function fork on their development roadmap determines whether a web application succeeds or fails. </p>

<p>End-user **and** developer accessibility and usability governs every design development decision.</p>

> <i>If "content is king", then the GUI is his castle, usability is the road that leads you there, and accessibility is the key to enter his royal court."</i><br>~ Unknown

<ul>
  <li><a href="https://digital.gov/">Guidance on building better digital services in government</a></li>
  <li><a href="https://www.section508.gov/">Government-wide Section 508 Assessment</a></li>
  <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/">WCAG 2 Overview | Web Accessibility Initiative (WAI) - W3C</a></li>
  <li><a href="https://www.ada.gov/resources/web-guidance/">Guidance on Web Accessibility and the ADA</a></li>
</ul>
</details>

<details>
 <summary id="webdx"><h3>WEB DEVELOPER EXPERIENCE (WEBDX)</h3></summary>

> The [@w3c](https://twitter.com/w3c) WebDX [#CommunityGroup](https://twitter.com/hashtag/CommunityGroup?src=hashtag_click) has been working on a cartography of the Web Platform as a set of features, with focus on surfacing the interoperable ones based on their implementation status across browsers. This work is at the core of this [@MozDevNet](https://twitter.com/MozDevNet) baseline concept<br>

[W3C Developers | twitter.com](https://twitter.com/w3cdevs/status/1658489662758092804)

- [Web DNA Report | mdn.dev](https://mdn.dev/archives/insights/)
- [WEBDX COMMUNITY GROUP | w3c.org](https://www.w3.org/community/webdx/)
- [web-platform-dx | github.com](https://github.com/web-platform-dx)
- [WEBDX | w3.org](https://www.w3.org/blog/2022/webdx-improving-the-experience-for-web-developers/)
- [Introducing Baseline: a unified view of stable web features | developer.mozilla.org](https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/)

 <details>
  <summary id="abstract"><h3>MINIMAL ABSTRACTION</h3></summary>

  <p>(WIP)</p>

  </details>
</details>

<details>
  <summary id="ux"><h3>USER EXPERIENCE (UX)</h3></summary>

  <p>User Experience (UX) is the intersection of accessibility and usability. It encapsulates the entire journey of a user, from the moment they input the web application's URL, to the point they click the "X" in the upper right corner to close the application, and even beyond.</p>

Such as:

 <ul>
  <li>What happens when users come back?</li>
  <li>Does the web app remember the user?</li>
  <li>Is the web application just as fast or faster when end-users return?</li>
  <li>Does the web application remember and return the user where the user left off?</li>
  <li>What happens to the web application if an end-user disables JavaScript?</li>
</ul>

What if end-users could easily customize the web application to make it their own?

Such as:

- Does the web application handle user OS preferences, such as:
  - Color and contrast preferences?
  - Keyboard preferences?
  - Mouse preferences?
  - Roomy or condensed content preferences?
  - Do end-users like useful/helpful micro-transaction animations or no animations?

<!-- <img src="/assets/images/ux3d.svg#gh-dark-mode-only" alt="UX is where accessibility and usability come together." width="600" title="UX is where accessibility and usability come together." />
<img src="/assets/images/ux3d.svg#gh-light-mode-only" alt="UX is where accessibility and usability come together." width="600" title="UX is where accessibility and usability come together." /> -->

<details>
  <summary id="ux2"><h3>UX TO REMEMBER</h3></summary>

- **Link padding** increases click-space for buttons. 
- **No dead ends** - Provide end-users and obvious way forward and a way back. A way forward example would be, links to the support desk on `404` pages. A way back example would be a consistent visible "anchor" to the web application home page such as the conventional web application logo in the upper left corner.
- **Link Offsite References** - Whenever an offsite source is reference, link to the reference.
- **Off-site links open in new browser tab/window** - Open off-site links in a new browser tab or window with `target="_new"`.
- \*\*Use `text-wrap="medium"` - (WIP)
- **Use `:focus-visible;`** - rather than just `:focus`. This allows for more accurate visible keyboard tabbing through inputs and buttons.
- **Use `outline-color: transparent;`** - rather than `:none;` so as to not turn off accessibility features.
- **Use [semantic](#semantic) custom HTML tags** - for non-layout/structural elements.
- **Use `prefers-reduced-motion`** - for animated and transitioned elements to allow the GUI to obey end-users OS level preferences.
- **Use SVG format whenever possible** - SVGs are extremely light weight and can be _inlined_ with the HTML.
- **Use `mix-blend-mode` with SVGs** whenever possible - This enables SVGs to be controlled dynamically/programmatically and ensures accessibility color contrast ratio of at least 1:4, regardless of the color theme.

<br>

Offsite link HTML example : :

```html
<p>
  This is a paragraph with an
  <a href="https://off-site-list.html" target="_blank">off-site-link</a>.
</p>
```

<br>

</details>
</details>

<details>
  <summary id="inte"><h3>INTEGRATION</h3></summary>

  <details>
   <summary id="frameworks"><h4>FRAMEWORKS</h4></summary>

Angular, Vue, and React demos call the same FFE and BBR data source files.

```
                                     // FBE
                                    /______________________________
                                   /\                              \
                                  /::\  FRAMEWORK DEMO              \
                                 /::::\  D7460N-ANGULAR              \
                          _ _ _ /::::::\                              \
                          \    / ANGULAR\______________________________\ _                     // BBE
              // FFE       \   \::::::::/                              /  \                   /_______
             /______        \   \::::::/   ___________________________/___ \                 /\       \
            /\      \   _ _ _\   \::::/   /\                              \ \    `          /::\       \
`          /::\  UI  \  \     \   \::/   /::\  FRAMEWORK DEMO              \ \    `        /::::\       \
 `        /::::\      \  \     \   \/___/::::\  D7460N-VUE                  \ \    `_ _ _ /::::::\       \
  `_ _ _ /::::::\      \  \     \_ _ _ /::::::\                              \ \    \    /: JSON :\_ _ _ _\
   \    /: HTML :\______\  \     \    /:: VUE :\______________________________\ \    \   \::::::::/       /
    \   \: CSS ::/      /   \     \   \::::::::/                              / _\_ _ \   \::::::/       /
     \   \ JS  :/  UX  /_ _ _\_ _ _\   \::::::/   ___________________________/__  \    \   \::::/       /
      \   \::::/      /       \     \   \::::/   /\                             \  \    \   \::/       / \
       \   \::/      / \       \     \   \::/   /::\  FRAMEWORK DEMO             \  \    \   \/_______/   \
        \   \/______/   \       \     \   \/__ /::::\  D7460N-REACT               \  \    \_ _ _ _ _ _ _ _ \
         \_ _ _ _ _ _ _ _\       \     \_ _ _ /::::::\                             \  \    `                `
          `               `       \     \    /: REACT \ ____________________________\  \    `      DEV      `
           `      DEV      `       \     \   \::::::::/                             /   \    `      SWIM      `
            `      SWIM     `       \     \   \::::::/                             /_ _ _\    `      LANE      `
             `      LANE     `       \_ _ _\   \::::/                             /            `                `
              `               `             \   \::/                             /\
                                             \   \/_____________________________/  \
                                              \                                     \
                                               \_____________________________________\
                                                `                                     `
                                                 `                 DEV                 `
                                                  `                 SWIM                `
                                                   `                 LANE                `
                                                    `                                     `

```

   <details>
    <summary id="Angular"><h4>Angular</h4></summary>
    Coming soon (WIP)
   </details>

   <details>
    <summary id="vue"><h4>Vue.js</h4></summary>
    Coming soon (WIP)
   </details>

   <details>
    <summary id="react"><h4>React</h4></summary>
    Coming soon (WIP)
   </details>

  </details>

  <details>
   <summary id="cms"><h3>CONTENT MANAGEMENT SYSTEMS (CMS)</h3></summary>

   <details>
    <summary id="word"><h4>WordPress</h4></summary>
    Coming soon (WIP)
   </details>

   <details>
    <summary id="joomla"><h4>Joomla</h4></summary>
    Coming soon (WIP)
   </details>

   <details>
    <summary id="drupal"><h4>Drupal</h4></summary>
    Coming soon (WIP)
   </details>

   <details>
    <summary id="magento"><h4>Magento</h4></summary>
    Coming soon (WIP)
   </details>

   <details>
    <summary id="share"><h4>SharePoint</h4></summary>
    Coming soon (WIP)
   </details>

  </details>

 </details>

</details>

<details>
  <summary id="sustain"><h3>SUSTAINABILITY (FUTURE PROOFING)</h3></summary>

> Sustainability is often considered a technical challenge related to optimizing images, videos, and fonts. But what does it mean for designers? How can we guide our design decisions through the lens of sustainability?<br>

[~ Whole system thinking | sustainabilityguide.eu](https://sustainabilityguide.eu/ecodesign/design/)

Future Proofing<br>
(WIP)

</details>

<details>
 <summary id="sec"><h3>SECURITY</h3></summary>

 <details>
  <summary id="csp"><h3>CONTENT SECURITY POLICY (CSP)</h3></summary>

> The HTTP Content-Security-Policy response header allows website administrators to control resources the user agent is allowed to load for a given page. With a few exceptions, policies mostly involve specifying server origins and script endpoints. This helps guard against cross-site scripting attacks (Cross-site_scripting).<br>

[~ Content-Security-Policy | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)

</details>

<details>
<summary id="waf"><h3>WEB APPLICATION FIREWALL (WAF)</h3></summary>

> A web application firewall enhances and complements traditional firewalls which have no visibility into the content of encrypted HTTPS traffic and therefore can’t block dangerous HTTPs streams.
>
> In contrast to traditional firewalls, WAF operates at Layer 7 of the network stack between standard firewalls and web servers, decrypting HTTPS traffic and inspecting the data within. With anomaly detection and lists of attack methods, the web application firewall can block access to web servers when malicious activity is spotted.<br>

[~ What is a Web Application Firewall (WAF) and Why Do You Need One? | progress.com](https://www.progress.com/blogs/what-web-application-firewall-waf-why-you-need-one)

</details>

<details>
<summary id="http3"><h3>HTTP/3 | QUIC</h3></summary>

> QUIC understands that a site is made up of multiple files, and it won’t blight the entire connection just because one file hasn’t finished loading.
>
> The other trend that QUIC follows up on is built-in security. Whereas encryption was optional before (i.e. HTTP or HTTPS) QUIC is always encrypted. It is a given these days that every site should be encrypted — despite the overhead. This isn’t just to ensure that a man in the middle can’t see what type of orange juice you are ordering; it confirms that you are actually talking to your genuine orange juice supplier.<br>

[~ HTTP/3 Is Now a Standard: Why Use It and How to Get Started | thenewstack.io](https://thenewstack.io/http-3-is-now-a-standard-why-use-it-and-how-to-get-started/)

- [What is HTTP/3? | cloudflare.com](https://www.cloudflare.com/learning/performance/what-is-http3/)<br>
- [What is QUIC? | en.wikipedia.org](https://en.wikipedia.org/wiki/QUIC)<br>
- [HTTP/3: the past, the present, and the future | blog.cloudflare.com](https://blog.cloudflare.com/http3-the-past-present-and-future/)
- [A Comprehensive Guide To HTTP/3 And QUIC | debugbear.com](https://www.debugbear.com/blog/http3-quic-protocol-guide)

</details>
</details>

 <!-- <br/>

<h3 id="infra">INFRASTRUCTURE</h3>

> <i>Pictures are worth a thousand words.</i><br>
~ [Fred Bernard](https://en.m.wikipedia.org/wiki/A_picture_is_worth_a_thousand_words)

<br>

Framework first perspective (back to front)
```

// UI/UX integrated with framework : :
     // Monolithic
    // Huge codebase/digital footprint
   // Inflexible/opinionated design/development "happy path"
  // Upgrade/security path controlled by hundreds of dependencies
 // Custom changes break upgrade/security path dooming project


             // END WITH USER  <  <  <  <  <  <  <  <  <  <  < // START WITH FRAMEWORK
            /                                                 /
           // FRONT END                                      /        // BACK END
          /_________________________________________________/        /__________
         /\  <   <   <  \  <   <   < \  <   <   <   <   <   \       /\        ` \
        /::\             \  Build     \  Framework driven    \     /::\      `   \
       /::::\             \  Compile   \  "happy path" design \   /::::\    `     \
_ _ _ /::::::\             \  Serve     \  and development     \_/::::::\  `       \
\    /Bloated:\_____________\____________\______________________\::::::::\`_ _ _ _ _\
 \   \::HTML::/             /            /  GUI, business, and  /::::::::/`         /
  \   \:CSS::/             /            /  data logic          / \::::::/  `       /
   \   \::::/             /            /  integrated with     /   \::::/    `     /
    \   \::/             /            /  Framework           / \   \::/      `   / \
     \   \/_____________/____________/______________________/   \   \/__________/   \
      \_ _ _ _ _ _ _ _ _\_ _ _ _ _  _ _ _ _ _ _\_ _ _ _ _ _ _ _ _\_ _ _ _  _ _ _ _ _ \
      /                 /                      /
     // User           // Made                // GUI,
    // facing         // compatible          // business,
   // product        // with                // and data logic
                    // browsers            // integrated with framework


```

User first perspective (front to back)
```

// UI/UX separated from framework : :
     // Compatible
    // Small codebase/digital footprint
   // Flexible/unopinionated design/development
  // Upgrade/security path NOT controlled by third party dependencies
 // Vanilla so custom changes DON'T break upgrade/security path dooming project


                // START WITH USER  >  >  >  >  >  >  >  >  >  >   // END WITH FRAMEWORK
               /                                                  /
              // FRONT END        // MIDDLE-WARE                 /        // BACK END
             /______             /______________________________/        /__________
            /\      \-   AIR  - /\            \                 \       /\        ` \
           /::\  UI  \  GAP  - /::\  Build     \  Framework      \     /::\      `   \
          /::::\      \       /::::\  Compile   \                 \   /::::\    `     \
   _ _ _ /::::::\      \_ _ _/::::::\  Serve     \                 \_/::::::\  `       \
   \    /: HTML :\______\   /Framework\____________\_________________\::::::::\`_ _ _ _ _\
    \   \: CSS ::/      /   \::::::::/            /                 /::::::::/`         /
     \   \ JS  :/  UX  / \   \::::::/            /  Data logic     / \::::::/  `       /
      \   \::::/      /   \   \::::/            /  only           /   \::::/    `     /
       \   \::/      / \   \   \::/            /                 / \   \::/      `   / \
        \   \/______/   \   \   \/____________/_________________/   \   \/__________/   \
         \_ _ _ _ _ _ _ _\   \_ _ _ _ _ _ _ _ \ _ _ _ _ _ _ _ _ _ _ _\_ _ _ _  _ _ _ _ _ \
         /                                    /
        // JAMstack                          // Framework Agnostic
       // Flexible                          // Angular
      // Modular                           // Vue
     // GUI agnostic                      // React
    // What users see                    // ...
   // GUI & business logic
  // Separation of Concerns
 // Decoupled & Independent
// Semantic custom HTML and native web components for dynamic data hooks


```

Separate HTML from CSS from JS

```

 // Separate, clean, modular, flexible, maintainable
// Buttons just push and fetch data

             // START WITH LEAST POWERFUL LANG > > >  // END WITH REQUIRED POWERFUL LANG
            /                                        /
           // FRONT END                             // MIDDLE-WARE
          /_           __           __             /_______________
         /\ \         /\ \         /\ \-   AIR  - /\
        /::\ \       /::\ \       /::\ \  GAP  - /::\     Build
       /::::\ \     /::::\ \     /::::\ \       /::::\     Compile
 _ _ _/::::::\ \_ _/::::::\ \_ _/::::::\ \_ _ _/::::::\     Serve
 \   /: HTML :\_\ /: CSS  :\_\ /:  JS  :\_\   /Framework\___________
  \  \: only :/ / \: only :/ / \: only :/ /\  \::::::::/         /
   \  \::::::/ /\  \::::::/ /\  \::::::/ /  \  \::::::/         /--
    \  \::::/ /  \  \::::/ /  \  \::::/ /    \  \::::/         /
     \  \::/ /    \  \::/ /    \  \::/ /      \  \::/         /----
      \  \/_/ \    \  \/_/ \    \  \/_/ \      \  \/_________/_____
       \_ _ _ _\    \_ _ _ _\    \_ _ _ _\      \_ _ _ _ _ _ \ _ _
       /             /             /            /            /
      // Semantic   // Modern     // Minimal   /            // Framework uses custom HTML elements as unique selectors vice IDs
     // Custom el  // Classless  // Native    /___
    // Minimal n  // Native     // Fetch data   // Connected to HTML via minimal dynamic data points (withing custom tags)
   // Native     // Usability  // Push data    // Referenced to intuitive custom HTML elements
  // No JS      /_____        // Remote       // Web components (without Shadow DOM)
 // Accessibility    /                       // CSS is already natively scoped (no leakage)
                    // GUI logic
                   // Business logic
                  // Self-aware (natively watches for and response to internal dynamic changes)
                   // :has()
                  // variables
                 // viewport units
                // container queries
               // ...


```

<br>

Better defined developer swimlanes

Front Front END (FFE)<br>
Front Back End (FBE)<br>
Back Front End (BFE)<br>
Back Back End (BBE)

```

                // FFE              // FBE                                  // BFE           // BBE
               /                   /                                       /                /
              // FRONT END        // MIDDLE-WARE                          // BACK          // END
             /______             /______________________________         /_______         /_______
            /\      \-   AIR  - /\            \                 \       /\     ` \       /\     ` \
`          /::\  UI  \  GAP  - /::\  Build     \                 \     /::\   `   \     /::\   `   \
 `        /::::\      \       /::::\  Compile   \                 \   /::::\ `     \   /::::\ `     \
  `_ _ _ /::::::\      \_ _ _/::::::\  Serve     \                 \_/::::::\       \_/::::::\       \
   \    /: HTML :\______\   /Framework\____________\_________________\:PYTHON:\_ _ _ _\DATABASE\_ _ _ _\
    \   \: CSS ::/      /   \::::::::/            /                 /::::::::/       /::::::::/       /
     \   \ JS  :/  UX  / \   \::::::/            /  Data logic     / \::::::/       / \::::::/       /
      \   \::::/      /   \   \::::/            /  only           /   \::::/ `     /   \::::/ `     /
       \   \::/      / \   \   \::/            /                 / \   \::/   `   / \   \::/   `   / \
        \   \/______/   \   \   \/____________/_________________/   \   \/_______/   \   \/_______/   \
         \_ _ _ _ _ _ _ _\   \_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _\_ _ _ _ _ _ _ _ \_ _ _ _ _ _ _ _ \
          `      DEV      `   `                   DEV                 `     DEV        `     DEV        `
           `      SWIM     `   `                   SWIM                `     SWIM       `     SWIM       `
            `      LANE     `   `                   LANE                `     LANE       `     LANE       `
             `               `   `                                       `                `                `


```

<br>

---

<br> -->

<h2 id="principles">GOVERNANCE/PRINCIPLES : :</h2>

<details>
  <summary id="intrinsic"><h3>INTRINSIC DESIGN</h3></summary>

Intrinsic Design is a principle introduced by Jen Simmons at an "Event Apart" event in 2019 titled, [Everything you know about web design has just changed | YouTube.com](https://www.youtube.com/watch?v=jBwBACbRuGY).

Most developers use CSS to control and or lockdown their web UIs. Intrinsic design leverages modern design engineering techniques, fueled by new(<i>er</i>) CSS functionality such as `Grid`, `Flexbox`, `:has()`, `custom-properties(variables)`, and `container-queries` that allow web UIs to **intrinsically** or **naturally** or **natively** present content on its own. Instead of guesstimating `break-points` with hard-coded units, Intrinsic design allows the browser to naturally determine content placement. This approach minimizes code complexity and fosters more maintainable and adaptable solutions.

_Almost as if the web UI is [SELF-AWARE](#self)..._

</details>

<details>
 <summary id="single"><h3>SINGLE RESPONSIBILITY</h3></summary>

The principle states that a class should have only one reason to change and one responsibility. This principle is intended to promote modularity and help developers create easier code to understand, modify, and maintain.

 <br>
 [SOLID: Single Responsibility | dev.to](https://dev.to/ggorantala/solid-single-responsibility-principle-with-examples-h0f)
</details>

<details>
  <summary id="least"><h3>LEAST POWER</h3></summary>

<p>The "Least Power" principle simplifies the codebase and development workflow processes by prioritizing the least powerful core web languages first and core languages before JS frameworks.</p>

> "<i>Many Web technologies are designed to exploit the Rule of Least Power. HTML is intentionally designed not to be a full programming language, so that many different things can be done with an HTML document: software can present the document in various styles, extract tables of contents, index it, and so on. Similarly, CSS is a declarative styling language that is easily analyzed. The Semantic Web is an attempt, largely, to map large quantities of existing data onto a common language so that the data can be analyzed in ways never dreamed of by its creators.</i>"<br>

[~ Web Technologies and the Rule of Least Power | W3.org](https://www.w3.org/2001/tag/doc/leastPower.html)

The Least Power Principle allows developers to more easily separate data or business logic (JavaScript) form GUI logic (HTML/CSS). See [SEPARATION OF CONCERNS](#separation).

Since the D7460N Template separates the HTML and CSS from the JavaScript, it runs natively in the browser with no servers required:

- no building
- no compiling
- and no serving

</details>

<details>
<summary id="separation"><h3>SEPARATION OF CONCERNS</h3></summary>

The D7460N Template follows the "separation of concerns" principle. That is, in the D7460N Template, most (if not all) scripting is separate from the CSS and HTML. This creates an "air gap" between the two, affectively separating the GUI logic (commonly followed design patterns and conventions common among most web application GUIs coupled with ADA [accessibility](#access) and [usability](#usable) guidelines) from the fetch, push, and CRUD data logic, allowing for BOTH to be independently developed, operated, and maintained.

If possible, their should not be any "touch points" between the GUI and data logic as they are defined above. While this may require a "heavier lift" up front without necessarily seeing the benefits right away, the long term strategic benefits and LoE savings are well worth it.

Remember, the goal is to have script free, class free, `div` free semantic HTML. All dynamic content should remotely hook into the HTML via the custom HTML tags.

The smaller the dynamic footprint, (ideally, it is JUST the data or content itself that is dynamic, that loads into the preloaded semantic HTML elements that is watching for it) the more flexible, easily maintainable, and future proofed the GUI will be. This design and development technique forces almost all the GUI hide/show, open/close, and expand/collapse functionality onto semantic HTML and CSS (GUI logic) and data functionality, required for CRUD operations, onto (remote) scripting.

To do this, the HTML should be preloaded up front and shown only when there is content via `:has()`. So the menu doesn't show until the menu items contain content or the right content.

Example:

Semantic HTML menu

```HTML
<ul>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
  <li><a href="#"></a></li>
</ul>

```

CSS

```css

```

Decoupling GUI logic from business logic allows the D7460N Template to be:

- data agnostic
- JS framework agnostic - see [WEB COMPONENTS](#components)
- Scalable
- Modular
- Independent

</details>

<details>
<summary id="perfect"><h3>PERFECT STORM</h3></summary>

**The D7460N Template is a perfect storm of opportunities to affect and inspire positive change** in that it is...
who what when where and why how

The IT web application industry is flush full of monolithic "opinionated" frameworks and low/no-code tools that have virtually killed off innovation. It is a perfect time for an _industry wide refresh/refactor_ and return to user-centric, innovative, minimal independent codebases, and standards driven development.

WHO - developed starting from the user > screen > HTML/CSS/JS > framework > database
WHAT - full featured, standards compliant, sustainable, scalable, flexible, compatible, faster, easier, with a fraction of the codebase
WHEN - majority browser support for CSS feature/functionality allowing for older slower JS equivalents to be replaced
WHERE - at a browser near you
WHY - time for a an _industry wide refresh/refactor_
HOW - follow the principles layout out int this document, such as [separation of concerns](#separation) and returning to standards based development.

(WIP)

</details>

<details>
<summary id="first"><h3>CSS FIRST</h3></summary>

Strongly hinted in the [Least Power](#least) section, but bears emphasizing... _What can't be done in HTML is done in CSS_.

How do you create a modern future-proofed web presence that is more accessible and more enjoyable with less effort, less time, and less resources?

FUTURE PROOF : :<br>
As one of the three core languages web browsers natively understand, CSS is not going away any time soon. The CSS I wrote ten years ago still works today and will work in another 10 years.

FAST : :<br>
CSS is 100 to 1K times faster than JavaScript equivalents.

REACTIVE : :<br>
CSS's always on, always reactive nature combined with newly enable CSS `has();` functionality, allows for web UIs to be "intelligently interactive".

CSS is the driving force behind D7460N design and development. Scripting is purposely minimal so as to avoid negating the natural benefits of such CSS first, data centric design and development. This focus on CSS is neither custom nor new. It is actually the original intent and purpose behind how and why CSS was created.

> <i>HTML and CSS over JS : :</i><br>
>
> <i>Whenever possible, we (Bootstrap) prefer to write HTML and CSS over JavaScript. In general, HTML and CSS are more prolific and accessible to more people of all different experience levels. HTML and CSS are also faster in your browser than JavaScript, and your browser generally provides a great deal of functionality for you.</i>
>
> <i>This principle is our first-class JavaScript API using data attributes. You don’t need to write nearly any JavaScript to use our JavaScript plugins; instead, write HTML.</i>
>
> <i>Lastly, our styles build on the fundamental behaviors of common web elements. Whenever possible, we prefer to use what the browser provides.</i>
>
> <i>The same goes for more complex components. While we could write our own form validation plugin to add classes to a parent element based on an input’s state, thereby allowing us to style the text say red, we prefer using the :valid/:invalid pseudo-elements every browser provides us.</i><br>

[~ HTML and CSS over JS | getbootstrap.com](https://getbootstrap.com/docs/5.3/extend/approach/#html-and-css-over-js)

</details>

---

<br>

<h2 id="dev">DESIGN/DEVELOPMENT TECHNIQUES : :</h2>

<br>

<details>
<summary id="components"><h3>WEB COMPONENTS (native)</h3></summary>

(WIP)

> <i>Web components are custom, reusable web elements which encapsulate functionality, markup structure and styling by using vanilla javascript/HTML/CSS along with native Web APIs.</i><br>

[~ Custom elements teach the browser new tricks while preserving the benefits of HTML](https://web.dev)

Web components allow for JS framework independence, neutrality, and flexibility. For example, if <b>Angular</b> or <b>Vue.js</b> are no longer "the thing", and the team needs to switch to <b>React</b>, they can with relative ease using the D7460N Template. This is because (native) web components are compatible with all web standards compliant JS frameworks.

> <i><b>Why would you want to try Web Components?</b></i>
>
> <i>The actual question you should be asking yourself is: why would you only focus on a single framework that could be replaced anytime soon instead of focusing on the standard the entire industry is setting for the future?</i>
>
> <i>Remember, Web Components are a standard to build on top of, they’ve been approved by the major leaders of this industry and are being actively implemented and pushed forward. You’ll be using Web Components in the future whether you know it or not, better get started understanding them now and get a head start.</i>
>
> <i>Learning about Web Components now is an investment for the future.</i><br>

[~ Web Components are Dead: Long Live Web Components | blog.bitsrc.io](https://blog.bitsrc.io/web-components-are-dead-long-live-web-components-1de76ab4890d)

- [Web Components | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)

</details>

<details>
<summary id="classless"><h3>CLASSLESS CSS</h3></summary>

Classless CSS is a minimalist development technique that allows developers to define [semantic](#semantic) html layouts and form elements in CSS without needing to use class selectors or "hooks" in the HTML. This reduces HTML bloat, page load size, helps boost [SEO](#seo) and helps to keep the HTML clean, readable, and intuitive for developers.

> In 1994, [Håkon Wium Lie](https://en.wikipedia.org/wiki/H%C3%A5kon_Wium_Lie) invented CSS (Cascading Style Sheets) to add extended styles for semantic HTML-based documents. Developers started writing CSS libraries with pre-developed CSS classes to help web developers style HTML pages without writing long CSS source files themselves. As a result, nowadays, most front-end developers style their web pages with fully-featured, class-based CSS frameworks like Bootstrap, Tailwind, Materialize, etc.

https://levelup.gitconnected.com/the-future-of-web-styling-classless-and-class-light-css-0bcd3fadab8f

</details>

<details>
<summary id="logical"><h3>LOGICAL PROPERTIES</h3></summary>

> <i>The CSS logical properties and values module introduces logical properties and values that provide the ability to control layout through logical, rather than physical, direction and dimension mappings. The module also defines logical properties and values for properties previously defined in CSS 2.1.</i>
>
> <i>Logical properties define direction‐relative equivalents of their corresponding physical properties.</i>

(WIP)

- [CSS Logical Properties and Values Level 1 | drafts.csswg.org](https://drafts.csswg.org/css-logical/)<br>
- [CSS logical properties and values | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)<br>
- [CSS Logical Properties and Values | css-tricks.com](https://css-tricks.com/css-logical-properties-and-values/)

</details>

<details>
<summary id="layer"><h3>CSS @LAYER</h3></summary>

> <i>Using `@layer`, we can define groups of rule sets with a pre-determined order to reduce the likelihood of conflicts. Being able to assign this order largely prevents the need to use `!important` and enables easier overrides of inherited styles from third-party or framework stylesheets.</i><br>

[~ Modern CSS For Dynamic Component-Based Architecture](https://moderncss.dev/modern-css-for-dynamic-component-based-architecture/)

CSS `@layer` is utilized by the D7460N Template to lessen the precedence of the default CSS. This allows for custom, third party, and / or other themes and / or auto-page-builders to take precedent and override default D7460N Template styles. In other words, easier integration with other projects and / or with other tools.

> The `@layer` CSS at-rule is used to declare a cascade layer and can also be used to define the order of precedence in case of multiple cascade layers.
>
> Rules within a cascade layer cascade together, giving more control over the cascade to web developers. Any styles not in a layer are gathered together and placed into a single anonymous layer that comes after all the declared layers, named and anonymous. This means that any styles declared outside of a layer will override styles declared in a layer, regardless of specificity.<br>

[~ CSS @layer | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer)

`@layer` Order

```
@layer reset, theme, global, layout, components, utilities, states;

```

</details>

<details>
<summary id="supports"><h3>CSS @SUPPORTS</h3></summary>

CSS `@support` is utilized for feature detection and <b>Progressive Enhancement</b>.

The `@supports` CSS at-rule lets you specify CSS declarations that depend on a browser's support for CSS features. Using this at-rule is commonly called a feature query. The rule must be placed at the top level of your code or nested inside any other conditional group at-rule.<br >
[CSS @supports | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)

(WIP)

</details>

<details>
<summary id="semantic"><h3>SEMANTIC HTML ELEMENTS</h3></summary>

Web accessibility and usability utilize semantic structural HTML. Semantic structural HTML lays the foundation upon which assistive and other technologies leverage, build, and operate successfully.

> Elements in HTML can have semantics, meaning they are one of several predefined things, and not another. Semantics answer the question ‘what is this thing?’, out of a list of standardized things. This information is then relied upon by browsers and assistive technologies in their UIs.<br>

[~ Semantics in HTML | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

- https://hidde.blog/popover-semantics/<br>
- https://www.pluralsight.com/guides/semantic-html

D7460N Template features a custom tag element wrapper to facilitate multiple integration options when integrating with existing projects using JS frameworks, such as Angular, Vue.js, and React.

HTML : :

```html
<html lang="EN">
  <head>
    <title></title>
  </head>
  <body>
    <app-container>
      <!-- start custom HTML wrapper tag -->
      <header></header>
      <main>
        <article>
          <h1></h1>
          <desc></desc>
          <section>
            <h2></h2>
            <p></p>
          </section>
          <section>
            <h2></h2>
            <ul>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </section>
        </article>
      </main>
      <aside>
        <h3></h3>
        <p></p>
      </aside>
      <footer></footer>
    </app-container>
    <!-- end custom HTML wrapper tag -->
  </body>
</html>
```

</details>

<details>
<summary id="divless"><h3>DIV-LESS HTML</h3></summary>

> <i>DIVs are played out. We all love our `<div>` tags. They've been around for decades, and for decades they've been the go-to element when you need to wrap some stuff in a block for styling or structural purposes. It's still very common to look through production websites.</i><br>

[~ Stop Using So Many Divs - An Intro to Semantic HTML | dev.to](https://dev.to/kenbellows/stop-using-so-many-divs-an-intro-to-semantic-html-3i9i)

(WIP)

</details>

<details>
<summary id="custom"><h3>CUSTOM HTML ELEMENTS</h3></summary>

Custom HTML elements are alphanumeric hyphenated phrases that are used to extend HTML with [semantic](#semantic) meaning, reduce HTML bloat, and provide development hooks in-leu-of CSS classes (see [Classless CSS](#classless)).

[Custom Elements Without JavaScript? | blog.jim-nielsen.com](https://blog.jim-nielsen.com/2021/custom-elements-without-js/)

HTML : :

```html
<app-container>
  <app-panel>
    <panel-list>
      <list-item>
        <list-cell>List item 01 column 01</list-cell>
        <list-cell>List item 01 column 02</list-cell>
        <list-cell>List item 01 column 03</list-cell>
        <list-cell>List item 01 column 04</list-cell>
        <list-cell>List item 01 column 05</list-cell>
      </list-item>
      <list-item>
        <list-cell>List item 02 column 01</list-cell>
        <list-cell>List item 02 column 02</list-cell>
        <list-cell>List item 02 column 03</list-cell>
        <list-cell>List item 02 column 04</list-cell>
        <list-cell>List item 02 column 05</list-cell>
      </list-item>
      <list-item>
        <list-cell>List item 03 column 01</list-cell>
        <list-cell>List item 03 column 02</list-cell>
        <list-cell>List item 03 column 03</list-cell>
        <list-cell>List item 03 column 04</list-cell>
        <list-cell>List item 03 column 05</list-cell>
      </list-item>
    </panel-list>
  </app-panel>
</app-container>
```

</details>

<details>
<summary id="variables"><h3>CSS CUSTOM PROPERTIES (AKA CSS VARIABLES)</h3></summary>

The D7460N Template leverages CSS custom properties or variables to predefine layout states, color theme, user preferences, and many other dynamic GUI logic features.

Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that contain specific values to be reused throughout a document. They are set using custom property notation (e.g., `--main-color: black;`) and are accessed using the `var()` function (e.g., `color: var(--main-color);`).<br>
[~ Using CSS Custom Properties | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

(WIP)

</details>

<details>
<summary id="responsive"><h3>RESPONSIVE DESIGN</h3></summary>

(WIP)

Responsive or adaptive web design provides optimal experiences, easy reading, and intuitive navigation with a minimum of resizing on difference media devices such as desktops, laptops, tablets, and phones regardless of OS. The D7460N Template works on every device (WIP), and every screen size, no matter how large or small.

Responsive web design (RWD) is a web design approach to make web pages render well on all screen sizes and resolutions while ensuring good usability. It is the way to design for a multi-device web. In this article, we'll help you understand some techniques that can be used to master it.<br>
[~ Responsive Design | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)

</details>

<details>
<summary id="progress"><h3>PROGRESSIVE ENHANCEMENT</h3></summary>

**Progressive Enhancement** is a design philosophy that provides a baseline of essential content and functionality to as many users as possible, while delivering the best possible experience only to users of the most modern browsers that can run all the required code.

The word _progressive_ in _progressive enhancement_ means creating and design that achieves a simpler-but-still-usable experience for end-users of older browsers and devices with limited capabilities, while at the same time being a design that **progresses the user experience** to a more compelling, fully-featured experience for users of new browsers and devices with richer capabilities.

For example, the current production version of the Firefox browser does not yet support native CSS scroll-based animation without a "flag" to enable it. In an upcoming version that does support it, a scroll-progress indicator/back-to-top button will be visible when end-users scroll through individual sections that contain scrollable content, just like it does in other browsers that already support this underlying CSS functionality.

(WIP)

This is done with CSS [@support](#support) to detect feature support.

Feature detection is generally used to determine whether browsers can handle more modern functionality, while polyfills are often used to "fill-in" for missing features with JavaScript.

> **Progressive Enhancement** is a useful technique that allows web developers to focus on developing the best possible websites while making websites work multiple unknown user agents. **Graceful degradation** is related but not the same thing and is often seen as going in the opposite direction to progressive enhancement. In reality, both approaches are valid and can often complement one another.<br>

[~ Progressive Enhancement | MDN Web Docs](https://developer.mozilla.com/en-US/docs/Glassary/Progressive_Enhancement/)

</details>

<details>
<summary id="minimal"><h3>MINIMAL THIRD PARTY DEPENDENCIES</h3></summary>

Third party dependencies such as JS libraries like jQuery, EXT.js, Prototype.js and JavaScript frameworks like Angular, Vue, and React are helpful for launching features and or entire software projects quickly and when browsers don't support needed functionality natively.

In my experience, third party dependencies are also the eventual _death-knell_ of almost every software feature or software project I've ever been on.

One of the major reasons for this is that third party dependencies (especially JS frameworks that rely on tens, if not hundreds, of dependencies themselves from all over the world) are subject to and controlled by disassociated unwitting third party developers with diverse and / or even competing priorities, schedules, and security concerns.

Third party dependencies often force design and development decisions down limited and / or inflexible "happy paths" to work as needed (_AKA_ "opinionated"), eventually leading to compromised and / or limited feature options or development "dead-ends" in the near and or long-term feature planning and development life cycle of the project.

In my experience (again), at the end of the day, when all is said and done, the time and effort for development rework and workarounds, and resulting less stable error-prone codebase and associated documentation and eventual added ramp-up time for new DEVs, far out way alternative less monolithic "Thor's hammer for a nail" AKA "Mjölnir" approach.

"Opinionated" functionality and or features often must be customized or retrofitted into place, thus breaking the "update/upgrade path" to future third-party updates.

The nature of iterative development is that third-party dependencies will inevitably have critical updates that include a myriad of (sometimes breaking) code changes and security vulnerability fixes.

The software project is now stuck with a security vulnerable third-party dependency codebase, having broken the "update/upgrade path".

Additional third-party software and build processes (themselves dependent on third party software/plugins/dependencies) are necessary to track and keep them all synced and up to date.

Even so, if just one dependency fails to maintain, update, and sync their code and becomes incompatible with other dependents, the entire project can't move forward. A project depending on dozens, if not hundreds of third, fourth, and even fifth party dependencies may get up and running quickly, but at what cost if said project will grind to a screeching halt under its own weight and need to be rebuilt from scratch?

_There is a better way!_

</details>

<details>
<summary id="squishy"><h3>SQUISHY LAYOUT</h3></summary>

The D7460N Template leverages an undocumented but valid **3 STEP** layout technique using just native HTML and CSS. This technique allows for dynamic functionality normally relegated to and implemented with expensive JavaScript tracking and poling. This technique maximizes layout flexibility, [RESPONSIVEness](#responsive), and sets the groundwork for [end-user customization options](#custom). All while avoiding declaring, poling, or otherwise calculating heights and or widths throughout the GUI with slower JavaScript.

<h4>STEP 1 : :</h4>

Rather than declaring height for DOM elements, set the inner most child DOM element's padding or margin (such as buttons and form elements) to `padding: 1rem;`. This allows the DOM elements that govern interaction and content to grow on their own, up to the height of the browser, minus structural layout wrapper elements.

<h4>STEP 2 : :</h4>

Set the layout/structure HTML DOM wrapper element `<app-container>` to `height: 100vh;`. This pushes the structural layout elements, such as `<header>`, `<app-container>`, and `<footer>` to vertically fill the entire browser. This allows the remaining middle space to naturally adjust and natively scroll when overflowing content.

<h4>STEP 3 : :</h4>

Set all descendent structural layout elements that do not adjust or scroll when overflowing to `overflow: hidden;`. Then set the DOM elements that should adjust or scroll when overflowing to `overflow: auto;`.

For example, in D7460N Template's case, that would be : :

HTML : :

```html
<html lang="en">
  <!-- set to overflow: hidden; -->
  <body>
    <!-- set to overflow: hidden; -->
    <app-container>
      <!-- set to overflow: hidden; -->
      <main>
        <!-- set to overflow: hidden; -->
        <ul>
          <!-- set to overflow: auto; -->
          <li>List item one</li>
          <li>List item two</li>
          <li>List item three</li>
          <li>List item four</li>
          <li>List item five</li>
        </ul>
      </main>
    </app-container>
  </body>
</html>
```

`<html>`, `<body>`, `<app-container>`, and `<main>` are all set to `overflow: hidden;`. Only `<ul>` is set to `overflow: auto;`

<br>

CSS : :

```css
html,
body,
app-container,
main {
  overflow: hidden;
}

ul {
  overflow: auto;
}
```

This technique:

- allows for layout for overflow content natively with no JavaScript or third-party dependencies
- sets up browser native behavior for variable height content _(no more expensive JavaScript poling for element height)_
- allows for sticky header and footer without markup or scripting with slower JavaScript workarounds

</details>

<details>
<summary id="self"><h3>SELF-AWARE</h3></summary>

(WIP)

What if a web GUI could natively (no third-party plug-ins or dependencies) knows what is happening inside it, when it happens, and what to do about it? All without JavaScript? We would not have to handle each state of the DOM, resulting in less logic and code to write.

- [Hiding an Element If Its Empty | tobiasahlin.com](https://tobiasahlin.com/blog/hiding-an-element-if-its-empty/)

It would : :

- revolutionize web design/development as we know it. Web GUIs would largely run themselves, making decisions about how they behave depending on the data (data/business logic) occurring inside them
- split web design/development in half along the "separation of concerns" divide so sharply and completely that buttons would do nothing but fetch data
- work with JavaScript disabled (pure CSS), the "Holy Grail" of [Accessibility](#access)
- result in automated templates for designers, far less code logic for developers, smaller digital footprint, and a much richer experience for end-users.

<b>Web browsers have the ability to persistently and actively watch for and react to (live without penalty) changes in the DOM. All without the use of heavy slow JS frameworks or any front-end or back-end scripting.</b>

<i>This is a natural function of</i> <b>CSS</b>.

For example, the `:has()` pseudo-class function allows for watching one or more combinations of DOM elements or selectors and instantly act on OTHER disassociated selectors and even parent selectors.

[`:has()` pseudo-class function | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)

</details>

<details>
<summary id="loading"><h3>NATURAL "TRUTHFUL" LOADING STATE</h3></summary>

Between when an end-user clicks a button to fetch data and when the data arrives and is ready to be displayed, is a natural built-in "truthful" loading state where loading spinners and / or helpful informative messages can be displayed. No JavaScript or third-party plug-ins or dependencies needed.

This built-in natural loading state can be used to communicate to end-users what is happening while they wait for the data to load. For example, if after a certain set time period, maybe 5s or so (whatever is natural but not spammy), a truthful message such as...

> <i>It is taking an unusual amount of time for data to arrive.<br>
> There maybe something wrong.<br>
> If this persists, please contact...</i>

All without a single line of scripting from the back-end or front-end.

Of course, scripting can be added to enhance and or add even more functionality.

The default D7460N Template automatically shows a minimal CSS only loading animation to clicked buttons and links during the loading state. No scripting needed.

[Loading state for links | codepen.io](https://codepen.io/dragontheory/pen/JjorrKL)<br>
[Loading state for buttons | codepen.io](https://codepen.io/dragontheory/pen/NJOzdX)

</details>

<details>
<summary id="container"><h3>CONTAINER QUERIES</h3></summary>

(WIP)

> Container queries enable you to apply styles to an element based on the size of the element's container. If, for example, a container has less space available in the surrounding context, you can hide certain elements or use smaller fonts. Container queries are an alternative to media queries, which apply styles to elements based on viewport size or other device characteristics.<br>

[~ CSS Container Queries | MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries)

> A new approach to responsive design is upon us and follows a Component-Driven (CDD) pattern. CDD is not a new concept. For decades, modularization has been a fundamental principle of software engineering.<br> 

[~ A Complete Guide To CSS Container Queries | lambdatest.com](https://www.lambdatest.com/blog/css-container-queries/)

</details>

<details>
<summary id="style"><h3>STYLE QUERIES</h3></summary>

> The [CSS Containment Module Level 3 spec | drafts.csswg.org](https://drafts.csswg.org/css-contain-3/), which covers size and style queries, allows for any styles to be queried from a parent, including property and value pairs such as `font-weight: 800`. However, in the rollout of this feature, style queries currently only work with CSS custom property values. This is still very useful for combining styles and separating data from design. Let’s take a look at how you use style queries with CSS custom properties.
>
> Style queries are particularly useful when you either have a reusable component with multiple variations, or when you don’t have control over all of your styles but need to apply changes in certain cases.
>
> There’s a structural benefit of separating the data layer (DOM that would be rendered on the page) from the styles applied. The styles are written as possible variants that live within the components style, while an endpoint could send the data that it would then use to style the component by.<br>

[~ Getting Started with Style Queries | developer.chrome.com](https://developer.chrome.com/blog/style-queries/)

- [A Primer On CSS Container Queries | smashingmagazine.com](https://www.smashingmagazine.com/2021/05/complete-guide-css-container-queries/)
- [CSS Style Queries | ishadeed.com](https://ishadeed.com/article/css-container-style-queries/)
- [CSS Containment Module Level 3 | drafts.csswg.org](https://drafts.csswg.org/css-contain-3/)

</details>

<details>
<summary id="count"><h3>QUANTITY QUERIES</h3></summary>

> The CSS `:has()` selector has unlocked a bunch of new possibilities to select elements using CSS. A while ago I detailed how you can select elements based on the number of children they have using CSS `:has()`. Today we’ll look into using `:has()` to select the first, second, …, last element from an “island of elements” that all have a certain class.

https://www.bram.us/2022/12/13/quantity-queries-for-islands-of-elements-with-the-same-class-thanks-to-css-has/

https://www.smashingmagazine.com/2023/01/level-up-css-skills-has-selector/

(WIP)

</details>

<details>
<summary id="custom"><h3>CUSTOMIZATION</h3></summary>

Allow end-users to feel like they can make D7460N their own, through customization options.

Customization options : :

- System/dark/light/high-contrast modes
- Data/text size
- Data-text density (spacious, comfortable, compact)
- Save cross session

<h3>SECRET PERFORMANCE MODE</h3>

Performance mode options appear only when certain performance criteria are present. These are tested via CSS feature queries and other validations are validated.

https://codepen.io/dragontheory/details/jOvBLaW

</details>

<details>
<summary id="custom"><h3>FLUID TYPOGRAPHY</h3></summary>

> Typography is a very important aspect of a website, setting the tone and adding aesthetic appeal. The use of typographic elements like scale, spacing, and size can impact usability, readability, and accessibility. In this article, we’ll focus on the first element: scale.

https://blog.logrocket.com/fluid-vs-responsive-typography-css-clamp/


</details>

---

<br>

<h2 id="seo">SEARCH ENGINE OPTIMIZATION (SEO) : :</h2>

> Semantic HTML tags are important for SEO (search engine optimization) because they indicate the role of the content within the tags.
>
> That information gives search engine crawlers, like Googlebot, a better understanding of your content. This increases the chances that your content will be selected as a candidate for ranking on the search engine results page (SERP) for relevant keywords.
>
> To put it simply, pages with correctly implemented semantic HTML have an advantage in SEO over those that don’t.<br>

[~ Semantic HTML5 Guide | semrush.com](https://www.semrush.com/blog/semantic-html5-guide/)

...and or with semantically meaningless `<div>` elements. (see [DIV-less](#divless))

(WIP)

<br>

---

<br>

<h2 id="style-">STYLE GUIDE : :</h2>

<br>

<details>
<summary id="themes"><h3>COLOR THEMES</h3></summary>

D7460N color themes are independent from the GUI and are set via [CSS Variables](#variables). Light and dark version are provided for each color theme.

Absolute black `#000000` and absolute white `#FFFFFF` are reserved colors for accent, shading, and 3D angled perspectives.

Base theme : :

```css
awaiting base theme CSS
```

</details>

<details>
<summary id="corporate"><h3>CORPORATE BRANDING</h3></summary>

LOGO : :

The D7460N logo conforms to the following requirements : :

- Convey or represent the idea, purpose, and or action of the web application
- Two at most, (preferably one) reversible colors (light/dark themes)
- Readable (text based)/recognizable (symbol based) at small (16x16px), and large (poster) sizes
- Lossless visual quality when resizing
- Dynamically maintain web application color scheme
- Dynamically maintain ADA accessibility contrast standard
- No historical context
- No political context
- No relational context
- No copyright

> <span id="logo">NOTE : : Accessibility requirements do not apply to logos and or incidental graphics, but is nevertheless best practices for [Usability](#usable).<br>

[Color and Contrast | accessibility.digital.gov](https://accessiblity.digital.gov/visual-design/color-and-contrast/)

The D7460N logo changes color dynamically depending on its `background-color` so as to maintain the contextual theme and standard accessibility contrast ratio of `4.5:1`. The color of `#999999` is defaulted as a safe fallback color that works in both light and dark themes. Note: (see [Accessibility](#access) note above).

</details>

---

<br>

<h2 id="arc">ARCHITECTURE : :</h2>

<br>

<details>
<summary id="micro"><h3>MICRO-FRONTEND</h3></summary>

> Micro Frontends is an architectural pattern that draws inspiration from microservices, focusing specifically on the front-end layer. It involves breaking down a monolithic front-end application into smaller, loosely coupled, and independently deployable components.

https://medium.com/appfoster/a-comprehensive-guide-to-micro-frontend-architecture-cc0e31e0c053

(WIP)

D7460N Template is a static Single Page Application (SPA) GUI with a MICRO-FRONTEND architecture.

</details>

<details>
<summary id="jam"><h3>JAMStack</h3></summary>

> Jamstack is an architectural approach that decouples the web experience layer from data and business logic, improving flexibility, scalability, performance, and maintainability.
>
>Jamstack removes the need for business logic to dictate the web experience.
>
>It enables a composable architecture for the web where custom logic and 3rd party services are consumed through APIs.

https://jamstack.org/

(WIP)

D7460N Template is a static Single Page Application (SPA) GUI with a JAMStack architecture, mainly for front-loading static resources.

</details>

<details>
<summary id="html"><h3>HTML/CSS</h3></summary>

To separate and isolate GUI logic from business logic, the D7460N GUI is strictly separated into two exclusive halves. The HTML/CSS (GUI logic) and JavaScript (business logic).

There should be minimal to no JavaScript in the HTML. What scripting that is there in the HTML is to assist/enhance/polyfill the GUI logic. Even so, it is done so as to not slow down the 100 to 1000 times faster CSS.

This works hand-in-hand with other utilized techniques to create an "air gap" between the two to allow each to benefit from modularity and independence. They can be worked on in parallel or in tandem without directly affecting the other.

This decoupling allows for future GUI updates to be "refaced" not "replaced".

This also enforces a development strategy on either side to remain exclusive and thus remain modular and minimally connected.

The two halves are connected only via the IDs in the static (JAMStack) front-loaded HTML.

(WIP)

</details>

---

<br>

<h2 id="spa">SINGLE PAGE APPLICATION : :</h2>

<br>

<details>
<summary id="perspective"><h3>PERSPECTIVE</h3></summary>

Single Page Applications are defined differently depending on context. In web design/layout world, a SPA is a web application designed and laid out using techniques that allow end-users access to all information and or functionality without ever leaving the _single page_ they are on. This includes not using the overused dreaded modal dialogue, if at all possible.

This is an important usability technique in that it allows for uninterrupted concentration and workflow for end-users. This also vastly simplifies navigation and page/keyboard controls and nullifies the need for developing content routers, saving time, LoE, and complexity

</details>

<details>
<summary id="alt"><h3>ALTERNATE LAYOUTS</h3></summary>

D7460N has optional alternate layout configurations that optimize master/detail workflow conventions from left to right and right to left.

(WIP)

</details>

---

<br>

<details>
<summary id="pwa"><h2>PROGRESSIVE WEB APPLICATION (PWA) : :</h2></summary>

<br>

> A Progressive Web App (PWA) is a web app that uses progressive enhancement to provide users with a more reliable experience, uses new capabilities to provide a more integrated experience, and can be installed. And, because it's a web app, it can reach anyone, anywhere, on any device, all with a single codebase. Once installed, a PWA looks like any other app, specifically:
>
> - It has an icon on the home screen, app launcher, launchpad, or start menu.
> - It appears when you search for apps on the device.
> - It opens in a standalone window, wholly separated from a browser's user interface.
> - It has access to higher levels of integration with the OS, for example, URL handling or title bar customization.
> - It works offline.<br>

[~ Progressive Web Apps | web.dev](https://web.dev/learn/pwa/progressive-web-apps/)

> PWAs are websites that are progressively enhanced to function like installed, native apps on supporting platforms, while functioning like regular websites on other browsers.
>
> Progressive Web Apps (PWAs) provide access to open web technologies, to provide cross-platform interoperability. PWAs provide users with an app-like experience that’s customized for their devices.<br>

[~ Progressive Web Applications: The Best Of Web And Native | inrhythm.com](https://www.inrhythm.com/pwas-best-of-web-and-native/)

<br>

<details>
<summary id="cross"><h3>CROSS-PLATFORM-INTEROPERABILITY</h3></summary>

(WIP)

</details>

<details>
<summary id="immersive"><h3>IMMERSIVE EXPERIENCE</h3></summary>

(WIP)

These new web development capabilities provide great opportunities to build immersive experiences that deeply integrate with the desktop operating system.

</details>

<details>
<summary id="progress"><h3>PROGRESSIVELY ENHANCED</h3></summary>

(WIP)

PWAs are websites that are progressively enhanced to function like installed, native apps on supporting platforms, while functioning like regular website on other browsers.

</details>

<details>
<summary id="desktop"><h3>IT'S A DESKTOP APP</h3></summary>

The qualities of a PWA combine the best of the web and compiled apps. PWAs run in browsers, like websites. But PWAs also have access to desktop features.

For example : :

- A PWA can still work when the device is offline
- PWAs can be installed on the operating system
- PWAs support push notifications and periodic updates (continuous integration)
- PWAs can access hardware features

When installed, PWAs are just like other apps on Windows.

For example : :

- A PWA can be added to the start menu
- A PWA can be pinned to the task bar
- PWAs can handle file directories and files
- PWAs can run on start-up when end-users sign-in

</details>

<details>
<summary id="website"><h3>IT'S A WEBSITE</h3></summary>

PWAs have the same functionality and reach as websites:

- PWAs can be indexed by search engines
- A PWA can be linked to and from other websites and web applications
- A PWA can work on all devices, **from a single code base** **[ company goal ]**
- PWAs have a much lower cross-platform development cost than compiled apps that require a specific codebase for each platform, such as a separate codebase for Android, for iOS, for each desktop operating system

</details>

<details>
<summary id="advantages"><h3>ADVANTAGES</h3></summary>

A fully capable Progressive Web Application can provide the following advantages for end-users:

- **Discoverable** - The web application is discoverable from search results and supporting app stores
- **Installable** - Pin and launch the app from the home screen, Start menu, and the Taskbar
- **Re-engageable** - The app can receive push notifications, even when the app isn't active
- **Network Independent** - The app will work offline or in "low-network conditions"
- **Progressive** - The user experience of the app scales up or down with device capabilities
- **Safe** - The app provides a secure `HTTPS` endpoint and other safeguards
- **Responsive** - The app adapts to the user's screen or orientation and input method
- **Linkable** - Share and launch the app from a standard link

</details>
</details>

<br>

---

<br>

<h2 id="compatible">BROWSER COMPATIBILITY : :</h2>

<br>

- Chrome Version 110.0.5481.78 (Official Build) (64-bit)
- Edge Version 110.0.1587.46 (Official Build) (64-bit)
- Firefox Version 102.3.0esr (Official Build) (64-bit)
- _Not you Internet Explorer (IE)_

<br>

---

<br>
<h2 id="directory">DIRECTORY STRUCTURE : :</h2>

<br>

(WIP)
