'use client';

import { useEffect, useState } from 'react';

import { Table } from '@components/server/Table';

import { ICommunity, TypeLoadParametrization } from './community.types';
import styles from './styles.module.scss';

export function Community() {
  console.log('Page Community');

  const [loadingState, setLoadingState] = useState<TypeLoadParametrization>('stand_by');
  const [communityListState, setCommunityListState] = useState<Array<ICommunity>>([]);

  const getCommunityData = async () => {
    setLoadingState('pending');

    try {
      const response = await fetch('http://localhost:4000/communities');
      const array: Array<ICommunity> = await response.json();
      setCommunityListState(array);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoadingState('done');
    }
  };

  useEffect(() => {
    getCommunityData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Table array={communityListState} isLoading={loadingState === 'pending'} />
    </div>
  );
}
