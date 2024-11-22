import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const ScrollableContent = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
  padding-bottom: 120px;
`;

export const PaginationContainer = styled.View`
  flex-direction: row;
  margin-bottom: 70px;
  padding: 10px;
  border-radius: 8px;
`;

export const PageButton = styled.TouchableOpacity<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? '#0F90D9' : '#f8f8f8')};
  padding: 8px 16px;
  border-radius: 5px;
  margin: 0 5px;
  border: ${({ isSelected }) => (isSelected ? 'none' : '1px solid #ccc')};
`;

export const PageButtonText = styled.Text<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? '#FFFFFF' : '#000')};
  font-size: 16px;
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
`;

export const NavigationButtons = styled.TouchableOpacity<{ disabled?: boolean }>`
  padding: 8px 16px;
  height: 40px;
  margin: 0 5px;
  border-radius: 5px;
  background-color: ${({ disabled }) => (disabled ? '#ddd' : '#0F90D9')};
`;

export const NavigationText = styled.Text<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#aaa' : '#fff')};
  font-size: 16px;
  font-weight: bold;
`;

export const FixedNavBar = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
  border-top-width: 1px;
  border-top-color: #ddd;
`;

export const FloatingAddButton = styled.TouchableOpacity`
  position: absolute;
  z-index: 10000;
  bottom: 130px;
  right: 12px;
  width: 75px;
  height: 75px;
  border-radius: 80px;
  background-color: #0F90D9;
  justify-content: center;
  align-items: center;
  elevation: 5;
`;

export const FloatingAddIcon = styled.Text`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
`;