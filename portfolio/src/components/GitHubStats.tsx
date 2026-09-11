import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './GitHubStats.css';

export function GitHubStats() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="github" className="section github-stats" ref={ref} aria-label="Ankit Sengupta GitHub statistics">
      <div className="container">
        <motion.div
          className="github-stats__header"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">GitHub</span>
          <h2>
            Code <span className="text-gradient">metrics</span>
          </h2>
        </motion.div>

        <motion.div
          className="github-stats__grid"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img
            src="https://github-readme-stats.anuraghazra1.vercel.app/api?username=ankit-sengupta05&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&icon_color=ffffff&bg_color=00000000&text_color=a1a1a1&border_radius=12&include_all_commits=true&count_private=true"
            alt="Ankit Sengupta GitHub Stats — commits, stars, pull requests"
            className="github-stats__img"
            loading="lazy"
            width="495"
            height="195"
          />
          <img
            src="https://github-readme-stats.anuraghazra1.vercel.app/api/top-langs/?username=ankit-sengupta05&layout=compact&theme=transparent&hide_border=true&title_color=ffffff&bg_color=00000000&text_color=a1a1a1&border_radius=12&langs_count=8"
            alt="Ankit Sengupta top programming languages — Python, TypeScript, JavaScript, C++, Dart"
            className="github-stats__img"
            loading="lazy"
            width="370"
            height="195"
          />
        </motion.div>

        <motion.div
          className="github-stats__streak"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          <img
            src="https://streak-stats.demolab.com?user=ankit-sengupta05&theme=transparent&hide_border=true&background=00000000&ring=ffffff&fire=ffffff&currStreakLabel=888888&sideLabels=555555&border_radius=12&date_format=j%20M%5B%20Y%5D"
            alt="Ankit Sengupta GitHub contribution streak"
            className="github-stats__streak-img"
            loading="lazy"
            width="700"
            height="165"
          />
        </motion.div>

        <motion.div
          className="github-stats__activity"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=ankit-sengupta05&theme=github-compact&hide_border=true&bg_color=0a0a0a&color=888888&line=ffffff&point=ffffff&area=true&area_color=ffffff"
            alt="Ankit Sengupta GitHub contribution activity graph"
            className="github-stats__activity-img"
            loading="lazy"
            width="900"
            height="200"
          />
        </motion.div>

        <motion.div
          className="github-stats__snake"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://raw.githubusercontent.com/platane/platane/output/github-contribution-grid-snake-dark.svg"
            alt="Ankit Sengupta GitHub contribution snake animation"
            loading="lazy"
            width="900"
          />
        </motion.div>
      </div>
    </section>
  );
}
