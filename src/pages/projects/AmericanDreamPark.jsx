import GalleryProjectPage from '../GalleryProjectPage.jsx';
import { createGalleryImages, createProjectText } from './galleryData.js';

const title = 'American Dream Park';
const slug = 'american-dream-park';

export default function AmericanDreamPark() {
  return (
    <GalleryProjectPage
      title={title}
      images={createGalleryImages(slug, title)}
      text={createProjectText(title, 'アメリカン・ドリーム・パーク')}
    />
  );
}
