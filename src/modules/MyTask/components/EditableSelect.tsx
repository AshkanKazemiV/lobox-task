import { useState, useRef, useEffect } from "react";
import { useMyTask } from "../Context";
import { EditableSelectRawContainer } from "../styles/EditableSelectRaw";

export const EditableSelectRaw = () => {
  const {
    value: { data },
    dispatch: { setData },
  } = useMyTask();

  const [inputValue, setInputValue] = useState<string>("");

  const [showDropdown, setShowDropdown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleSelect = (name: string) => {
    setInputValue(name);
    setShowDropdown(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const exists = data.some(
        (item) => item.name.toLowerCase() === inputValue.toLowerCase()
      );
      if (!exists) {
        const newItem = {
          id: Date.now(),
          name: inputValue.trim(),
        };
        setData((prev) => [...prev, newItem]);
        setInputValue(inputValue.trim());
        setShowDropdown(false);
      }
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <EditableSelectRawContainer ref={containerRef} $showDropdown={showDropdown}>
      <span>Raw:</span>
      <input
        type="text"
        placeholder="Select or type to add"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setShowDropdown(true);
        }}
        onKeyDown={handleKeyDown}
        onFocus={() => setShowDropdown(true)}
        className="selectInput"
      />
      <p className="help">
        Type a new value and press Enter to add it to the list.
      </p>
      <img src="icon/dropdown.svg" alt="" className="toggleIcon" />
      {showDropdown && filteredData.length > 0 && (
        <ul className="dropdown">
          {filteredData.map((item) => (
            <li
              key={item.id}
              onClick={() => handleSelect(item.name)}
              className="dropdownItems"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </EditableSelectRawContainer>
  );
};
