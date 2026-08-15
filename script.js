/* =====================================================
   VISHAL PORTFOLIO
   INTERACTION + CERTIFICATES + PARTICLES
===================================================== */


/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 40
    );

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


document
    .querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

        });

    });


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "home";


    sections.forEach(section => {

        if (
            window.scrollY >=
            section.offsetTop - 200
        ) {

            current =
                section.id;

        }

    });


    navLinks.forEach(link => {

        link.classList.toggle(
            "active",

            link.getAttribute("href") ===
            `#${current}`
        );

    });

});


/* =====================================================
   SCROLL PROGRESS
===================================================== */

const progress =
    document.getElementById(
        "scrollProgress"
    );


window.addEventListener("scroll", () => {

    const scrollTop =
        window.scrollY;


    const pageHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    const percentage =
        pageHeight > 0
            ? (scrollTop / pageHeight) * 100
            : 0;


    progress.style.width =
        `${percentage}%`;

});


/* =====================================================
   MOUSE GLOW
===================================================== */

const mouseGlow =
    document.querySelector(
        ".mouse-glow"
    );


window.addEventListener(
    "pointermove",
    event => {

        mouseGlow.style.left =
            `${event.clientX}px`;

        mouseGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =====================================================
   CERTIFICATES
===================================================== */

/*
    Certificate information supplied in the
    existing portfolio data.
*/

const certificates = [

    {
        title:
            "Azure Fundamentals",
        company:
            "Microsoft",
        date:
            "10-Dec-2025"
    },

    {
        title:
            "Getting Started with Machine Learning with PyTorch",
        company:
            "IBM",
        date:
            "18-Apr-2026"
    },

    {
        title:
            "Enterprise Design Thinking Practitioner",
        company:
            "IBM",
        date:
            "27-Oct-2025"
    },

    {
        title:
            "Prompt Engineering Applications",
        company:
            "Skill India",
        date:
            "03-Nov-2025"
    },

    {
        title:
            "Introduction to Generative AI Studio",
        company:
            "Simplilearn SkillUp",
        date:
            "03-Nov-2025"
    },

    {
        title:
            "Certified CLLM Security Professional (CLLMSP)",
        company:
            "Red Team Leaders",
        date:
            "02-Jun-2026"
    },

    {
        title:
            "Data Analysis with Python",
        company:
            "IBM",
        date:
            "03-Apr-2026"
    },

    {
        title:
            "Data Visualization with Python",
        company:
            "IBM",
        date:
            "03-Apr-2026"
    },

    {
        title:
            "Exploratory Data Analysis with Python",
        company:
            "IBM",
        date:
            "18-Apr-2026"
    },

    {
        title:
            "FortiGate 7.6 Operator Self-Paced",
        company:
            "Fortinet",
        date:
            "12-Apr-2026"
    },

    {
        title:
            "Fortinet Certified Associate in Cybersecurity",
        company:
            "Fortinet",
        date:
            "12-Apr-2026"
    },

    {
        title:
            "Fortinet Certified Fundamentals in Cybersecurity",
        company:
            "Fortinet",
        date:
            "04-Apr-2026"
    },

    {
        title:
            "Gemini Certified Student",
        company:
            "Google",
        date:
            "02-Nov-2025"
    },

    {
        title:
            "Getting Started in Cybersecurity 3.0",
        company:
            "Fortinet",
        date:
            "04-Apr-2026"
    },

    {
        title:
            "Getting Started with Artificial Intelligence",
        company:
            "IBM",
        date:
            "25-Jun-2026"
    },

    {
        title:
            "Getting Started with MySQL Command Line",
        company:
            "IBM",
        date:
            "18-Apr-2026"
    },

    {
        title:
            "Introduction to the Threat Landscape 3.0",
        company:
            "Fortinet",
        date:
            "03-Apr-2026"
    },

    {
        title:
            "Lifelong Professional Skills",
        company:
            "IBM",
        date:
            "25-Jun-2026"
    },

    {
        title:
            "Python 101 for Data Science",
        company:
            "IBM",
        date:
            "25-Jun-2026"
    },

    {
        title:
            "SQL and Relational Databases 101",
        company:
            "IBM",
        date:
            "12-Apr-2026"
    },

    {
        title:
            "Web Development Fundamentals",
        company:
            "IBM",
        date:
            "25-Jun-2026"
    },

    {
        title:
            "Azure AI Fundamentals",
        company:
            "Microsoft",
        date:
            "23-Apr-2026"
    },

    {
        title:
            "Data Analysis with Python",
        company:
            "IBM",
        date:
            "01-Jul-2026"
    },

    {
        title:
            "Big Data 101",
        company:
            "IBM",
        date:
            "01-Jul-2026"
    },

    {
        title:
            "Cybersecurity Fundamentals",
        company:
            "IBM",
        date:
            "01-Jul-2026"
    },

    {
        title:
            "Nutanix Certified Associate 7",
        company:
            "Nutanix",
        date:
            "28-Jul-2026"
    }

];


const certificateGrid =
    document.getElementById(
        "certificateGrid"
    );


const certificateSearch =
    document.getElementById(
        "certificateSearch"
    );


const certificateCount =
    document.getElementById(
        "certificateCount"
    );


const noCertificates =
    document.getElementById(
        "noCertificates"
    );


let activeFilter = "all";


function getCategory(company) {

    if (
        company === "IBM" ||
        company === "Microsoft" ||
        company === "Fortinet" ||
        company === "Google"
    ) {

        return company;

    }


    return "Other";

}


function renderCertificates() {

    const query =
        certificateSearch
            .value
            .toLowerCase()
            .trim();


    const filtered =
        certificates.filter(
            certificate => {

                const matchesFilter =
                    activeFilter === "all" ||
                    getCategory(
                        certificate.company
                    ) === activeFilter;


                const searchableText =
                    `${certificate.title}
                     ${certificate.company}
                     ${certificate.date}`
                        .toLowerCase();


                const matchesSearch =
                    searchableText.includes(
                        query
                    );


                return (
                    matchesFilter &&
                    matchesSearch
                );

            }
        );


    certificateGrid.innerHTML =
        "";


    certificateCount.textContent =
        filtered.length;


    filtered.forEach(
        (certificate, index) => {

            const card =
                document.createElement(
                    "article"
                );


            card.className =
                "certificate-card";


            card.innerHTML = `

                <div class="cert-head">

                    <span class="cert-company">

                        ${certificate.company}

                    </span>

                    <span class="cert-date">

                        ${certificate.date}

                    </span>

                </div>


                <h3>

                    ${certificate.title}

                </h3>


                <p>

                    Professional learning credential

                </p>

            `;


            certificateGrid.appendChild(
                card
            );


            card.animate(
                [
                    {
                        opacity: 0,
                        transform:
                            "translateY(15px)"
                    },

                    {
                        opacity: 1,
                        transform:
                            "translateY(0)"
                    }
                ],

                {
                    duration: 450,

                    delay:
                        index * 18,

                    easing:
                        "cubic-bezier(.2,.8,.2,1)",

                    fill:
                        "forwards"
                }
            );

        }
    );


    noCertificates.style.display =
        filtered.length === 0
            ? "block"
            : "none";

}


renderCertificates();


certificateSearch.addEventListener(
    "input",
    renderCertificates
);


/* =====================================================
   CERTIFICATE FILTER
===================================================== */

document
    .querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(".filter")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                activeFilter =
                    button.dataset.filter;


                renderCertificates();

            }
        );

    });


