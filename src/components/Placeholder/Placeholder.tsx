import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { getOptions } from 'src/helpers';

interface Props {
  category: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Placeholder(props: Props) {
  const options =
    getOptions(props.category)?.map((value) => ({ label: value, value })) || [];

  return (
    <>
      <Autocomplete
        options={options}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={props.category}
            onChange={props.onChange}
          />
        )}
        size="small"
      />
    </>
  );
}
