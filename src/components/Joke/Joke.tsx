import Mustache from 'mustache';
import { useState } from 'react';
import { useJoke, usePlayer } from 'src/hooks';

import Placeholder from '../Placeholder';

interface Props {
  template: string;
  placeholders: Record<string, string>;
  onJokeUpdate: (joke: string) => void;
}

export default function Joke(props: Props) {
  const { playerId } = usePlayer();
  const { joke, setJoke } = useJoke();
  const [placeholders, setPlaceholders] = useState<Props['placeholders']>({});

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const renderedJoke = Mustache.render(props.template, placeholders);
    setJoke({
      creatorId: playerId,
      joke: renderedJoke,
    });
    props.onJokeUpdate(renderedJoke);
  }

  const templateNodes = Mustache.parse(props.template).map(([type, text]) => {
    if (type === 'text') {
      return text;
    }

    if (type === 'name') {
      return (
        <Placeholder
          category={props.placeholders[text]}
          id={text}
          key={text}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
          ) => {
            setPlaceholders({
              ...placeholders,
              [text]: event.target.value,
            });
          }}
        />
      );
    }
  });

  return (
    <>
      <div className="p-5 bg-blue-100">
        <p className="leading-relaxed mb-4 whitespace-pre-wrap">
          {templateNodes}
        </p>

        <button
          className="cursor-pointer bg-blue-500 text-white p-2 rounded"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <p className="bg-blue-500 text-white p-2 rounded">{joke.joke}</p>
    </>
  );
}
