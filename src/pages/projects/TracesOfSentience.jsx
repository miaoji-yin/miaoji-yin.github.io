import GalleryProjectPage from '../GalleryProjectPage.jsx';
import { createGalleryImages, createProjectText } from './galleryData.js';

const title = 'Traces of Sentience';
const slug = 'traces-of-sentience';

export default function TracesOfSentience() {
  return (
    <GalleryProjectPage
      title={title}
      images={createGalleryImages(slug, title)}
      text={createProjectText(title, '感覚の痕跡')}
    />
  );
}
