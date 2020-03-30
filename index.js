/* eslint-disable import/no-unresolved */
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App);
