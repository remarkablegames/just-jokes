import { getOptions } from 'src/helpers';

interface Props {
  category: string;
  id: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
}

export default function Placeholder(props: Props) {
  const { category, id, ...restProps } = props;
  const options = getOptions(category);

  return (
    <>
      <input
        type="text"
        className="border text-base rounded-lg p-2.5"
        list={id}
        placeholder={category}
        {...restProps}
      />

      {options && (
        <datalist id={id}>
          {options.map((value: string) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </datalist>
      )}
    </>
  );
}
