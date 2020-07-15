import Constants from 'expo-constants';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DeckAdd from './components/DeckAdd';
import DeckList from './components/DeckList';
import DeckDetails from './components/DeckDetails';
import reducer from './reducers';
import { COLORS } from './utils/colors';
import middleware from './middleware'
import CardAdd from './components/CardAdd'
import Quiz from './components/Quiz'
import AntDesign from '@expo/vector-icons/AntDesign';

function AppStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight, }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                barStyle='dark-content'
                animated={true}
                {...props}
            />
        </View>
    )
}

const TabsNavigator = createBottomTabNavigator({
    DeckList: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'DECKS',
            tabBarIcon: ({ i }) => <AntDesign size={30} color={COLORS.BACK} name='book' />
        },
    },
    DeckAdd: {
        screen: DeckAdd,
        navigationOptions: {
            tabBarLabel: 'NEW DECK',
            tabBarIcon: ({ i }) => <AntDesign size={30} color={COLORS.BACK} name='plus' />
        },
    }
}, {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: COLORS.BACK,
            style: {
                height: 56,
                backgroundColor: COLORS.HINT,
                shadowColor: COLORS.FORE,
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    })

const MainNavigator = createStackNavigator({
    Home: {
        screen: TabsNavigator
    },
    DeckDetails: {
        screen: DeckDetails
    },
    CardAdd: {
        screen: CardAdd
    },
    Quiz: {
        screen: Quiz
    },
})

const HomeNavigator = createAppContainer(MainNavigator)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer, middleware)}>
                <View style={{
                    flex: 1
                }} >
                    <AppStatusBar backgroundColor={COLORS.HINT} barStyle='dark-content' />
                    <HomeNavigator />
                </View>
            </Provider>
        );
    }
}
