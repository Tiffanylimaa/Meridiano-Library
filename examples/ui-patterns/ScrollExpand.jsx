// ScrollExpand — recriação própria a partir da API de props observada em
// exemplos de uso de `@react-bits/ScrollExpand-JS-CSS` (não é cópia nem
// adaptação do código-fonte real, que não foi acessado). Ver nota de
// proveniência em third-party/resources/react-bits-scrollexpand.md e o
// guia guides/scroll-expand-hero.md para o que é confirmado vs. inferido.
//
// Uso:
//   <ScrollExpand src="/hero.jpg" title="Built to scale" useWindowScroll>
//     <h2>Every pixel, everywhere</h2>
//     <p>The frame opens up as you scroll...</p>
//   </ScrollExpand>
//
// Sem dependência além de React.

import React, { useEffect, useRef, useState } from 'react';

export default function ScrollExpand({
  src,
  alt = '',
  title,
  scrollHint = 'Scroll to expand',
  useWindowScroll = false,
  mediaZoom = 1,
  startWidth = 42,   // % da viewport (useWindowScroll) ou do container (modo cápsula)
  startHeight = 58,  // %
  startRadius = 24,  // px
  endRadius = 0,     // px
  scrollDistance = 1,   // múltiplo da altura disponível necessário pra completar a expansão
  holdDistance = 0,     // múltiplo extra de scroll mantendo o frame 100% expandido
  smoothing = 1,         // 1 = acompanha o scroll direto; <1 = suaviza (lerp) por frame
  overlayScrim = 0,      // opacidade do véu escuro sobre a mídia quando expandida (legibilidade do children)
  enabled = true,
  children,
}) {
  const outerRef = useRef(null);   // wrapper que mede o espaço disponível
  const capsuleRef = useRef(null); // container com scroll interno (modo cápsula)
  const [p, setP] = useState(0);   // progresso suavizado, 0 -> 1
  const [capsuleHeight, setCapsuleHeight] = useState(0);
  const targetRef = useRef(0);
  const rafRef = useRef(null);

  // Mede a altura visível real do container no modo cápsula. Precisa ser em
  // px (não '100%'): o filho sticky fica dentro de um spacer alto (o que cria
  // a distância de scroll), então uma altura percentual nele resolveria
  // contra esse spacer, não contra a caixa visível -- o sticky ficaria
  // gigante e sairia da área visível em vez de ficar preso a ela.
  useEffect(() => {
    if (useWindowScroll) return;
    const el = capsuleRef.current;
    if (!el) return;
    const measure = () => setCapsuleHeight(el.clientHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [useWindowScroll]);

  useEffect(() => {
    if (!enabled) {
      setP(1);
      return;
    }

    const scrollEl = useWindowScroll ? window : capsuleRef.current;
    if (!scrollEl) return;

    function computeTarget() {
      if (useWindowScroll) {
        const el = outerRef.current;
        if (!el) return 0;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const expandRange = vh * scrollDistance;
        const scrolled = Math.min(Math.max(-rect.top, 0), expandRange);
        return expandRange > 0 ? scrolled / expandRange : 0;
      }
      const el = capsuleRef.current;
      if (!el) return 0;
      const expandRange = el.clientHeight * scrollDistance;
      const scrolled = Math.min(Math.max(el.scrollTop, 0), expandRange);
      return expandRange > 0 ? scrolled / expandRange : 0;
    }

    function tick() {
      targetRef.current = computeTarget();
      setP((prev) => {
        if (smoothing >= 1) return targetRef.current;
        const next = prev + (targetRef.current - prev) * smoothing;
        return Math.abs(next - targetRef.current) < 0.001 ? targetRef.current : next;
      });
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    const onResize = () => {};
    scrollEl.addEventListener('scroll', onResize, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafRef.current);
      scrollEl.removeEventListener('scroll', onResize);
      window.removeEventListener('resize', onResize);
    };
  }, [enabled, useWindowScroll, scrollDistance, smoothing]);

  const width = `${startWidth + (100 - startWidth) * p}%`;
  const height = `${startHeight + (100 - startHeight) * p}%`;
  const radius = startRadius + (endRadius - startRadius) * p;
  const hintOpacity = Math.max(0, 1 - p * 4);
  const childrenOpacity = Math.max(0, (p - 0.75) * 4);

  const frameStyle = {
    position: 'relative',
    width,
    height,
    margin: '0 auto',
    borderRadius: `${radius}px`,
    overflow: 'hidden',
    background: 'rgba(0,0,0,.06)', // fallback visível antes/durante o carregamento da mídia
    transition: enabled ? 'none' : 'width .3s, height .3s, border-radius .3s',
  };

  const media = (
    <div style={frameStyle}>
      {src && (
        <img
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: `scale(${mediaZoom})`,
          }}
        />
      )}
      {overlayScrim > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `rgba(10,8,12,${overlayScrim * p})`,
            pointerEvents: 'none',
          }}
        />
      )}
      {title && (
        <p
          style={{
            position: 'absolute',
            top: 20,
            left: 24,
            margin: 0,
            color: '#fff',
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: '.04em',
            textShadow: '0 1px 6px rgba(0,0,0,.5)',
          }}
        >
          {title}
        </p>
      )}
      {scrollHint && (
        <p
          style={{
            position: 'absolute',
            bottom: 20,
            left: '50%',
            transform: 'translateX(-50%)',
            margin: 0,
            color: '#fff',
            fontSize: 12,
            opacity: hintOpacity,
            textShadow: '0 1px 6px rgba(0,0,0,.5)',
          }}
        >
          {scrollHint}
        </p>
      )}
      {children && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            padding: '32px 36px',
            color: '#fff',
            opacity: childrenOpacity,
            textShadow: '0 1px 8px rgba(0,0,0,.5)',
          }}
        >
          {children}
        </div>
      )}
    </div>
  );

  if (useWindowScroll) {
    const vh = typeof window !== 'undefined' ? window.innerHeight : 800;
    return (
      <div ref={outerRef} style={{ position: 'relative', height: `${100 * (1 + scrollDistance + holdDistance)}vh` }}>
        <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
          {media}
        </div>
      </div>
    );
  }

  // Modo cápsula (padrão): scroll acontece dentro do próprio componente, na
  // altura definida pelo pai (ex.: <div style={{height:'520px'}}><ScrollExpand .../></div>).
  return (
    <div
      ref={capsuleRef}
      style={{ position: 'relative', height: '100%', overflowY: enabled ? 'scroll' : 'hidden' }}
    >
      <div style={{ height: `${100 * (1 + scrollDistance + holdDistance)}%`, position: 'relative' }}>
        <div style={{ position: 'sticky', top: 0, height: capsuleHeight ? `${capsuleHeight}px` : '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {media}
        </div>
      </div>
    </div>
  );
}
