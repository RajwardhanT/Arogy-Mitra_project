import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Salad, Flame, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

const dietTypes = ["Vegetarian", "Vegan", "Non-Vegetarian", "Keto"];
const cuisines = ["Indian", "Mediterranean", "Asian", "Mixed"];
const calorieOptions = ["1500 kcal", "1800 kcal", "2000 kcal", "2500 kcal"];

const samplePlan = [
  {
    day: "Monday",
    meals: [
      { label: "Breakfast", meal: { name: "Masala Oats with Vegetables", calories: 320, protein: "12g", carbs: "48g", fat: "8g" } },
      { label: "Lunch", meal: { name: "Rajma Chawal with Raita", calories: 520, protein: "18g", carbs: "72g", fat: "14g" } },
      { label: "Snack", meal: { name: "Roasted Makhana & Green Tea", calories: 150, protein: "5g", carbs: "22g", fat: "4g" } },
      { label: "Dinner", meal: { name: "Palak Paneer with Roti", calories: 480, protein: "20g", carbs: "52g", fat: "18g" } },
    ],
  },
  {
    day: "Tuesday",
    meals: [
      { label: "Breakfast", meal: { name: "Moong Dal Chilla with Chutney", calories: 280, protein: "15g", carbs: "35g", fat: "7g" } },
      { label: "Lunch", meal: { name: "Chole with Brown Rice", calories: 550, protein: "20g", carbs: "68g", fat: "16g" } },
      { label: "Snack", meal: { name: "Fruit Chaat with Seeds", calories: 180, protein: "4g", carbs: "32g", fat: "5g" } },
      { label: "Dinner", meal: { name: "Mixed Veg Curry with Quinoa", calories: 450, protein: "16g", carbs: "55g", fat: "15g" } },
    ],
  },
  {
    day: "Wednesday",
    meals: [
      { label: "Breakfast", meal: { name: "Poha with Peanuts & Lime", calories: 310, protein: "10g", carbs: "45g", fat: "9g" } },
      { label: "Lunch", meal: { name: "Dal Tadka with Jeera Rice", calories: 500, protein: "18g", carbs: "65g", fat: "14g" } },
      { label: "Snack", meal: { name: "Sprout Salad", calories: 160, protein: "10g", carbs: "20g", fat: "4g" } },
      { label: "Dinner", meal: { name: "Stuffed Capsicum with Roti", calories: 430, protein: "14g", carbs: "50g", fat: "16g" } },
    ],
  },
  {
    day: "Thursday",
    meals: [
      { label: "Breakfast", meal: { name: "Idli with Sambar", calories: 290, protein: "10g", carbs: "48g", fat: "6g" } },
      { label: "Lunch", meal: { name: "Bhindi Masala with Chapati", calories: 480, protein: "14g", carbs: "58g", fat: "18g" } },
      { label: "Snack", meal: { name: "Coconut Water & Almonds", calories: 170, protein: "6g", carbs: "18g", fat: "8g" } },
      { label: "Dinner", meal: { name: "Tofu Stir-fry with Brown Rice", calories: 460, protein: "22g", carbs: "50g", fat: "16g" } },
    ],
  },
  {
    day: "Friday",
    meals: [
      { label: "Breakfast", meal: { name: "Ragi Dosa with Chutney", calories: 300, protein: "8g", carbs: "50g", fat: "7g" } },
      { label: "Lunch", meal: { name: "Paneer Tikka Wrap", calories: 520, protein: "24g", carbs: "45g", fat: "22g" } },
      { label: "Snack", meal: { name: "Yogurt with Honey & Flax", calories: 180, protein: "8g", carbs: "24g", fat: "6g" } },
      { label: "Dinner", meal: { name: "Mushroom Curry with Millet Roti", calories: 420, protein: "16g", carbs: "48g", fat: "14g" } },
    ],
  },
  {
    day: "Saturday",
    meals: [
      { label: "Breakfast", meal: { name: "Upma with Vegetables", calories: 310, protein: "9g", carbs: "46g", fat: "10g" } },
      { label: "Lunch", meal: { name: "Sambar Rice with Papad", calories: 540, protein: "16g", carbs: "72g", fat: "14g" } },
      { label: "Snack", meal: { name: "Dhokla with Mint Chutney", calories: 170, protein: "8g", carbs: "25g", fat: "4g" } },
      { label: "Dinner", meal: { name: "Aloo Gobi with Paratha", calories: 490, protein: "12g", carbs: "62g", fat: "20g" } },
    ],
  },
  {
    day: "Sunday",
    meals: [
      { label: "Breakfast", meal: { name: "Besan Chilla with Avocado", calories: 340, protein: "14g", carbs: "30g", fat: "16g" } },
      { label: "Lunch", meal: { name: "Thali: Dal, Sabzi, Rice, Roti", calories: 580, protein: "20g", carbs: "75g", fat: "16g" } },
      { label: "Snack", meal: { name: "Banana Smoothie with Chia", calories: 200, protein: "6g", carbs: "34g", fat: "5g" } },
      { label: "Dinner", meal: { name: "Veggie Pulao with Raita", calories: 440, protein: "14g", carbs: "60g", fat: "14g" } },
    ],
  },
];

