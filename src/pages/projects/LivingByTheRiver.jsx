import GalleryProjectPage from '../GalleryProjectPage.jsx';
import { createGalleryImages, createProjectText } from './galleryData.js';

const title = 'Living by the river';
const slug = 'living-by-the-river';

export default function LivingByTheRiver() {
  return (
    <GalleryProjectPage
      title={title}
      images={createGalleryImages(slug, title)}
      text={createProjectText(title, '川のそばで暮らす')}
    />
  );
}
