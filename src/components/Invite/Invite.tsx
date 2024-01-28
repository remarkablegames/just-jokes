import InsertLinkIcon from '@mui/icons-material/InsertLink';
import React, { useState } from 'react';

export default function Share() {
  const [showCopied, setShowCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    setTimeout(() => setShowCopied(false), 2000);
  }

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
          <InsertLinkIcon />
          <span
            style={{
              fontWeight: 'bold',
              marginLeft: '12px',
              fontSize: '1.1em',
            }}
          >
            {' '}
            Invite Your Friends!
          </span>
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
