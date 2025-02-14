import css from '../app/_styles';
import { useState, useEffect } from 'react'
import { GestureResponderEvent, View, Text } from 'react-native';
import Button from '@/components/Button';

export default function Loading() {
  const name = "Refresh" 
  const [scanRunning, setScanRunning] = useState<boolean>(false);
  const [scanPct, setScanPct] = useState<number>(100);
  const [lastScan, setLastScan] = useState<Date>();
  

  const initScan = (e:GestureResponderEvent) => {
    e.preventDefault();
    setScanPct(0);
    setScanRunning(true);
    setLastScan(new Date());
  }

  useEffect(() => {
    if(scanRunning && scanPct < 100) {
      setTimeout(() => {
        setScanPct(scanPct + 10);
      }, 200);
    }
  }, [scanRunning, scanPct]);

  return (
    <View>
      <View>
        <Button name={name} style={css.nav} onPress={(e) => initScan(e)} />      
      </View>
      
      <View>
        {lastScan && scanPct === 100 ? <Text style={css.text}>Last updated : {lastScan.toUTCString()}</Text> : null}
        {scanRunning && scanPct < 100 ? <Text style={css.text}>Loading ({scanPct}%)</Text> : null}
      </View>
    </View>
  )
}
