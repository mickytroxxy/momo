import {Images} from '@/constants/images';
import {
  cardsQrCodeBg,
  cardsQrCodeFont1,
  cardsQrCodeFont2,
  cardsQrCodeFont3,
  cardsQrCodeStickerBorder,
  cardsQrCodeStickerBorderRadius,
  cardsQrCodeStickerHeight,
  cardsQrCodeStickerLeftMargin,
  cardsQrCodeStickerTopMargin,
  cardsQrCodeStickerWidth,
} from '@/style-dictionary-dist/momoStyle';
import {
  fontFamily,
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const {QrLogo} = Images;

type QrCodeStickerType = {
  merchantId: string;
  merchantName: string;
  value: string;
};
const QrCodeSticker = ({merchantId, merchantName, value}: QrCodeStickerType) => {
  return (
    <View style={styles.qrcodecontainer}>
      <Text style={styles.headerText}>{merchantName}</Text>
      <View
        style={{
          height: gsw(112),
          width: gsw(112),
          alignSelf: 'center',
          //   gap: gsh(9.6),
        }}>
        <QRCode
          color="#004f71"
          value={value}
          size={gsw(112)}
          logo={QrLogo}
          logoSize={gsw(30)}
          logoBackgroundColor="white"
        />
      </View>
      <View>
        <Text style={styles.merchatText}>Merchant ID:</Text>
        <Text style={styles.merchantValueText}>{merchantId}</Text>
      </View>
    </View>
  );
};

export default QrCodeSticker;

const styles = StyleSheet.create({
  qrcodecontainer: {
    maxHeight: gpsh(cardsQrCodeStickerHeight),
    width: gpsw(cardsQrCodeStickerWidth),
    backgroundColor: cardsQrCodeBg,
    borderRadius: gpsw(cardsQrCodeStickerBorderRadius),
    paddingVertical: gpsh(cardsQrCodeStickerTopMargin),
    gap: gsh(12),
    paddingHorizontal: gpsw(cardsQrCodeStickerLeftMargin),
    borderColor: cardsQrCodeStickerBorder.color,
    borderWidth: parseInt(cardsQrCodeStickerBorder.width),
  },
  headerText: {
    fontFamily: fontFamily('Bold'),
    fontSize: gsw(16),
    lineHeight: gsh(20.8),
    textAlign: 'center',
    color: cardsQrCodeFont3,
  },
  merchatText: {
    textAlign: 'center',
    fontFamily: fontFamily('Regular'),
    fontSize: gsw(11),
    lineHeight: gsh(14.2),
    color: cardsQrCodeFont3,
  },
  merchantValueText: {
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontSize: gsw(19),
    lineHeight: gsh(24.7),
    color: cardsQrCodeFont3,
  },
});
