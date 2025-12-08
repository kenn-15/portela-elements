import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SectionHeader from '@/components/SectionHeader'

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      {/* Header Section */}
      <section>
        <SectionHeader label="Get in Touch" />
      </section>

      {/* Intro Section */}
      <section>
        <p>
          Intro placeholder explaining how visitors can reach out and what the response
          time looks like.
        </p>
      </section>

      {/* Contact Form */}
      <section>
        <h2>Contact Form</h2>
        <form>
          <div>
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>

          <div>
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div>
            <label>Message</label>
            <textarea placeholder="Tell me how I can help..." />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Response Time */}
      <section>
        <p>Response time placeholder (e.g., I typically reply within 24–48 hours.)</p>
      </section>

      {/* Alternative Option */}
      <section>
        <p>
          If you would prefer to schedule a conversation, you can book a free 30-minute
          consultation instead.
        </p>
      </section>

      <Footer />
    </main>
  )
}
