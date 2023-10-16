import {Images} from '@/constants/images';
import {
  cardsQrCodeBg,
  cardsQrCodeBorder,
  cardsQrCodeBorderRadius,
  cardsQrCodeFont1,
  cardsQrCodeFont2,
  cardsQrCodeFont3,
  cardsQrCodeStaticHeight,
  cardsQrCodeStaticWidth,
  cardsQrCodeTopMaring,
  cardsQrCodeWeight1,
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

type QrCodeStaticType = {
  ussd: string;
  merchantId: string;
  merchantName: string;
  value: string;
};
const QrCodeStatic = ({
  ussd,
  merchantId,
  merchantName,
  value,
}: QrCodeStaticType) => {
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

export default QrCodeStatic;

const styles = StyleSheet.create({
  qrcodecontainer: {
    maxHeight: gpsh(cardsQrCodeStaticHeight),
    width: gpsw(cardsQrCodeStaticWidth),
    backgroundColor: cardsQrCodeBg,
    borderRadius: gpsw(cardsQrCodeBorderRadius),
    paddingVertical: gpsh(cardsQrCodeTopMaring),
    gap: gsh(12),
    paddingHorizontal: gsw(31),
    borderColor: cardsQrCodeBorder.color,
    borderWidth: parseInt(cardsQrCodeBorder.width),
  },
  headerText: {
    fontFamily: fontFamily(cardsQrCodeWeight1),
    fontSize: gsw(24),
    lineHeight: gsh(31.2),
    textAlign: 'center',
    color: cardsQrCodeFont1,
  },
  dialText: {
    textAlign: 'center',
    fontFamily: fontFamily('Bold'),
    fontSize: gsw(20),
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
