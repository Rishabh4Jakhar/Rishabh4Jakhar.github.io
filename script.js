/* ═══════════════════════════════════════════════════════════════
   RISHABH JAKHAR — TERMINAL PORTFOLIO SCRIPTS
   ═══════════════════════════════════════════════════════════════ */

// ── Project Data ──
const projects = {
    valostat: {
        title: 'ValoStat.exe',
        name: 'ValoStat',
        desc: 'A web application to display Valorant stats of friends. Track K/D ratios, win rates, agent picks, and match history for your squad.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        status: 'Live',
        links: [
            { text: '🌐 Live Demo', href: 'https://rishabh4jakhar.github.io/ValoStat/' },
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/ValoStat' }
        ]
    },
    leetstat: {
        title: 'LeetStat.exe',
        name: 'LeetStat',
        desc: 'Display LeetCode stats of friends\' profiles. Compare problem-solving streaks, difficulty breakdowns, and contest ratings in one dashboard.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        status: 'Live',
        links: [
            { text: '🌐 Live Demo', href: 'https://rishabh4jakhar.github.io/LeetStat/' },
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/LeetStat' }
        ]
    },
    tradewind: {
        title: 'TradeWind.jsx',
        name: 'TradeWind',
        desc: 'A full-stack trading simulation platform built with React.js and Django. Users can register, log in, view stock prices, and maintain a watchlist.',
        tech: ['React.js', 'Django', 'JavaScript', 'Python'],
        status: 'In Development',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/TradeWind' }
        ]
    },
    bakershut: {
        title: 'BakersHut.ts',
        name: 'BakersHut',
        desc: 'A bakery website built with TypeScript. Features product catalog, ordering system, and responsive design.',
        tech: ['TypeScript', 'HTML', 'CSS'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/BakersHut' }
        ]
    },
    fraudlens: {
        title: 'FraudLens.py',
        name: 'FraudLens',
        desc: 'Machine learning-based system to predict scam websites. Analyzes URL patterns, page content, and metadata to flag potentially fraudulent sites. ⭐ 4 stars',
        tech: ['Python', 'Machine Learning', 'HTML'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/Fraudlens' }
        ]
    },
    cse556: {
        title: 'CSE556-NLP.ipynb',
        name: 'CSE556 — Natural Language Processing',
        desc: 'NLP assignments and project work covering tokenization, sentiment analysis, named entity recognition, and transformer models.',
        tech: ['Python', 'Jupyter', 'NLP'],
        status: 'Coursework',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/CSE556' }
        ]
    },
    cse343: {
        title: 'CSE343-ML.ipynb',
        name: 'CSE343 — Machine Learning',
        desc: 'Machine Learning assignments covering supervised/unsupervised learning, neural networks, and model evaluation techniques.',
        tech: ['Python', 'Jupyter', 'scikit-learn'],
        status: 'Coursework',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/CSE343' }
        ]
    },
    angrybirds: {
        title: 'AngryBirds.java',
        name: 'AngryBirds',
        desc: 'A clone of the classic Angry Birds game built for a college project. Features physics-based projectile motion and destructible environments.',
        tech: ['Java', 'LibGDX'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/AngryBirds' }
        ]
    },
    connect4: {
        title: 'Connect4.py',
        name: 'Connect4',
        desc: 'Classic Connect 4 game implementation in Python with a clean terminal UI and win detection logic.',
        tech: ['Python'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/connect4' }
        ]
    },
    byteme: {
        title: 'ByteMe.java',
        name: 'ByteMe',
        desc: 'A food ordering system built in Java. Features menu browsing, cart management, order placement, and admin dashboard.',
        tech: ['Java', 'MySQL'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/ByteMe' }
        ]
    },
    'game-links-bot': {
        title: 'GameLinksBot.py',
        name: 'Game Links Bot',
        desc: 'A Discord bot built with discord.py for sharing and managing game links. (Deprecated) ⭐ 2 stars',
        tech: ['Python', 'discord.py'],
        status: 'Deprecated',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/game-links-bot' }
        ]
    },
    'rl-scheduler': {
        title: 'RL-Scheduler.c',
        name: 'RL Scheduler',
        desc: 'Reinforcement Learning-based scheduler to co-schedule a given job queue. Optimizes resource allocation using RL algorithms.',
        tech: ['C', 'Reinforcement Learning'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/RL-scheduler' }
        ]
    },
    cse102: {
        title: 'CSE102-DSA.cpp',
        name: 'CSE102 — Data Structures & Algorithms',
        desc: 'DSA assignments and lab exercises covering arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming.',
        tech: ['C++'],
        status: 'Coursework',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/CSE102' }
        ]
    },
    cse655: {
        title: 'CSE655-NetworkSci.ipynb',
        name: 'CSE655 — Network Science',
        desc: 'Network Science assignments and projects covering graph theory, centrality measures, community detection, and network modeling.',
        tech: ['Python', 'Jupyter', 'NetworkX'],
        status: 'Coursework',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/CSE655' }
        ]
    },
    'co-project': {
        title: 'CO-Project.py',
        name: 'CO Project — Group',
        desc: 'Computer Organization group project by Rishabh, Prateek, Sarthak, and Uday. Implements core CPU concepts and assembly-level operations.',
        tech: ['Python'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/CO_Project_Group' }
        ]
    },
    simpleshell: {
        title: 'SimpleShell.c',
        name: 'SimpleShell',
        desc: 'A custom Unix shell implementation supporting basic commands, piping, redirection, and process management. OS Assignment 2.',
        tech: ['C', 'Linux'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/SimpleShell' }
        ]
    },
    simpleloader: {
        title: 'SimpleLoader.c',
        name: 'SimpleLoader',
        desc: 'An ELF loader implementation that loads and executes binary programs. OS Assignment 1.',
        tech: ['C', 'Linux'],
        status: 'Complete',
        links: [
            { text: '📁 Source', href: 'https://github.com/Rishabh4Jakhar/SimpleLoader' }
        ]
    }
};

