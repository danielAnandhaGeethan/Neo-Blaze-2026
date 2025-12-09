
export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Theme', href: '#theme' },
  { name: 'Events', href: '#events' },
  { name: 'Rules', href: '#rules' },
  { name: 'Schedule', href: '#schedule' },
  { name: 'Contact', href: '#contact' },
];

export const heroContent = {
  title: "Neo Blaze 2026",
  subtitle: "Inter Church Youth Festival",
  tagline: "A one day youth festival with treasure hunts, music, reels, and more.",
  date: "26 January 2026",
  venue: "CSI Church of Jesus Christ, PRS Nagar, Bharathi Nagar, Chennai",
  ctaPrimary: {
    text: "View Events and Rules",
    href: "#events",
  },
  ctaSecondary: {
    text: "Download Rulebook",
    href: "#", // Placeholder link
  },
  eventDate: "2026-01-26T09:30:00",
};

export const aboutContent = {
  title: "About Neo Blaze",
  paragraphs: [
    "Neo Blaze is the premier inter-church youth event hosted by the CJC Youth Fellowship, igniting hearts for Christ! We're gathering youth from 15 to 20 churches for a day packed with high-energy competition and powerful fellowship.",
    "This isn't just about winning prizes. It's about discovering God-given talents, building lasting friendships across different congregations, and uniting under one banner of faith. Get ready for a day of fun, challenge, and spiritual growth.",
  ],
  expectations: [
    "High-energy competitions",
    "A space to showcase your unique talents",
    "New friendships and connections across churches",
    "A vibrant, Christ-centered atmosphere",
  ],
  ageGroup: "18 to 35",
};

export const themeContent = {
  title: "Theme 2026 - Teshuvah",
  subtitle: "Return before He returns",
  explanation: "Teshuvah is a call for today’s youth to return to God before the return of Christ. Though we may serve and pray, our hearts often wander. God is calling us to true repentance and renewed commitment, not outward devotion.",
  connection: "The Second Coming is near, and Teshuhuvah reminds us that now is the time to realign our lives with Him. Before the King returns for His people, His people must return to Him.",
  verse: {
    text: "“Return to Me, and I will return to you,” says the LORD of hosts.\n“But you say, ‘How shall we return?’ …\nFor behold, the day is coming, burning like an oven,\nwhen all the arrogant and all evildoers will be stubble.”",
    reference: "Malachi 3:7; 4:1",
  },
};

export const events = [
  {
    id: "treasure-hunt",
    name: "Treasure Hunt",
    tagline: "Race through clues, solve the mystery, claim the treasure.",
    type: "On-site",
  },
  {
    id: "singing",
    name: "Singing",
    tagline: "Lift your voice, move the crowd, and sing a new song.",
    type: "On-site",
  },
  {
    id: "photography",
    name: "Photography",
    tagline: "Capture the essence of the day through your unique lens.",
    type: "On-site",
  },
  {
    id: "quiz",
    name: "Quiz",
    tagline: "Test your knowledge of the Word. Fast, fun, and challenging.",
    type: "On-site",
  },
  {
    id: "clay-modeling",
    name: "Miniature Clay Modeling",
    tagline: "Shape your creativity from a lump of clay.",
    type: "On-site",
  },
  {
    id: "block-and-tackle",
    name: "Block and Tackle",
    tagline: "Think on your feet and argue both sides of the story.",
    type: "On-site",
  },
  {
    id: "surprise-event",
    name: "Surprise Event",
    tagline: "Expect the unexpected. Anything could happen!",
    type: "On-site",
  },
  {
    id: "online-reels",
    name: "Online Event - Reels",
    tagline: "Create a viral-worthy reel before the event day.",
    type: "Online",
  },
  {
    id: "online-photography",
    name: "Online Event - Light Photography",
    tagline: "Paint with light and capture stunning images.",
    type: "Online",
  },
];

