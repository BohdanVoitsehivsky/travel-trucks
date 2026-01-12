import Image from "next/image";

type GalleryItem = {
  thumb: string;
  original: string;
};

type CamperGalleryProps = {
  gallery: GalleryItem[];
  name: string;
};

export default function CamperGallery({
  gallery,
  name,
}: CamperGalleryProps) {
  if (!gallery || gallery.length === 0) {
    return null;
  }

  return (
    <ul>
      {gallery.map((image, index) => (
        <li key={index}>
          <Image
            src={image.original}
            alt={`${name} photo ${index + 1}`}
            width={292}
            height={312}
          />
        </li>
      ))}
    </ul>
  );
}
