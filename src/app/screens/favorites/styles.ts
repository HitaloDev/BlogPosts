import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const ScrollableContent = styled.ScrollView`
  flex: 1;
  margin-top: 10px;
  padding-bottom: 60px;
`;

export const FixedNavBar = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #f8f8f8;
`;

export const FloatingImage = styled.Image`
  width: 90px;
  height: 90px;
  position: absolute;
  z-index: 1000;
  bottom: 70px;
  right: 5px;
`;
