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
    <div className="fixed bottom-2 right-2 lg:bottom-4 lg:right-4">
      <button
        onClick={handleClick}
        title="Invite friends"
        className="flex items-center opacity-35 hover:opacity-65 focus:active:opacity-100"
        style={{ background: 'none', border: 'none' }}
      >
        <InsertLinkIcon />
        <span
          style={{
            fontWeight: 'bold',
            marginLeft: '8px',
            lineHeight: '1',
            verticalAlign: 'middle',
          }}
        >
          Invite Your Friends!
        </span>
      </button>
      {showCopied && (
        <span
          className="ml-2 text-sm"
          style={{ display: 'inline', marginLeft: '8px' }}
        >
          Copied!
        </span>
      )}
    </div>
  );
}
