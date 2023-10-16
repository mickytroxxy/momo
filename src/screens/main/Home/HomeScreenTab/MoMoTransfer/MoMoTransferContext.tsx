import {useNavigation} from '@react-navigation/native';
import {Dispatch, ReactNode, createContext, useContext, useState} from 'react';

type transformDataType = {
  Amount: string;
  beneficiary: boolean;
  Number: string;
  schedulepayment: string;
  reason: string;
  setEndDate: boolean;
  'Start date': string;
  Repeat: string;
  end: string;
};

type MoMoTransferContextType = {
  step: number;
  finished: boolean;
  onHandleNext: () => void;
  onHandlePrevious: () => void;
  resetStep: () => void;
  setTransferFormData: Dispatch<React.SetStateAction<transformDataType | {}>>;
  setFinished: Dispatch<React.SetStateAction<boolean>>;
  transferFormData: transformDataType;
};

const MoMoTransferContext = createContext<MoMoTransferContextType>({
  step: 0,
  finished: false,
  onHandleNext: () => {},
  onHandlePrevious: () => {},
  resetStep: () => {},
  setTransferFormData: () => {},
  setFinished: () => {},
  transferFormData: {
    Amount: '',
    beneficiary: false,
    Number: '',
    schedulepayment: 'Yes',
    reason: '',
    setEndDate: false,
    Repeat: '',
    'Start date': '',
    end: '',
  },
});
 export const initialTransferFormState = {
  Amount: '',
  beneficiary: false,
  Number: '',
  schedulepayment: 'No',
  reason: '',
  Repeat: '',
  setEndDate: false,
  'Start date': '',
  end: '',
};

type MoMoTransferFormProviderType = {
  children: ReactNode;
};
export default function MoMoTransferFormProvider({
  children,
}: MoMoTransferFormProviderType) {
  const {goBack} = useNavigation();
  const [finished, setFinished] = useState(false);
  const [transferFormData, setTransferFormData] = useState<
    transformDataType | {}
  >(initialTransferFormState);
  const [step, setStep] = useState(0);
  const onHandleNext = () => {
    if (step >= 2) return;

    setStep((v: number) => v + 1);
  };
  const resetStep = () => {
    setStep(0);
  };
  const onHandlePrevious = () => {
    if (step === 0) {
      setTransferFormData({});
      goBack();
    }
    setStep((v: number) => v - 1);
  };

  return (
    <MoMoTransferContext.Provider
      value={{
        step,
        finished,
        setFinished,
        onHandleNext,
        onHandlePrevious,
        setTransferFormData,
        // @ts-ignore
        transferFormData,
        resetStep,
      }}>
      {children}
    </MoMoTransferContext.Provider>
  );
}

export function useTransferFormState() {
  return useContext(MoMoTransferContext);
}
