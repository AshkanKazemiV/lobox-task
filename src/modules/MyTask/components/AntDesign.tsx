import { Col, Row, Select, message } from "antd";
import { useState } from "react";
import { useMyTask } from "../Context";
import FormItem from "antd/es/form/FormItem";

export const EditableSelectWithAnt = () => {
  const {
    value: { data, loading },
    dispatch: { setData },
  } = useMyTask();

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
        (item) => item.name.toLowerCase() === searchValue.toLowerCase()
      );
      if (!exists) {
        const newItem = {
          id: Date.now(),
          name: searchValue,
        };
        setData((prev) => [...prev, newItem]);
        setSelectedItem(searchValue);
        message.success(`Added new item: ${searchValue}`);
      }
    }
  };

  return (
    <Row>
      <Col span={24}>
        <FormItem name="name" label="Ant Design">
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
              value: item.name,
            }))}
            onInputKeyDown={handleKeyDown}
            listHeight={150}
            suffixIcon={<img src="icon/dropdown.svg" alt="" />}
          />
        </FormItem>
      </Col>
    </Row>
  );
};
