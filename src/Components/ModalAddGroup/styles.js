import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 8px 0;
  background: #010b1a;
`;
export const BackButton = styled.TouchableOpacity`
  width: 96%;
  max-width: 500px;
  align-items: flex-start;
  height: 32px;
  margin: 16px 0 24px 0;
`;
export const TitleModal = styled.Text`
  width: 96%;
  max-width: 500px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
  margin: 0 0 16px 0;
`;
export const InputLabel = styled.Text`
  width: 96%;
  max-width: 500px;
  font-size: 12px;
  color: #aaa;
  margin: 0 0 4px 0;
`;
export const ModalInput = styled.TextInput`
  width: 96%;
  max-width: 500px;
  font-size: 16px;
  color: #666;
  border: 1px solid #aaa;
  border-radius: 8px;
  background: #fff;
  padding: 8px 16px;
  margin: 0 0 16px 0;
`;
export const CreateRoomButton = styled.TouchableOpacity`
  width: 96%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #13b8a7;
  padding: 8px 16px;
  margin: 8px 0;
`;
export const CreateRoomText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
