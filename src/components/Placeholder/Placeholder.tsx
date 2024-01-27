import TextField from '@mui/material/TextField';
import { getOptions } from 'src/helpers';

interface Props {
  category: string;
  id: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Placeholder(props: Props) {
  const options = getOptions(props.category);

  return (
    <>
      <TextField
        inputProps={{ list: props.id }}
        label={props.category}
        onChange={props.onChange}
        size="small"
      />

      {options && (
        <datalist id={props.id}>
          {options.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </datalist>
      )}
    </>
  );
}
