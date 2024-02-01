import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { Link as RouterLink, useRouteError } from 'react-router-dom';
import Heading from 'src/components/Heading';
import { useSetDocumentTitle } from 'src/hooks';
import { textStyle } from 'src/styles';

export default function ErrorBoundary() {
  useSetDocumentTitle('Error');
  const error = useRouteError();
  // eslint-disable-next-line no-console
  console.error(error);

  return (
    <>
      <Heading>Error</Heading>

      <Alert severity="error">
        <AlertTitle>Unexpected Application Error</AlertTitle>
        <pre>
          <code>{String(error)}</code>
        </pre>
      </Alert>

      <br />

      <Typography paragraph sx={textStyle}>
        Refresh the page or go to{' '}
        <Link component={RouterLink} to="/" sx={textStyle}>
          home
        </Link>
        .
      </Typography>
    </>
  );
}
