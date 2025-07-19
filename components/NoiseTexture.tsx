interface NoiseTextureProps {
  opacity?: number
}

export function NoiseTexture({ opacity = 0.03 }: NoiseTextureProps) {
  return (
    <div
      className="noise-overlay"
      style={{ opacity }}
      aria-hidden="true"
    />
  )
}
