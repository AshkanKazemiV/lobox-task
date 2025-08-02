import { useState, useRef, useEffect, useMemo, KeyboardEvent } from "react";
import { useMyTask } from "../Context";
import { EditableSelectRawContainer } from "../styles/EditableSelectRaw";

export const EditableSelectRaw = () => {
  const {
    value: { data },
    dispatch: { setData },
  } = useMyTask();

  const [inputValue, setInputValue] = useState<string>("");
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);

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
    setIsTyping(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      const trimmed = inputValue.trim();
      const exists = data.some(
        (item) => item.name.toLowerCase().trim() === trimmed.toLowerCase()
      );
      if (!exists) {
        const newItem = { id: Date.now(), name: trimmed };
        setData((prev) => [...prev, newItem]);
        setInputValue("");
        setIsTyping(false);
      }
    }
  };

  const filteredData = useMemo(() => {
    if (isTyping && inputValue) {
      return data.filter((item) =>
        item.name.toLowerCase().trim().includes(inputValue.toLowerCase().trim())
      );
    }
    return data;
  }, [data, inputValue, isTyping]);

  return (
    <EditableSelectRawContainer ref={containerRef} $showDropdown={showDropdown}>
      <span>Raw:</span>
      <input
        type="text"
        placeholder="Select or type to add"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setIsTyping(true);
          setShowDropdown(true);
        }}
        onFocus={() => {
          setShowDropdown(true);
          setIsTyping(false);
        }}
        onKeyDown={handleKeyDown}
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
              className={`${item.name === inputValue ? "selected" : ""}`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </EditableSelectRawContainer>
  );
};
