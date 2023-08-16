const assignments = [
  {
    title: 'P1A: Elements of Programming',
    start: new Date(2023, 7, 16),
    end: new Date(2023, 7, 18, 23, 59, 59),
  },
  {
    title: 'M1A: Rune Trials',
    start: new Date(2023, 7, 18),
    end: new Date(2023, 7, 22, 23, 59, 59),
  },
  {
    title: 'P1B: Runology',
    start: new Date(2023, 7, 18),
    end: new Date(2023, 7, 19, 23, 59, 59),
  },
  {
    title: 'Q2A: Runic Carpets',
    start: new Date(2023, 7, 23),
    end: new Date(2023, 7, 28, 23, 59, 59),
  },
  {
    title: 'M2A: Rune Reading',
    start: new Date(2023, 7, 23),
    end: new Date(2023, 7, 27, 23, 59, 59),
  },
  {
    title: 'P2A: Substitution Model and Recursion',
    start: new Date(2023, 23, 16),
    end: new Date(2023, 7, 24, 23, 59, 59),
  },
  {
    title: 'M2B: Beyond the Second Dimension',
    start: new Date(2023, 7, 24),
    end: new Date(2023, 7, 29, 23, 59, 59),
  },
  {
    title: 'Q2B: Colorful Carpets',
    start: new Date(2023, 7, 25),
    end: new Date(2023, 7, 30, 23, 59, 59),
  },
  {
    title: 'P2B: Orders of Growth',
    start: new Date(2023, 7, 25),
    end: new Date(2023, 7, 26, 23, 59, 59),
  },
  {
    title: 'Contest: Beautiful Runes',
    start: new Date(2023, 7, 30),
    end: new Date(2023, 8, 5, 23, 59, 59),
  },
  {
    title: 'Q3A: Functional Expressionism',
    start: new Date(2023, 7, 30),
    end: new Date(2023, 8, 4, 23, 59, 59),
  },
  {
    title: 'P3A: Recursion, HOF and Scoping',
    start: new Date(2023, 7, 30),
    end: new Date(2023, 7, 31, 23, 59, 59),
  },
  {
    title: 'Q3B: Cardioid Arrest',
    start: new Date(2023, 8, 1),
    end: new Date(2023, 8, 8, 23, 59, 59),
  },
  {
    title: 'M3: Curve Introduction',
    start: new Date(2023, 8, 1),
    end: new Date(2023, 8, 7, 23, 59, 59),
  },
  {
    title: 'P3B: Curves',
    start: new Date(2023, 8, 1),
    end: new Date(2023, 8, 2, 23, 59, 59),
  },
  {
    title: 'M4A Curve Manipulation',
    start: new Date(2023, 8, 4),
    end: new Date(2023, 8, 10, 23, 59, 59),
  },
  {
    title: 'M4B: Beyond the First Dimension',
    start: new Date(2023, 8, 5),
    end: new Date(2023, 8, 11, 23, 59, 59),
  },
  {
    title: 'Contest: The Choreographer',
    start: new Date(2023, 8, 6),
    end: new Date(2023, 8, 13, 23, 59, 59),
  },
  {
    title: 'Q4: Curvaceous Wizardry',
    start: new Date(2023, 8, 6),
    end: new Date(2023, 8, 12, 23, 59, 59),
  },
  {
    title: 'P4: Data Abstraction',
    start: new Date(2023, 8, 6),
    end: new Date(2023, 8, 9, 23, 59, 59),
  },
  {
    title: 'M5A: Premorseal Communications',
    start: new Date(2023, 8, 11),
    end: new Date(2023, 8, 16, 23, 59, 59),
  },
  {
    title: 'Q5A: Echoes of the Past',
    start: new Date(2023, 8, 12),
    end: new Date(2023, 8, 18, 23, 59, 59),
  },
  {
    title: 'P5A: List and Tree Processing',
    start: new Date(2023, 8, 13),
    end: new Date(2023, 8, 14, 23, 59, 59),
  },
  {
    title: 'M5B: POTS and Pans',
    start: new Date(2023, 8, 13),
    end: new Date(2023, 8, 20, 23, 59, 59),
  },
  {
    title: 'M5C: Musical Diversions',
    start: new Date(2023, 8, 14),
    end: new Date(2023, 8, 21, 23, 59, 59),
  },
  {
    title: 'Q5B: Magical Tone Matrix',
    start: new Date(2023, 8, 15),
    end: new Date(2023, 8, 21, 23, 59, 59),
  },
  {
    title: 'P5B: Programming Language Processing',
    start: new Date(2023, 8, 15),
    end: new Date(2023, 8, 16, 23, 59, 59),
  },
  {
    title: 'Contest: Game of Tones',
    start: new Date(2023, 8, 18),
    end: new Date(2023, 8, 28, 23, 59, 59),
  },
  {
    title: 'M6A: Search and Rescue',
    start: new Date(2023, 8, 20),
    end: new Date(2023, 8, 25, 23, 59, 59),
  },
  {
    title: 'P6A: Sorting',
    start: new Date(2023, 8, 20),
    end: new Date(2023, 8, 21, 23, 59, 59),
  },
  {
    title: 'M6B: Sorting things Out',
    start: new Date(2023, 8, 21),
    end: new Date(2023, 9, 2, 23, 59, 59),
  },
  {
    title: 'Q6: Grading a Sort',
    start: new Date(2023, 8, 21),
    end: new Date(2023, 9, 2, 23, 59, 59),
  },
  {
    title: 'M7: Robotic Trials',
    start: new Date(2023, 9, 5),
    end: new Date(2023, 9, 13, 23, 59, 59),
  },
  {
    title: 'P7: Mutable State; CSE Machine Intro',
    start: new Date(2023, 9, 6),
    end: new Date(2023, 9, 7, 23, 59, 59),
  },
  {
    title: 'M8A: Moving About on Planet Y',
    start: new Date(2023, 9, 9),
    end: new Date(2023, 9, 15, 23, 59, 59),
  },
  {
    title: 'M8B: Finding ELDRIC',
    start: new Date(2023, 9, 10),
    end: new Date(2023, 9, 18, 23, 59, 59),
  },
  {
    title: 'M8C: Know Your Environment',
    start: new Date(2023, 9, 11),
    end: new Date(2023, 9, 19, 23, 59, 59),
  },
  {
    title: 'P8A: CSE Machine',
    start: new Date(2023, 9, 11),
    end: new Date(2023, 9, 12, 23, 59, 59),
  },
  {
    title: 'Q8: PID Stop',
    start: new Date(2023, 9, 12),
    end: new Date(2023, 9, 22, 23, 59, 59),
  },
  {
    title: 'P8B: Arrays and Loops',
    start: new Date(2023, 9, 13),
    end: new Date(2023, 9, 14, 23, 59, 59),
  },
  {
    title: 'M9A: Corrective Sky Surgery',
    start: new Date(2023, 9, 16),
    end: new Date(2023, 9, 24, 23, 59, 59),
  },
  {
    title: 'Q9: Stellar Motion Detector',
    start: new Date(2023, 9, 17),
    end: new Date(2023, 9, 25, 23, 59, 59),
  },
  {
    title: 'M9B: Reuse Your Pairs',
    start: new Date(2023, 9, 18),
    end: new Date(2023, 9, 25, 23, 59, 59),
  },
  {
    title: 'P9A: Searching and Sorting II; Memoization',
    start: new Date(2023, 9, 18),
    end: new Date(2023, 9, 19, 23, 59, 59),
  },
  {
    title: 'P9B: Streams I',
    start: new Date(2023, 9, 20),
    end: new Date(2023, 9, 21, 23, 59, 59),
  },
  {
    title: 'Q10A: Rescue the Space Lizard',
    start: new Date(2023, 9, 24),
    end: new Date(2023, 9, 31, 23, 59, 59),
  },
  {
    title: 'M10A: Streaming the Anomaly',
    start: new Date(2023, 9, 25),
    end: new Date(2023, 9, 31, 23, 59, 59),
  },
  {
    title: 'P10: Streams II',
    start: new Date(2023, 9, 25),
    end: new Date(2023, 9, 26, 23, 59, 59),
  },
  {
    title: 'M10B: The Anomaly in Focus',
    start: new Date(2023, 9, 27),
    end: new Date(2023, 10, 2, 23, 59, 59),
  },
  {
    title: 'M11: Essence of the Source',
    start: new Date(2023, 10, 1),
    end: new Date(2023, 10, 8, 23, 59, 59),
  },
  {
    title: 'P11A: Metalinguistic Abstraction',
    start: new Date(2023, 10, 1),
    end: new Date(2023, 10, 2, 23, 59, 59),
  },
  {
    title: 'Q12A: Logic Programming',
    start: new Date(2023, 10, 8),
    end: new Date(2023, 10, 12, 23, 59, 59),
  },
  {
    title: 'Q12B: Concurrency and Parallelism',
    start: new Date(2023, 10, 8),
    end: new Date(2023, 10, 12, 23, 59, 59),
  },
  {
    title: 'Q12C: Compiling to Register Machines',
    start: new Date(2023, 10, 8),
    end: new Date(2023, 10, 12, 23, 59, 59),
  },
  {
    title: 'Q12D: Explicit-Control Evaluator',
    start: new Date(2023, 10, 8),
    end: new Date(2023, 10, 11, 23, 59, 59),
  },
];

export default assignments;
