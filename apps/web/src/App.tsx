import { useEffect, useRef } from 'react'
import { createGlobe } from './globe/createGlobe'

export function App() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const viewer = createGlobe(containerRef.current!)
    return () => viewer.destroy()
  }, [])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}
