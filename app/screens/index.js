import { Navigation } from 'react-native-navigation';

import TopTabs from './TopTabs';
import TabOne from './TabOne';
import TabTwo from './TabTwo';

export function registerScreens() {
	Navigation.registerComponent('testApp.TopTabs', TopTabs);
	Navigation.registerComponent('testApp.TabOne', TabOne);
	Navigation.registerComponent('testApp.TabTwo', TabTwo);
};
