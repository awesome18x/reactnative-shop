import React from 'react';
import {
    ScrollView,
    View, Text, Image, Button, StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state => 
        state.products.availableProducts.find(prod => prod.id === productId)
    );
    // props.navigation.setParam('')
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }}/>
            <View style={styles.action}>
                <Button color={'red'}title="Add to cart" />
            </View>
            <Text style={styles.price} >${selectedProduct.price.toFixed(2)} </Text>
            <Text style={styles.description}> {selectedProduct.description} </Text>
        </ScrollView>
    );

    
};


ProductDetailScreen.navigationOptions = ({ navigation }) => {
    return {
        headerTitle: navigation.getParam('productTitle')
    };
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    action: {
        marginVertical: 20,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        textAlign: 'center'
    }
});

export default ProductDetailScreen;