// ── Matrix Rain Effect ──
function initMatrixRain() {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);

            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }

    setInterval(draw, 50);
}

// ── Typewriter Effect ──
function initTypewriter() {
    const el = document.getElementById('typewriter');
    if (!el) return;

    const text = 'whoami && echo "Welcome to my terminal."';
    let i = 0;

    function type() {
        if (i < text.length) {
            el.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50 + Math.random() * 50);
        }
    }

    setTimeout(type, 2500);
}

// ── Folder Toggle ──
function toggleFolder(header) {
    const folder = header.closest('.folder');
    folder.classList.toggle('collapsed');
}

// ── Project Modal ──
function openProject(projectId) {
    const modal = document.getElementById('project-modal');
    const title = document.getElementById('modal-title');
    const body = document.getElementById('modal-body');
    const linksContainer = document.getElementById('modal-links');

    const project = projects[projectId];
    if (!project) return;

    title.textContent = project.title;

    const techTags = project.tech.map(t => `<span class="file-badge" style="background:rgba(0,212,255,0.1);color:var(--accent-cyan);border:1px solid rgba(0,212,255,0.3);margin-right:6px;">${t}</span>`).join('');

    const statusColor = project.status === 'Live' ? 'var(--accent-green)' : 
                        project.status === 'In Development' ? 'var(--accent-yellow)' :
                        project.status === 'Deprecated' ? 'var(--accent-red)' : 'var(--accent-cyan)';

    body.innerHTML = `
        <p><span class="modal-label">Name:</span> ${project.name}</p>
        <p><span class="modal-label">Status:</span> <span style="color:${statusColor}">${project.status}</span></p>
        <p><span class="modal-label">Tech:</span> ${techTags}</p>
        <p><span class="modal-label">Description:</span> ${project.desc}</p>
    `;

    linksContainer.innerHTML = project.links.map(link => 
        `<a href="${link.href}" target="_blank" class="modal-link">${link.text}</a>`
    ).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close modal on backdrop click
function initModalBackdrop() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// ── Copy to Clipboard ──
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const el = document.getElementById('discord-val');
        const original = el.textContent;
        el.textContent = 'Copied!';
        el.style.color = 'var(--accent-green)';
        setTimeout(() => {
            el.textContent = original;
            el.style.color = '';
        }, 1500);
    });
}

// ── Skill Bar Animation ──
function animateSkillBars() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const fills = entry.target.querySelectorAll('.skill-fill');
                fills.forEach(fill => {
                    const width = fill.style.width;
                    fill.style.width = '0%';
                    setTimeout(() => {
                        fill.style.width = width;
                    }, 100);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const skillSection = document.querySelector('.skill-bars');
    if (skillSection) observer.observe(skillSection);
}

// ── Smooth Scroll for Nav ──
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ── Random Terminal Glitch ──
function initRandomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');

    setInterval(() => {
        glitchElements.forEach(el => {
            if (Math.random() > 0.95) {
                el.style.animation = 'none';
                el.offsetHeight; // trigger reflow
                el.style.animation = '';
            }
        });
    }, 3000);
}

// ── Boot Sequence Hide ──
function initBootSequence() {
    const bootSeq = document.getElementById('boot-sequence');
    if (!bootSeq) return;

    setTimeout(() => {
        bootSeq.style.transition = 'opacity 1s';
        bootSeq.style.opacity = '0.3';
    }, 4000);
}

// ── Nav Item Hover Effect ──
function initNavHover() {
    document.querySelectorAll('.nav-item').forEach(item => {
        const cmd = item.getAttribute('data-cmd');
        if (!cmd) return;

        item.addEventListener('mouseenter', () => {
            item.textContent = `$ ${cmd}`;
        });

        item.addEventListener('mouseleave', () => {
            const original = cmd.includes('/') ? cmd : cmd.split(' ').pop();
            item.textContent = original;
        });
    });
}

// ── Konami Code Easter Egg ──
function initKonami() {
    const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
                  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
                  'b', 'a'];
    let index = 0;

    document.addEventListener('keydown', (e) => {
        if (e.key === code[index]) {
            index++;
            if (index === code.length) {
                activateHackerMode();
                index = 0;
            }
        } else {
            index = 0;
        }
    });
}

function activateHackerMode() {
    const body = document.body;
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0, 255, 65, 0.1); z-index: 99999;
        display: flex; align-items: center; justify-content: center;
        font-family: var(--font-mono); font-size: 24px; color: var(--accent-green);
        pointer-events: none; animation: hacker-fade 2s forwards;
    `;
    overlay.textContent = 'HACKER MODE ACTIVATED';

    const style = document.createElement('style');
    style.textContent = `
        @keyframes hacker-fade {
            0% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(overlay);

    setTimeout(() => overlay.remove(), 2000);

    // Speed up matrix
    const canvas = document.getElementById('matrix-canvas');
    if (canvas) canvas.style.opacity = '0.15';
}

// ── Initialize Everything ──
document.addEventListener('DOMContentLoaded', () => {
    initMatrixRain();
    initTypewriter();
    initModalBackdrop();
    animateSkillBars();
    initSmoothScroll();
    initRandomGlitch();
    initBootSequence();
    initNavHover();
    initKonami();
});