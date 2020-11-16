import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native'
import App from './App'
import {name as appName} from './app.json'
import { NavigationContainer } from '@react-navigation/native';

function AppEntry(){
    <NavigationContainer>
        <App />
    </NavigationContainer>
}

AppRegistry.registerComponent(appName, () => AppEntry)
