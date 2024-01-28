import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { useState } from 'react';
import { playSound } from 'src/sounds';

export default function Share() {
  const [showCopied, setShowCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(window.location.href);
    setShowCopied(true);
    playSound.drop();
    setTimeout(() => setShowCopied(false), 2000);
  }

  const textStyle = {
    fontWeight: 'bold',
    fontSize: '1.1em',
    color: 'white',
    fontFamily: 'Fredoka One, cursive',
    letterSpacing: '0.05em',
    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
  };

  return (
    <div style={{ marginBottom: '20px' }}>
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
          <InsertLinkIcon sx={{ color: 'white' }} />
          <span style={{ ...textStyle, marginLeft: '20px' }}>
            Invite Your Friends!
          </span>{' '}
        </button>

        {showCopied && (
          <span
            style={{
              ...textStyle,
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            Copied!
          </span>
        )}
      </div>
    </div>
  );
}
