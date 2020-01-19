import React from 'react';

import { TextPlaceholder, ImagePlaceholder } from '@/Placeholder';

export function AboutPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <TextPlaceholder />
      <div style={{ margin: '2rem 0' }} />
      <TextPlaceholder />
      <div style={{ margin: '2rem 0' }} />
      <TextPlaceholder />
      <div style={{ margin: '3rem 0' }} />
      <ImagePlaceholder />
    </div>
  );
}