/* =====================================================
   PARTICLE SYSTEM
===================================================== */

const canvas =
    document.getElementById(
        "particleCanvas"
    );


const ctx =
    canvas.getContext("2d");


let particles = [];


function resizeCanvas() {

    const ratio =
        window.devicePixelRatio || 1;


    canvas.width =
        window.innerWidth * ratio;


    canvas.height =
        window.innerHeight * ratio;


    canvas.style.width =
        `${window.innerWidth}px`;


    canvas.style.height =
        `${window.innerHeight}px`;


    ctx.setTransform(
        ratio,
        0,
        0,
        ratio,
        0,
        0
    );


    createParticles();

}


function createParticles() {

    particles = [];


    const amount =
        Math.min(
            110,
            Math.floor(
                window.innerWidth / 12
            )
        );


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        particles.push({

            x:
                Math.random() *
                window.innerWidth,

            y:
                Math.random() *
                window.innerHeight,

            radius:
                Math.random() * 1.3 + .2,

            speedX:
                (Math.random() - .5) *
                .20,

            speedY:
                (Math.random() - .5) *
                .20

        });

    }

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        window.innerWidth,
        window.innerHeight
    );


    particles.forEach(
        particle => {

            particle.x +=
                particle.speedX;


            particle.y +=
                particle.speedY;


            if (
                particle.x < 0 ||
                particle.x >
                window.innerWidth
            ) {

                particle.speedX *= -1;

            }


            if (
                particle.y < 0 ||
                particle.y >
                window.innerHeight
            ) {

                particle.speedY *= -1;

            }


            ctx.beginPath();


            ctx.arc(
                particle.x,
                particle.y,
                particle.radius,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                "rgba(0,229,255,.35)";


            ctx.fill();

        }
    );


    requestAnimationFrame(
        animateParticles
    );

}


resizeCanvas();

animateParticles();


window.addEventListener(
    "resize",
    resizeCanvas
);


/* =====================================================
   HERO PARALLAX
===================================================== */

const profile =
    document.querySelector(
        ".hero-profile"
    );


window.addEventListener(
    "pointermove",
    event => {

        if (
            window.innerWidth < 900
        ) {

            return;

        }


        const x =
            (
                event.clientX /
                window.innerWidth -
                .5
            ) * 8;


        const y =
            (
                event.clientY /
                window.innerHeight -
                .5
            ) * 8;


        profile.style.transform =
            `translate(${x}px,${y}px)`;

    }
);


/* =====================================================
   REVEAL ANIMATIONS
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project, .timeline-item, .contact, .focus-box, .education-card"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.animate(
                            [
                                {
                                    opacity: 0,

                                    transform:
                                        "translateY(30px)"
                                },

                                {
                                    opacity: 1,

                                    transform:
                                        "translateY(0)"
                                }
                            ],

                            {
                                duration: 750,

                                easing:
                                    "cubic-bezier(.2,.8,.2,1)",

                                fill:
                                    "forwards"
                            }
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   THEME BUTTON
===================================================== */

const themeButton =
    document.getElementById(
        "themeButton"
    );


let alternateTheme = false;


themeButton.addEventListener(
    "click",
    () => {

        alternateTheme =
            !alternateTheme;


        if (alternateTheme) {

            document.documentElement.style
                .setProperty(
                    "--cyan",
                    "#c8ff55"
                );

            document.documentElement.style
                .setProperty(
                    "--purple",
                    "#ff4ecd"
                );

            themeButton.textContent =
                "☼";

        } else {

            document.documentElement.style
                .setProperty(
                    "--cyan",
                    "#00e5ff"
                );

            document.documentElement.style
                .setProperty(
                    "--purple",
                    "#8b5cf6"
                );

            themeButton.textContent =
                "◐";

        }

    }
);


/* =====================================================
   CURRENT YEAR
===================================================== */

document.getElementById(
    "year"
).textContent =
    new Date().getFullYear();