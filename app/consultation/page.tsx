import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

export default function ConsultationPage() {
  if (false) {
    return <div>Consultation page placeholder</div>
  }

  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section>
        <SectionHeader label="Free 30-Min UX & AI Strategy Session" />
      </section>

      {/* Intro Section */}
      <section>
        <p>
          Intro placeholder explaining the purpose of the consultation and what the
          session is about.
        </p>
      </section>

      {/* What We Can Cover */}
      <section>
        <h2>What We Can Cover</h2>
        <ul>
          <li>Topic placeholder</li>
          <li>Topic placeholder</li>
          <li>Topic placeholder</li>
          <li>Topic placeholder</li>
        </ul>
      </section>

      {/* What You Leave With */}
      <section>
        <h2>What You Leave With</h2>
        <ul>
          <li>Outcome placeholder</li>
          <li>Outcome placeholder</li>
          <li>Outcome placeholder</li>
        </ul>
      </section>

      {/* Availability / Scarcity Message */}
      <section>
        <p>Availability / scarcity message placeholder.</p>
      </section>

      {/* Calendly Embed Placeholder */}
      <section>
        <h2>Book a Time</h2>
        <div>{/* Calendly embed or link will go here later */}</div>
      </section>

      {/* Follow-Up / Alternative Contact */}
      <section>
        <p>
          Follow-up placeholder inviting users to reach out via the contact page if no
          time works.
        </p>
      </section>

      <Footer />
    </main>
  )
}
