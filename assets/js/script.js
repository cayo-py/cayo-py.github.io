// Modal Logic
const modal = document.getElementById('project-modal');
const projects = {
    'modal-iot': {
        title: 'Flood Early Warning System',
        tag: 'IoT / Embedded System',
        desc: 'Proyek prototipe sistem peringatan dini banjir yang dirancang untuk memantau ketinggian air secara real-time menggunakan mikrokontroler dan sensor ketinggian air. Data hasil pemantauan dikirim melalui protokol MQTT sehingga dapat diakses dan dipantau dari jarak jauh untuk mendukung respons yang lebih cepat terhadap potensi banjir.',
        stack: ['MQTT', 'Thinger.io'],
        img: 'https://github.com/fanTaux/FloodEarlyWarningSystemProject/blob/7a1f3aef27163857cf8e27b2f33572f83b86d7f0/assets/AlatEWS.jpg?raw=true',
        repo: 'https://github.com/fanTaux/FloodEarlyWarningSystemProject'
    },
    'modal-helmet': {
        title: 'Smart Helmet Crash Detection System',
        tag: 'IoT / Embedded System',
        desc: 'Mengembangkan prototipe helm pintar yang mampu mendeteksi indikasi kecelakaan melalui pemrosesan data sensor secara real-time. Sistem dirancang untuk mengidentifikasi kondisi benturan tertentu dan menjalankan logika peringatan sebagai upaya meningkatkan keselamatan pengendara.',
        stack: ['Accelerometer', 'Sensor Data Processing', 'Real-Time Monitoring'],
        img: 'https://github.com/cayo-py/Helmet-with-Crash-Detecting/blob/main/assets/skematik.png?raw=true',
        repo: 'https://github.com/cayo-py/Helmet-with-Crash-Detecting.git'
    },
    'modal-feeder': {
        title: 'Automatic Fish Feeder',
        tag: 'IoT / Embedded System',
        desc: 'Sebuah sistem pemberi makan ikan otomatis yang dirancang untuk memberikan pakan secara terjadwal dan dapat dikontrol dari jarak jauh menggunakan platform Blynk. Sistem ini memanfaatkan mikrokontroler untuk mengatur waktu pemberian pakan dan memungkinkan pengguna untuk memantau serta mengubah jadwal melalui aplikasi mobile.',
        stack: ['Blynk', 'Actuator', 'Real-Time Scheduling'],
        img: 'https://github.com/cayo-py/automatic-feeder/blob/main/assets/feedfeeder2.jpeg?raw=true',
        repo: 'https://github.com/cayo-py/automatic-feeder.git'
    },
    'modal-capstone': {
        title: 'Majadigi Superapp (Capstone Project)',
        tag: 'DevOps / Containerization',
        desc: 'Berkontribusi dalam proses containerization dengan menyiapkan lingkungan pengembangan yang terstandarisasi. Proyek ini mencakup konfigurasi Docker untuk containerization, pengelolaan reverse proxy menggunakan NGINX, serta dukungan terhadap proses kolaborasi tim selama pengembangan aplikasi capstone.\n[Repositori tidak dibuka untuk publik karena alasan keamanan dan privasi.]',
        stack: ['Docker', 'NGINX', 'Environment Setup'],
        img: 'https://api.minio.jatimprov.go.id/kominfo--majadigi/hotlink-ok/site-setting/about/d55a272256_LOGO_MAJADIGI.png?w=210&format=webp',
        repo: ''
    }
};

function openModal(id) {
    const data = projects[id];
    if (!data) return;
    
    document.getElementById('modal-img').src = data.img;
    document.getElementById('modal-tag').innerText = data.tag;
    document.getElementById('modal-title').innerText = data.title;
    document.getElementById('modal-desc').innerText = data.desc;
    document.getElementById('modal-repo').href = data.repo;
    
    const stackContainer = document.getElementById('modal-stack');
    stackContainer.innerHTML = '';
    data.stack.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'font-label-code text-[11px] bg-background border border-primary-container/20 px-3 py-1 rounded text-on-surface-variant';
        span.innerText = tech;
        stackContainer.appendChild(span);
    });

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Close on Esc
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// Scroll Reveal
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal();

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
document
    .querySelectorAll("#mobile-menu a")
    .forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.add("hidden");
        });
    });

// Active Nav Link Highlighting
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".nav-link");
const connectBtn = document.getElementById("connect-btn");
const connectText = document.getElementById("connect-text");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 120) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });

    if (current === "contact") {
        connectBtn.classList.add("active");
        connectText.textContent = "✦ Let's Talk";
    } else {
        connectBtn.classList.remove("active");
        connectText.textContent = "Connect";
}
});
