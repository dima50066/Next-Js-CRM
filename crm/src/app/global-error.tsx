'use client';
import React from 'react';
export interface GlobalErrorProps {
  error: Error;
}
export default function GlobalError({}: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>Something globally went wrong</p>
        </div>
      </body>
    </html>
  );
}
