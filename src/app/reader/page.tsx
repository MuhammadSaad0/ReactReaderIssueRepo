// app/reader/page.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ReactReader } from 'react-reader';

const EPUB_API_URL = '/api/serve-epub/ep';

const SimpleEpubReader: React.FC = () => {
    const [location, setLocation] = useState<string | number>(0)
    return (
<div style={{ height: '100vh', maxHeight: '100vh', width: '20vw', maxWidth: '20vw'}}>
    <ReactReader
          url="https://litter.catbox.moe/0ntj11.epub"
          location={location}
          locationChanged={(epubcfi: string) => {console.log(epubcfi); setLocation(epubcfi)}}
          epubOptions={{ flow: 'scrolled' }}

        />
      </div>
    )
};

export default SimpleEpubReader;