import GalleryProjectPage from '../GalleryProjectPage.jsx';
import { createGalleryImages, createProjectText } from './galleryData.js';

const title = 'Hypnopompic Hallucinations';
const slug = 'hypnopompic-hallucinations';

export default function HypnopompicHallucinations() {
  return (
    <GalleryProjectPage
      title={title}
      images={createGalleryImages(slug, title)}
      text={createProjectText(title, '入眠時幻覚')}
    />
  );
}
