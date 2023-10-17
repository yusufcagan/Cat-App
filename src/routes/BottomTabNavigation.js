import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen';
import Match from '../screens/Share';
import MatchIcon from '../assets/images/matchShiba.svg'
import colors from '../utils/Color';
import { screenHeight } from '../utils/AppDimensions';

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    height: screenHeight / 12,
                    backgroundColor: colors.secondary,
                    borderWidth: 2,
                    borderColor: colors.primary,
                    borderTopWidth: 2,
                    borderRadius: 8
                }
            }}
        >
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
            <Tab.Screen
                name="Match"
                component={Match}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <MatchIcon />
                        )
                    }
                }}
            />
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
        </Tab.Navigator>
    );
}

export default MyTabs