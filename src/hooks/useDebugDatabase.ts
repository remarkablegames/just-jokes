import { useConnectionStatus } from 'driftdb-react';
import { useEffect } from 'react';
import { DEV } from 'src/config';

export function useDebugDatabase() {
  const { debugUrl } = useConnectionStatus() as { debugUrl: string };

  useEffect(() => {
    if (DEV && debugUrl) {
      // eslint-disable-next-line no-console
      console.log('Database debug URL:', debugUrl);
    }
  }, [debugUrl]);
}
