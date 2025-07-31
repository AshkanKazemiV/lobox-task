import { App, Col, Select } from "antd";
import { useState } from "react";
import FormItem from "antd/es/form/FormItem";
import { useMyTask } from "../Context";
import { EditableSelectWithAntContainer } from "../styles/EditableSelectWithAnt";

export const EditableSelectWithAnt = () => {
  const {
    value: { data, loading },
    dispatch: { setData },
  } = useMyTask();

  const { message } = App.useApp();

  const [selectedItem, setSelectedItem] = useState<string | undefined>(
    undefined
  );

  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedItem(value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue) {
      const exists = data.some(
        (item) => item.name.toLowerCase().trim() === searchValue.toLowerCase()
      );
      if (!exists) {
        const newItem = {
          id: Date.now(),
          name: searchValue,
        };
        setData((prev) => [...prev, newItem]);
        setSelectedItem(searchValue);
      }
    }
  };

  return (
    <EditableSelectWithAntContainer>
      <Col span={24}>
        <FormItem
          name="name"
          label="Ant Design"
          help="Type a new value and press Enter to add it to the list."
        >
          <Select
            style={{ width: 300 }}
            showSearch
            allowClear
            loading={loading}
            placeholder="Select or type to add"
            value={selectedItem}
            onChange={handleChange}
            onSearch={(val) => setSearchValue(val)}
            filterOption={(input, option) =>
              (option?.label as string)
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            options={data.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            onInputKeyDown={handleKeyDown}
            listHeight={150}
            suffixIcon={<img src="icon/dropdown.svg" alt="" />}
          />
        </FormItem>
      </Col>
    </EditableSelectWithAntContainer>
  );
};
