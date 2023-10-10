'use client';

import { useEffect, useState } from 'react';

import { useMock } from 'src/mock';

import { Table } from '@components/server/Table';

import { ICommunity, TypeLoadParametrization } from './community.types';
import styles from './styles.module.scss';

export function Community() {
  console.log('Page Community');
  const { getCommunityMock } = useMock();

  const [loadingState, setLoadingState] = useState<TypeLoadParametrization>('stand_by');
  const [communityListState, setCommunityListState] = useState<Array<ICommunity>>([]);

  const getCommunityData = async () => {
    setLoadingState('pending');

    try {
      const response = await getCommunityMock();
      setCommunityListState(response);
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
