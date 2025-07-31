import { MyTask } from "../../modules/MyTask";
import { MyTaskProvider } from "../../modules/MyTask/Context";

export const TaskPage = () => {
  return (
    <MyTaskProvider>
      <MyTask />
    </MyTaskProvider>
  );
};
