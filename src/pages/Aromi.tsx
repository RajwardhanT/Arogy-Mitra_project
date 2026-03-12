import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, Sparkles } from "lucide-react";

const quickPrompts = [
  "I'm traveling for 4 days, adjust my plan",
  "Suggest a 20-min morning workout",
  "I have a knee injury, modify exercises",
  "Give me a high-protein snack idea",
];

const fakeResponses = {
  travel:
    "No worries! I've adjusted your plan for travel. Here's your updated routine:\n\n🧳 **Travel-Friendly Plan (4 Days)**\n\n**Day 1-4:**\n- 🏃 15 min brisk walking or hotel stair climbing\n- 🧘 10 min stretching & mobility flow\n- 💪 Bodyweight circuit: 3 rounds of 10 squats, 10 push-ups, 15 crunches\n\n**Nutrition Tips:**\n- Stay hydrated — aim for 2L water daily\n- Choose grilled over fried options\n- Pack healthy snacks: nuts, fruits, protein bars\n\nYou've got this! Consistency beats perfection. 🌟",
  morning:
    "Here's a quick energizing morning routine! ☀️\n\n**20-Minute Morning Blast:**\n\n1. **Warm-up** (3 min): Jumping jacks + arm circles\n2. **Squats** — 3 × 15\n3. **Push-ups** — 3 × 12\n4. **Plank** — 3 × 30s\n5. **Mountain Climbers** — 3 × 20\n6. **Cool-down** (2 min): Deep stretching\n\n💡 Do this before breakfast for maximum fat burn!",
  knee: "I understand — let's protect that knee! 🦵\n\n**Modified Plan (Knee-Friendly):**\n\n✅ **Replace with:**\n- Wall sits instead of squats\n- Swimming or cycling (low impact)\n- Seated leg extensions\n- Upper body focus: push-ups, planks, resistance bands\n\n❌ **Avoid:**\n- Jumping exercises\n- Deep lunges\n- Running on hard surfaces\n\nAlways listen to your body. If something hurts, stop immediately. Consider consulting a physiotherapist for a recovery timeline. 💚",
  snack:
    "Here are some high-protein snack ideas! 🥜\n\n1. **Roasted Chana** — 15g protein per cup\n2. **Greek Yogurt with Seeds** — 18g protein\n3. **Paneer Cubes with Black Pepper** — 14g protein\n4. **Sprout Chaat** — 12g protein\n5. **Protein Smoothie** — Banana + oats + almond butter\n\nAim for a snack 30-60 minutes post-workout for optimal recovery! 💪",
};

const getResponse = (input) => {
  const lower = input.toLowerCase();
  if (lower.includes("travel")) return fakeResponses.travel;
  if (lower.includes("morning") || lower.includes("20")) return fakeResponses.morning;
  if (lower.includes("knee") || lower.includes("injury")) return fakeResponses.knee;
  if (lower.includes("snack") || lower.includes("protein")) return fakeResponses.snack;
  return `Great question! 🌟\n\nBased on your profile, here's my advice:\n\n- Focus on **consistency** over intensity\n- Make sure you're getting **7-8 hours** of sleep\n- Hydrate with at least **2 liters** of water daily\n- Include **stretching** in your daily routine\n\nWould you like me to create a specific plan for this? Just tell me more details! 💪`;
};

const Aromi = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hey there! 👋 I'm **AROMI**, your AI wellness coach.\n\nI can help you with:\n- 🏋️ Workout adjustments\n- 🥗 Nutrition advice\n- 🧘 Recovery tips\n- 🧳 Travel-friendly plans\n\nHow can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInput("");
    setTyping(true);

    setTimeout(() => {
      const response = getResponse(text);
      setMessages((prev) => [...prev, { role: "assistant", content: response }]);
      setTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container max-w-3xl py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center animate-pulse-glow">
            <Bot className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-display font-bold text-foreground text-lg">AROMI</h1>
            <p className="text-xs text-muted-foreground">Your AI Wellness Coach • Always Online</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="container max-w-3xl py-6 space-y-4">
          <AnimatePresence>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[70%] p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "gradient-primary text-primary-foreground rounded-br-md"
                      : "bg-card border border-border text-card-foreground rounded-bl-md shadow-soft"
                  }`}
                >
                  {msg.content.split(/(\*\*.*?\*\*)/).map((part, j) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={j} className="font-semibold">{part.slice(2, -2)}</strong>
                    ) : (
                      <span key={j}>{part}</span>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {typing && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
              <div className="bg-card border border-border rounded-2xl rounded-bl-md p-4 shadow-soft">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </motion.div>
          )}
          <div ref={endRef} />
        </div>
      </div>

      {messages.length <= 1 && (
        <div className="container max-w-3xl pb-2">
          <div className="flex flex-wrap gap-2">
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => sendMessage(p)}
                className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-display font-medium hover:bg-secondary/80 transition-colors flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-accent" />
                {p}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="border-t border-border bg-background/80 backdrop-blur-sm">
        <div className="container max-w-3xl py-4">
          <form
            onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
            className="flex gap-3"
          >
            <input
              type="text"
              placeholder="Ask AROMI anything about fitness & wellness..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 px-4 py-3 rounded-xl border-2 border-border bg-card text-card-foreground font-body placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors"
            />
            <Button variant="hero" size="icon" type="submit" disabled={!input.trim() || typing} className="h-12 w-12 rounded-xl">
              <Send className="w-5 h-5" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Aromi;
