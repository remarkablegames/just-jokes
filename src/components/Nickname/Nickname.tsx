import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Dialog from 'src/components/Dialog';
import { getLocalStorageNickname, setLocalStorageNickname } from 'src/helpers';
import { usePlayer, useSetHost } from 'src/hooks';
import { backgroundMusic, playSound } from 'src/sounds';

export default function Nickname() {
  const [open, setOpen] = useState(true);
  const [error, setError] = useState(false);
  const [nickname, setNickname] = useState(getLocalStorageNickname());
  const { setPlayerNickname } = usePlayer();
  const { setHost } = useSetHost();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setError(!value);
    setNickname(value);
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    handleSave();
  }

  function handleSave() {
    if (!nickname) {
      playSound.click();
      return setError(true);
    }

    setHost();
    setPlayerNickname(nickname);
    setLocalStorageNickname(nickname);
    setOpen(false);
    playSound.confirmation();
    backgroundMusic.load().stop().play();
  }

  return (
    <Dialog
      open={open}
      id="nickname"
      onSave={handleSave}
      title="Choose a nickname"
    >
      <form onSubmit={handleSubmit}>
        <TextField
          autoFocus
          error={error}
          label="Enter your nickname"
          margin="dense"
          onChange={handleChange}
          placeholder={nickname || 'Nickname'}
          required
          value={nickname}
          variant="outlined"
        />
      </form>
    </Dialog>
  );
}
