import Autocomplete, {
  type AutocompleteRenderInputParams,
} from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { useCallback } from 'react';
import { getOptions } from 'src/helpers';
import { playSound } from 'src/sounds';

interface Props {
  category: string;
  id: string;
  onChange: (category: string, value: string | null) => void;
  value: string;
}

export default function Placeholder(props: Props) {
  const options = getOptions(props.category)?.map((option) => option) || [];

  const onInputChange = useCallback(
    (event: unknown, value: string | null) => {
      props.onChange(props.id, value);
    },
    [props.id, props.onChange],
  );

  const renderInput = useCallback(
    (params: AutocompleteRenderInputParams) => {
      return (
        <TextField
          {...params}
          label={props.category}
          onClick={playSound.select}
          required
        />
      );
    },
    [props.category],
  );

  return (
    <Autocomplete
      freeSolo
      inputValue={props.value}
      onInputChange={onInputChange}
      options={options}
      renderInput={renderInput}
      size="small"
    />
  );
}
