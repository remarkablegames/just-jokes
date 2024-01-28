import InsertLinkIcon from '@mui/icons-material/InsertLink';
import React, { useState } from 'react';

export default function Share() {
  const [showCopied, setShowCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  }

  const inviteTextStyle = {
    fontWeight: 'bold',
    marginLeft: '12px',
    fontSize: '1.1em',
    color: 'white', // Set text color to white
    fontFamily: 'Fredoka One, cursive', // Apply the bubbly font
    letterSpacing: '0.05em', // Slightly spaced letters for the bubbly effect
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Subtle shadow for depth
  };

  return (
    <div
      className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4"
      style={{ marginBottom: '20px' }}
    >
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <button
          onClick={handleClick}
          title="Invite friends"
          style={{
            background: 'none',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
          }}
        >
          <InsertLinkIcon style={{ color: 'white' }} />{' '}
          {/* White color for the icon */}
          <span style={inviteTextStyle}>Invite Your Friends!</span>
        </button>
        {showCopied && (
          <span style={{ display: 'inline-flex', alignItems: 'center' }}>
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
