import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getOptions } from 'src/helpers';
import { playSound } from 'src/sounds';

interface Props {
  category: string;
  name: string;
}

export default function Placeholder(props: Props) {
  const options = getOptions(props.category)?.map((option) => option) || [];

  return (
    <Autocomplete
      freeSolo
      options={options}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.category}
          name={props.name}
          onClick={playSound.select}
        />
      )}
      size="small"
    />
  );
}
