import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileCard() {
    return (
        <View style={styles.card}>
            <Image
                source={{uri:'https://th.bing.com/th/id/R.5e9c90ee9416c76703ac1bfc32665e14?rik=Ms2DxArEL1xfCg&riu=http%3a%2f%2f78.media.tumblr.com%2f4ef4b9ec185e9100bc59a578eede4c3c%2ftumblr_p7cl0wAtFd1rnbh24o1_540.gif&ehk=v3tiJ78D62bZHrckRi1QhEjRyoSx1BJNqhNhXJcqHtk%3d&risl=&pid=ImgRaw&r=0'}}
                style={styles.profileImage}
                />
            <Text style={styles.name}>Hernando Silva</Text>
            <Text style={styles.description}>
                Desenvolvedor de Software que não gosta de front-end
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        margin: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 15,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
})