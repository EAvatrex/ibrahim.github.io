// Initialize AOS (Animate on Scroll)
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
});

// Loading Screen Script
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
    }, 3000);
});

// Certificate Data Array
const certificates = [
    {
        name: "Design Sprint Professional Certification DSPC - (English)",
        date: "2024",
        organization: "CertifPro",
        link: "https://www.credly.com/badges/b25bf80a-7fdb-4980-b283-169b2f1a2487",
        image: "../c/c1.jpg"
    },
    {
        name: "Presenting Data",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/200c48d7-b1e5-46d9-bfc2-17de6c3c57f8",
        image: "../c/c2.jpg"
    },
    {
        name: "IT for Business Success",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/ae785242-8817-49b5-8dc8-969a6e6f3c8e",
        image: "../c/c3.jpg"
    },
    {
        name: "Resume Writing and Job Interviewing",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/8899e022-1a47-47d1-8fcf-9131a4275304",
        image: "../c/c4.jpg"
    },
    {
        name: "Social Media Marketing",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/bea571f9-4d07-4ce1-bb81-83f7c534ad20",
        image: "../c/c5.jpg"
    },
    {
        name: "Data Science & Analytics",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/4e9917ed-44d8-40eb-99a2-51a2c908093e",
        image: "../c/c6.jpg"
    },
    {
        name: "Your Target Audience",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/dffa54d5-bb21-4ee7-ba0c-89a58d47c9ed",
        image: "../c/c7.jpg"
    },
    {
        name: "Introduction to Cybersecurity Awareness",
        date: "2024",
        organization: "HP LIFE",
        link: "https://www.life-global.org/certificate/60dd9900-e37f-4f31-aef6-c140bc7c3acb",
        image: "../c/c8.jpg"
    },
    {
        name: "Javascript(Basics)",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/5f3d965de619",
        image: "../c/c9.jpg"
    },
    {
        name: "SQL(Intermediate)",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/d7ff79727f93",
        image: "../c/c10.jpg"
    },
    {
        name: "Java (Basic) Certificate",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/f2fa2bdcb01f",
        image: "../c/c11.jpg"
    },
    {
        name: "Problem Solving (Intermediate) Certificate",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/c18617588c69",
        image: "../c/c12.jpg"
    },
    {
        name: "CSS (Basic) Certificate",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/847ae73ed629",
        image: "../c/c13.jpg"
    },
    {
        name: "C# (Basic) Certificate",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/d46f7de7cd3c",
        image: "../c/c14.jpg"
    },
    {
        name: "SQL (Advanced) Certificate",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/de54cb2e2c84",
        image: "../c/c15.jpg"
    },
    {
        name: "R (Intermediate) Certificate",
        date: "2024",
        organization: "HackerRank",
        link: "https://www.hackerrank.com/certificates/ee969dd88d6f",
        image: "../c/c16.jpg"
    },
    {
        name: "Introduction to Database and SQL Certificate",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/UDHPVKRH",
        image: "../c/c17.jpg"
    },
    {
        name: "Introduction to NoSQL",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/ASWNOWZP",
        image: "../c/c18.jpg"
    },
    {
        name: "Front End Development - HTML",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/JPRRXHKQ",
        image: "../c/c19.jpg"
    },
    {
        name: "Front End Development - CSS",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/FLDMELPH",
        image: "../c/c20.jpg"
    },
    {
        name: "Data Visualization using Tableau",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/BAMDZNDW",
        image: "../c/c21.jpg"
    },
    {
        name: "Excel for Data Science for Beginners",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/ABPQEJKU",
        image: "../c/c22.jpg"
    },
    {
        name: "Intro to Exploratory Data Analysis with Excel",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/DPGXCPRE",
        image: "../c/c23.jpg"
    },
    {
        name: "Data Analytics using Excel",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/LXSBFZOQ",
        image: "../c/c24.jpg"
    },
    {
        name: "Advanced Cyber Security - Threats and Governance",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/DBQBMHGC",
        image: "../c/c25.jpg"
    },
    {
        name: "Probability for Data Science",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/PSLPEXQJ",
        image: "../c/c26.jpg"
    },
    {
        name: "Probability and Probability Distributions for Machine Learning",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/ORLOCJTW",
        image: "../c/c27.jpg"
    },
    {
        name: "Java Programming",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/OAKQDBPK",
        image: "../c/c28.jpg"
    },
    {
        name: "Ethical Hacking - Mobile Platforms and Network Architecture",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/VSWRCQVO",
        image: "../c/c29.jpg"
    },
    {
        name: "Statistical Methods for Decision Making",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/RXJJHMWP",
        image: "../c/c30.jpg"
    },
    {
        name: "Basics of Python Data Wrangling",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/SIVXZRTG",
        image: "../c/c31.jpg"
    },
    {
        name: "Python Foundations",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/KEVCBQGX",
        image: "../c/c32.jpg"
    },
    {
        name: "Search Engine Marketing",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/FJWCUVDH",
        image: "../c/c33.jpg"
    },
    {
        name: "Python for Machine Learning",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/PEIOWMKQ",
        image: "../c/c34.jpg"
    },
    {
        name: "AI in Digital Marketing",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/LVVCCNBJ",
        image: "../c/c35.jpg"
    },
    {
        name: "How to start Blogging",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/YYCWKZXV",
        image: "../c/c36.jpg"
    },
    {
        name: "ChatGPT for Digital Marketing",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/DFNWUMTI",
        image: "../c/c37.jpg"
    },
    {
        name: "ChatGPT for HR",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/ESBMIRSJ",
        image: "../c/c38.jpg"
    },
    {
        name: "Digital Transformation",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/SUVWPYQA",
        image: "../c/c39.jpg"
    },
    {
        name: "Content Marketing Basics",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/AZYLIOTH",
        image: "../c/c40.jpg"
    },
    {
        name: "Affiliate Marketing",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/MDXUCSKS",
        image: "../c/c41.jpg"
    },
    {
        name: "ChatGPT for Coders",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/YKQYGGOD",
        image: "../c/c42.jpg"
    },
    {
        name: "Instagram Marketing Fundamentals",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/BEQCKJBV",
        image: "../c/c43.jpg"
    },
    {
        name: "Applications of AI",
        date: "2024",
        organization: "Great Learning",
        link: "https://www.mygreatlearning.com/certificate/BGNJCLFU",
        image: "../c/c44.jpg"
    }
    
    

    

];

// Render Certificates Dynamically
const container = document.querySelector('.certificates-container');

certificates.forEach((certificate, index) => {
    const card = document.createElement('div');
    card.className = 'certificate-card';
    card.setAttribute('data-aos', 'fade-up');
    card.innerHTML = `
        <img class="certificate-image" src="${certificate.image}" alt="${certificate.name}">
        <div class="certificate-details">
            <h2>${certificate.name}</h2>
            <p><strong>Organization:</strong> ${certificate.organization}</p>
            <p><strong>Date:</strong> ${certificate.date}</p>
            <button class="verify-btn" onclick="window.open('${certificate.link}', '_blank')">Verify</button>
        </div>
    `;
    container.appendChild(card);
});
