import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getOptions } from 'src/helpers';
import { playSound } from 'src/sounds';

interface Props {
  category: string;
  onChange: (event: unknown, value: string | null) => void;
  value: string;
}

export default function Placeholder(props: Props) {
  const options = getOptions(props.category)?.map((option) => option) || [];

  return (
    <Autocomplete
      freeSolo
      inputValue={props.value}
      onChange={props.onChange}
      onInputChange={props.onChange}
      options={options}
      renderInput={(params) => (
        <TextField {...params} onClick={playSound.select} />
      )}
      size="small"
    />
  );
}
