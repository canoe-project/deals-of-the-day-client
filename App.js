/*import react components*/
import React, {useReducer, useMemo, useEffect} from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/*import screen*/
import SplashScreen from './src/screen/SplashScrean';
import SignInScreen from './src/screen/SignInScreen';
import MainServiceScreen from './src/navigation/MainServiceNavigation';

/*import store*/
import {AuthDispatch, AuthState} from './src/store/AuthStore';
import DiscountDetailsScreen from './src/screen/DiscountDetailScreen';
import {MalllistProvider, malllistState} from './src/store/mallListStore';
import {login, userCreate} from './src/API/userAPI';
const Stack = createStackNavigator();

LogBox.ignoreLogs(['Remote debugger']);

export default function App({navigation}) {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // userToken = await SecureStore.getItemAsync('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);
  const authContext = useMemo(
    () => ({
      signIn: async data => {
        console.log(data.email);
        await login(data.email, data.password)
          .then(reesult => {
            dispatch({type: 'SIGN_IN', token: data.email});
          })
          .catch(() => {
            console.log('login fail');
          });
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `SecureStore`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  return (
    <AuthState.Provider value={state}>
      <AuthDispatch.Provider value={authContext}>
        <MalllistProvider>
          <NavigationContainer>
            <Stack.Navigator>
              {state.isLoading ? (
                // We haven't finished checking for the token yet
                <Stack.Screen name="Splash" component={SplashScreen} />
              ) : state.userToken == null ? (
                // No token found, user isn't signed in
                <Stack.Screen
                  name="SignIn"
                  component={SignInScreen}
                  options={{
                    headerShown: false,
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                />
              ) : (
                <Stack.Group>
                  <Stack.Screen
                    name="Main"
                    component={MainServiceScreen}
                    options={{headerShown: false}}
                  />
                  <Stack.Screen
                    name="DiscountDetail"
                    component={DiscountDetailsScreen}
                    options={{title: ''}}
                  />
                </Stack.Group>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </MalllistProvider>
      </AuthDispatch.Provider>
    </AuthState.Provider>
  );
}
