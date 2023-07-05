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

const Invoice = () => {
    return (
      <View style={[styles.invoice_container]}>
        <View style={[styles.invoice_box]}>
          <Text style={[styles.invoice_no]}>No. #10</Text>
          <Text style={[styles.invoice_date]}>Mar 02, 2023</Text>
          <Text style={[styles.invoice_status]}>Saved</Text>
        </View>
        <View style={[styles.invoice_box_2]}>
          <Text style={[styles.invoice_text]}>Loreum Ipsum</Text>
          <Text style={[styles.invoice_price]}>₹100.0</Text>
          <Text style={[styles.invoice_due_date]}>Due in 4 days</Text>
        </View>
      </View>
    );
  };

  
const styles = StyleSheet.create({
    blue_circle:{
        position:'absolute',
        backgroundColor:'#1C85E8',
        top:0,
        zIndex:-1,
        width:'100%',
        height:100,
        borderBottomLeftRadius: 25,
         borderBottomRightRadius: 25
    },
  center_box: {
    position: 'relative',
    height: '100%',
    flex: 1,
    marginTop:0,
    alignContent: 'center',
    zIndex:10,
    backgroundColor:'#FFFFFF'
  },
  amount_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFFF',
    width:'95%',
    margin:10,
    borderRadius:15,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,

  },
  selected: {
    backgroundColor: '#BFD8FF',
  },
  amount_box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '181',
    height: '126',
    margin: 15,
    padding: 30,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
  },
  amount_box_2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '181',
    height: '126',
    margin: 15,
    padding: 30,
    borderRadius: 10,
  },
  amount_heading: {
    fontSize: 12,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#374767',
    marginBottom: 10,
  },
  amount_text: {
    fontSize: 25.5,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#374767',
  },
  invoice_headlines: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    margin: 20,
  },
  heading_text: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Open Sans',
    color: '#8F93A4',
  },
  heading_text_2: {
    fontSize: 16,
    fontWeight: 700,
    fontFamily: 'Open Sans',
    color: '#374767',
  },
  invoice_container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 3,
    borderColor: '#BFD8FF26',
    borderRadius: 10,
    padding: 10,
  },
  invoice_box: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  invoice_no: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#9497A6',
    marginBottom: 5,
  },
  invoice_due_date: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#9497A6',
    alignSelf: 'flex-end',
  },
  invoice_price: {
    fontSize: 15,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#374767',
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  invoice_text: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#9497A6',
    alignSelf: 'flex-end',
    marginBottom: 5,
  },
  invoice_date: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans',
    color: '#9497A6',
    marginBottom: 5,
  },
  create_invoice: {
    fontSize: 17,
    padding: 10,
    width: '100%',
    borderRadius: 20,
    fontWeight: 800,
    fontFamily: 'Open Sans',
    color: '#FFFFFF',
    backgroundColor: '#1C85E8',
    textAlign: 'center',
  },
  align_create_invoice: {
    width: '90%',
    position: 'sticky',
    margin: 20,
    bottom: 0,
  },
});

  export default Invoice;