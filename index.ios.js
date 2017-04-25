import { AppRegistry } from 'react-native';

// @todo remove when RN upstream is fixed
console.ignoredYellowBox = ['Warning: Failed propType: SceneView'];

import lost_runner_client from './app';

AppRegistry.registerComponent('lost_runner_client', () => lost_runner_client);
