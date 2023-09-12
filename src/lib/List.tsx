import Card from "./Card";

let id = 0;

const cards = [
  {
    id: id++,
    icon: "./images/chrome.svg",
    name: "Chrome",
    company: "Google",
    category: "Browser",
    website: "https://www.google.com/chrome/",
    dlURL: "https://www.google.com/chrome/",
    price: "free",
    platforms: "PC & Phones",
  },
  {
    id: id++,
    icon: "./images/vscode.svg",
    name: "VSCode",
    company: "Microsoft",
    category: "Code Editor | IDE",
    website: "https://code.visualstudio.com/",
    dlURL: "https://code.visualstudio.com/#alt-downloads",
    price: "free",
    platforms: "PC",
  },
  {
    id: id++,
    icon: "./images/bun.svg",
    name: "BunJS",
    company: "Jarred Sumner",
    category: "JS Runtime",
    website: "https://bun.sh/",
    dlURL: "https://bun.sh/",
    price: "free",
    platforms: "Mac, Linux, (WSL)",
  },
  {
    id: id++,
    icon: "./images/node.svg",
    name: "NodeJS",
    company: "OpenJS Foundation",
    category: "JS Runtime",
    website: "https://nodejs.org/",
    dlURL: "https://nodejs.org/download",
    price: "free",
    platforms: "PC",
  },
  {
    id: id++,
    icon: "./images/deno.svg",
    name: "Deno",
    company: "Deno Land Inc.",
    category: "JS Runtime",
    website: "https://deno.com/",
    dlURL: "https://deno.com/manual/getting_started/installation/",
    price: "free",
    platforms: "PC",
  },
  {
    id: id++,
    icon: "./images/git.svg",
    name: "Git",
    company: "Linus Torvalds",
    category: "Version Control System (VCS)",
    website: "https://git-scm.com/",
    dlURL: "https://git-scm.com/downloads",
    price: "free",
    platforms: "PC",
  },
  {
    id: id++,
    icon: "./images/github.svg",
    name: "GitHub",
    company: "GitHub Inc.",
    category: "Source Code Hosting Platform",
    website: "https://github.com/",
    dlURL: "https://github.com/",
    price: "free",
    platforms: "Web",
  },
  {
    id: id++,
    icon: "./images/windows11.svg",
    name: "Windows 11",
    company: "Microsoft Corp.",
    category: "PC OS",
    website: "https://www.microsoft.com/en-us/windows/windows-11",
    dlURL: "https://www.microsoft.com/en-us/windows/get-windows-11",
    price: "free",
    platforms: "Windows",
  },
];

export default function List() {
  return <div className="list">
    {cards.map((card, index) => (

      <Card key={ index } data={ card } /> 
      
    ))}
  </div>
}