import React from 'react';
import { Text, FlatList} from "react-native";
import { useSelector} from "react-redux";
import ProductItem from "../../components/shop/ProductItem";

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts);
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    price={itemData.item.price}
                    onViewDetail={() => {
                        props.navigation.navigate({routeName})
                    }}
                    onAddToCart={() => {}}
                />
            }
        />
    );

}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products',
}

export default ProductsOverviewScreen;