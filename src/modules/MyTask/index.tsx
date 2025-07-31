import { EditableSelectWithAnt } from "./components/AntDesign";
import { EditableSelectRaw } from "./components/EditableSelect";
import { MyTaskContainer } from "./style";

export const MyTask = () => {
  return (
    <MyTaskContainer>
      <EditableSelectWithAnt />
      <EditableSelectRaw />
    </MyTaskContainer>
  );
};
