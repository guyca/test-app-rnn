import { Navigation } from 'react-native-navigation';

import registerScreens from './screens';

registerScreens();

Navigation.startSingleScreenApp({
	screen: {
		screen: 'testApp.TopTabs',
		title: 'Testing',
		topTabs: [{
			screenId: 'testApp.TabOne',
			title: 'Tab One'
		}, {
			screenId: 'testApp.TabTwo',
			title: 'Tab Two'
		}]
	},
	animationType: 'fade',
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
  },
});
