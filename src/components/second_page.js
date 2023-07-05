import React from 'react';
import {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Create_invoice() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      style={[styles.center_box]}
      contentInsetAdjustmentBehavior="automatic">
      <StatusBar backgroundColor="#1C85E8" />
      <View style={[styles.detail_box]}>
        <Text style={[styles.detail_headline]}>Details</Text>
      </View>
      <View style={[styles.detail_box_2]}>
        <Text style={[styles.detail_no]}>No. #10</Text>
        <Text style={[styles.detail_date]}>Mar 02, 2023</Text>
        <Text style={[styles.detail_no]}>Due on Mar 09,2023</Text>
      </View>
      <View style={[styles.field_box]}>
        <Text style={[styles.detail_headline]}>Client</Text>
        <View style={[styles.detail_box_2_1]}>
          <Image source={require('../image/client_detail.png')} />
          <Text style={[styles.client_text]}>+ Add client detils</Text>
        </View>
      </View>
      <View style={[styles.field_box]}>
        <Text style={[styles.detail_headline]}>Items</Text>
        <View style={[styles.detail_box_2_1]}>
          <View style={[styles.items_img]}>
            <Image source={require('../image/add_items.png')} />
          </View>
          <Text style={[styles.client_text]}>+ Add Items</Text>
        </View>
      </View>
      <View style={[styles.field_box]}>
        <Text style={[styles.detail_headline]}>Total</Text>
      </View>
      <View style={[styles.detail_box_2_2]}>
        <View>
          <Text style={[styles.detail_no]}>Subtotal</Text>
          <Text style={[styles.detail_no]}>Tax</Text>
          <Text style={[styles.total]}>Total</Text>
        </View>
        <View>
          <Text style={[styles.total_amount]}>₹0.0</Text>
          <Text style={[styles.total_amount]}>₹0.0</Text>
          <Text style={[styles.total]}>₹0.0</Text>
        </View>
      </View>
      <View style={[styles.field_box]}>
        <Text style={[styles.detail_headline]}>Note</Text>
        <View style={[styles.detail_box_2_1]}>
          <Image source={require('../image/note.png')} />
          <Text style={[styles.client_text]}>+ Add note</Text>
        </View>
      </View>
      <View style={[styles.field_box]}>
        <Text style={[styles.detail_headline]}>Signature</Text>
        <View style={[styles.detail_box_2_1]}>
          <Image source={require('../image/signature.png')} />
          <Text style={[styles.client_text]}>+ Add Signature</Text>
        </View>
      </View>
      <View style={[styles.field_box]}>
        <Text style={[styles.detail_headline]}>Photo</Text>
        <View style={[styles.detail_box_2_1]}>
          <Image source={require('../image/photo.png')} />
          <Text style={[styles.client_text]}>+ Add photo</Text>
        </View>
      </View>
      <View style={[styles.buttons]}>
        <Text style={[styles.save_button]}>Save</Text>
        <Text style={[styles.share_button]}>Share</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  center_box: {
    height: '100%',
    margin: 10,
    flex: 1,
    overflow: 'scroll',
  },
  detail_box: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 20,
    marginBottom: 0,
  },
  detail_headline: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Open Sans',
    color: '#8F93A4',
  },
  detail_box_2: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: '#BFD8FF26',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  detail_no: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#9497A6',
  },
  total_amount: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#9497A6',
    textAlign: 'right',
  },
  detail_date: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Open Sans',
    color: '#374767',
  },
  field_box: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 20,
    marginBottom: 0,
    marginTop: 0,
  },
  client_text: {
    fontSize: 14,
    fontWeight: 700,
    fontFamily: 'Open Sans',
    color: '#374767',
    marginLeft: 10,
  },
  detail_box_2_1: {
    flex: 1,
    justifyContent: 'flex-start',
    margin: 0,
    padding: 10,
    borderWidth: 3,
    borderColor: '#BFD8FF26',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  items_img: {
    height: 35,
    width: 35,
    borderRadius: 50,
    backgroundColor: '#ECF3FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  total: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Open Sans',
    color: '#374767',
    marginTop: 10,
  },
  detail_box_2_2: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 20,
    padding: 10,
    borderWidth: 3,
    borderColor: '#BFD8FF26',
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttons: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    marginBottom: 0,
    marginTop: 0,
    flexDirection: 'row',
    width: '100%',
  },
  save_button: {
    fontSize: 17,
    fontWeight: 800,
    fontFamily: 'Open Sans',
    color: '#FFFFFF',
    flex: 1,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C85E8',
    textAlign: 'center',
    margin: 10,
    borderRadius: 10,
  },
  share_button: {
    color: '#1C85E8',

    borderWidth: 1,
    borderColor: '#1C85E8',

    fontSize: 17,
    fontWeight: 800,
    fontFamily: 'Open Sans',
    flex: 1,
    padding: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 10,
    borderRadius: 10,
  },
});

export default Create_invoice;
