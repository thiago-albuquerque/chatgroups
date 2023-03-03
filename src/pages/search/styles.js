import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 8px 0;
  background: #010b1a;
`;
export const SearchContainer = styled.View`
  width: 96%;
  max-width: 500px;
  margin: 8px 0 16px 0;
`;
export const InputLabel = styled.Text`
  width: 100%;
  font-size: 12px;
  color: #aaa;
  margin: 0 0 4px 0;
`;
export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0;
`;
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #666;
  border-radius: 24px;
  background: #fff;
  padding: 8px 16px;
  margin: 0 4px 0 0;
`;
export const Button = styled.TouchableOpacity`
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: #13b8a7;
  padding: 8px;
`;
