import React, { Component } from "react";
import { StatusBar } from "react-native";
import { StyleProvider } from "native-base";
import Expo,{ Font, AppLoading } from "expo";

import HomeScreen from './src/home/app';


export default class App extends Component {

    constructor() {

        super();
        
        this.state = {

            isReady: false

        };

        StatusBar.setHidden(true);

        console.disableYellowBox = true;
    }

    async componentWillMount() {

        this.setState({ isReady: true });
    }

    render() {

        if (!this.state.isReady) {

            return <Expo.AppLoading

                startAsync={this._loadResourcesAsync}
            />;
        }
        return <HomeScreen />;
    }
}

_loadResourcesAsync = async () => {
    return Promise.all([
        Asset.loadAsync([
            // require('./assets/images/robot-dev.png'),
            // require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync([
           
            // Ionicons.font,

            // { 'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf') },
        ]),
    ]);
};

export { App };