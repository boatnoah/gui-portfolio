import BentoBox from "./Componenets/BentoBox.jsx";

const App = () => {
  const aboutMeInfo = [
    {
      title: "Introduction",
      content:
        "Hey, I'm Noah! Thanks for checking out my website. I'm currently a student at CSULB studying Computer Science with ambitions of becoming a Full-Stack Developer. I enjoy coding, teaching others to code, and learning more about it! So for the past year, I have been working as a Code Coach teaching kids aged 8-15 on the basics of programming, data structures, algorithms, and Web Development. It's been an awesome experience getting to share my knowledge and watch the kids get excited about coding. As someone who's always striving to level up my skills, I've also been interning at a few different programs and start-ups to dive deeper into real-world projects. I'm constantly on the lookout for fresh opportunities in the tech sphere where I can keep growing and contributing my skills.",
    },
    {
      title: "Skills",
      content:
        "Languages: Python, JavaScript, TypeScript, HTML, CSS, C++\nFrameworks: React, Django, Node.js, Tailwind\nTools: Neovim, Git, VS Code",
    },
    {
      title: "Education",
      content:
        "California State University, Long Beach - Expected Graduation: May 2026\nBachelor of Science in Computer Science - GPA: 3.9/4.0\nRelevant Coursework: CodePath Web 102, Data Structure, Discrete Structures, Objected-Oriented Development, Computer Architecture",
    },
  ];

  const projectsInfo = [
    {
      title: "Computer Science Content Creator",
      content:
        "TikTok, Creativity, Content Creation\nSharing my passion for CS through fun and informative content on TikTok",
    },
    {
      title: "Pathfinding Visualizer",
      content:
        "Python, Pygame, Pygbag\nAn 800x800 grid where you can watch pathfinding algorithms in action",
    },
    {
      title: "Terminal Website",
      content:
        "HTML, CSS, JavaScript\nCheck out a terminal version of this website!",
    },
    {
      title: "Chess",
      content:
        "Python\nA fully playable chess game that I used to teach Object-Oriented Programming",
    },
  ];

  const socialsInfo = [
    {
      title: "Email",
      link: "mailto:noahkimCS@gmail.com",
      use: false,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/noah-kim-cs",
    },
    {
      title: "GitHub",
      link: "https://github.com/boatnoah",
    },
    {
      title: "Terminal Website",
      link: "https://www.boatnoah.com",
    },
    {
      title: "Resume",
      link: "https://www.resume.lol/share/zp03ire",
    },
  ];

  return (
    <div className="bg-discord-quinary flex flex-col justify-center items-center gap-5 p-5">
      <BentoBox title="About Me 👨🏻‍💻" infoSections={aboutMeInfo} />
      <BentoBox title="Projects 📂" infoSections={projectsInfo} />
      <BentoBox title="Socials 📲" infoSections={socialsInfo} />
    </div>
  );
};

export default App;
