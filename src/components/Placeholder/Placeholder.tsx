import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getOptions } from 'src/helpers';

interface Props {
  category: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
          onChange={props.onChange}
        />
      )}
      size="small"
    />
  );
}
