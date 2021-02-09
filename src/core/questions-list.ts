export type IOptions = {
  [key: string]: string;
}

export type IQuestion = {
  question: string;
  options: string[];
  correctKey: string;
}

export type IOption = {
  key: string;
  value: string;
  isCorrect: boolean;
  isSelected: boolean;
}

export type IAnswersStatus = {
  [key: string]: IAnswerStatus;
}

export type IAnswerStatus = {
  answered: boolean;
  answer: string;
}

export const QuestionList: IQuestion[] = [
  {
    question: 'What celebrity would she want as a BFF',
    options: [
      'Robert Downey Jr',
      'Ian Somerhalder',
      'Prabhas',
      'Mahesh Babu',
    ],
    correctKey: 'k1'
  },
  {
    question: 'Who does she want to see in concert',
    options: [
      'Katty perry / Selena',
      'Justin Bieber',
      'Arjit Singh',
      'Shreya Ghoshal',
    ],
    correctKey: 'k0'
  },
  {
    question: 'What is the favorite thing she owns and why',
    options: [
      'Necklace',
      'Watch',
      'Pencil',
      'Mobile',
    ],
    correctKey: 'k3'
  },
  {
    question: 'If money wasn\'t a limitation, what would she buy',
    options: [
      'Mercedes Benz',
      'Beach house',
      'LV collection',
      'Buy google',
    ],
    correctKey: 'k1'
  },
  {
    question: 'What job would she be terrible at',
    options: [
      'Lawyer',
      'Teacher',
      'CA',
      'Chess player',
    ],
    correctKey: 'k1'
  },
  {
    question: 'Where does she want to travel the most',
    options: [
      'Pyramid of Giza',
      'Swiss Alps',
      'Salar de Uyuni',
      'Paris',
    ],
    correctKey: 'k2'
  },
  {
    question: 'What could she eat everyday',
    options: [
      'Chicken briyani / Donuts / Chicken-Pakoda / Pani-Puri',
      'Donuts / Chicken lollypop / Pizza / Fried Rice',
      'Pasta / Pop-corn / Ice-cream / Chaat / Gulabjamun',
      'Fish fry / Lasagna / Putarekulu / Burger',
    ],
    correctKey: 'k0'
  },
  {
    question: 'What is her most hated chore and why',
    options: [
      'Washing dishes',
      'Washing clothes',
      'Cleaning kitchen',
      'Cleaning washroom',
    ],
    correctKey: 'k3'
  },
  {
    question: 'What is her favorite holiday',
    options: [
      'Christmas',
      'Diwali',
      'Sankranti',
      'Ganesh Chaturthi',
    ],
    correctKey: 'k1'
  },
  {
    question: 'Is she an early bird or a late riser',
    options: [
      'Random',
      'Late riser',
      'Early bird',
      'Both',
    ],
    correctKey: 'k3'
  },
  {
    question: 'What gets on her nerves the most',
    options: [
      'Traffic',
      'No food, that satisfy my craving, when hungry',
      'Public urination',
      'Pollution',
    ],
    correctKey: 'k1'
  },
  {
    question: 'What is her favorite drink',
    options: [
      'Mountain-dew',
      'Pepsi',
      'Thumps-up',
      'Old Monk',
    ],
    correctKey: 'k0'
  },
  {
    question: 'What season of the year does she prefer',
    options: [
      'Winter',
      'Summer',
      'Monsoon',
      'Spring',
    ],
    correctKey: 'k0'
  },
  {
    question: 'What person inspires her the most',
    options: [
      'Narendra Modi',
      'Everyone',
      'Bharath',
      'Myself',
    ],
    correctKey: 'k1'
  },
  {
    question: 'What is she the most proud of',
    options: [
      'My country',
      'My country',
      'My country',
      'My country',
    ],
    correctKey: 'k1'
  },
  {
    question: 'Does she prefer to shop online or in a store',
    options: [
      'Hate shopping',
      'Online',
      'Store',
      'Both',
    ],
    correctKey: 'k3'
  },
  {
    question: 'What is her ideal way to spend a weekend',
    options: [
      'Organizing wardrobe / Fav lunch / Badminton',
      'Long Drive',
      'Trekking',
      'Netflix',
    ],
    correctKey: 'k0'
  },
  {
    question: 'What subject is she in expert at',
    options: [
      'Math',
      'Medicine',
      'Commerce',
      'Philosophy',
    ],
    correctKey: 'k1'
  },
  {
    question: 'Who do you think cheated the most',
    options: [
      'Bharath',
      'Akhila',
      'Bharath and Akhila',
      'Presenter',
    ],
    correctKey: 'k0'
  },
];