const Nutrition = () => {
  const [diet, setDiet] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [calories, setCalories] = useState("");
  const [allergies, setAllergies] = useState("");
  const [plan, setPlan] = useState(null);
  const [dayIndex, setDayIndex] = useState(0);

  const handleGenerate = () => {
    setPlan(samplePlan);
    setDayIndex(0);
  };

  const currentDay = plan ? plan[dayIndex] : null;
  const totalCal = currentDay ? currentDay.meals.reduce((sum, m) => sum + m.meal.calories, 0) : 0;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-2">
            Nutrition <span className="text-gradient">Plan</span>
          </h1>
          <p className="text-muted-foreground mb-10">Personalized meal plans aligned with your dietary needs.</p>
        </motion.div>

        <AnimatePresence mode="wait">
          {!plan ? (
            <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-8">
              <div>
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Salad className="w-5 h-5 text-primary" /> Diet Type
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {dietTypes.map((d) => (
                    <button key={d} onClick={() => setDiet(d)}
                      className={`p-3 rounded-xl border-2 font-display font-medium text-sm transition-all ${diet === d ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-card-foreground hover:border-primary/40"}`}>
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">Cuisine Preference</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {cuisines.map((c) => (
                    <button key={c} onClick={() => setCuisine(c)}
                      className={`p-3 rounded-xl border-2 font-display font-medium text-sm transition-all ${cuisine === c ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-card-foreground hover:border-primary/40"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Flame className="w-5 h-5 text-accent" /> Daily Calories
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {calorieOptions.map((c) => (
                    <button key={c} onClick={() => setCalories(c)}
                      className={`p-3 rounded-xl border-2 font-display font-medium text-sm transition-all ${calories === c ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-card-foreground hover:border-primary/40"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display font-semibold text-foreground mb-3">Allergies (optional)</h3>
                <input
                  type="text"
                  placeholder="e.g., peanuts, lactose, gluten..."
                  value={allergies}
                  onChange={(e) => setAllergies(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-border bg-card text-card-foreground font-body placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>

              <Button variant="hero" size="lg" disabled={!diet || !cuisine || !calories} onClick={handleGenerate}>
                <Salad className="w-5 h-5 mr-2" /> Generate Meal Plan
              </Button>
            </motion.div>
          ) : (
            <motion.div key="plan" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <div className="flex items-center justify-between mb-6">
                <Button variant="ghost" size="icon" disabled={dayIndex === 0} onClick={() => setDayIndex(dayIndex - 1)}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <div className="text-center">
                  <div className="font-display font-bold text-xl text-foreground">{currentDay?.day}</div>
                  <div className="text-sm text-muted-foreground">{totalCal} kcal total</div>
                </div>
                <Button variant="ghost" size="icon" disabled={dayIndex === 6} onClick={() => setDayIndex(dayIndex + 1)}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex justify-center gap-2 mb-8">
                {plan.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setDayIndex(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === dayIndex ? "gradient-primary w-6" : "bg-border"}`}
                  />
                ))}
              </div>

              <div className="space-y-4">
                {currentDay?.meals.map((m) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-2xl border border-border p-5 shadow-soft"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-display font-bold text-accent uppercase">{m.label}</span>
                      <span className="text-xs text-muted-foreground font-display">{m.meal.calories} kcal</span>
                    </div>
                    <h4 className="font-display font-semibold text-card-foreground text-lg mb-3">{m.meal.name}</h4>
                    <div className="flex gap-4">
                      {[
                        { label: "Protein", val: m.meal.protein },
                        { label: "Carbs", val: m.meal.carbs },
                        { label: "Fat", val: m.meal.fat },
                      ].map((macro) => (
                        <div key={macro.label} className="text-center px-3 py-1.5 bg-secondary rounded-lg">
                          <div className="text-xs text-muted-foreground">{macro.label}</div>
                          <div className="text-sm font-display font-semibold text-secondary-foreground">{macro.val}</div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline" onClick={() => setPlan(null)}>
                  <RotateCcw className="w-4 h-4 mr-2" /> New Plan
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Nutrition;
