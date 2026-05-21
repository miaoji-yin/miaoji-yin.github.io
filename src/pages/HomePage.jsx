export default function HomePage({ image }) {
  return (
    <section className="image-page" aria-label="Home">
      <img className="artwork-image" src={image} alt="YIN Ying homepage artwork" />
    </section>
  );
}
