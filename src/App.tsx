import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from './data'
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
import Images from './Images'

function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Light</button> */}

      <Images 
      data={slides} 
      onClick={(currentIndex) => setIndex(currentIndex)} 
      />

      <Lightbox
        // open={open}
        index={index}
        slides={slides}
        open={index >= 0}
        close={() => setIndex(-1)}
        // close={() => setOpen(false)}
        plugins={[Captions, Counter, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{ showToggle: true, descriptionTextAlign: 'end' }}
        counter={{ container: { style: { top: 'unset', bottom: 0 } } }}
      />
    </>
  );
}

export default App;
