import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: #010b1a;
`;
export const Logo = styled.Image`
  width: 120px;
  height: 120px;
  margin: 24px 0 8px 0;
`;
export const Title = styled.Text`
  font-size: 24px;
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
export const Input = styled.TextInput`
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
export const Button = styled.TouchableOpacity`
  width: 95%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #13b8a7;
  padding: 8px 16px;
  margin: 8px 0;
`;
export const ButtonText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
export const SignUpButton = styled.TouchableOpacity`
  width: 96%;
  max-width: 500px;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin: 0 0 24px 0;
`;
export const SignUpText = styled.Text`
  font-size: 12px;
  color: #fff;
`;
export const SignUpTextBold = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #13b8a7;
`;
