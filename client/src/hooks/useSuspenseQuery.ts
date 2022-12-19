import {
  useQuery,
  QueryKey,
  UseQueryOptions,
  QueryFunction,
} from 'react-query';
import { useEffect, useState } from 'react';

const useSuspenseQuery = <
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
  TQueryKey extends QueryKey = QueryKey
>(
  queryKey: TQueryKey,
  queryFn: QueryFunction<TQueryFnData, TQueryKey>,
  defaultOptions?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    'queryKey' | 'queryFn'
  >
) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const options = {
    ...defaultOptions,
    enabled: (defaultOptions?.enabled ?? true) && mounted,
    suspense: true,
  };

  return useQuery(queryKey, queryFn, options);
};

export default useSuspenseQuery;
