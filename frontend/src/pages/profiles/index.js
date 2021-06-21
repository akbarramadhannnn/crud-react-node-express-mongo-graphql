import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_PROFILES } from '../../GraphQL/Profiles/Queries';

const Index = () => {
  const { error, loading, data } = useQuery(LOAD_PROFILES);

  useEffect(() => {
    console.log('data', data);
    console.log('loading', loading);
    console.log('error', error);
  }, [data, loading, error]);

  return <h2>Profiles</h2>;
};

export default Index;
