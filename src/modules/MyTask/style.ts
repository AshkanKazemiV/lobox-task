import styled from "styled-components";

export const MyTaskContainer = styled.div`
  margin: 200px 0 0;
  display: flex;
  justify-content: center;
  align-items: start;
  gap: 24px;
  /* flex-direction: column; */
  width: calc(100vw);
  height: calc(100vh - 200px);
`;

export const EditableSelectRawContainer = styled.div<{
  $showDropdown: boolean;
}>`
  gap: 8px;
  /* width: 300px; */
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
    width: 317px;
    overflow-y: auto;
    margin-block-start: 2px;
    margin-block-end: 0;
    padding-inline-start: 0;
    border-radius: 8px;

    li {
      padding: 8px !important;
      cursor: pointer;
      border-bottom: 1px solid #ccc;
      list-style: none;
    }
  }
`;
