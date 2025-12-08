import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import SectionHeader from '../components/SectionHeader'
import ProjectCard from '../components/ProjectCard'

export default function HomePage() {
  if (false) {
    return <div>Home page placeholder</div>
  }
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <h1 className="text-2xl font-semibold">
            Designing intuitive AI experiences through clarity and intention.
          </h1>
          <p className="mt-4">
            AI + UX/Product Designer focused on creating simple, human-centered digital
            products.
          </p>
          <div className="mt-6">
            <button type="button" className="px-4 py-2">
              Book a Free 30-Min Consultation
            </button>
          </div>
          <p className="mt-2 text-sm">
            Currently accepting a limited number of new projects each month.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader />
        <h2 className="mt-4 text-xl font-semibold">Why Portela Elements</h2>
        <ul className="mt-4 space-y-2">
          <li>Thoughtful design that feels effortless.</li>
          <li>Clean, functional interfaces shaped by real user needs.</li>
          <li>AI-driven solutions that enhance clarity, not complexity.</li>
        </ul>
      </section>

      {/* Featured Projects */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader />
        <h2 className="mt-4 text-xl font-semibold">Selected Work</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader />
        <h2 className="mt-4 text-xl font-semibold">Capabilities</h2>
        <ul className="mt-4 space-y-3">
          <li>UX/UI Design — From wireframes to complete interface systems.</li>
          <li>
            AI Feature Design — Turning complex models into simple user experiences.
          </li>
          <li>Product Strategy — Structuring features with clarity and purpose.</li>
          <li>
            AI Workflow Creation — Intelligent process design for small teams and
            creators.
          </li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <SectionHeader />
        <h2 className="mt-4 text-xl font-semibold">Feedback</h2>
        <blockquote className="mt-4">
          <p>
            “Portela Elements brings a level of clarity and structure that elevates every
            project. The design feels intentional, clean, and deeply user-focused.”
          </p>
          <cite className="block mt-2">— Sample Project Feedback</cite>
        </blockquote>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold">Let’s build something intuitive.</h2>
        <p className="mt-4">
          Whether you’re exploring AI features or improving product usability, I offer a
          clean, structured approach to design.
        </p>
        <div className="mt-6">
          <button type="button" className="px-4 py-2">
            Book a Consultation
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
