import styled from 'styled-components/native';

export const Container = styled.View`
  width: 96%;
  max-width: 500px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #13b8a7;
  border-radius: 15px;
  padding: 8px;
  margin: 8px 0 16px 0;
`;
export const SearchButton = styled.TouchableOpacity`
  padding: 4px;
`;
export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #fff;
`;
export const SignOutButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 4px;
`;
