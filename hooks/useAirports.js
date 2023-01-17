import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/flightSlice';

export default function useAirports({debouncedFrom, debouncedTo}) {
  const dispatch = useDispatch();

    const { data, error, isLoading } = useQuery(['airports', {debouncedFrom, debouncedTo }], async () => {
            try {
              if(debouncedFrom) {
                const res = await fetch(`http://192.168.1.172:3000/airports?searchTerm=${debouncedFrom}`);
                if (!res.ok) {
                  throw new Error(res.statusText);
                }
                const data = await res?.json();
                return {debouncedFrom: data, debouncedTo: null}
              }

              if(debouncedTo) {
                const res = await fetch(`http://192.168.1.172:3000/airports?searchTerm=${debouncedTo}`);
                if (!res.ok) {
                  throw new Error(res.statusText);
                }
                const data = await res?.json();
                return {debouncedTo: data, debouncedFrom: null}

              }
            } catch (err) {
                throw err;
            }
        },
        {
          refetchOnWindowFocus: false,
          refetchOnMount: false,
          refetchInterval: false,
          refetchIntervalInBackground: false,
          retry: false,
          staleTime: Infinity,
          cacheTime: Infinity,
          refetchOnReconnect: false,
          suspense: false,
          refetchOnChange: false,
          enabled: (!!debouncedFrom) || (!!debouncedTo)
        }
    );

    return { data  };
}
