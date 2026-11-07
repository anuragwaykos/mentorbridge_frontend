import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import favicon from './favicon.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import mentor1 from './mentor1.png'
import mentor2 from './mentor2.png'
import mentor3 from './mentor3.png'
import mentor4 from './mentor4.png'
import mentor5 from './mentor5.png'
import mentor6 from './mentor6.png'
import mentor7 from './mentor7.png'
import mentor8 from './mentor8.png'
import mentor9 from './mentor9.png'
import mentor10 from './mentor10.png'
import mentor11 from './mentor11.png'
import mentor12 from './mentor12.png'
import mentor13 from './mentor13.png'
import mentor14 from './mentor14.png'
import mentor15 from './mentor15.png'
import Web_Development from './Web_Development.svg'
import Java_Programming from './Java_Programming.svg'
import Python_AI from './Python_AI.svg'
import DSA_Problem_Solving from './DSA_Problem_Solving.svg'
import Interview_Placement from './Interview_Placement.svg'
import Database_SQL from './Database_SQL.svg'

export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    favicon,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
}

// Same idea as "specialityData" in the Prescripto tutorial.
// "category" must match the category written in the mentors list below.
export const skillData = [
    { category: 'Web Development', image: Web_Development },
    { category: 'Java Programming', image: Java_Programming },
    { category: 'Python & AI', image: Python_AI },
    { category: 'DSA & Problem Solving', image: DSA_Problem_Solving },
    { category: 'Interview & Placement', image: Interview_Placement },
    { category: 'Database & SQL', image: Database_SQL },
]

// Mentors (replaces the "doctors" list of the tutorial).
// Same shape as src/data/mentors.js of the MentorBridge project, plus image and category.
export const mentors = [
    {
        id: 1,
        name: 'Priya Sharma',
        image: mentor1,
        category: 'Java Programming',
        title: 'Final Year CSE Student',
        experience: '2 years',
        expertise: ["Java", "DSA", "OOP"],
        rating: 4.9,
        bio: 'I teach Java from the basics to interview level. We practice OOP, collections and real coding questions step by step.',
    },
    {
        id: 2,
        name: 'Aman Verma',
        image: mentor2,
        category: 'Web Development',
        title: 'Full Stack Developer',
        experience: '3 years',
        expertise: ["React", "Node.js", "MongoDB"],
        rating: 4.7,
        bio: 'I help students build real web projects with HTML, CSS, React and Node.js, and explain how everything fits together.',
    },
    {
        id: 3,
        name: 'Sneha Patil',
        image: mentor3,
        category: 'Interview & Placement',
        title: 'Placement Coach',
        experience: '4 years',
        expertise: ["Aptitude", "Interview", "Resume"],
        rating: 4.8,
        bio: 'I help with aptitude, resume writing and mock interviews so you can feel confident in placements.',
    },
    {
        id: 4,
        name: 'Rohan Desai',
        image: mentor4,
        category: 'Python & AI',
        title: 'Python and AI Enthusiast',
        experience: '2 years',
        expertise: ["Python", "SQL", "AI"],
        rating: 4.6,
        bio: 'Python, data and beginner AI projects explained with simple examples. Ask me anything about getting started.',
    },
    {
        id: 5,
        name: 'Ananya Iyer',
        image: mentor5,
        category: 'DSA & Problem Solving',
        title: 'Competitive Programmer',
        experience: '3 years',
        expertise: ["DSA", "C++", "LeetCode"],
        rating: 4.9,
        bio: 'I guide you to think about problems, learn data structures and solve questions in a clear, calm way.',
    },
    {
        id: 6,
        name: 'Karan Mehta',
        image: mentor6,
        category: 'Database & SQL',
        title: 'Backend Developer',
        experience: '2 years',
        expertise: ["SQL", "MongoDB", "MySQL"],
        rating: 4.5,
        bio: 'I explain databases, SQL queries and MongoDB so you can design and use data confidently.',
    },
    {
        id: 7,
        name: 'Neha Kulkarni',
        image: mentor7,
        category: 'Web Development',
        title: 'Frontend Developer',
        experience: '2 years',
        expertise: ["HTML", "CSS", "React"],
        rating: 4.7,
        bio: 'I help students build real web projects with HTML, CSS, React and Node.js, and explain how everything fits together.',
    },
    {
        id: 8,
        name: 'Vikram Singh',
        image: mentor8,
        category: 'Java Programming',
        title: 'Software Engineer',
        experience: '5 years',
        expertise: ["Java", "Spring Boot", "OOP"],
        rating: 4.8,
        bio: 'I teach Java from the basics to interview level. We practice OOP, collections and real coding questions step by step.',
    },
    {
        id: 9,
        name: 'Ishita Gupta',
        image: mentor9,
        category: 'Python & AI',
        title: 'Data Science Student',
        experience: '2 years',
        expertise: ["Python", "Pandas", "ML"],
        rating: 4.6,
        bio: 'Python, data and beginner AI projects explained with simple examples. Ask me anything about getting started.',
    },
    {
        id: 10,
        name: 'Arjun Nair',
        image: mentor10,
        category: 'DSA & Problem Solving',
        title: 'Placement Topper',
        experience: '1 year',
        expertise: ["DSA", "Java", "Aptitude"],
        rating: 4.5,
        bio: 'I guide you to think about problems, learn data structures and solve questions in a clear, calm way.',
    },
    {
        id: 11,
        name: 'Pooja Reddy',
        image: mentor11,
        category: 'Interview & Placement',
        title: 'HR and Soft Skills Mentor',
        experience: '3 years',
        expertise: ["Interview", "Resume", "Communication"],
        rating: 4.8,
        bio: 'I help with aptitude, resume writing and mock interviews so you can feel confident in placements.',
    },
    {
        id: 12,
        name: 'Siddharth Rao',
        image: mentor12,
        category: 'Database & SQL',
        title: 'Cloud and DB Engineer',
        experience: '4 years',
        expertise: ["SQL", "Cloud", "MongoDB"],
        rating: 4.7,
        bio: 'I explain databases, SQL queries and MongoDB so you can design and use data confidently.',
    },
    {
        id: 13,
        name: 'Meera Joshi',
        image: mentor13,
        category: 'Web Development',
        title: 'UI Developer',
        experience: '2 years',
        expertise: ["React", "CSS", "Figma"],
        rating: 4.9,
        bio: 'I help students build real web projects with HTML, CSS, React and Node.js, and explain how everything fits together.',
    },
    {
        id: 14,
        name: 'Harsh Agarwal',
        image: mentor14,
        category: 'Java Programming',
        title: 'Java Trainer',
        experience: '3 years',
        expertise: ["Java", "JDBC", "Servlets"],
        rating: 4.4,
        bio: 'I teach Java from the basics to interview level. We practice OOP, collections and real coding questions step by step.',
    },
    {
        id: 15,
        name: 'Divya Menon',
        image: mentor15,
        category: 'Python & AI',
        title: 'AI Research Intern',
        experience: '1 year',
        expertise: ["Python", "AI", "Statistics"],
        rating: 4.6,
        bio: 'Python, data and beginner AI projects explained with simple examples. Ask me anything about getting started.',
    },
]
