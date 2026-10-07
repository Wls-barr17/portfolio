import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'homeos',
    title: 'HomeOS',
    description:
      'A web system described as comparing prices and promotions from nearby Ara and D1 markets using scraped market data.',
    technologies: [],
    categories: ['Web'],
    githubUrl: 'https://github.com/Wls-barr17/HomeOS',
    featured: true,
    problem: 'The repository describes shoppers comparing prices and sales across nearby markets.',
    solution:
      'Its README describes a web system that gathers market data from Ara and D1 for price comparison.',
    architecture: [
      'Ara and D1 market data',
      'Scraped prices and promotions',
      'Web comparison system',
    ],
    note: 'The public repository currently contains its README and .gitignore; application source code is not visible there, so implementation details could not be verified.',
  },
  {
    id: 'agroguardian-cattle-detection-model',
    title: 'AgroGuardian — Cattle Detection',
    description:
      'A Python project for detecting, tracking and counting cattle in video, documented with YOLOv8 and DeepSORT.',
    technologies: ['Python', 'YOLOv8', 'DeepSORT', 'OpenCV'],
    categories: ['AI', 'Backend'],
    githubUrl: 'https://github.com/Wls-barr17/agroguardian-cattle-detection-model',
    featured: true,
    problem:
      'Counting cattle in video can double-count animals that move through the frame more than once.',
    solution:
      'The repository documents a video pipeline combining YOLOv8 detection, DeepSORT tracking, counting logic and annotated output.',
    architecture: [
      'Input video frames',
      'YOLOv8 detection',
      'DeepSORT tracking',
      'Counting and annotated video',
    ],
    note: 'The project README documents this workflow. Its performance figures are omitted here because they are not independently verified.',
  },
  {
    id: 'music-fetch-app',
    title: 'Music Fetch App',
    description:
      'An Android music app repository describing authentication, music browsing and streaming, with Firebase and Firestore integration.',
    technologies: ['Java', 'Android', 'Firebase', 'Firestore', 'Volley'],
    categories: ['Mobile', 'Backend'],
    githubUrl: 'https://github.com/Wls-barr17/music-fetch-app',
    problem:
      'The repository presents a mobile music app with account access and music content as its focus.',
    solution:
      'Its README describes an Android application using Firebase Authentication, Firestore and Volley networking.',
    architecture: [
      'Android app (Java)',
      'Firebase Authentication',
      'Firestore music data',
      'Volley networking',
    ],
    note: 'The repository includes Android application source. Its README lists an activity-based architecture; the card summarizes documented integrations rather than claiming a specific backend design.',
  },
  {
    id: 'slime-wars-game',
    title: 'Slime Wars',
    description: 'A local two-player arena fighting game built with GameMaker Studio 2 and GML.',
    technologies: ['GameMaker Studio 2', 'GML', 'Aseprite'],
    categories: ['Game'],
    githubUrl: 'https://github.com/Wls-barr17/slime-wars-game',
    problem:
      'Create a compact local multiplayer game where two players can move, fight and compete in an arena.',
    solution:
      'The documented game combines movement, attacks, health, power-ups and round restart mechanics.',
    architecture: [
      'GameMaker Studio 2',
      'Movement and collision systems',
      'Combat and health systems',
      'Power-ups and rounds',
    ],
    note: 'The repository includes a GameMaker project. Its README says gameplay screenshots are still to be added.',
  },
  {
    id: 'university-bullying-reporting-system',
    title: 'University Bullying Reporting System',
    description:
      'A university-focused website repository for bullying case pages, with reporting, forum and appointment-related files.',
    technologies: ['PHP', 'SQL', 'HTML', 'CSS', 'JavaScript'],
    categories: ['University', 'Web', 'Backend'],
    githubUrl: 'https://github.com/Wls-barr17/university-bullying-reporting-system',
    problem:
      'The repository frames bullying cases at a university as something students should be able to report and discuss.',
    solution:
      'The published files include pages and handlers for reports, login, forums and appointments.',
    architecture: ['HTML, CSS and JavaScript pages', 'PHP handlers', 'SQL data file'],
    note: 'These details are based on the repository description and visible file list; I have not independently verified a deployed system or its runtime behavior.',
  },
  {
    id: 'parche-me',
    title: 'PARche.me',
    description:
      'Project title supplied by Wilson; its purpose and implementation are pending repository verification.',
    technologies: [],
    categories: [],
    problem: 'Project details are not available from the provided repository URL.',
    solution: 'Add the project description after a working public repository link is available.',
    architecture: ['Details pending verification'],
    note: 'The supplied GitHub URL returned a 404 and this repository did not appear in the public repository list. No GitHub button is shown until the link is corrected.',
  },
  {
    id: 'outfitly-ai-telegram',
    title: 'Outfitly AI Telegram',
    description:
      'A public repository describing a Telegram outfit suggestion bot using weather and style preferences.',
    technologies: ['Python', 'Telegram', 'Weather API'],
    categories: ['Backend', 'AI'],
    githubUrl: 'https://github.com/Wls-barr17/outfitly-ai-telegram',
    problem:
      'The repository README frames the idea as helping people choose an outfit using weather and personal style preferences.',
    solution:
      'The README describes a Telegram bot concept with weather-aware suggestions and per-user preferences.',
    architecture: [
      'Telegram chat',
      'Python bot (described in README)',
      'Weather data and user preferences',
    ],
    note: 'The public repository currently contains documentation only; implementation details and the described features could not be verified from published source files.',
  },
];
