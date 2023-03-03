import styled from 'styled-components/native';

export const MyMessageContainer = styled.View`
  background: #13b8a7;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 16px;
  padding: 16px 8px;
  margin: 0 0 8px 24px;
`;
export const MyMessage = styled.Text`
  color: #fff;
`;
export const MessageSystemContainer = styled.View`
  align-items: center;
  background: #115f59;
  border-radius: 4px;
  padding: 8px;
  margin: 0 0 24px 0;
`;
export const MessageSystem = styled.Text`
  font-weight: bold;
  color: #fff;
`;
export const MessageOtherContainer = styled.View`
  background: #364152;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border-bottom-left-radius: 0;
  padding: 16px 8px;
  margin: 0 24px 8px 0;
`;
export const NameOther = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #13b8a7;
`;
export const MessageOther = styled.Text`
  color: #fff;
`;
export const DateMessage = styled.Text`
  font-size: 12px;
  text-align: right;
  color: #fff;
`;
