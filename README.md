<div align="center">

<!-- ╔══════════════════════════════════════════════════╗
     ║          CUSTOM ANIMATED SVG BANNER             ║
     ╚══════════════════════════════════════════════════╝ -->

<svg width="900" height="155" viewBox="0 0 900 155" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#060010"/>
      <stop offset="50%" style="stop-color:#06001a"/>
      <stop offset="100%" style="stop-color:#0a0020"/>
    </linearGradient>
    <linearGradient id="nameGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#38bdf8"/>
      <stop offset="40%" style="stop-color:#818cf8"/>
      <stop offset="100%" style="stop-color:#f472b6"/>
    </linearGradient>
    <linearGradient id="edgeGlow" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#38bdf8;stop-opacity:0"/>
      <stop offset="25%" style="stop-color:#38bdf8;stop-opacity:1"/>
      <stop offset="75%" style="stop-color:#f472b6;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#f472b6;stop-opacity:0"/>
    </linearGradient>
    <radialGradient id="centerBloom" cx="50%" cy="50%" r="50%">
      <stop offset="0%" style="stop-color:#818cf8;stop-opacity:0.07"/>
      <stop offset="100%" style="stop-color:#818cf8;stop-opacity:0"/>
    </radialGradient>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="900" height="155" fill="url(#bg)" rx="10"/>
  <rect width="900" height="155" fill="url(#centerBloom)" rx="10"/>

  <!-- Circuit traces LEFT — cyan -->
  <g opacity="0.22" stroke="#38bdf8" stroke-width="1" fill="none" filter="url(#softGlow)">
    <polyline points="0,28 55,28 55,52 90,52"/>
    <polyline points="0,52 30,52 30,80 70,80"/>
    <polyline points="0,95 45,95 45,115 80,115"/>
    <polyline points="0,125 60,125 60,95"/>
    <line x1="120" y1="0" x2="120" y2="28"/>
    <line x1="140" y1="52" x2="140" y2="28" />
    <line x1="155" y1="80" x2="155" y2="155"/>
    <circle cx="55"  cy="28"  r="2.5" fill="#38bdf8" stroke="none"/>
    <circle cx="90"  cy="52"  r="2.5" fill="#38bdf8" stroke="none"/>
    <circle cx="30"  cy="52"  r="2.5" fill="#38bdf8" stroke="none"/>
    <circle cx="70"  cy="80"  r="2.5" fill="#38bdf8" stroke="none"/>
    <circle cx="45"  cy="95"  r="2.5" fill="#38bdf8" stroke="none"/>
    <circle cx="80"  cy="115" r="2.5" fill="#38bdf8" stroke="none"/>
    <circle cx="120" cy="28"  r="2"   fill="none" stroke="#38bdf8"/>
    <circle cx="140" cy="28"  r="2"   fill="none" stroke="#38bdf8"/>
    <!-- Pulse animation on one node -->
    <circle cx="70" cy="80" r="5" fill="none" stroke="#38bdf8" stroke-width="1" opacity="0">
      <animate attributeName="r" values="3;9;3" dur="2.5s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- Circuit traces RIGHT — pink -->
  <g opacity="0.20" stroke="#f472b6" stroke-width="1" fill="none" filter="url(#softGlow)">
    <polyline points="900,28 845,28 845,52 810,52"/>
    <polyline points="900,52 870,52 870,80 830,80"/>
    <polyline points="900,95 855,95 855,115 820,115"/>
    <polyline points="900,125 840,125 840,95"/>
    <line x1="780" y1="0"   x2="780" y2="28"/>
    <line x1="760" y1="52"  x2="760" y2="28"/>
    <line x1="745" y1="80"  x2="745" y2="155"/>
    <circle cx="845" cy="28"  r="2.5" fill="#f472b6" stroke="none"/>
    <circle cx="810" cy="52"  r="2.5" fill="#f472b6" stroke="none"/>
    <circle cx="870" cy="52"  r="2.5" fill="#f472b6" stroke="none"/>
    <circle cx="830" cy="80"  r="2.5" fill="#f472b6" stroke="none"/>
    <circle cx="855" cy="95"  r="2.5" fill="#f472b6" stroke="none"/>
    <circle cx="820" cy="115" r="2.5" fill="#f472b6" stroke="none"/>
    <circle cx="780" cy="28"  r="2"   fill="none" stroke="#f472b6"/>
    <circle cx="760" cy="28"  r="2"   fill="none" stroke="#f472b6"/>
    <circle cx="830" cy="80" r="5" fill="none" stroke="#f472b6" stroke-width="1" opacity="0">
      <animate attributeName="r" values="3;9;3" dur="3s" begin="1s" repeatCount="indefinite"/>
      <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" begin="1s" repeatCount="indefinite"/>
    </circle>
  </g>

  <!-- Top + bottom chromatic edge lines -->
  <rect x="0" y="0"   width="900" height="1.5" fill="url(#edgeGlow)" rx="1"/>
  <rect x="0" y="153" width="900" height="1.5" fill="url(#edgeGlow)" rx="1"/>

  <!-- Ghost code brackets -->
  <text x="192" y="105" font-family="monospace" font-size="64" fill="#818cf8" opacity="0.07" font-weight="900">{</text>
  <text x="688" y="105" font-family="monospace" font-size="64" fill="#818cf8" opacity="0.07" font-weight="900">}</text>

  <!-- Role label -->
  <text x="450" y="38" text-anchor="middle"
        font-family="'Courier New',monospace" font-size="10.5"
        fill="#38bdf8" opacity="0.75" letter-spacing="6">
    AI ENGINEER · BACKEND DEV · EMBEDDED SYSTEMS
  </text>

  <!-- NAME with gradient + glow -->
  <text x="450" y="94" text-anchor="middle"
        font-family="'Segoe UI','SF Pro Display',Arial,sans-serif"
        font-size="50" font-weight="800"
        fill="url(#nameGrad)" filter="url(#glow)" letter-spacing="-1.5">
    Ankit Sengupta
  </text>

  <!-- Blinking cursor -->
  <rect x="660" y="67" width="3" height="32" fill="#38bdf8" rx="1">
    <animate attributeName="opacity" values="1;0;1" dur="1.1s" repeatCount="indefinite"/>
  </rect>

  <!-- Bottom info line -->
  <text x="450" y="130" text-anchor="middle"
        font-family="'Courier New',monospace" font-size="11"
        fill="#94a3b8" opacity="0.85" letter-spacing="2.5">
    VIT Amaravati · Class of 2028 · CGPA 8.35 · 🏅 Selected — Internal Expo
  </text>
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

