<div align="center">

<!-- ╔══════════════════════════════════════════════════╗
     ║          CUSTOM ANIMATED SVG BANNER             ║
     ╚══════════════════════════════════════════════════╝ -->

<svg width="900" height="170" viewBox="0 0 900 170" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- Shifting background gradient -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a001f">
        <animate attributeName="stop-color" values="#0a001f;#001a2e;#0d0025;#001020;#0a001f" dur="8s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%" style="stop-color:#050d2e">
        <animate attributeName="stop-color" values="#050d2e;#0a1a00;#1a0030;#002040;#050d2e" dur="8s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#1a0030">
        <animate attributeName="stop-color" values="#1a0030;#002040;#0a001f;#001a10;#1a0030" dur="8s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>

    <!-- Name gradient — animates hue -->
    <linearGradient id="nameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#00f5ff">
        <animate attributeName="stop-color" values="#00f5ff;#ff00ea;#ffe600;#00f5ff" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%"  style="stop-color:#bf5fff">
        <animate attributeName="stop-color" values="#bf5fff;#00f5ff;#ff6a00;#bf5fff" dur="4s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#ff3cac">
        <animate attributeName="stop-color" values="#ff3cac;#ffe600;#00f5ff;#ff3cac" dur="4s" repeatCount="indefinite"/>
      </stop>
    </linearGradient>

    <!-- Scanline overlay gradient -->
    <linearGradient id="scanGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%"   style="stop-color:#00f5ff;stop-opacity:0.04"/>
      <stop offset="50%"  style="stop-color:#ff3cac;stop-opacity:0.03"/>
      <stop offset="100%" style="stop-color:#00f5ff;stop-opacity:0.04"/>
    </linearGradient>

    <!-- Edge shimmer -->
    <linearGradient id="edgeShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%"   style="stop-color:#00f5ff;stop-opacity:0"/>
      <stop offset="20%"  style="stop-color:#00f5ff;stop-opacity:0">
        <animate attributeName="offset" values="0.1;0.9;0.1" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="50%"  style="stop-color:#bf5fff;stop-opacity:1">
        <animate attributeName="offset" values="0.3;0.95;0.3" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="80%"  style="stop-color:#ff3cac;stop-opacity:0">
        <animate attributeName="offset" values="0.7;1.0;0.7" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="stop-opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
      </stop>
      <stop offset="100%" style="stop-color:#ff3cac;stop-opacity:0"/>
    </linearGradient>

    <!-- Glow filters -->
    <filter id="nameGlow" x="-15%" y="-40%" width="130%" height="180%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="lineGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2.5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="particleGlow">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- ── BACKGROUND ── -->
  <rect width="900" height="170" fill="url(#bgGrad)" rx="12"/>

  <!-- Scanlines texture -->
  <rect width="900" height="170" fill="url(#scanGrad)" rx="12"/>

  <!-- ── FLOATING PARTICLES ── -->
  <!-- Cyan particles -->
  <circle cx="80"  cy="30"  r="1.5" fill="#00f5ff" opacity="0.7" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;5,-15;-3,10;0,0" dur="6s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0.2;0.9;0.7" dur="6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="200" cy="140" r="1.5" fill="#00f5ff" opacity="0.5" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;-8,12;6,-8;0,0" dur="7s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.9;0.2;0.5" dur="7s" repeatCount="indefinite"/>
  </circle>
  <circle cx="350" cy="20"  r="1"   fill="#bf5fff" opacity="0.8" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;10,8;-5,15;0,0" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.8;0.1;0.8;0.8" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="600" cy="155" r="1.5" fill="#ff3cac" opacity="0.6" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;-6,-10;8,5;0,0" dur="8s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;1;0.3;0.6" dur="8s" repeatCount="indefinite"/>
  </circle>
  <circle cx="750" cy="25"  r="1"   fill="#ffe600" opacity="0.7" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;4,12;-7,-6;0,0" dur="6.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0.2;1;0.7" dur="6.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="850" cy="130" r="1.5" fill="#00f5ff" opacity="0.5" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;-10,6;4,-12;0,0" dur="9s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.9;0.3;0.5" dur="9s" repeatCount="indefinite"/>
  </circle>
  <circle cx="450" cy="160" r="1"   fill="#ff3cac" opacity="0.6" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;8,-10;-4,6;0,0" dur="7.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="130" cy="90"  r="1"   fill="#ffe600" opacity="0.5" filter="url(#particleGlow)">
    <animateTransform attributeName="transform" type="translate" values="0,0;6,8;-3,-5;0,0" dur="5.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;1;0.2;0.5" dur="5.5s" repeatCount="indefinite"/>
  </circle>

  <!-- ── LEFT CIRCUIT BOARD ── -->
  <g filter="url(#lineGlow)">
    <!-- Main traces - cyan -->
    <polyline points="0,32 52,32 52,58 95,58" stroke="#00f5ff" stroke-width="1.2" fill="none" opacity="0.35"/>
    <polyline points="0,65 38,65 38,92 78,92" stroke="#00f5ff" stroke-width="1.2" fill="none" opacity="0.30"/>
    <polyline points="0,108 58,108 58,128 92,128" stroke="#00f5ff" stroke-width="1.2" fill="none" opacity="0.28"/>
    <polyline points="0,145 42,145 42,108" stroke="#00f5ff" stroke-width="1" fill="none" opacity="0.22"/>
    <line x1="118" y1="0"  x2="118" y2="32"  stroke="#00f5ff" stroke-width="1" opacity="0.25"/>
    <line x1="148" y1="58" x2="148" y2="28"  stroke="#00f5ff" stroke-width="1" opacity="0.22"/>
    <line x1="160" y1="92" x2="160" y2="170" stroke="#00f5ff" stroke-width="1" opacity="0.20"/>

    <!-- Animated data pulse — LEFT cyan -->
    <circle r="3" fill="#00f5ff" opacity="0.9" filter="url(#dotGlow)">
      <animateMotion dur="3s" repeatCount="indefinite" path="M0,32 L52,32 L52,58 L95,58"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle r="2.5" fill="#bf5fff" opacity="0.8" filter="url(#dotGlow)">
      <animateMotion dur="4s" repeatCount="indefinite" begin="1.5s" path="M0,65 L38,65 L38,92 L78,92"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="1.5s" repeatCount="indefinite"/>
    </circle>
    <circle r="2" fill="#00f5ff" opacity="0.7" filter="url(#dotGlow)">
      <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.8s" path="M0,108 L58,108 L58,128 L92,128"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="3.5s" begin="0.8s" repeatCount="indefinite"/>
    </circle>

    <!-- Static glowing nodes -->
    <circle cx="52"  cy="32"  r="3" fill="#00f5ff" opacity="0.6" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.6;1;0.4;0.6" dur="2.1s" repeatCount="indefinite"/>
    </circle>
    <circle cx="95"  cy="58"  r="2.5" fill="#00f5ff" opacity="0.5" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.5;0.9;0.3;0.5" dur="2.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="38"  cy="65"  r="2.5" fill="#bf5fff" opacity="0.55" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.55;1;0.3;0.55" dur="1.9s" repeatCount="indefinite"/>
    </circle>
    <circle cx="78"  cy="92"  r="3"   fill="#bf5fff" opacity="0.5" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.5;0.9;0.2;0.5" dur="3.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="58"  cy="108" r="2.5" fill="#00f5ff" opacity="0.45" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.45;1;0.3;0.45" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <!-- Pulse rings -->
    <circle cx="78" cy="92" r="3" fill="none" stroke="#bf5fff" stroke-width="1">
      <animate attributeName="r" values="3;12;3" dur="3s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0;0.8" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="52" cy="32" r="3" fill="none" stroke="#00f5ff" stroke-width="1">
      <animate attributeName="r" values="3;10;3" dur="2.5s" begin="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;0;0.7" dur="2.5s" begin="1s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- ── RIGHT CIRCUIT BOARD ── -->
  <g filter="url(#lineGlow)">
    <!-- Main traces - pink/magenta -->
    <polyline points="900,32 848,32 848,58 805,58" stroke="#ff3cac" stroke-width="1.2" fill="none" opacity="0.35"/>
    <polyline points="900,65 862,65 862,92 822,92" stroke="#ff3cac" stroke-width="1.2" fill="none" opacity="0.30"/>
    <polyline points="900,108 842,108 842,128 808,128" stroke="#ff3cac" stroke-width="1.2" fill="none" opacity="0.28"/>
    <polyline points="900,145 858,145 858,108" stroke="#ff3cac" stroke-width="1" fill="none" opacity="0.22"/>
    <line x1="782" y1="0"  x2="782" y2="32"  stroke="#ff3cac" stroke-width="1" opacity="0.25"/>
    <line x1="752" y1="58" x2="752" y2="28"  stroke="#ff3cac" stroke-width="1" opacity="0.22"/>
    <line x1="740" y1="92" x2="740" y2="170" stroke="#ff3cac" stroke-width="1" opacity="0.20"/>

    <!-- Animated data pulse — RIGHT pink -->
    <circle r="3" fill="#ff3cac" opacity="0.9" filter="url(#dotGlow)">
      <animateMotion dur="3s" repeatCount="indefinite" begin="1s" path="M900,32 L848,32 L848,58 L805,58"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="3s" begin="1s" repeatCount="indefinite"/>
    </circle>
    <circle r="2.5" fill="#ffe600" opacity="0.8" filter="url(#dotGlow)">
      <animateMotion dur="4s" repeatCount="indefinite" begin="2s" path="M900,65 L862,65 L862,92 L822,92"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="4s" begin="2s" repeatCount="indefinite"/>
    </circle>
    <circle r="2" fill="#ff3cac" opacity="0.7" filter="url(#dotGlow)">
      <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.3s" path="M900,108 L842,108 L842,128 L808,128"/>
      <animate attributeName="opacity" values="0;1;1;0" dur="3.5s" begin="0.3s" repeatCount="indefinite"/>
    </circle>

    <!-- Static glowing nodes -->
    <circle cx="848" cy="32"  r="3"   fill="#ff3cac" opacity="0.6" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.6;1;0.4;0.6" dur="2.3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="805" cy="58"  r="2.5" fill="#ff3cac" opacity="0.5" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.5;0.9;0.3;0.5" dur="2.9s" repeatCount="indefinite"/>
    </circle>
    <circle cx="862" cy="65"  r="2.5" fill="#ffe600" opacity="0.55" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.55;1;0.3;0.55" dur="1.7s" repeatCount="indefinite"/>
    </circle>
    <circle cx="822" cy="92"  r="3"   fill="#ffe600" opacity="0.5" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.5;0.9;0.2;0.5" dur="3.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="842" cy="108" r="2.5" fill="#ff3cac" opacity="0.45" filter="url(#dotGlow)">
      <animate attributeName="opacity" values="0.45;1;0.3;0.45" dur="2.6s" repeatCount="indefinite"/>
    </circle>
    <!-- Pulse rings -->
    <circle cx="822" cy="92" r="3" fill="none" stroke="#ffe600" stroke-width="1">
      <animate attributeName="r" values="3;12;3" dur="3.3s" begin="0.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.8;0;0.8" dur="3.3s" begin="0.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="848" cy="32" r="3" fill="none" stroke="#ff3cac" stroke-width="1">
      <animate attributeName="r" values="3;10;3" dur="2.7s" begin="1.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.7;0;0.7" dur="2.7s" begin="1.5s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- ── ANIMATED TOP EDGE SHIMMER ── -->
  <rect x="0" y="0"   width="900" height="2" fill="url(#edgeShimmer)" rx="1" opacity="0.9"/>
  <rect x="0" y="168" width="900" height="2" fill="url(#edgeShimmer)" rx="1" opacity="0.9"/>

  <!-- ── GHOST BRACKETS ── -->
  <text x="188" y="112" font-family="monospace" font-size="72" fill="#00f5ff" font-weight="900" opacity="0.055">{
    <animate attributeName="opacity" values="0.055;0.10;0.055" dur="4s" repeatCount="indefinite"/>
  </text>
  <text x="678" y="112" font-family="monospace" font-size="72" fill="#ff3cac" font-weight="900" opacity="0.055">}
    <animate attributeName="opacity" values="0.055;0.10;0.055" dur="4s" begin="2s" repeatCount="indefinite"/>
  </text>

  <!-- ── TOP ROLE LABEL ── -->
  <text x="450" y="36" text-anchor="middle"
        font-family="'Courier New',monospace" font-size="10.5"
        letter-spacing="6" opacity="0.8">
    <tspan fill="#00f5ff">AI ENGINEER</tspan>
    <tspan fill="#94a3b8"> · </tspan>
    <tspan fill="#bf5fff">BACKEND DEV</tspan>
    <tspan fill="#94a3b8"> · </tspan>
    <tspan fill="#ff3cac">EMBEDDED SYSTEMS</tspan>
    <animate attributeName="opacity" values="0.8;0.5;0.8" dur="3s" repeatCount="indefinite"/>
  </text>

  <!-- ── MAIN NAME ── -->
  <text x="450" y="102" text-anchor="middle"
        font-family="'Segoe UI','SF Pro Display',Arial,sans-serif"
        font-size="52" font-weight="800"
        fill="url(#nameGrad)" filter="url(#nameGlow)"
        letter-spacing="-1.5">
    Ankit Sengupta
  </text>

  <!-- Blinking cursor -->
  <rect x="668" y="72" width="3.5" height="34" fill="#00f5ff" rx="1.5">
    <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite"/>
    <animate attributeName="fill" values="#00f5ff;#bf5fff;#ff3cac;#00f5ff" dur="4s" repeatCount="indefinite"/>
  </rect>

  <!-- ── BOTTOM TAGLINE ── -->
  <text x="450" y="138" text-anchor="middle"
        font-family="'Courier New',monospace" font-size="11"
        fill="#94a3b8" letter-spacing="2.5" opacity="0.9">
    VIT Amaravati · Class of 2028 · CGPA 8.35 · 🏅 Selected — Internal Expo
  </text>

  <!-- ── BOTTOM DECORATIVE DOTS ── -->
  <circle cx="220" cy="152" r="1.5" fill="#00f5ff" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="240" cy="152" r="1.5" fill="#bf5fff" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="260" cy="152" r="1.5" fill="#ff3cac" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.6s" repeatCount="indefinite"/>
  </circle>
  <circle cx="640" cy="152" r="1.5" fill="#ff3cac" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="660" cy="152" r="1.5" fill="#bf5fff" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="680" cy="152" r="1.5" fill="#00f5ff" opacity="0.4">
    <animate attributeName="opacity" values="0.4;0.9;0.4" dur="2s" begin="0.8s" repeatCount="indefinite"/>
  </circle>
