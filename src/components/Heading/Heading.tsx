import Typography from '@mui/material/Typography';
import { textStyle } from 'src/styles';

interface Props {
  children: React.ReactNode;
}

export default function Heading(props: Props) {
  return (
    <Typography component="h1" paragraph variant="h4" sx={textStyle}>
      {props.children}
    </Typography>
  );
}
