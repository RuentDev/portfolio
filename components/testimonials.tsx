import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      avatar: "/professional-woman-headshot.png",
      content:
        "Working with this developer was an absolute pleasure. They delivered exceptional quality work on time and exceeded our expectations. The attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CEO at StartupXYZ",
      avatar: "/professional-man-headshot.png",
      content:
        "The full-stack solution they built for us transformed our business operations. Clean code, beautiful design, and seamless functionality. Highly recommend for any complex web development project.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director at CreativeStudio",
      avatar: "/professional-woman-designer-headshot.png",
      content:
        "Rare to find a developer who understands both technical implementation and design principles so well. They brought our vision to life perfectly and added valuable suggestions along the way.",
      rating: 5,
    },
    {
      name: "David Thompson",
      role: "CTO at InnovateLab",
      avatar: "/professional-cto-headshot.png",
      content:
        "Exceptional problem-solving skills and deep understanding of modern web technologies. They optimized our application performance by 40% and implemented features we thought were impossible.",
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gradient mb-6">What Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Don't just take my word for it. Here's what some of my clients have to say about working together on their
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="neumorphic border-0 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-6 text-pretty leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden neumorphic-inset mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
