import { StyleSheet, Image, Pressable } from 'react-native';
import { Text, View } from '@/components/Themed';
import Pizzacolumn from '@/components/Pizzacolumn';
import Summary from '@/components/Summary';
import { Link } from 'expo-router';

export default function TabOneScreen() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Mushrooms</Text>
        </View>
        <View style={{ marginTop: 60, marginLeft: 20 }}>
          <Text style={{ fontSize: 28, color: '#FF6B00', fontWeight: '700' }}>$12.00 </Text>
          <Text style={{ marginTop: 50, fontWeight: '500', fontSize: 22 }}>mushrooms</Text>
          <View style={{}}>
            <Pizzacolumn />
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Fruit Summary</Text>
            <Summary />
          </View>
          <Pressable style={styles.orderbtn}>
            <Link href= '/detail' asChild>
              <Text style={styles.order}>Please Order</Text>
            </Link>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  title: {
    marginLeft: 20,
    marginTop: 20,
    fontSize: 25,
    fontWeight: '600',
  },
  body: {
    fontSize: 17
  },
  orderbtn: {
    marginLeft: 20,
    height: 50,
    width: 350,
    backgroundColor: '#FF6B03',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  order: {
    fontSize: 15,
    marginTop: 15,
    color: 'white',
  },
});
