import {Images} from '@/constants/images';
import {
  cardsQrCodeBg,
  cardsQrCodeBorder,
  cardsQrCodeBorderRadius,
  cardsQrCodeDynamicHeight,
  cardsQrCodeFont1,
  cardsQrCodeFont2,
  cardsQrCodeFont3,
  cardsQrCodeDynamicWidth,
  cardsQrCodeTopMaring,
  cardsQrCodeFontSize1,
  cardsQrCodeFontSize2,
} from '@/style-dictionary-dist/momoStyle';
import {
  fontFamily,
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import {gpsh, gpsw} from '@/utils/parseTokenStyle';
import {Icon} from '@atom';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type QrCodeDynamicType = {
  ussd: string;
  merchantId: string;
  merchantName: string;
  value: string
};

const QrCodeDynamic = ({ussd, merchantId, merchantName, value}: QrCodeDynamicType) => {
  return (
    <View style={styles.qrcodecontainer}>
      <Text style={styles.headerText}>Scan QR Code</Text>
      <View
        style={{
          height: gsw(200),
          width: gsw(180),
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <QRCode value={value} size={gsw(180)} />
      </View>

      <Text style={styles.dialText}>or dial {`${ussd}`}</Text>
      <View>
        <Text style={styles.merchatText}>Merchant ID:</Text>
        <Text style={styles.merchantValueText}>{merchantId}</Text>
      </View>
      <View>
        <Text style={styles.merchatText}>Merchant Name:</Text>
        <Text style={styles.merchantValueText}>{merchantName}</Text>
      </View>
      <View>
        <Text style={styles.merchatText}>Amount:</Text>
        <Text style={styles.merchantValueText}>GHc 7150</Text>
      </View>
      <View>
        <Text style={styles.merchatText}>Merchant Reference:</Text>
        <Text style={styles.merchantValueText}>Painting work</Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Icon name={'Share1Icon'} size={24} />
          <Text style={styles.buttonText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {}}>
          <Icon name={'DownloadIcon'} size={24} />
          <Text style={styles.buttonText}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QrCodeDynamic;

const styles = StyleSheet.create({
  qrcodecontainer: {
    maxHeight: gpsh(cardsQrCodeDynamicHeight),
    width: gpsw(cardsQrCodeDynamicWidth),
    backgroundColor: cardsQrCodeBg,
    borderRadius: gpsw(cardsQrCodeBorderRadius),
    paddingVertical: gpsh(cardsQrCodeTopMaring),
    gap: gsh(12),
    paddingHorizontal: gsw(31),
    borderColor: cardsQrCodeBorder.color,
    borderWidth: parseInt(cardsQrCodeBorder.width),
  },
  headerText: {
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw(cardsQrCodeFontSize1),
    lineHeight: gsh(31.2),
    textAlign: 'center',
    color: cardsQrCodeFont1,
  },
  dialText: {
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontSize: gpsw(cardsQrCodeFontSize2),
    lineHeight: gsh(26),
    color: cardsQrCodeFont1,
  },
  merchatText: {
    textAlign: 'center',
    fontFamily: fontFamily('Regular'),
    fontSize: gsw(14),
    lineHeight: gsh(18.2),
    color: cardsQrCodeFont3,
  },
  merchantValueText: {
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontSize: gsw(22),
    lineHeight: gsh(28.6),
    color: cardsQrCodeFont2,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: gsw(12),
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: gsw(14),
    lineHeight: gsh(18.2),
    color: cardsQrCodeFont1,
    fontFamily: fontFamily('Medium'),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
