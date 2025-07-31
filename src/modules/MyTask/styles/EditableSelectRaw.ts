import styled from "styled-components";

export const EditableSelectRawContainer = styled.div<{
  $showDropdown: boolean;
}>`
  gap: 8px;
  position: relative;
  .toggleIcon {
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer;
    font-size: 12px;
    user-select: none;
    color: #888;
    transform: ${({ $showDropdown }) =>
      $showDropdown ? "rotate(180deg)" : ""};
  }
  span {
    height: 32px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 30px;
    padding-inline-end: 8px;
  }
  .help {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.45);
    margin-inline-start: 40px;
    margin-bottom: 0;
  }
  .selectInput {
    width: 300px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
    &:hover {
      border: 1px solid #69b1ff;
    }
    &:focus {
      border: 1px solid #69b1ff;
      outline: none;
    }
  }
  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: #fff;
    border: 1px solid #ccc;
    border-top: none;
    z-index: 1000;
    max-height: 150px;
    width: 300px;
    overflow-y: auto;
    margin-block-start: -10px;
    margin-block-end: 0;
    padding-inline-start: 0;
    border-radius: 8px;

    li {
      padding: 8px !important;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      list-style: none;
    }
    .selected {
      background-color: #e6f4ff;
      font-weight: 600;
    }
  }
`;
