import Typography from '@mui/material/Typography';

interface Props {
  children: React.ReactNode;
}

export default function Heading(props: Props) {
  return (
    <Typography
      component="h1"
      paragraph
      variant="h4"
      sx={{
        color: 'white',
        fontFamily: 'Fredoka One, cursive',
        letterSpacing: '0.1em',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      }}
    >
      {props.children}
    </Typography>
  );
}
