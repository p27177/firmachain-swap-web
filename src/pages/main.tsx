import React, { useState } from "react";

import Header from "../organisms/header";
import Top from "../organisms/top";
import Intro from "../organisms/intro";
import Status from "../organisms/status";
import Footer from "../organisms/footer";
import Step from "../organisms/step";
import ResultOrder from "../organisms/resultOrder";

import { STEP_INTRO, STEP_STATUS, STEP_RESULT } from "../constants/main";

import { MainContainer } from "./styles";

interface IMainState {
  setStep: (value: number) => void;
  currentStep: number;
}

export const MainContext = React.createContext<IMainState>({
  setStep: () => {},
  currentStep: 0,
});

const Main = () => {
  const [currentStep, setStep] = useState(STEP_INTRO);

  return (
    <MainContext.Provider value={{ setStep, currentStep }}>
      <MainContainer>
        <Header />
        <Top />
        {currentStep === STEP_INTRO && <Intro />}
        {currentStep === STEP_STATUS && <Status />}
        {currentStep === STEP_RESULT && <ResultOrder />}
        {currentStep > STEP_INTRO && <Step />}
        <Footer />
      </MainContainer>
    </MainContext.Provider>
  );
};

export default React.memo(Main);
