import { v4 as uid } from "uuid";
export const data = [
  {
    type: "pragraph",
    id: uid(),
    title: "About",
    body: [
      "Hello dear! My name is Murodjon Azamov and i’am Web developer. I was born on 2001 in Fergana valley. I became interested in programming when I was in eighth grade at school. The first programming language I learned was Pascal. Later, my interest in programming led me to Tashkent University of information technology",
    ],
  },
  {
    type: "list",
    id: uid(),
    title: "Education",
    body: [
      "Specialized lyceum in Fergana",
      "Tashkent University of Informaion Technology",
      "Uzbek-Indian Information Technology Center",
      "PDP it academy",
    ],
  },
  {
    type: "list",
    id: uid(),
    title: "Skills",
    body: [
      "HTML",
      "Css",
      "Sass",
      "Bootstrap",
      "Javascript",
      "ReactJs",
      "Redux",
    ],
  },
  {
    type: "list",
    id: uid(),
    title: "Languages",
    body: ["Uzbek (Nationaly)", "Enlish (Intermediate)", "Russian(Little bit)"],
  },
  {
    type: "pragraph",
    id: uid(),
    title: "Work",
    body: ["Coming soon.."],
  },
];
