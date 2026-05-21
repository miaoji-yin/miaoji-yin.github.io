export function createGalleryImages(slug, title, options = {}) {
  const { count = 20, extension = 'svg' } = options;

  return Array.from({ length: count }, (_, index) => {
    const number = String(index + 1).padStart(2, '0');
    return {
      src: `/images/${slug}/${number}.${extension}`,
      alt: `${title} ${number}`,
    };
  });
}

export function createProjectText(englishTitle, japaneseTitle) {
  return {
    englishTitle,
    englishBody:
      'This is placeholder text for the project. It may be replaced with an artist statement, exhibition note, or short description of the work when the final writing is ready.',
    japaneseTitle,
    japaneseBody:
      'これはプロジェクトの仮テキストです。最終的な文章が決まり次第、作品解説や展示ノート、短いステートメントに差し替えることができます。',
  };
}
