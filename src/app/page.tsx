import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">KidsGuard</span>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/register">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container mx-auto px-4 py-24 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Protect Your Children in the Digital World
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-muted-foreground">
            KidsGuard provides comprehensive parental controls and monitoring tools
            to keep your children safe online across all their devices.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/register">
              <Button size="lg" className="px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/features">
              <Button size="lg" variant="outline" className="px-8">
                Learn More
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted py-24">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold">
              Key Features
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-lg bg-card p-6 shadow-sm"
                >
                  <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} KidsGuard. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Content Filtering",
    description:
      "Advanced AI-powered content filtering to block inappropriate content across websites and apps.",
  },
  {
    title: "Screen Time Management",
    description:
      "Set screen time limits and schedules to promote healthy digital habits.",
  },
  {
    title: "Activity Monitoring",
    description:
      "Get detailed insights into your child's online activities and app usage.",
  },
  {
    title: "Real-time Alerts",
    description:
      "Receive instant notifications about potentially harmful content or suspicious activities.",
  },
  {
    title: "Cross-platform Protection",
    description:
      "Protect all your children's devices with a single dashboard - phones, tablets, and computers.",
  },
  {
    title: "Safe Search",
    description:
      "Enforce safe search on popular search engines and block adult content.",
  },
]
