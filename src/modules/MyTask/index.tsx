import { EditableSelectWithAnt } from "./components/AntDesign";
import { EditableSelectRaw } from "./components/EditableSelect";
import { MyTaskContainer } from "./styles/MyTask";

export const MyTask = () => {
  return (
    <MyTaskContainer>
      <EditableSelectWithAnt />
      <EditableSelectRaw />
    </MyTaskContainer>
  );
};
