import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { MyTaskService } from "../../../services/MyTask/MyTaskService";
import { IGetData } from "../../../services/MyTask/Models";

interface ICtx {
  value: { data: IGetData[]; loading: boolean };
  dispatch: {
    setData: Dispatch<SetStateAction<IGetData[]>>;
    setLoading: Dispatch<SetStateAction<boolean>>;
  };
  func: {};
}

export const MyTaskContext = createContext<ICtx | undefined>(undefined);

export const MyTaskProvider: FC<PropsWithChildren> = ({ children }) => {
  //------------------------------------ state --------------------------------

  const [data, setData] = useState<IGetData[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  //-------------------------------------- func --------------------------------

  const getData = async () => {
    setLoading(true);
    try {
      const { GetData } = new MyTaskService();

      const res = await GetData();

      if (res && res.data) {
        setData(res.data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  //------------------------------------ effect --------------------------------

  useEffect(() => {
    getData();
  }, []);

  const defaultValue: ICtx = {
    value: { data, loading },
    dispatch: { setData, setLoading },
    func: {},
  };

  return (
    <MyTaskContext.Provider value={defaultValue}>
      {children}
    </MyTaskContext.Provider>
  );
};

export const useMyTask = () => {
  const data = useContext(MyTaskContext);
  if (data) return data;
  else throw new Error("MyTask provider does not exist");
};
