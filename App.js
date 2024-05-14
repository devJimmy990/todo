import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListNotes from './components/list.notes';
import { NavigationContainer } from '@react-navigation/native';
import { notes } from './util/notes';
import StackRoutes from './routes/stack';
import { SafeAreaFrameContext, SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { PaperProvider } from 'react-native-paper';
import NotesContextProvider from './controller/notes.context';
export default function App() {
  return (
    <NotesContextProvider>
      <NavigationContainer>
        <StackRoutes>
        </StackRoutes>
      </NavigationContainer>
    </NotesContextProvider>
  );
}

