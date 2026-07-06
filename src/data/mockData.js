export const students = [
  {
    id: 1,
    name: "Nora Keïta",
    email: "nora.k@mail.com",
    package: "Theory + Practical",
    hoursDone: 16.5,
    hoursTotal: 20,
    instructor: "Marc Dubois",
    nextLesson: "Jul 8, 09:00",
    status: "On track",
    enrolled: "Mar 12",
    skills: [
      { name: "Parking & maneuvers", level: 4 },
      { name: "Highway driving", level: 3 },
      { name: "City & intersections", level: 4 },
      { name: "Night driving", level: 2 },
    ],
    route: ["done", "done", "current", "upcoming"],
    documents: [
      { name: "ID card", status: "Verified" },
      { name: "Medical certificate", status: "Verified" },
      { name: "Theory test certificate", status: "Pending upload" },
    ],
    history: [
      {
        text: "Lesson 14 — Highway driving, 92% score",
        time: "Jul 3",
        color: "green",
      },
      {
        text: "Lesson 13 — Parking maneuvers, 88% score",
        time: "Jun 28",
        color: "green",
      },
      {
        text: "Theory class — Road signage, attended",
        time: "Jun 24",
        color: "blue",
      },
    ],
  },
  {
    id: 2,
    name: "Karim Belhadj",
    email: "karim.b@mail.com",
    package: "Practical only",
    hoursDone: 9,
    hoursTotal: 20,
    instructor: "Sophie Lenoir",
    nextLesson: "Jul 9, 14:00",
    status: "Behind pace",
    enrolled: "Apr 2",
    skills: [
      { name: "Parking & maneuvers", level: 2 },
      { name: "Highway driving", level: 1 },
      { name: "City & intersections", level: 3 },
      { name: "Night driving", level: 1 },
    ],
    route: ["done", "current", "upcoming", "upcoming"],
    documents: [
      { name: "ID card", status: "Verified" },
      { name: "Medical certificate", status: "Pending upload" },
    ],
    history: [
      {
        text: "Lesson 9 — City driving, 74% score",
        time: "Jul 1",
        color: "amber",
      },
      { text: "Lesson 8 — Parking, 70% score", time: "Jun 20", color: "amber" },
    ],
  },
  {
    id: 3,
    name: "Léa Fabre",
    email: "lea.fabre@mail.com",
    package: "Theory + Practical",
    hoursDone: 20,
    hoursTotal: 20,
    instructor: "Marc Dubois",
    nextLesson: "Road test — Jul 12",
    status: "Exam ready",
    enrolled: "Jan 20",
    skills: [
      { name: "Parking & maneuvers", level: 5 },
      { name: "Highway driving", level: 5 },
      { name: "City & intersections", level: 4 },
      { name: "Night driving", level: 4 },
    ],
    route: ["done", "done", "done", "current"],
    documents: [
      { name: "ID card", status: "Verified" },
      { name: "Medical certificate", status: "Verified" },
      { name: "Theory test certificate", status: "Verified" },
    ],
    history: [
      { text: "Mock exam — 96% score, passed", time: "Jun 30", color: "green" },
      { text: "Lesson 20 — Final review", time: "Jun 27", color: "green" },
    ],
  },
  {
    id: 4,
    name: "Yanis Roche",
    email: "yanis.r@mail.com",
    package: "Theory only",
    hoursDone: 3,
    hoursTotal: 10,
    instructor: "—",
    nextLesson: "Unscheduled",
    status: "Needs attention",
    enrolled: "Jun 15",
    skills: [
      { name: "Parking & maneuvers", level: 1 },
      { name: "Highway driving", level: 0 },
      { name: "City & intersections", level: 1 },
      { name: "Night driving", level: 0 },
    ],
    route: ["current", "upcoming", "upcoming", "upcoming"],
    documents: [{ name: "ID card", status: "Verified" }],
    history: [
      {
        text: "Theory class — Introduction, attended",
        time: "Jun 16",
        color: "blue",
      },
    ],
  },
  {
    id: 5,
    name: "Amélie Voss",
    email: "amelie.v@mail.com",
    package: "Practical only",
    hoursDone: 13,
    hoursTotal: 20,
    instructor: "Sophie Lenoir",
    nextLesson: "Jul 10, 11:00",
    status: "On track",
    enrolled: "Feb 8",
    skills: [
      { name: "Parking & maneuvers", level: 3 },
      { name: "Highway driving", level: 3 },
      { name: "City & intersections", level: 3 },
      { name: "Night driving", level: 2 },
    ],
    route: ["done", "current", "upcoming", "upcoming"],
    documents: [
      { name: "ID card", status: "Verified" },
      { name: "Medical certificate", status: "Verified" },
    ],
    history: [
      {
        text: "Lesson 13 — City driving, 85% score",
        time: "Jul 2",
        color: "green",
      },
    ],
  },
];

