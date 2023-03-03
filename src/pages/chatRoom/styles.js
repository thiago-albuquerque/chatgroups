import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #1e2938;
`;
export const ImageBg = styled.ImageBackground`
  flex: 1;
  align-items: center;
`;
export const InputContainer = styled.View`
  width: 96%;
  max-width: 500px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 8px 0;
`;
export const Input = styled.TextInput`
  flex: 1;
  max-height: 100px;
  min-height: 50px;
  font-size: 16px;
  background: #fff;
  border-radius: 25px;
  padding: 0 16px;
  margin: 0 4px 0 0;
`;
export const SendButton = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background: #13b8a7;
  border-radius: 25px;
  padding: 8px;
`;
