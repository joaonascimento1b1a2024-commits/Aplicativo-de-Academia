import { exercises } from "./exercises";

const byId = Object.fromEntries(exercises.map((exercise) => [exercise.id, exercise]));

export const workouts = [
  {
    id: "peito-triceps",
    title: "Peito & Triceps",
    subtitle: "Forca superior",
    level: "Intermediario",
    minutes: 60,
    calories: 550,
    accent: "#ff6a00",
    image:
      "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1100&q=80",
    description:
      "Treino focado em empurrar, com exercicios para peito, ombros e triceps.",
    exerciseIds: ["supino", "triceps", "prancha"]
  },
  {
    id: "costas-biceps",
    title: "Costas & Biceps",
    subtitle: "Postura e puxada",
    level: "Intermediario",
    minutes: 55,
    calories: 500,
    accent: "#ffd166",
    image:
      "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&w=1100&q=80",
    description:
      "Sequencia para melhorar puxada, estabilidade dos ombros e resistencia dos bracos.",
    exerciseIds: ["puxada", "rosca", "prancha"]
  },
  {
    id: "pernas",
    title: "Pernas Completo",
    subtitle: "Base forte",
    level: "Avancado",
    minutes: 70,
    calories: 650,
    accent: "#ff3b3b",
    image:
      "https://images.unsplash.com/photo-1434682881908-b43d0467b798?auto=format&fit=crop&w=1100&q=80",
    description:
      "Treino completo de membros inferiores com foco em forca e controle.",
    exerciseIds: ["agachamento", "legpress", "esteira"]
  },
  {
    id: "cardio-core",
    title: "Cardio & Core",
    subtitle: "Energia diaria",
    level: "Iniciante",
    minutes: 40,
    calories: 400,
    accent: "#27c47d",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1100&q=80",
    description:
      "Sessao dinamica para queimar calorias e fortalecer o abdomen.",
    exerciseIds: ["esteira", "prancha", "legpress"]
  }
];

export function getWorkoutExercises(workout) {
  return workout.exerciseIds.map((id) => byId[id]).filter(Boolean);
}