export const eventRules = [
  {
    id: "singing",
    title: "Singing",
    description: "Unleash your vocal and musical talents with an original composition. Let's create an atmosphere of worship and praise together.",
    meta: "Participants: Minimum 5 singers per church (not counting instrumentalists) | Time limit: 7 minutes (including setup)",
    rules: [
      "Songs must feature original composition and lyrics, based on the theme verse (Malachi 3:7).",
      "Teams must include at least one creative vocal element, such as a clap pattern, chant, scripture whisper, vocal slide, or unison shout.",
      "Please provide 3 copies of the lyrics sheet to the judges. Do not print your church name on them.",
      "All lyrics and on-stage presentation must be Christ-honoring and family-friendly.",
    ],
  },
  {
    id: "photography",
    title: "Photography",
    description: "You have a camera and a keen eye. We'll give you a theme on the spot. Capture a winning shot that tells a story.",
    meta: "Participants: 2 per church | Time limit: 90 minutes",
    rules: [
      "The specific topic for the photography competition will be announced on the event day.",
      "All photos must be taken within the church premises and campus.",
      "Any device is welcome, from professional DSLRs to smartphone cameras.",
      "Heavy editing, filters, or composite images are not allowed. Only basic corrections (brightness, contrast, cropping) are permitted.",
      "Submissions after the 90-minute deadline will not be considered for judging.",
    ],
  },
  {
    id: "clay-modeling",
    title: "Miniature Clay Modeling",
    description: "Transform a simple block of clay into a work of art that reflects the event's theme. A test of creativity and skill.",
    meta: "Participants: 2 per church | Time limit: 1 hour",
    rules: [
      "The theme/topic will be revealed on the spot, inspired by 'Teshuvah'.",
      "Clay will be provided at the venue. You cannot use any external materials.",
      "Participants must bring their own moulding tools; none will be provided.",
      "Your final model should be an original creation and respectful of the event's spiritual tone.",
      "Be prepared for small twists or constraints from the organizers – it’s part of the fun!",
    ],
  },
  {
    id: "quiz",
    title: "Quiz",
    description: "Dive deep into the scriptures in this fast-paced and exciting quiz. How well do you know the Word?",
    meta: "Participants: 3 per church",
    rules: [
      "Bible versions allowed: Tamil (BSI/CSI), English (ESV).",
      "Syllabus for Prelims: The Book of Judges. For all subsequent rounds: The entire Bible.",
      "No phones, gadgets, or any form of notes are allowed during the quiz.",
      "Rounds may include rapid-fire, buzzers, or visual questions. The final format is at the Quiz Master's discretion.",
      "In all matters, the judges' decision is final.",
    ],
  },
  {
    id: "treasure-hunt",
    title: "Treasure Hunt",
    description: "The ultimate race against time! Follow the clues, solve the puzzles, and work as a team to uncover the final treasure.",
    meta: "Participants: 3 per team (at least one female member required)",
    rules: [
      "A comprehensive briefing covering the event format, specific rules, and required procedures will be provided live on the spot.",
      "A minimum of one (1) female participant is mandatory for all competing teams."
    ],
  },
  {
    id: "block-and-tackle",
    title: "Block and Tackle",
    description: "A fun and challenging debate-style event where you must argue for and against a topic on the fly. A true test of wit and spontaneity!",
    meta: "Participants: 1 per church",
    rules: [
      "The topic will be given on the spot.",
      "You will have 2 minutes to prepare your thoughts.",
      "The speaker will begin by talking on the topic. The host will randomly call 'Block' (requiring you to switch to opposing the point) or 'Tackle' (switching back to supporting it).",
      "Content must be clean, logical, and respectful.",
      "You will be judged on spontaneity, clarity, humor, and logical consistency.",
    ],
  },
  {
    id: "surprise-event",
    title: "Surprise Event",
    description: "Ready for anything? This event is a complete mystery until it's announced. Come with an open mind and a spirit of fun!",
    meta: "Participants: 3 per church (1 team per church)",
    rules: [
      "All event details will be revealed only on the day of the event.",
      "Any special materials required for the event will be provided by the organizers.",
      "Judges will be looking for teamwork, creativity, problem-solving skills, and a positive attitude.",
    ],
  },
  {
    id: "online-reels",
    title: "Reels (Online Event)",
    description: "Create a stunning video reel based on the theme 'Teshuvah' and share it with the world. Your chance to make an impact online.",
    meta: "Submission Deadline: 15 January 2026",
    rules: [
      "Create a video in reel format (e.g., for Instagram/Facebook) based on the event theme.",
      "The maximum duration is 1 minute.",
      "All content must be 100% original. No plagiarism or using clips from other creators.",
      "Content must be Christ-honoring. Any inappropriate videos will be immediately disqualified.",
      "Upload the video to Google Drive, set sharing to 'Anyone with the link', and email the link to csichurchofjesuschrist@gmail.com. Include your church name and contact person in the email.",
    ],
  },
  {
    id: "online-photography",
    title: "Light Photography (Online Event)",
    description: "Explore the creative use of light in photography. Submit a single, powerful image that captures the essence of the given theme.",
    meta: "Submission Deadline: 15 January 2026",
    rules: [
      "Photos must be freshly clicked for this event. No old photos, AI-generated images, or stock photos.",
      "Submissions must be in JPG or PNG format.",
      "Basic editing (brightness, contrast, color correction) is allowed. Heavy manipulation (adding/removing objects, composite images) is not.",
      "Submit one photo per participant by uploading to Google Drive and emailing the link to csichurchofjesuschrist@gmail.com.",
      "Prioritize your safety above all else while taking your photos.",
    ],
  },
];

