import React, { useState, useEffect, Fragment } from 'react';
import {
  StatusBar,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import Overlay from 'react-native-modal-overlay';

import config from '../../config';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { PickerModal } from '../components/PickerModal';
import { Button } from '../components/Button';


const styles = {
  overlayContainer: {
    justifyContent:'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  overlayChildren: {
    padding: 0,
    borderRadius: 10
  },
  scrollView: {
    width: '100%',
    height: '100%',
  },
  scrollViewChildren: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  KeyboardAvoid: {
    flex: 1,
  }
};

// const API_BASE = "https://free.currconv.com";
// const CONVERTER_KEY = "746e553f27ff328d623d";
const COUNTRIES_URL = `${config.API_BASE}/api/v7/countries?apiKey=${config.CONVERTER_KEY}`;


const Home = () => {
  const isAndroid = Platform.OS === 'android';
  const behavior = isAndroid ? false : 'padding';
  const [currencies, setCurrencies] = useState(null);
  const [modal, setModal] = useState({ show: false, for: null });
  const [currencyAttr, setCurrencyAttr] = useState({
    baseCurrency: "USD",
    targetCurrency: "GBP",
    baseAmount: null,
    targetAmount: null,
  });

  const toggleModal = (attr = null) => () => {
    setModal({ show: !modal.show, for: attr });
  };

  const setCurrency = type => details => {
    const attrCopy = JSON.parse(JSON.stringify(currencyAttr));
    attrCopy[type] = details;
    setCurrencyAttr(attrCopy);
  };

  const handleConversion = (baseAmount, rate) => {
    let total = parseFloat(baseAmount) * parseFloat(rate);
    total = Math.round(total * 100) / 100;
    return total;
  };

  const convertCurrency = (base, target) => {
    const baseTarget = `${base}_${target}`;
    const url = `${config.API_BASE}/api/v7/convert?q=${baseTarget}&compact=ultra&apiKey=${config.CONVERTER_KEY}`;
    fetch(url)
      .then(response => response.json())
      .then(respObject => {
        const rate = respObject[baseTarget];
        setCurrency("targetAmount")(
          handleConversion(currencyAttr.baseAmount, rate)
        );
      })
      .catch();
  };

  useEffect(() => {
    fetch(COUNTRIES_URL)
      .then(response => response.json())
      .then(responseJson => {
        const formatResponse = [];
        for (let curr in responseJson.results) {
          if (responseJson.results.hasOwnProperty(curr)) {
            let found = formatResponse.find(
              item => item.currencyId === responseJson.results[curr].currencyId
            );
            if (!found) {
              formatResponse.push(responseJson.results[curr]);
            }
          }
        }
        setCurrencies(formatResponse);
      })
      .catch(error => error);
  }, []);

  return (
    <Container>
      <StatusBar translucent={false} barStyle="light-content" />
      <KeyboardAvoidingView
        enabled
        behavior={behavior}
        style={styles.KeyboardAvoid}
      >
        <ScrollView
          keyboardDismissMode={'on-drag'}
          keyboardShouldPersistTaps="handled"
          bounces={false}
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewChildren}
        >
          <Fragment>
            <Logo />
            <InputWithButton
              editable
              keyboardType="numeric"
              baseCurrency={currencyAttr.baseCurrency}
              onBaseValueChange={setCurrency("baseAmount")}
              baseValue={currencyAttr.baseAmount}
              underlineColorAndroid="transparent"
              onBasePress={toggleModal('baseCurrency')} // setCurrency('baseCurrency')
            />
            <InputWithButton
              keyboardType="numeric"
              targetCurrency={currencyAttr.targetCurrency}
              targetValue={currencyAttr.targetAmount}
              underlineColorAndroid="transparent"
              onTargetPress={toggleModal('targetCurrency')} // setCurrency('targetCurrency')
            />
            <Button
              onPress={() =>
                convertCurrency(
                  currencyAttr.baseCurrency,
                  currencyAttr.targetCurrency
                )
              }
            />
            <Overlay
              visible={modal.show}
              onClose={() => {
                if (modal.show) {
                  toggleModal()();
                }
              }}
              closeOnTouchOutside
              containerStyle={styles.overlayContainer}
              childrenWrapperStyle={styles.overlayChildren}
            >
              <PickerModal
                pickerValues={currencies}
                transparent={false}
                animationType="fade"
                selectCurrency={setCurrency(modal.for)}
                which={modal.for}
                currencyAttribute={currencyAttr}
              />
            </Overlay>
          </Fragment>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};

export default Home;
