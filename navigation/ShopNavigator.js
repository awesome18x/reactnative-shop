import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import { Platform} from "react-native";

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? '#C2185B' : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '#C2185B'
    }
});

export default createAppContainer(ProductsNavigator);