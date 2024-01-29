import InsertLinkIcon from '@mui/icons-material/InsertLink';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { playSound } from 'src/sounds';
import { textStyle } from 'src/styles';

export default function Share() {
  const [showCopied, setShowCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(location.href);
    playSound.drop();
    setShowCopied(true);

    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  }

  return (
    <>
      <Button
        color="secondary"
        onClick={handleClick}
        startIcon={<InsertLinkIcon />}
        variant="contained"
      >
        Invite Your Friends!
      </Button>

      {showCopied && (
        <Box
          component="span"
          sx={{
            ...textStyle,
            marginLeft: 1,
          }}
        >
          Copied!
        </Box>
      )}
    </>
  );
}