</svg>


<!-- ╔══════════════════════════════════════════════════╗
     ║        ANIMATED TYPING TAGLINE                  ║
     ╚══════════════════════════════════════════════════╝ -->

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=16&duration=2400&pause=700&color=38BDF8&center=true&vCenter=true&width=680&lines=🤖+Building+RAG+Pipelines+%26+Autonomous+AI+Agents;🏅+Smart+Glasses+%E2%80%94+Selected+for+VIT+Internal+Expo;⚡+Python+%7C+Django+%7C+TensorFlow+%7C+Android+%7C+ESP32;🔥+Turning+ML+Theory+into+Deployed+Real-World+Systems;🎓+VIT+Amaravati+CS+%28AI+%26+ML%29+·+CGPA+8.35)](https://git.io/typing-svg)

<br/>

<!-- ╔══════════════════════════════════════════════════╗
     ║        CONTACT BADGES                           ║
     ╚══════════════════════════════════════════════════╝ -->

[![Gmail](https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ankit.sengupta05@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Sengupta-ankit)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/ankit-sengupta05)

<br/>

![Profile Views](https://komarev.com/ghpvc/?username=ankit-sengupta05&style=flat-square&color=818cf8&label=👁️+Profile+Views)
![Followers](https://img.shields.io/github/followers/ankit-sengupta05?style=flat-square&color=f472b6&logo=github&label=⭐+Followers)

</div>

---

## 🧑‍💻 &nbsp;About Me

<table>
<tr>
<td valign="top" width="54%">

```python
class AnkitSengupta:

    name       = "Ankit Sengupta"
    role       = "AI Engineer & Backend Developer"
    university = "VIT Amaravati · Class of 2028"
    cgpa       = 8.35

    skills = {
      "AI / ML"    : ["RAG Pipelines", "AI Agents",
                      "TensorFlow", "YOLO", "OpenCV"],
      "Backend"    : ["Django", "FastAPI", "Flask",
                      "Node.js", "MongoDB"],
      "Mobile"     : ["Android", "Kotlin", "Firebase"],
      "Embedded"   : ["ESP32", "Arduino C++", "IoT"],
    }

    trophy   = "🏅 Selected · VIT Internal Expo"
    goal     = "ML theory → deployed products"

    def say_hi(self):
        print("Let's build something awesome 🚀")
```

</td>
<td valign="top" width="46%" align="center">

<img src="https://raw.githubusercontent.com/devSouvik/devSouvik/master/gif3.gif" width="96%"/>

<br/>

🎓 **B.Tech CS (AI & ML)**
📍 VIT Amaravati &nbsp;|&nbsp; India
⭐ CGPA **8.35** &nbsp;·&nbsp; 🏅 **Expo Selected**

</td>
</tr>
</table>

---

## 🛠️ &nbsp;Tech Stack

<div align="center">

<img src="https://skillicons.dev/icons?i=python,tensorflow,opencv,django,fastapi,flask,nodejs,mongodb,androidstudio,kotlin,java,firebase,cpp,arduino,github&perline=8&theme=dark" />

<br/><br/>

![RAG Pipelines](https://img.shields.io/badge/RAG_Pipelines-8A2BE2?style=for-the-badge&logo=openai&logoColor=white)
![AI Agents](https://img.shields.io/badge/AI_Agents-FF4500?style=for-the-badge&logo=probot&logoColor=white)
![YOLO](https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=yolo&logoColor=black)
![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white)
![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)

</div>

---

## 🚀 &nbsp;Projects

---

### 🕶️ Smart Vision Aid &nbsp;&nbsp; ![](https://img.shields.io/badge/🏅_VIT_Internal_Expo-SELECTED-FFD700?style=for-the-badge)

> *Real-time AI-powered assistive smart glasses giving spatial awareness to the visually impaired*

[![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=for-the-badge&logo=espressif&logoColor=white)](#)
[![YOLO](https://img.shields.io/badge/YOLO-00FFFF?style=for-the-badge&logo=yolo&logoColor=black)](#)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)](#)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](#)
[![C++](https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=cplusplus&logoColor=white)](#)

| | |
|:--|:--|
| 📷 **Vision System** | 3× ESP32-CAM modules + ultrasonic sensors → 360° spatial coverage |
| ⚡ **AI Core** | YOLO real-time object detection for precise obstacle identification |
| 📱 **Mobile App** | Android companion with live audio alerts & navigation feedback |
| 🔧 **Embedded** | C++ on Arduino IDE for ultra-low-latency performance |
| 🏅 **Achievement** | **Selected for VIT Amaravati Internal Expo** |

---

### 🌾 Smart Agriculture Assistant

> *AI-powered platform bridging farmers and buyers through intelligent crop analysis*

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B)](#)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](#)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white)](#)
[![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)](#)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](#)

| | |
|:--|:--|
| 🔬 **ML Pipeline** | Crop yield prediction using TensorFlow + Pandas |
| 👁️ **Computer Vision** | OpenCV real-time crop disease detection |
| 🌐 **Backend** | Django/Flask connecting farmers directly with buyers |

---

### 💳 Smart Budget Manager

> *Automatically tracks your spending by securely parsing bank transaction SMS*

[![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white)](#)
[![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white)](#)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](#)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](#)

| | |
|:--|:--|
| 💬 **Core Feature** | Securely parses bank transaction SMS for zero-effort tracking |
| 📈 **Dashboard** | Real-time financial insights with visual breakdowns |
| 🔐 **Security** | Firebase authentication + encrypted cloud backup |

---

### 🧠 AI Mental Health Chatbot + OCR Scanner

> *Emotion detection meets medical report parsing*

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B)](#)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](#)
[![Pytesseract](https://img.shields.io/badge/Pytesseract_OCR-4285F4?style=for-the-badge&logo=google&logoColor=white)](#)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](#)

| | |
|:--|:--|
| 💬 **NLP Engine** | Sentiment analysis for real-time emotional state detection |
| 📄 **OCR Pipeline** | Pytesseract extracts structured data from medical reports |
| 🔗 **Intelligence** | Cross-references health info with curated medical datasets |

---

### 💊 Echo Personal AI Health Assistant

> *AI-powered symptom tracker and personal health companion*

[![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=FFD43B)](#)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white)](#)
[![FuzzyWuzzy](https://img.shields.io/badge/FuzzyWuzzy-FF6B35?style=for-the-badge&logo=python&logoColor=white)](#)
[![Tkinter](https://img.shields.io/badge/Tkinter_GUI-3776AB?style=for-the-badge&logo=python&logoColor=white)](#)

| | |
|:--|:--|
| 🔍 **Symptom Match** | Fuzzy logic symptom matching via FuzzyWuzzy |
| 💊 **Health Tracking** | Symptoms, medications & diet recommendations |
| 🖥️ **Interface** | Interactive Tkinter GUI with CSV dataset integration |
---

## 📊 &nbsp;GitHub Stats

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=ankit-sengupta05&show_icons=true&theme=tokyonight&hide_border=true&title_color=38bdf8&icon_color=f472b6&bg_color=06001a&text_color=e2e8f0&border_radius=12&include_all_commits=true&count_private=true" height="162"/>
&nbsp;
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ankit-sengupta05&layout=compact&theme=tokyonight&hide_border=true&title_color=38bdf8&bg_color=06001a&text_color=e2e8f0&border_radius=12&langs_count=8" height="162"/>

<br/><br/>

<img src="https://github-readme-streak-stats.herokuapp.com/?user=ankit-sengupta05&theme=tokyonight&hide_border=true&background=06001a&ring=38bdf8&fire=f472b6&currStreakLabel=818cf8&sideLabels=94a3b8&border_radius=12" width="68%"/>

<br/><br/>

[![Activity Graph](https://github-readme-activity-graph.vercel.app/graph?username=ankit-sengupta05&theme=tokyo-night&hide_border=true&bg_color=06001a&color=38bdf8&line=818cf8&point=f472b6&area=true)](https://github.com/ashutosh00710/github-readme-activity-graph)

</div>

---

## 🏆 &nbsp;Trophies

<div align="center">

[![Trophies](https://github-profile-trophy.vercel.app/?username=ankit-sengupta05&theme=tokyonight&no-frame=true&no-bg=true&margin-w=8&row=1&column=7)](https://github.com/ryo-ma/github-profile-trophy)

</div>

---

## 🎯 &nbsp;Currently Building

<div align="center">

```
╔════════════════════════════════════════════════════════════╗
║                  🧭  On My Workbench                       ║
╠════════════════════════════════════════════════════════════╣
║  🤖  Autonomous AI Agent Systems                           ║
║  📚  Retrieval-Augmented Generation (RAG) Pipelines        ║
║  ⚡  Scalable Backends  ·  FastAPI / Django / Node         ║
║  🔗  Intelligent Automation & Workflow Orchestration       ║
╚════════════════════════════════════════════════════════════╝
```

</div>

---

<div align="center">

## 🤝 &nbsp;Let's Connect

[![Email](https://img.shields.io/badge/📧_Email_Me-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:ankit.sengupta05@gmail.com)
&nbsp;
[![LinkedIn](https://img.shields.io/badge/💼_LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/Sengupta-ankit)

<br/><br/>

> *"The best way to predict the future is to build it."*

<br/>

<img src="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg" width="100%"/>

<br/>

<!-- Thin closing gradient strip -->
<img width="100%" src="https://capsule-render.vercel.app/api?type=rect&color=0:38bdf8,50:818cf8,100:f472b6&height=3&section=footer"/>

</div>