export const generalRules = {
  title: "General Rules",
  rules: [
    {
      label: "Age Limit",
      content: "All participants should be between 18 and 35 years of age.",
      icon: true,
    },
    {
      label: "Reporting Time",
      content: "Registration desks open at 9:30 AM on the event day. Please be on time.",
      icon: false,
    },
    {
      label: "Registration Fees",
      content: "Church Registration: ₨ 1000 | Individual Entry: ₨ 100. (Fees are subject to change).",
      icon: false,
    },
    {
      label: "Discipline",
      content: "Please adhere to the schedule, follow volunteer instructions, and respect the church campus property. No abusive language or disruptive behavior will be tolerated.",
      icon: true,
    },
    {
      label: "Final Decision",
      content: "The judges' decision will be final for all events.",
      icon: true,
    },
  ],
  finalNote: "Detailed judging criteria and any last-minute updates will be announced closer to the event date.",
};


export const schedule = [
    { time: '09:30 AM', event: 'Registration & Fellowship' },
    { time: '10:00 AM', event: 'Opening Session & Prayer' },
    { time: '10:30 AM', event: 'First Set of On-site Events' },
    { time: '01:00 PM', event: 'Lunch Break' },
    { time: '02:00 PM', event: 'Afternoon Events & Competitions' },
    { time: '04:30 PM', event: 'Awards Ceremony & Closing Prayer' },
];

export const contactInfo = {
    venue: {
        name: "CSI Church of Jesus Christ",
        address: "1/3, SH 49, PRS Nagar, Bharathi Nagar, Chennai, Tamil Nadu 600041",
        mapUrl: "https://maps.app.goo.gl/r6vGZ9J2d7xYwS3f9"
    },
    organizers: {
        title: "Contact",
        list: [
            { name: "Charles", phone: "97xxx xxxxx" },
            { name: "Presley", phone: "90xxx xxxxx" },
            { name: "Prathip", phone: "97xxx xxxxx" },
            { name: "Alan", phone: "99xxx xxxxx" }
        ],
        email: "csichurchofjesuschrist@gmail.com"
    }
};

export const footerContent = {
    hostedBy: "Hosted by CJC Youth Fellowship",
    disclaimer: "By entering the venue you agree to be photographed and to respect all participants and volunteers."
};
