import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 15px;
  background: #364152;
  margin: 0 0 8px 0;
`;
export const TitleContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;
export const NameButton = styled.TouchableOpacity`
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;
export const NameGroup = styled.Text`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #13b8a7;
  margin: 0 0 4px 0;
`;
export const DeleteButton = styled.TouchableOpacity`
  width: 40px;
  height: 70px;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  background: #e0264a;
`;
export const LastMessage = styled.Text`
  width: 100%;
  color: #aaa;
`;
