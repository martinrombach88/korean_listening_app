import lessonDialogue from '../json/lesson_dialogue.json'


const courses = [
  { 
    id: "ttmik-iyagi-intermediate",
    roman_name: "Iyagi Intermediate",
    hanguel_name: "여아기",
    company: "Talk to Me in Korean",
    image : "iyagi.jpg",
    lessons: [
      { id: "priority-seating", number: 1, roman_name: "Priority Seating", hangeul_name: "노인 우선석"},
      { id: "bookshops", number: 2, roman_name: "Bookshops", hangeul_name: "서점"}, 
      { id: "coping-with-stress", number: 3, roman_name: "Coping with Stress", hangeul_name: "스트레스를 해소하다"}
    ]
  },
  { 
    id: "ttmik-iyagi-beginner",
    roman_name: "Iyagi Beginner",
    hanguel_name: "여아기",
    company: "Talk to Me in Korean",
    image: "iyagi.jpg",
    lessons: [
        { id: 0, number: 1, roman_name: "0", hangeul_name: "0"},
        { id: 1, number: 2, roman_name: "1", hangeul_name: "1"},
        { id: 2, number: 3, roman_name: "2", hangeul_name: "2"}
    ]
  }
];


export const getCourses = () => {
    return courses;
}

export const getCourse = (courseid) => {
  let matched = null;
  const result = courses.map((course) => {
    if (course.id === courseid) {
       matched = course;
    }
    return true;
  });
  return matched;
}

export const getLessons = (courseid) => {
  let matched = null;
  const result = courses.map((course) => {
    if (course.id === courseid) {
       matched = course.lessons;
    }
    return true;
  });
  return matched;
}

export const getDialogues = (courseid, lesson_num) => {
  let matched = [];
  const result = lessonDialogue[2].data.map((dialogue) => {
    if (dialogue.course === courseid && parseInt(dialogue.lesson_number) == lesson_num) {
       matched.push(dialogue); 
    }
    return true;
  });
  return matched;
}



