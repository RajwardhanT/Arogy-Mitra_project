import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Clock, Target, ChevronRight, Play, RotateCcw } from "lucide-react";

const goals = ["Weight Loss", "Muscle Gain", "Flexibility", "Endurance", "General Fitness"];
const locations = ["Home Workouts", "Gym", "Outdoor", "Travel-Friendly"];
const durations = ["15 min", "30 min", "45 min", "60 min"];
const levels = ["Beginner", "Intermediate", "Advanced"];

const generatePlan = (goal) => [
  {
    day: "Monday", focus: "Full Body Activation",
    exercises: [
      { name: "Jumping Jacks", sets: "3 × 30s", rest: "15s" },
      { name: "Bodyweight Squats", sets: "3 × 15", rest: "30s" },
      { name: "Push-ups", sets: "3 × 12", rest: "30s" },
      { name: "Plank Hold", sets: "3 × 30s", rest: "20s" },
    ],
    tip: "Focus on form over speed. Hydrate before and after.",
  },
  {
    day: "Tuesday", focus: "Upper Body & Core",
    exercises: [
      { name: "Arm Circles", sets: "2 × 20", rest: "10s" },
      { name: "Diamond Push-ups", sets: "3 × 10", rest: "30s" },
      { name: "Tricep Dips (chair)", sets: "3 × 12", rest: "30s" },
      { name: "Bicycle Crunches", sets: "3 × 20", rest: "20s" },
    ],
    tip: "Engage your core throughout each movement.",
  },
  {
    day: "Wednesday", focus: "Active Recovery",
    exercises: [
      { name: "Yoga Flow", sets: "15 min", rest: "—" },
      { name: "Foam Rolling", sets: "10 min", rest: "—" },
      { name: "Light Walking", sets: "15 min", rest: "—" },
    ],
    tip: "Recovery is when muscles grow. Don't skip rest days!",
  },
  {
    day: "Thursday", focus: "Lower Body Power",
    exercises: [
      { name: "Lunges", sets: "3 × 12/leg", rest: "30s" },
      { name: "Glute Bridges", sets: "3 × 15", rest: "20s" },
      { name: "Calf Raises", sets: "3 × 20", rest: "15s" },
      { name: "Wall Sit", sets: "3 × 30s", rest: "30s" },
    ],
    tip: "Keep knees aligned with toes during lunges.",
  },
  {
    day: "Friday", focus: "HIIT Cardio",
    exercises: [
      { name: "Burpees", sets: "4 × 10", rest: "30s" },
      { name: "Mountain Climbers", sets: "4 × 20", rest: "20s" },
      { name: "High Knees", sets: "4 × 30s", rest: "15s" },
      { name: "Squat Jumps", sets: "3 × 12", rest: "30s" },
    ],
    tip: "Push hard during work periods, rest completely during breaks.",
  },
  {
    day: "Saturday", focus: "Flexibility & Mobility",
    exercises: [
      { name: "Dynamic Stretching", sets: "10 min", rest: "—" },
      { name: "Pigeon Pose", sets: "2 × 45s/side", rest: "—" },
      { name: "Cat-Cow Stretch", sets: "3 × 10", rest: "—" },
      { name: "Deep Breathing", sets: "5 min", rest: "—" },
    ],
    tip: "Breathe deeply into each stretch. Never bounce.",
  },
  {
    day: "Sunday", focus: "Rest Day",
    exercises: [
      { name: "Light Walk or Swim", sets: "20-30 min", rest: "—" },
      { name: "Meditation", sets: "10 min", rest: "—" },
    ],
    tip: `Reflect on the week. You're doing great — ${goal.toLowerCase()} is within reach!`,
  },
];

const Workout = () => {
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState("");
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [level, setLevel] = useState("");
  const [plan, setPlan] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);

  const handleGenerate = () => {
    setPlan(generatePlan(goal));
  };

  const resetForm = () => {
    setStep(0);
    setGoal("");
    setLocation("");
    setDuration("");
    setLevel("");
    setPlan(null);
    setSelectedDay(0);
  };

  const steps = [
    { label: "Goal", options: goals, value: goal, setter: setGoal, icon: Target },
    { label: "Location", options: locations, value: location, setter: setLocation, icon: Dumbbell },
    { label: "Duration", options: durations, value: duration, setter: setDuration, icon: Clock },
    { label: "Level", options: levels, value: level, setter: setLevel, icon: ChevronRight },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
            Workout <span className="text-gradient">Planner</span>
          </h1>
          <p className="text-muted-foreground mb-10">Get a personalized 7-day workout plan in seconds.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!plan ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <div className="flex gap-2 mb-8">
                {steps.map((s, i) => (
                  <div
                    key={s.label}
                    className={`h-1.5 flex-1 rounded-full transition-colors ${i <= step ? "gradient-primary" : "bg-border"}`}
                  />
                ))}
              </div>

              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  {(() => {
                    const Icon = steps[step].icon;
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                  <h2 className="text-xl font-display font-semibold text-foreground">
                    Select your {steps[step].label.toLowerCase()}
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {steps[step].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => {
                        steps[step].setter(opt);
                        if (step < steps.length - 1) {
                          setTimeout(() => setStep(step + 1), 200);
                        }
                      }}
                      className={`p-4 rounded-xl border-2 text-left font-display font-medium transition-all ${
                        steps[step].value === opt
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-card-foreground hover:border-primary/40"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-8">
                  {step > 0 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)}>Back</Button>
                  )}
                  {step === steps.length - 1 && level && (
                    <Button variant="hero" onClick={handleGenerate}>
                      <Play className="w-4 h-4 mr-2" /> Generate Plan
                    </Button>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="plan" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex flex-wrap gap-2">
                  {plan.map((d, i) => (
                    <button
                      key={d.day}
                      onClick={() => setSelectedDay(i)}
                      className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all ${
                        selectedDay === i
                          ? "gradient-primary text-primary-foreground"
                          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                      }`}
                    >
                      {d.day.slice(0, 3)}
                    </button>
                  ))}
                </div>
                <Button variant="ghost" size="sm" onClick={resetForm}>
                  <RotateCcw className="w-4 h-4 mr-1" /> Reset
                </Button>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-card rounded-2xl border border-border p-6 md:p-8 shadow-soft"
                >
                  <div className="mb-1 text-sm font-display text-accent font-bold">{plan[selectedDay].day}</div>
                  <h3 className="text-2xl font-display font-bold text-card-foreground mb-6">
                    {plan[selectedDay].focus}
                  </h3>

                  <div className="space-y-3">
                    {plan[selectedDay].exercises.map((ex) => (
                      <div key={ex.name} className="flex items-center justify-between p-4 rounded-xl bg-secondary/50">
                        <div>
                          <div className="font-display font-semibold text-foreground">{ex.name}</div>
                          <div className="text-sm text-muted-foreground">{ex.sets}</div>
                        </div>
                        <span className="text-xs text-muted-foreground bg-background px-3 py-1 rounded-full">
                          Rest: {ex.rest}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm text-foreground">
                      <span className="font-display font-semibold text-primary">💡 Tip:</span>{" "}
                      {plan[selectedDay].tip}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Workout;
