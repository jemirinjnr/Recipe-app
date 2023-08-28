import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const Detail = ({ }) => {
    const [text, setText] = useState('');
    const router = useRouter();
    return (
        <View style={styles.container}>
            <SafeAreaView style={{ backgroundColor: '#F9F8F6' }}>
                <Text style={{ fontSize: 25, fontWeight: '600', alignSelf: "center" }}>Mushrooms</Text>
            </SafeAreaView>
            <View style={{ backgroundColor: '#F9F8F6' }}>
                <Image source={require("../assets/images/image.png")} style={{
                    alignSelf: "center", width: 350, height: 350, borderRadius: 300,
                }} />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <View style={{ marginLeft: 100, borderTopLeftRadius: 20, borderBottomLeftRadius: 20, backgroundColor: "#FF6B00", width: "10%", height: 40 }}>
                    <Text style={{ color: 'white', fontSize: 30, alignSelf: 'center' }}>-</Text>
                    <View style={{ marginLeft: 50 }}>
                        <TextInput>1</TextInput>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },
}
);

export default Detail;