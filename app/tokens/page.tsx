import Container from '@/components/system/Container'
import Heading from '@/components/system/Heading'
import Button from '@/components/system/Button'

export default function TokensPage() {
  return (
    <main>
      <Container>
        <section className="py-12">
          <Heading level={1}>Design Tokens Demo</Heading>

          <p className="mt-4 text-neutral-700">
            This page demonstrates a small set of design tokens applied across components.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <Heading level={2}>Colors</Heading>
              <div className="mt-4 flex gap-4 items-center">
                <div
                  className="w-28 h-12 rounded-md"
                  style={{ background: 'var(--color-primary-500)' }}
                />
                <div
                  className="w-28 h-12 rounded-md"
                  style={{ background: 'var(--color-primary-700)' }}
                />
                <div
                  className="w-28 h-12 rounded-md border"
                  style={{ background: 'var(--color-neutral-50)' }}
                />
              </div>
            </div>

            <div>
              <Heading level={2}>Typography & Spacing</Heading>
              <p className="mt-3">
                Heading and paragraph spacing reflects the token scale.
              </p>
            </div>

            <div>
              <Heading level={2}>Buttons</Heading>
              <div className="mt-4 flex gap-4">
                <Button>Primary</Button>
                <Button variant="ghost">Ghost</Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
