import { StyleSheet, Appearance } from 'react-native';
import {useTheme} from '@/hooks/useTheme';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import HomeHeader from '@/components/HomeHeader';

export default function TabOneScreen() {
  return (
    <View style={styles.root}>
      <HomeHeader>

      </HomeHeader>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  }
});
