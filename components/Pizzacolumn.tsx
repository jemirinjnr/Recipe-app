import { View, Text, StyleSheet, Image } from "react-native";

const Pizzacolumn = ({ }) => {
    return (
        <>
            <View style={{ marginLeft: 15, marginTop: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ color: 'gray' }}>Size</Text>
                        <Text style={styles.body}>Medium 12"</Text>
                        <Text style={{ color: 'gray', marginTop: 20 }}>Crust</Text>
                        <Text style={styles.body}>Thin Crust</Text>
                        <Text style={{ color: 'gray', marginTop: 20 }}>Size</Text>
                        <Text style={styles.body}>20Min...</Text>
                    </View>
                    <Image source={require("../assets/images/image.png")} style={{
                        flexDirection: 'row',
                        alignSelf: 'flex-end',
                    }} />
                </View>

            </View>
        </>
    );
};


const styles = StyleSheet.create({
    body: {
        fontSize: 17
    },
});

export default Pizzacolumn;