import React, { useEffect, useRef, useState } from 'react'
import Container from '@/components/system/Container'
import Heading from '@/components/system/Heading'

export default function TokensPage() {
  const firstTileRef = useRef<HTMLDivElement | null>(null)
  const [computedBg, setComputedBg] = useState<string>('')

  useEffect(() => {
    if (firstTileRef.current) {
      const bg = getComputedStyle(firstTileRef.current).backgroundColor
      setComputedBg(bg)
    }
  }, [])

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
                  ref={firstTileRef}
                  className="w-28 h-12 rounded-md"
                  style={{ background: '#158fff' }}
                />
                <div className="w-28 h-12 rounded-md" style={{ background: '#0b54b3' }} />
                <div
                  className="w-28 h-12 rounded-md border"
                  style={{ background: '#fafafa' }}
                />
              </div>
              <p className="mt-2 text-sm text-neutral-700">
                Computed first tile background: {computedBg || '—'}
              </p>
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
                <button
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium"
                  style={{ background: '#158fff', color: '#fff' }}
                >
                  Primary
                </button>
                <button
                  className="inline-flex items-center justify-center rounded-md px-4 py-2 font-medium border"
                  style={{
                    background: 'transparent',
                    color: '#0b54b3',
                    borderColor: '#0b54b3'
                  }}
                >
                  Ghost
                </button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  )
}
