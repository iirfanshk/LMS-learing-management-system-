import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Trophy, Clock, Target, CheckCircle, XCircle, Star, Zap, Award } from "lucide-react";

interface Question {
  id: string;
  question: string;
  options: string[];
  correct: number;
}

interface Program {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  totalQuestions: number;
  passingScore: number;
  icon: React.ReactNode;
  color: string;
  questions: Question[];
}

const programs: Program[] = [
  {
    id: "web-fundamentals",
    title: "Web Development Fundamentals",
    description: "Test your knowledge of HTML, CSS, and JavaScript basics.",
    category: "Web Development",
    difficulty: "Beginner",
    duration: "15 min",
    totalQuestions: 5,
    passingScore: 60,
    icon: <Zap className="w-6 h-6" />,
    color: "from-primary to-primary/70",
    questions: [
      { id: "q1", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language"], correct: 0 },
      { id: "q2", question: "Which CSS property is used to change text color?", options: ["font-color", "text-color", "color", "foreground"], correct: 2 },
      { id: "q3", question: "Which keyword declares a variable in JavaScript (ES6)?", options: ["var", "let", "dim", "define"], correct: 1 },
      { id: "q4", question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], correct: 1 },
      { id: "q5", question: "Which HTML tag is used for the largest heading?", options: ["<heading>", "<h6>", "<h1>", "<head>"], correct: 2 },
    ],
  },
  {
    id: "python-challenge",
    title: "Python Programming Challenge",
    description: "Compete in a timed Python fundamentals quiz.",
    category: "Programming",
    difficulty: "Intermediate",
    duration: "20 min",
    totalQuestions: 5,
    passingScore: 70,
    icon: <Target className="w-6 h-6" />,
    color: "from-accent to-accent/70",
    questions: [
      { id: "q1", question: "What is the output of print(type([]))?", options: ["<class 'list'>", "<class 'tuple'>", "<class 'dict'>", "<class 'set'>"], correct: 0 },
      { id: "q2", question: "Which method adds an element to the end of a list?", options: ["insert()", "add()", "append()", "push()"], correct: 2 },
      { id: "q3", question: "What does 'len()' function do?", options: ["Returns length", "Returns type", "Returns max", "Returns min"], correct: 0 },
      { id: "q4", question: "How do you start a function in Python?", options: ["function myFunc():", "def myFunc():", "create myFunc():", "func myFunc():"], correct: 1 },
      { id: "q5", question: "Which operator is used for exponentiation?", options: ["^", "**", "//", "%%"], correct: 1 },
    ],
  },
  {
    id: "react-mastery",
    title: "React.js Mastery Test",
    description: "Advanced React concepts including hooks, state, and lifecycle.",
    category: "Frontend",
    difficulty: "Advanced",
    duration: "25 min",
    totalQuestions: 5,
    passingScore: 80,
    icon: <Star className="w-6 h-6" />,
    color: "from-blue-500 to-blue-400",
    questions: [
      { id: "q1", question: "What hook is used for side effects in React?", options: ["useState", "useEffect", "useContext", "useReducer"], correct: 1 },
      { id: "q2", question: "What does JSX stand for?", options: ["JavaScript XML", "Java Syntax Extension", "JSON X-Data", "JavaScript Extra"], correct: 0 },
      { id: "q3", question: "Which hook manages complex state logic?", options: ["useState", "useRef", "useReducer", "useMemo"], correct: 2 },
      { id: "q4", question: "What is the virtual DOM?", options: ["A copy of the real DOM in memory", "A browser API", "A CSS framework", "A testing tool"], correct: 0 },
      { id: "q5", question: "How do you pass data from parent to child?", options: ["State", "Props", "Context", "Redux"], correct: 1 },
    ],
  },
  {
    id: "data-science-quiz",
    title: "Data Science Fundamentals",
    description: "Test your understanding of data science concepts and tools.",
    category: "Data Science",
    difficulty: "Intermediate",
    duration: "20 min",
    totalQuestions: 5,
    passingScore: 70,
    icon: <Award className="w-6 h-6" />,
    color: "from-emerald-500 to-emerald-400",
    questions: [
      { id: "q1", question: "Which library is primarily used for data manipulation in Python?", options: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn"], correct: 1 },
      { id: "q2", question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Question Language", "System Query Logic", "Standard Query Lookup"], correct: 0 },
      { id: "q3", question: "What type of chart is best for showing proportions?", options: ["Line chart", "Bar chart", "Pie chart", "Scatter plot"], correct: 2 },
      { id: "q4", question: "What is overfitting in machine learning?", options: ["Model is too simple", "Model memorizes training data", "Model has no data", "Model is well-balanced"], correct: 1 },
      { id: "q5", question: "Which metric measures classification accuracy?", options: ["MSE", "R-squared", "F1 Score", "RMSE"], correct: 2 },
    ],
  },
  {
    id: "java-basics",
    title: "Java Programming Basics",
    description: "Core Java concepts — OOP, syntax, and data structures.",
    category: "Programming",
    difficulty: "Beginner",
    duration: "15 min",
    totalQuestions: 5,
    passingScore: 60,
    icon: <Zap className="w-6 h-6" />,
    color: "from-orange-500 to-orange-400",
    questions: [
      { id: "q1", question: "Which keyword is used to create a class in Java?", options: ["class", "struct", "define", "object"], correct: 0 },
      { id: "q2", question: "What is the default value of an int in Java?", options: ["null", "0", "undefined", "-1"], correct: 1 },
      { id: "q3", question: "Which method is the entry point of a Java program?", options: ["start()", "run()", "main()", "init()"], correct: 2 },
      { id: "q4", question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Manager", "Java Version Module", "Java Visual Mode"], correct: 0 },
      { id: "q5", question: "Which collection allows duplicate elements?", options: ["Set", "Map", "List", "HashSet"], correct: 2 },
    ],
  },
  {
    id: "sql-challenge",
    title: "SQL & Database Challenge",
    description: "Test your SQL queries and database design knowledge.",
    category: "Database",
    difficulty: "Intermediate",
    duration: "20 min",
    totalQuestions: 5,
    passingScore: 70,
    icon: <Target className="w-6 h-6" />,
    color: "from-cyan-500 to-cyan-400",
    questions: [
      { id: "q1", question: "Which SQL clause is used to filter rows?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], correct: 2 },
      { id: "q2", question: "What does JOIN do in SQL?", options: ["Deletes rows", "Combines rows from two tables", "Creates a table", "Sorts data"], correct: 1 },
      { id: "q3", question: "Which key uniquely identifies a row?", options: ["Foreign Key", "Primary Key", "Composite Key", "Index Key"], correct: 1 },
      { id: "q4", question: "What does DISTINCT do?", options: ["Sorts results", "Removes duplicates", "Counts rows", "Groups data"], correct: 1 },
      { id: "q5", question: "Which statement is used to update data?", options: ["MODIFY", "ALTER", "UPDATE", "CHANGE"], correct: 2 },
    ],
  },
  {
    id: "devops-essentials",
    title: "DevOps & Cloud Essentials",
    description: "Docker, CI/CD, cloud platforms, and infrastructure basics.",
    category: "DevOps",
    difficulty: "Advanced",
    duration: "25 min",
    totalQuestions: 5,
    passingScore: 80,
    icon: <Star className="w-6 h-6" />,
    color: "from-violet-500 to-violet-400",
    questions: [
      { id: "q1", question: "What is Docker used for?", options: ["Database management", "Containerization", "Version control", "Code compilation"], correct: 1 },
      { id: "q2", question: "What does CI/CD stand for?", options: ["Code Integration / Code Delivery", "Continuous Integration / Continuous Delivery", "Central Interface / Central Database", "Cloud Infrastructure / Cloud Deployment"], correct: 1 },
      { id: "q3", question: "Which file defines a Docker image?", options: ["docker-compose.yml", "Dockerfile", "package.json", "config.yml"], correct: 1 },
      { id: "q4", question: "What is Kubernetes used for?", options: ["Frontend testing", "Container orchestration", "Database backups", "Code linting"], correct: 1 },
      { id: "q5", question: "Which AWS service runs serverless functions?", options: ["EC2", "S3", "Lambda", "RDS"], correct: 2 },
    ],
  },
  {
    id: "cybersecurity-basics",
    title: "Cybersecurity Fundamentals",
    description: "Network security, encryption, and common attack vectors.",
    category: "Security",
    difficulty: "Intermediate",
    duration: "20 min",
    totalQuestions: 5,
    passingScore: 70,
    icon: <Award className="w-6 h-6" />,
    color: "from-red-500 to-red-400",
    questions: [
      { id: "q1", question: "What does HTTPS ensure?", options: ["Speed", "Encrypted communication", "SEO ranking", "Caching"], correct: 1 },
      { id: "q2", question: "What is phishing?", options: ["A programming language", "A social engineering attack", "A firewall type", "A database technique"], correct: 1 },
      { id: "q3", question: "What does a firewall do?", options: ["Encrypts data", "Filters network traffic", "Stores passwords", "Compresses files"], correct: 1 },
      { id: "q4", question: "Which is a symmetric encryption algorithm?", options: ["RSA", "AES", "SHA-256", "MD5"], correct: 1 },
      { id: "q5", question: "What is a DDoS attack?", options: ["Data theft", "Flooding a server with traffic", "SQL injection variant", "Password cracking"], correct: 1 },
    ],
  },
];

export default function ProgramsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [activeTest, setActiveTest] = useState<Program | null>(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [completedPrograms, setCompletedPrograms] = useState<Record<string, { score: number; total: number }>>(() => {
    const saved = localStorage.getItem("skillforge_programs");
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  useEffect(() => {
    if (!activeTest || showResult) return;
    if (timeLeft <= 0) {
      finishTest();
      return;
    }
    const timer = setInterval(() => setTimeLeft(t => t - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, activeTest, showResult]);

  if (!user) return null;

  const startTest = (program: Program) => {
    setActiveTest(program);
    setCurrentQ(0);
    setAnswers(new Array(program.questions.length).fill(null));
    setSelected(null);
    setShowResult(false);
    setTimeLeft(parseInt(program.duration) * 60);
  };

  const handleNext = () => {
    if (selected === null) {
      toast.error("Please select an answer");
      return;
    }
    const newAnswers = [...answers];
    newAnswers[currentQ] = selected;
    setAnswers(newAnswers);
    setSelected(null);

    if (currentQ < (activeTest?.questions.length || 0) - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      finishTestWith(newAnswers);
    }
  };

  const finishTest = () => {
    const newAnswers = [...answers];
    if (selected !== null) newAnswers[currentQ] = selected;
    finishTestWith(newAnswers);
  };

  const finishTestWith = (finalAnswers: (number | null)[]) => {
    if (!activeTest) return;
    const correct = finalAnswers.reduce((acc, ans, i) => acc + (ans === activeTest.questions[i].correct ? 1 : 0), 0);
    const result = { score: correct, total: activeTest.questions.length };
    const updated = { ...completedPrograms, [activeTest.id]: result };
    setCompletedPrograms(updated);
    localStorage.setItem("skillforge_programs", JSON.stringify(updated));
    setShowResult(true);
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  const difficultyColor = (d: string) => {
    if (d === "Beginner") return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
    if (d === "Intermediate") return "bg-amber-500/10 text-amber-600 border-amber-500/20";
    return "bg-red-500/10 text-red-600 border-red-500/20";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="mb-8">
          <h1 className="font-display font-bold text-3xl text-foreground flex items-center gap-3">
            <Trophy className="w-8 h-8 text-accent" /> Quizzes & Challenges
          </h1>
          <p className="text-muted-foreground mt-2">Test your skills, compete, and earn bragging rights!</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {[
            { label: "Tests Taken", value: Object.keys(completedPrograms).length, icon: <Target className="w-5 h-5" /> },
            { label: "Tests Passed", value: Object.values(completedPrograms).filter(r => (r.score / r.total) * 100 >= 60).length, icon: <CheckCircle className="w-5 h-5" /> },
            { label: "Best Score", value: Object.values(completedPrograms).length ? Math.max(...Object.values(completedPrograms).map(r => Math.round((r.score / r.total) * 100))) + "%" : "N/A", icon: <Star className="w-5 h-5" /> },
          ].map((s, i) => (
            <div key={i} className="glass-card-strong rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">{s.icon}</div>
              <div>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map(program => {
            const completed = completedPrograms[program.id];
            const passed = completed && (completed.score / completed.total) * 100 >= program.passingScore;
            return (
              <div key={program.id} className="glass-card-strong rounded-2xl overflow-hidden group hover:shadow-lg transition-all">
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-white`}>
                        {program.icon}
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">{program.title}</h3>
                        <p className="text-xs text-muted-foreground">{program.category}</p>
                      </div>
                    </div>
                    {passed && <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">Passed ✓</Badge>}
                  </div>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge variant="outline" className={difficultyColor(program.difficulty)}>{program.difficulty}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="w-3 h-3" />{program.duration}</span>
                    <span className="text-xs text-muted-foreground">{program.totalQuestions} questions</span>
                    <span className="text-xs text-muted-foreground">Pass: {program.passingScore}%</span>
                  </div>
                  {completed && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Last score</span>
                        <span className="font-semibold text-foreground">{completed.score}/{completed.total} ({Math.round((completed.score / completed.total) * 100)}%)</span>
                      </div>
                      <Progress value={(completed.score / completed.total) * 100} className="h-2" />
                    </div>
                  )}
                  <Button className="w-full gradient-primary border-0 text-primary-foreground font-display font-semibold rounded-xl" onClick={() => startTest(program)}>
                    {completed ? "Retake Test" : "Start Test"}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Test Dialog */}
      <Dialog open={!!activeTest} onOpenChange={(open) => { if (!open) { setActiveTest(null); setShowResult(false); } }}>
        <DialogContent className="glass-card-strong rounded-2xl border-white/10 sm:max-w-lg max-h-[90vh] overflow-y-auto">
          {activeTest && !showResult && (
            <>
              <DialogHeader>
                <DialogTitle className="font-display flex items-center justify-between">
                  <span>{activeTest.title}</span>
                  <Badge variant="outline" className={`${timeLeft < 60 ? "text-red-500 border-red-500/30 animate-pulse" : "text-muted-foreground"}`}>
                    <Clock className="w-3 h-3 mr-1" />{formatTime(timeLeft)}
                  </Badge>
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-1 mb-2">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Question {currentQ + 1} of {activeTest.questions.length}</span>
                </div>
                <Progress value={((currentQ + 1) / activeTest.questions.length) * 100} className="h-1.5" />
              </div>
              <div className="space-y-4">
                <p className="font-medium text-foreground">{activeTest.questions[currentQ].question}</p>
                <div className="space-y-2">
                  {activeTest.questions[currentQ].options.map((opt, i) => (
                    <button
                      key={i}
                      onClick={() => setSelected(i)}
                      className={`w-full text-left p-3 rounded-xl border transition-all text-sm ${
                        selected === i
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border bg-background/50 text-muted-foreground hover:border-primary/40"
                      }`}
                    >
                      <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>{opt}
                    </button>
                  ))}
                </div>
              </div>
              <DialogFooter>
                <Button className="gradient-primary border-0 text-primary-foreground rounded-xl w-full font-display font-semibold" onClick={handleNext}>
                  {currentQ < activeTest.questions.length - 1 ? "Next Question" : "Submit Test"}
                </Button>
              </DialogFooter>
            </>
          )}

          {activeTest && showResult && (() => {
            const result = completedPrograms[activeTest.id];
            if (!result) return null;
            const pct = Math.round((result.score / result.total) * 100);
            const passed = pct >= activeTest.passingScore;
            return (
              <>
                <DialogHeader>
                  <DialogTitle className="font-display text-center text-xl">Test Results</DialogTitle>
                </DialogHeader>
                <div className="text-center space-y-4 py-4">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${passed ? "bg-emerald-500/10" : "bg-red-500/10"}`}>
                    {passed ? <CheckCircle className="w-10 h-10 text-emerald-500" /> : <XCircle className="w-10 h-10 text-red-500" />}
                  </div>
                  <p className="text-4xl font-bold text-foreground">{pct}%</p>
                  <p className={`font-display font-semibold text-lg ${passed ? "text-emerald-500" : "text-red-500"}`}>
                    {passed ? "🎉 Congratulations! You Passed!" : "Keep Practicing!"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You got {result.score} out of {result.total} questions correct.
                    {!passed && ` You need ${activeTest.passingScore}% to pass.`}
                  </p>
                </div>
                <DialogFooter className="flex gap-2 sm:gap-2">
                  <Button variant="outline" className="rounded-xl flex-1" onClick={() => startTest(activeTest)}>Retake</Button>
                  <Button className="gradient-primary border-0 text-primary-foreground rounded-xl flex-1" onClick={() => { setActiveTest(null); setShowResult(false); }}>Done</Button>
                </DialogFooter>
              </>
            );
          })()}
        </DialogContent>
      </Dialog>
    </div>
  );
}