export const statusChipClass = {
  "On track": "chip-green",
  "Behind pace": "chip-amber",
  "Exam ready": "chip-blue",
  "Needs attention": "chip-red",
};

export const instructors = [
  {
    id: 1,
    initials: "MD",
    name: "Marc Dubois",
    specialty: "Highway · Night driving",
    heat: [2, 3, 3, 1, 2, 0, 0],
    students: 18,
    availability: "Available",
  },
  {
    id: 2,
    initials: "SL",
    name: "Sophie Lenoir",
    specialty: "Parking · City driving",
    heat: [3, 3, 2, 3, 2, 1, 0],
    students: 22,
    availability: "Nearly full",
  },
  {
    id: 3,
    initials: "TN",
    name: "Tarik Nasri",
    specialty: "Theory instructor",
    heat: [1, 1, 0, 2, 1, 0, 0],
    students: 40,
    availability: "Available",
  },
];

export const vehicles = [
  {
    id: 1,
    name: "Clio 4 · AB-482-CD",
    transmission: "Manual",
    km: "82,400 km",
    status: "Active",
    fill: 85,
    color: "amber",
    note: "Next service in 850 km",
  },
  {
    id: 2,
    name: "208 · CD-119-EF",
    transmission: "Automatic",
    km: "41,200 km",
    status: "In service",
    fill: 20,
    color: "green",
    note: "Next service in 4,800 km",
  },
  {
    id: 3,
    name: "Clio 3 · GH-771-IJ",
    transmission: "Manual",
    km: "118,900 km",
    status: "Due for service",
    fill: 97,
    color: "red",
    note: "Overdue by 150 km",
  },
];

export const invoices = [
  {
    id: "INV-2291",
    student: "Léa Fabre",
    package: "Theory + Practical",
    amount: 210,
    due: "Jul 2",
    status: "Paid",
  },
  {
    id: "INV-2298",
    student: "Karim Belhadj",
    package: "Practical only",
    amount: 320,
    due: "Jul 8",
    status: "Pending",
  },
  {
    id: "INV-2270",
    student: "Yanis Roche",
    package: "Theory only",
    amount: 90,
    due: "Jun 28",
    status: "Overdue",
  },
  {
    id: "INV-2301",
    student: "Amélie Voss",
    package: "Practical only",
    amount: 320,
    due: "Jul 14",
    status: "Pending",
  },
];

export const notifications = [
  {
    color: "🟡",
    text: "Payment reminder sent to Léa Fabre — invoice due in 2 days",
  },
  {
    color: "🟢",
    text: "Lesson reminder sent to 8 students for tomorrow 9:00 slot",
  },
  {
    color: "🔴",
    text: "Document expiring — Karim B.'s medical certificate expires in 5 days",
  },
  {
    color: "🟢",
    text: "Vehicle service due — Clio 3 (AB-482-CD) at 850 km remaining",
  },
];
