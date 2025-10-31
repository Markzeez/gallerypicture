import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from '../data';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Counter,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import 'yet-another-react-lightbox/plugins/counter.css';

function SimpleLightbox() {
  const [index, setIndex] = useState<number>(-1);

  return (
    <div className="p-4">
      {/* === Grid Gallery === */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="relative cursor-pointer group overflow-hidden rounded-xl shadow-md"
            onClick={() => setIndex(i)}
          >
            {/* Image */}
            <img
              src={slide.src}
              alt={slide.title || `Slide ${i + 1}`}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-blue-600/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <h3 className="text-white text-lg font-semibold text-center px-2">
                {slide.title || 'Untitled'}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* === Lightbox === */}
      <Lightbox
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        plugins={[Captions, Counter, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{ showToggle: true, descriptionTextAlign: 'center' }}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      />
    </div>
  );
}

export default SimpleLightbox;
