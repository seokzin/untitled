import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Card, Spinner } from '@/components';
import styled from 'styled-components';
import { getPlayListSelector } from '@/features/videoSlice';

const PlayList = () => {
  const playList = useSelector(getPlayListSelector);

  return (
    <>
      <Title>Playlist</Title>

      {playList?.map((item, index) => (
        <Card data={item} key={index} />
      ))}
    </>
  );
};

const Title = styled.h1`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 1rem;
`;

export default PlayList;
