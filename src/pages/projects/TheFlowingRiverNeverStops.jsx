import GalleryProjectPage from '../GalleryProjectPage.jsx';
import { createGalleryImages, createProjectText } from './galleryData.js';

const title = 'The flowing river never stops';
const slug = 'the-flowing-river-never-stops';

export default function TheFlowingRiverNeverStops() {
  return (
    <GalleryProjectPage
      title={title}
      images={createGalleryImages(slug, title)}
      text={createProjectText(title, '流れる川は止まらない')}
    />
  );
}
