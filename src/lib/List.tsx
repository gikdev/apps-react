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
    platforms: "WMLAI",
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
    platforms: "WML",
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
    platforms: "ML(WSL)",
  },
];

export default function List() {
  return <div className="list">

    {cards.map((card, index) => (

      <Card key={ index } data={ card } /> 
      
    ))}

  </div>
}