import {
  siArduino,
  siAstro,
  siAutocad,
  siBitcoin,
  siCisco,
  siCss,
  siEthereum,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siLabview,
  siPython,
  siReact,
  siSiemens,
  siTailwindcss,
  siTrello,
  siTypescript,
} from 'simple-icons';

export type Skill = {
  name: string;
  color: string;
  svg?: string;
  initials?: string;
};

const brand = (name: string, icon: { svg: string; hex: string }, color?: string): Skill => ({
  name,
  color: color ?? '#' + icon.hex,
  svg: icon.svg.replace('<svg ', '<svg class="brand-mark" '),
});

const icon = (paths: string): string =>
  '<svg class="line-mark" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
  paths +
  '</svg>';

const symbol = (name: string, svg: string, color = '#2b5c95'): Skill => ({ name, color, svg });
const letters = (name: string, initials: string, color: string): Skill => ({ name, initials, color });

const network = icon('<circle cx="12" cy="4" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M11 6 6 17m7-11 5 11M7 19h10"/>');
const shield = icon('<path d="M12 2 20 5v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5l8-3Z"/><path d="m9 12 2 2 4-4"/>');
const monitor = icon('<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M7 12h3l2-4 2 7 2-3h2M9 21h6m-3-3v3"/>');
const cycle = icon('<path d="M20 7V3l-3 2a8 8 0 0 0-13 6M4 17v4l3-2a8 8 0 0 0 13-6"/><path d="M17 5h3M4 19h3"/>');
const database = icon('<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>');
const circuit = icon('<path d="M3 7h6v5h6V5h6M3 17h8v-4h6v4h4"/><circle cx="3" cy="7" r="1"/><circle cx="21" cy="5" r="1"/><circle cx="21" cy="17" r="1"/>');
const pneumatic = icon('<circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><path d="M9 12h6M6 9V5h12v4M6 15v4h12v-4"/>');
const blockchain = icon('<rect x="2" y="9" width="6" height="6" rx="1"/><rect x="16" y="2" width="6" height="6" rx="1"/><rect x="16" y="16" width="6" height="6" rx="1"/><path d="M8 12h4l5-6M12 12l5 7"/>');
const chart = icon('<path d="M3 3v18h18M7 16l4-5 3 2 5-7"/><path d="M17 6h2v2"/>');
const team = icon('<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20v-2a6 6 0 0 1 12 0v2H2Zm13 0h7v-2a5 5 0 0 0-6-4.9"/>');
const bulb = icon('<path d="M9 18h6m-5 3h4M8 15a7 7 0 1 1 8 0c-.8.7-1 1.5-1 3H9c0-1.5-.2-2.3-1-3Z"/>');
const bolt = icon('<path d="m13 2-9 12h7l-1 8 10-12h-7l0-8Z"/>');
const discipline = icon('<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>');
const persuasion = icon('<path d="M4 4h16v12H9l-5 4V4Z"/><path d="M8 9h8m-8 3h5"/>');
const strategy = icon('<path d="M5 20h14M7 17h10l-1-6H8l-1 6Zm1-6-2-5 4 2 2-5 2 5 4-2-2 5"/>');

// Names come from the supplied skills list. Products without a Simple Icons entry
// use a neutral lettermark; general skills use outline symbols.
export const hardSkillGroups: { id: string; title: string; skills: Skill[] }[] = [
  {
    id: 'industrial-networks',
    title: 'Industrial Networks & Networking',
    skills: [
      symbol('SD-WAN', network),
      symbol('Firewalls', shield),
      symbol('Monitoreo de redes', monitor),
      letters('Versa Director', 'VD', '#294a8d'),
      brand('Cisco Prime', siCisco),
      letters('PuTTY', 'P', '#2b4f81'),
      letters('ServiceNow', 'SN', '#2e8068'),
    ],
  },
  {
    id: 'version-control-tools',
    title: 'Version Control & Other Tools',
    skills: [
      letters('Word', 'W', '#185abd'),
      letters('Excel', 'X', '#107c41'),
      brand('Git', siGit),
      brand('GitHub', siGithub),
      brand('Trello', siTrello),
      symbol('Scrum', cycle),
    ],
  },
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    skills: [
      brand('TypeScript', siTypescript),
      brand('JavaScript', siJavascript, '#9a7900'),
      brand('Python', siPython),
      symbol('SQL', database),
    ],
  },
  {
    id: 'web-development',
    title: 'Web Development',
    skills: [
      brand('React', siReact, '#087ea4'),
      brand('Astro', siAstro),
      brand('HTML', siHtml5),
      brand('CSS', siCss),
      brand('Tailwind CSS', siTailwindcss),
    ],
  },
  {
    id: 'automation-control',
    title: 'Automation and Control',
    skills: [
      brand('LabVIEW', siLabview, '#b88700'),
      brand('PLC Siemens', siSiemens),
      brand('Arduino', siArduino),
      symbol('Circuitos electrónicos', circuit),
      symbol('Circuitos neumáticos', pneumatic),
    ],
  },
  {
    id: 'cad-design',
    title: 'CAD Design',
    skills: [
      letters('SolidWorks', 'SW', '#d52430'),
      brand('AutoCAD', siAutocad),
    ],
  },
  {
    id: 'blockchain-knowledge',
    title: 'Blockchain Knowledge',
    skills: [
      symbol('Blockchain', blockchain),
      brand('Bitcoin', siBitcoin),
      brand('Ethereum', siEthereum),
      symbol('CFD trading', chart),
    ],
  },
];

export const softSkills: Skill[] = [
  symbol('Trabajo en equipo', team),
  symbol('Creatividad', bulb),
  symbol('Proactividad', bolt),
  symbol('Disciplina', discipline),
  symbol('Persuasión', persuasion),
  symbol('Pensamiento estratégico', strategy),
];
