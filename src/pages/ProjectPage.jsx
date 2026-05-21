export default function ProjectPage({ title, image, description }) {
  return (
    <article className="project-page">
      <img className="artwork-image" src={image} alt={title} />
      <div className="page-text">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </article>
  );
}
