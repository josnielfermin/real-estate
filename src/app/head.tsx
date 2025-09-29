export default function Head() {
  return (
    <>
      {/* Preload cover mask assets to prioritize their download on first paint */}
      <link rel="preload" as="image" href="/static/images/cover/mask.svg" />
      <link
        rel="preload"
        as="image"
        href="/static/images/cover/mask-mobile.svg"
        media="(max-width: 640px)"
      />
    </>
  );
}
