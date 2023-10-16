import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import {Button, Icon} from '@atom';
import {
  fontFamily,
  getFontSizeByWindowHeight as gsh,
  getFontSizeByWindowWidth as gsw,
} from '@/style/theme';
import RNFS from 'react-native-fs';

const FileUploader = () => {
  const [pickedDocument, setPickedDocument] = useState(null);
  const [downloadsFolder, setDownloadsFolder] = useState('');
  const [documentsFolder, setDocumentsFolder] = useState('');
  const [externalDirectory, setExternalDirectory] = useState('');
  useEffect(() => {
    //get user's file paths from react-native-fs
    setDownloadsFolder(RNFS.DownloadDirectoryPath);
    setDocumentsFolder(RNFS.DocumentDirectoryPath); //alternative to MainBundleDirectory.
    setExternalDirectory(RNFS.ExternalStorageDirectoryPath);
  }, []);

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.allFiles],
        // type: DocumentPicker.types.csv,
        // type: [
        //   DocumentPicker.types.images,
        //   DocumentPicker.types.pdf,
        //   DocumentPicker.types.plainText,
        //   DocumentPicker.types.video,
        //   DocumentPicker.types.csv,
        // ],
      });
      console.log('result', result);
      console.log(
        'URI: ' + result.uri,
        'Type: ' + result.type, // mime type
        'Name: ' + result.name,
        'Size: ' + result.size,
      );

      setPickedDocument(result);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // User cancelled the picker
      } else {
        throw err;
      }
    }
  };
  const upload = result => {
    const fileUri = result.uri;
    const filename = result.name;
    const filetype = result.type;
    const uploadUrl = 'http://requestb.in/requestbin-p_8rCGpVg'; // Replace with your actual upload endpoint

    const uploadBegin = response => {
      const jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    const uploadProgress = response => {
      const percentage = Math.floor(
        (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
      );
      console.log('UPLOAD IS ' + percentage + '% DONE!');
    };

    const uploadComplete = response => {
      console.log('UPLOAD IS COMPLETE!', response);
    };

    const uploadError = response => {
      console.log('UPLOAD ERROR:', response);
    };

    const options = {
      files: [
        {
          filename,
          filepath: RNFS.DownloadDirectoryPath + '/Book1.csv',
          filetype,
        },
      ],
      toUrl: 'https://eolklgu34tanw9q.m.pipedream.net',
      hostname: 'https://eolklgu34tanw9q.m.pipedream.net',
      //   hostname: 'eorld8vca5yxj8s.m.pipedream.net',
      port: 443,
      path: '/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      begin: uploadBegin,
      progress: uploadProgress,
    };

    RNFS.uploadFiles(options).promise.then(uploadComplete).catch(uploadError);
  };

  return (
    <View>
      {/* <Button label="Pick a Document" onPress={pickDocument} />
       */}
      <TouchableOpacity onPress={pickDocument} style={styles.uploadContainer}>
        <View>
          <Icon name="DocumentIcon" size={44} />
          <View
            style={{
              position: 'absolute',
              top: '30%',
              right: '-1%',
            }}>
            <Text style={styles.fileExtension}>CSV</Text>
          </View>
        </View>
        {pickedDocument ? (
          <Text style={styles.fileTitle}>{`${pickedDocument?.name}`}</Text>
        ) : (
          <Text style={styles.uploadText}>Choose a File</Text>
        )}
      </TouchableOpacity>

      <View style={{marginTop: 20}}>
        <Button onPress={() => upload(pickedDocument)} label="Upload" />
        {/* <Text> Downloads Folder: {downloadsFolder}</Text>
        <Text>Documents folder: {documentsFolder}</Text>
        <Text>External storage: {externalDirectory}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    borderRadius: 20,
    width: gsw(280),
    alignItems: 'center',
    gap: gsh(12),
    backgroundColor: 'white',
    paddingVertical: gsh(24),
  },
  fileExtension: {
    fontSize: gsw(12.7),
    lineHeight: gsh(16.5),
    color: '#004F71',
    fontFamily: fontFamily('Medium'),
  },
  uploadText: {
    fontSize: gsw(14.7),
    lineHeight: gsh(18.5),
    color: '#004F71',
    textDecorationLine: 'underline',
    fontFamily: fontFamily('Bold'),
  },
  fileTitle: {
    fontSize: gsw(14.7),
    lineHeight: gsh(18.5),
    fontFamily: fontFamily('Regular'),
  },
});

export default FileUploader;
