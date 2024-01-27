import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Mustache from 'mustache';
import { useJoke, usePlayer } from 'src/hooks';

import Placeholder from '../Placeholder';

interface Props {
  template: string;
  placeholders: Record<string, string>;
}

export default function Joke(props: Props) {
  const { playerId } = usePlayer();
  const { setJoke } = useJoke();

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.keys(props.placeholders).reduce(
      (accumulator, value) => {
        const text = formData.get(value);
        if (typeof text === 'string') {
          accumulator[value] = text;
        }
        return accumulator;
      },
      {} as Props['placeholders'],
    );

    setJoke({
      creatorId: playerId,
      joke: Mustache.render(props.template, data),
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
              name={text}
            />
          );
      }
    },
  );

  return (
    <Card component="form" onSubmit={handleSubmit} sx={{ padding: 1 }}>
      <CardHeader
        component="h2"
        sx={{ margin: 0, paddingBottom: 0 }}
        title="Write a Joke:"
      />

      <CardContent>{templateNodes}</CardContent>

      <CardActions>
        <Button type="submit" variant="contained">
          Create Joke
        </Button>
      </CardActions>
    </Card>
  );
}
