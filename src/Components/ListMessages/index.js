import React, {useMemo} from 'react';

import auth from '@react-native-firebase/auth';

import {
  MessageSystemContainer,
  MessageSystem,
  MyMessageContainer,
  MyMessage,
  MessageOtherContainer,
  NameOther,
  MessageOther,
  DateMessage,
} from './styles';

export default function ListMessages({data}) {
  const user = auth().currentUser.toJSON();

  const isMyMessage = useMemo(() => {
    return data?.user?._id === user.uid;
  }, [data]);

  const timeStamp = data?.createdAt?.seconds;
  const date = new Date(timeStamp * 1000);
  const formatDate =
    date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

  return (
    <>
      {data.system === true ? (
        <MessageSystemContainer>
          <MessageSystem>{data?.text}</MessageSystem>
        </MessageSystemContainer>
      ) : isMyMessage ? (
        <MyMessageContainer>
          <DateMessage>{formatDate}</DateMessage>
          <MyMessage>{data?.text}</MyMessage>
        </MyMessageContainer>
      ) : (
        <MessageOtherContainer>
          <DateMessage>{formatDate}</DateMessage>
          <NameOther>{data?.user?.displayName}</NameOther>
          <MessageOther>{data?.text}</MessageOther>
        </MessageOtherContainer>
      )}
    </>
  );
}
