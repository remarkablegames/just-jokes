import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Mustache from 'mustache';
import { useState } from 'react';
import { useJoke, usePlayer } from 'src/hooks';

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
    const renderedJoke = Mustache.render(props.template, placeholders);
    setJoke({
      creatorId: playerId,
      joke: renderedJoke,
    });
  }

  const templateNodes = Mustache.parse(props.template).map(
    ([type, text], index) => {
      if (type === 'text') {
        return (
          <Box component="span" key={index} sx={{ lineHeight: 2.5 }}>
            {text}
          </Box>
        );
      }

      if (type === 'name') {
        return (
          <Placeholder
            category={props.placeholders[text]}
            id={text}
            key={text}
            onChange={(event) => {
              setPlaceholders({
                ...placeholders,
                [text]: event.target.value,
              });
            }}
          />
        );
      }
    },
  );

  return (
    <Card component="form" onSubmit={handleSubmit} sx={{ padding: 1 }}>
      <CardContent>
        <Typography
          component="div"
          // sx={{ display: 'flex', alignItems: 'center' }}
          /*
          sx={{
            height: '20rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
          */
        >
          {templateNodes}
        </Typography>
      </CardContent>

      <CardActions>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
