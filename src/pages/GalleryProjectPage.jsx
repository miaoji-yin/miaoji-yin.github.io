import React from 'react';

export default function GalleryProjectPage({ title, images, text }) {
  const [index, setIndex] = React.useState(0);
  const image = images[index];

  const showPrevious = () => {
    setIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  const showNext = () => {
    setIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  return (
    <article className="gallery-page" aria-label={title}>
      <div className="gallery-frame">
        <div className="gallery-image-wrap">
          <img className="artwork-image" src={image.src} alt={image.alt} />
          <button className="gallery-image-hit gallery-image-hit--previous" type="button" onClick={showPrevious} aria-label="Previous image" />
          <button className="gallery-image-hit gallery-image-hit--next" type="button" onClick={showNext} aria-label="Next image" />
        </div>
        <div className="gallery-controls">
          <button className="gallery-control gallery-control--previous" type="button" onClick={showPrevious} aria-label="Previous image">
            &lt;
          </button>
          <button className="gallery-control gallery-control--next" type="button" onClick={showNext} aria-label="Next image">
            &gt;
          </button>
        </div>
        {text ? (
          <section className="gallery-text" aria-label={`${title} text`}>
            <h1>{text.englishTitle}</h1>
            <p>{text.englishBody}</p>
            <h1>{text.japaneseTitle}</h1>
            <p>{text.japaneseBody}</p>
          </section>
        ) : null}
      </div>
    </article>
  );
}
