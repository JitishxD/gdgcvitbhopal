import React from 'react'
import './HeroText.css'

export default function HeroText() {
  return (
    <section className="hero" aria-label="Site hero">
      <div className="hero__inner">
        <h1 className="hero__heading">
          <span className="hero__we">we are</span>{' '}
          <span className="hero__gdgc">gdgc</span>
        </h1>
        <p className="hero__sub"></p>
      </div>
    </section>
  )
}
