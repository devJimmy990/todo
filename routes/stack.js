import React from 'react';
import routes from '../util/routes';
import NotePage from '../pages/note';
import HomePage from '../pages/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
export default function StackRoutes() {
    return (
        <stack.Navigator>
            <stack.Screen name={routes.home} component={HomePage} options={{
                title: '',
                headerTitleAlign: 'center',
            }} />
            <stack.Screen name={routes.note} component={NotePage} options={{
                title: '',
                headerTitleAlign: 'center',
            }} />
        </stack.Navigator>
    );
}
