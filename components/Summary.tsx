import { View, Text, StyleSheet } from "react-native";

const Summary = () => {
    return (
            <View style={{ flexDirection: 'row', height:130, justifyContent: 'space-between' }}>
                <View style={[styles.supplement, { backgroundColor: '#FF6B03', }]}>
                    <Text style={{ fontSize: 13, marginVertical: 10.0, color: 'white' }}>Carbs</Text>
                    <View style={styles.textView}>
                        <Text style={{ color: "#FE8A3D" }}>45%</Text>
                    </View>
                </View>
                <View style={[styles.supplement, { backgroundColor: '#EC940D', }]}>
                    <Text style={{ fontSize: 13, marginVertical: 10.0, color: 'white' }}>Protein</Text>
                    <View style={[styles.textView, { backgroundColor: '#FFE5CA' }]}>
                        <Text style={{ color: "#FE8A3D" }}>35%</Text>
                    </View>
                </View>
                <View style={[styles.supplement, { backgroundColor: '#CE0002', }]}>
                    <Text style={{ fontSize: 13, marginVertical: 10.0, color: 'white' }}>Fat</Text>
                    <View style={styles.textView}>
                        <Text style={{ color: "#FE8A3D" }}>20%</Text>
                    </View>
                </View>
            </View>


    );
};

const styles = StyleSheet.create({
    supplement: {
        height: 40,
        flex: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 15,
        alignItems: "center",
        backgroundColor: '#FF6B03',
        flexDirection: 'column',
        marginRight: 20,
    },
    textView: {
        width: '100%',
        height: 40,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#FEE3E2',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default Summary;