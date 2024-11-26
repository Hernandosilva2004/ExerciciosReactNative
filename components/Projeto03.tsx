import React
import {View, Text, Image, StyleSheet, Button} from "react-native";

export default function ProductCard(){
    return (
        <View style={styles.card}>
            <Image 
            source={{ uri: 'https://static.netshoes.com.br/produtos/creatina-reload-hardcore-150g-integralmedica/01/252-7329-001/252-7329-001_zoom1.jpg'}}
            />
            <Text style={styles.productName}>Produto Exemplo</Text>
            <Text style={styles.productPrice}>R$ 79,99</Text>
            <Button title="Comprar" onPress={() => alert('Produto adicionado ao carrinho')} />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset
    }
})