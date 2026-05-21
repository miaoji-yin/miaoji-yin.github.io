import GalleryProjectPage from '../GalleryProjectPage.jsx';
import { createGalleryImages, createProjectText } from './galleryData.js';

const title = 'Wind of Okhotsk';
const slug = 'wind-of-okhotsk';

export default function WindOfOkhotsk() {
  return (
    <GalleryProjectPage
      title={title}
      images={createGalleryImages(slug, title)}
      text={createProjectText(title, 'オホーツクの風')}
    />
  );
}
