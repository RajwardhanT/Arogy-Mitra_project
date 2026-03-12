import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dumbbell, Salad, Bot, Trophy, ArrowRight, Heart, Zap, Target } from "lucide-react";

const features = [
  {
    icon: Dumbbell, 
    title: "Smart Workouts",
    desc: "AI-generated 7-day plans tailored to your fitness level, goals, and available time.",
  },
  {
    icon: Salad,
    title: "Nutrition Plans",
    desc: "Personalized meal plans respecting allergies, cuisine preferences, and calorie targets.",
  },
  {
    icon: Bot,
    title: "AROMI Coach",
    desc: "Real-time AI coach that adapts your plan for travel, injuries, mood, or schedule changes.",
  },
  {
    icon: Trophy,
    title: "Gamified Giving",
    desc: "Turn fitness achievements into charity contributions. Stay motivated while doing good.",
  },
];

const stats = [
  { value: "7-Day", label: "Custom Plans" },
  { value: "1800+", label: "Recipes" },
  { value: "24/7", label: "AI Coaching" },
  { value: "100%", label: "Personalized" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-[120px]" />
          <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-accent blur-[150px]" />
        </div>

        <div className="container relative pt-32 pb-24 md:pt-40 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-display text-primary font-medium">AI-Powered Wellness</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-primary-foreground mb-6 leading-[1.1]">
              Your Personal
              <br />
              <span className="text-gradient">Health Companion</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-10 font-body leading-relaxed">
              Personalized workout plans, nutrition guidance, and real-time AI coaching — 
              all tailored to your unique health profile and goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/workout">
                <Button variant="hero" size="lg" className="text-base px-8 h-13">
                  Start Your Journey <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/aromi">
                <Button variant="hero-outline" size="lg" className="text-base px-8 h-13 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  Talk to AROMI <Bot className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-2xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">{s.value}</div>
                <div className="text-sm text-primary-foreground/50 font-body">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp} custom={0}>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary mb-4">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-sm font-display text-secondary-foreground font-medium">Features</span>
              </div>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              Everything You Need
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="text-muted-foreground text-lg max-w-lg mx-auto">
              A complete ecosystem for your health journey, powered by advanced AI.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:animate-pulse-glow">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-display font-semibold text-card-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-secondary/50">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} custom={0} className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
              How It Works
            </motion.h2>
            <motion.p variants={fadeUp} custom={1} className="text-muted-foreground text-lg max-w-md mx-auto">
              Three simple steps to transform your wellness.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Tell Us About You", desc: "Share your fitness level, goals, dietary needs, and available time.", icon: Target },
              { step: "02", title: "Get Your Plan", desc: "Our AI generates personalized workout and meal plans instantly.", icon: Zap },
              { step: "03", title: "Stay On Track", desc: "Chat with AROMI for real-time adjustments and motivation.", icon: Bot },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-sm font-display text-accent font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-hero rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-20 w-64 h-64 rounded-full bg-primary blur-[100px]" />
            </div>
            <div className="relative">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-4">
                Ready to Transform?
              </h2>
              <p className="text-primary-foreground/70 text-lg max-w-md mx-auto mb-8">
                Join ArogyaMitra and start your personalized wellness journey today.
              </p>
              <Link to="/workout">
                <Button variant="hero" size="lg" className="text-base px-10">
                  Get Started Free <ArrowRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-display font-bold text-foreground">
            Arogya<span className="text-gradient">Mitra</span>
          </span>
          <p className="text-sm text-muted-foreground">© 2026 ArogyaMitra. AI-powered wellness for everyone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
