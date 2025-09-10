import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable, and efficient code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design Focus",
      description:
        "Creating beautiful, intuitive interfaces that provide exceptional user experiences.",
    },
    {
      icon: Zap,
      title: "Performance",
      description:
        "Optimizing applications for speed, accessibility, and seamless functionality.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            I'm a passionate full-stack developer with 4+ years of experience
            building web applications that combine beautiful design with robust
            functionality. I love turning complex problems into simple, elegant
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card
              key={index}
              className="neumorphic border-0 hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full glassmorphic flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-pretty leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a curious student exploring HTML and CSS, I've evolved
              into a full-stack developer who thrives on creating digital
              experiences that matter. My journey has taken me through various
              technologies and frameworks, always with a focus on learning and
              growing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies,
              contributing to open source projects, or sharing knowledge with
              the developer community. I believe in the power of collaboration
              and continuous learning.
            </p>
          </div>

          {/* <div className="neumorphic rounded-2xl p-8">
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-primary">50+</span>
                <span className="text-muted-foreground">Projects Completed</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-secondary">5+</span>
                <span className="text-muted-foreground">Years Experience</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-primary">20+</span>
                <span className="text-muted-foreground">Happy Clients</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
