import styled from "styled-components";

export const WelcomeToMyTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  height: calc(100vh);
  width: 100%;
  .welcomeMessage {
    font-size: 24px;
    font-weight: bold;
    color: #333;
  }
`;
