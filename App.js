import React from 'react';
import styled from 'styled-components/native';

const StyledView = styled.View`
  flex: 1;
  background-color: #eee;
  align-items: center;
  justify-content: center;
`;

const StyledText = styled.Text`
  color: #55f;
  font-size: ${props => props.highlight ? '16px' : '12px'};
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
`;
const StyledSlider = styled.Slider`
  width: 100%;
  position: absolute;
  top: 40px;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <StyledText highlight={true}>Open up App.js to start working on your app!</StyledText>
        <StyledText>Changes you make will automatically reload.</StyledText>
        <StyledText>Shake your phone to open the developer menu.</StyledText>
        <StyledTextInput/>
        <StyledSlider/>
      </StyledView>
    );
  }
}
