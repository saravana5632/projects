import React from 'react';

export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 glass mt-auto relative z-10">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Saravanakumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
