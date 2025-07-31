import { Link } from "react-router-dom";
import { WelcomeToMyTaskContainer } from "./style";
import { Routes } from "../../routes/urls";
import { FC } from "react";

export const WelcomeToMyTask: FC = () => {
  return (
    <WelcomeToMyTaskContainer>
      <p className="welcomeMessage">Welcome To My Technical Assignment!</p>
      <p className="description">Ashkan Kazemi</p>
      <Link to={Routes.task}>See my task</Link>
    </WelcomeToMyTaskContainer>
  );
};
