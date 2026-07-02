export function OverlayGradient() {
  return (
    <>
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(4,8,14,0.28)_0%,rgba(4,8,14,0.02)_34%,rgba(236,240,244,0.04)_55%,rgba(7,10,14,0.34)_100%)]" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_54%_36%,rgba(255,255,255,0.08),transparent_36%),linear-gradient(90deg,rgba(245,248,251,0.38)_0%,rgba(255,255,255,0)_33%,rgba(255,255,255,0)_67%,rgba(219,229,239,0.32)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-black/28 to-transparent" />
    </>
  );
}
