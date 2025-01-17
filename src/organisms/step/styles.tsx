import styled, { keyframes } from "styled-components";

const slidein = keyframes`
from {
  margin-left: 100%;
}
to {
  margin-left: 0%;
}
`;

export const LoadingWrapper = styled.div<{ active: boolean }>`
  position: absolute;
  top: 0;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: #000000bf;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.active ? `` : `display:none`)}
`;

export const StepWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  margin-bottom: 30px;
`;

export const StepList = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
`;

export const Step = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  animation: ${slidein} 0.2s;
`;

export const BigLabel = styled.div`
  width: 100%;
  font-size: 16px;
  margin-bottom: 5px;
  color: #eee;
`;

export const Label = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  margin-bottom: 5px;
  color: #999;
`;

export const TermText = styled.div`
  width: calc(100% - 22px);
  height: 200px;
  border: 1px solid #888;
  line-height: 25px;
  padding: 10px;
  color: #808080;
  overflow-y: scroll;
`;

export const NextButton = styled.div<{ active: boolean }>`
  width: 144px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin: 20px auto 0 auto;
  color: white;
  font-size: 14px;
  background-color: #3550de;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Chakra" !important;
  ${(props) => (props.active ? `` : `background-color: #444;color:#777`)}
`;

export const BackButton = styled.div<{ active: boolean }>`
  width: 144px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  margin: 14px auto 0 auto;
  color: white;
  font-size: 14px;
  background-color: #3550de80;
  border-radius: 20px;
  cursor: pointer;
  font-family: "Chakra" !important;
  ${(props) => (props.active ? `` : `background-color: #444;color:#777`)}
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  &:first-child {
    & > div {
    }
  }
`;

export const InputBoxDefault = styled.input`
  width: calc(100% - 24px);
  height: 30px;
  line-height: 30px;
  margin: 0;
  padding: 0 10px;
  color: white;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #555;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const NotiCard = styled.div`
  width: calc(100% - 20px);
  line-height: 30px;
  padding: 3px 10px;
  margin: 10px 0 0 0;
  color: #47ec9faa;
  font-size: 12px;
  background-color: none;
  border: 1px solid #47ec9fcc;
  border-radius: 4px;
`;

export const Card = styled.div`
  width: calc(100% - 24px);
  display: flex;
  flex-direction: column;
  gap: 15px 0;
  padding: 12px;
`;

export const InputTypo = styled.div`
  color: #eee;
  margin-bottom: 2px;
`;
