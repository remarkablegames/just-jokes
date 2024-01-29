import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink } from 'react-router-dom';
import Heading from 'src/components/Heading';
import { useSetDocumentTitle } from 'src/hooks';

export default function NotFound() {
  useSetDocumentTitle('Not Found');

  return (
    <>
      <Heading>Not Found</Heading>

      <Typography paragraph>
        Go{' '}
        <Link component={RouterLink} to="/">
          home
        </Link>
        .
      </Typography>
    </>
  );
}
