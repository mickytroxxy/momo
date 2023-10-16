import icon from '@/constants/icon';
import useDimension from '@/hooks/useDimension';
import {ReactNode} from 'react';
import Modal, { ModalProps } from 'react-native-modal';

type overlayType =  {
  open: boolean;
  setModalVisible: any;
  // children: (renderProps: any) => ReactNode;
  children: ReactNode;
  swipe?: boolean;
  transparent?: boolean;
  animationIn?: string
};

const Overlay = ({
  open,
  setModalVisible,
  children,
  swipe = false,
  transparent,
  animationIn = 'slideInUp',
  ...props
}: overlayType) => {
  return (
    <Modal
      onSwipeComplete={() => swipe && setModalVisible()}
      backdropOpacity={transparent ? 0 : undefined}
      style={{margin: 0}}
      swipeDirection={swipe ? 'down' : undefined}
      hideModalContentWhileAnimating={true}
      onBackdropPress={() => setModalVisible()}
      onBackButtonPress={() => swipe && setModalVisible()}
      isVisible={open}
      statusBarTranslucent
      // @ts-ignore
      animationIn={animationIn}
      // animationIn={'slideInUp'}
      {...props}
      >
      {/* {children({
        closeModal: () => setModalVisible(false),
      })} */}
      {children}
    </Modal>
  );
};

export default Overlay;
