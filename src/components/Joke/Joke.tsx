import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Zoom from '@mui/material/Zoom';
import Mustache from 'mustache';
import { useState } from 'react';
import { useJoke, usePlayer } from 'src/hooks';
import { playSound } from 'src/sounds';

import Placeholder from '../Placeholder';

interface Props {
  template: string;
  placeholders: Record<string, string>;
}

export default function Joke(props: Props) {
  const { playerId } = usePlayer();
  const { setJoke } = useJoke();
  const [placeholders, setPlaceholders] = useState<Props['placeholders']>({});

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    setJoke({
      creatorId: playerId,
      joke: Mustache.render(props.template, placeholders),
    });
  }

  const templateNodes = Mustache.parse(props.template).map(
    ([type, text], index) => {
      switch (type) {
        case 'text':
          return (
            <Typography component="span" key={index} sx={{ lineHeight: 2.5 }}>
              {text}
            </Typography>
          );

        case 'name':
          return (
            <Placeholder
              category={props.placeholders[text]}
              key={text}
              onChange={(event, value) => {
                setPlaceholders({
                  ...placeholders,
                  [text]: typeof value === 'string' ? value : '',
                });
              }}
              value={placeholders[text] || ''}
            />
          );
      }
    },
  );

  return (
    <Zoom in>
      <Card
        component="form"
        onSubmit={handleSubmit}
        sx={{
          padding: 2,
          borderRadius: 2,
        }}
      >
        <CardHeader
          component="h2"
          sx={{ margin: 0, paddingBottom: 0 }}
          title="Create a Joke:"
        />

        <CardContent>{templateNodes}</CardContent>

        <CardContent>
          <strong>Preview: </strong>
          <span
            dangerouslySetInnerHTML={{
              __html: Mustache.render(props.template, placeholders),
            }}
          />
        </CardContent>

        <CardActions>
          <Button
            onClick={playSound.confirmation}
            type="submit"
            variant="contained"
          >
            Create Joke
          </Button>
        </CardActions>
      </Card>
    </Zoom>
  );
}