<div align="center">

| &nbsp; | Project | Stack | &nbsp; |
|:------:|:--------|:------|:------:|
| 🕶️ | **Smart Vision Aid** | ESP32 · YOLO · Android · C++ | 🏅 **Expo Selected** |
| 🌾 | **Smart Agriculture Assistant** | TensorFlow · Django · OpenCV | 🌱 AI + CV |
| 💳 | **Smart Budget Manager** | Android · Kotlin · Firebase | 📊 FinTech |
| 🧠 | **AI Mental Health Chatbot** | TensorFlow · Pytesseract | 💬 NLP + OCR |
| 💊 | **Echo Health AI Assistant** | Python · FuzzyWuzzy | 🩺 Health AI |

</div>

<br/>

<details>
<summary><b>🏆&nbsp; 🕶️ Smart Vision Aid &nbsp;—&nbsp; <img src="https://img.shields.io/badge/🏅_VIT_Internal_Expo-Selected-FFD700?style=flat-square"/> &nbsp;(expand)</b></summary>
<br/>

> *Real-time AI-powered assistive glasses giving spatial awareness to the visually impaired*

[![ESP32](https://img.shields.io/badge/ESP32-E7352C?style=flat-square&logo=espressif&logoColor=white)](#)
[![YOLO](https://img.shields.io/badge/YOLO-00FFFF?style=flat-square&logo=yolo&logoColor=black)](#)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)](#)
[![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)](#)
[![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)](#)

- 📷 **3× ESP32-CAM modules** + ultrasonic sensors → 360° spatial coverage
- ⚡ **YOLO real-time object detection** for precise obstacle identification
- 📱 Android companion app with **live audio alerts & navigation feedback**
- 🔧 **C++ on Arduino IDE** for ultra-low-latency embedded performance
- 🏅 **Recognised & selected for VIT Amaravati Internal Expo**

</details>

<details>
<summary><b>🌾&nbsp; Smart Agriculture Assistant &nbsp;(expand)</b></summary>
<br/>

> *AI-powered platform bridging farmers and buyers through intelligent crop analysis*

[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](#)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)](#)
[![Django](https://img.shields.io/badge/Django-092E20?style=flat-square&logo=django&logoColor=white)](#)
[![OpenCV](https://img.shields.io/badge/OpenCV-5C3EE8?style=flat-square&logo=opencv&logoColor=white)](#)

- 🔬 ML pipeline for **crop yield prediction** — TensorFlow + Pandas
- 👁️ Computer vision for real-time **crop disease detection**
- 🌐 Django/Flask backend connecting **farmers directly with buyers**

</details>

<details>
<summary><b>💳&nbsp; Smart Budget Manager &nbsp;(expand)</b></summary>
<br/>

> *Automatically tracks your spending by securely parsing bank transaction SMS*

[![Android](https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white)](#)
[![Kotlin](https://img.shields.io/badge/Kotlin-7F52FF?style=flat-square&logo=kotlin&logoColor=white)](#)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat-square&logo=firebase&logoColor=black)](#)

- 💬 Parses **bank transaction SMS** — zero-effort expense tracking
- 📈 Real-time financial insights dashboard
- 🔐 Firebase auth + encrypted cloud backup

</details>

<details>
<summary><b>🧠&nbsp; AI Mental Health Chatbot + OCR Scanner &nbsp;(expand)</b></summary>
<br/>

> *Emotion detection meets medical report parsing*

[![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=flat-square&logo=tensorflow&logoColor=white)](#)
[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](#)
[![OCR](https://img.shields.io/badge/Pytesseract_OCR-4285F4?style=flat-square&logo=google&logoColor=white)](#)

- 💬 **Sentiment analysis** for real-time emotional state detection
- 📄 **OCR pipeline** extracts structured data from medical reports
- 🔗 Cross-references health info with curated medical datasets

</details>

<details>
<summary><b>💊&nbsp; Echo Personal AI Health Assistant &nbsp;(expand)</b></summary>
<br/>

> *AI-powered symptom tracker and health companion*

[![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)](#)
[![Pandas](https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=pandas&logoColor=white)](#)

- 🔍 **Fuzzy logic symptom matching** via FuzzyWuzzy
- 💊 Tracks symptoms, medications & diet recommendations
- 🖥️ Tkinter GUI with CSV dataset integration

</details>

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
