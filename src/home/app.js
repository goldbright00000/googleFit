import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { Constants, Google } from 'expo';
import Home from './Home';

export default class app extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			auth: true,
			accessToken: ''
		}

		this.setAuth = this.setAuth.bind(this);
	}

	_handleGoogleLogin = async () => {
		try {
			var scope = 'profile https://www.googleapis.com/auth/fitness.activity.write https://www.googleapis.com/auth/fitness.body.write https://www.googleapis.com/auth/fitness.location.write https://www.googleapis.com/auth/fitness.nutrition.write';
			const { type, user, accessToken } = await Google.logInAsync({
				androidClientId: '361517549410-tioe1b3pek3ljnuhkr39jt0g9laifq96.apps.googleusercontent.com',
				androidStandaloneAppClientId: '361517549410-c65fpq92ppiiag7cv3ond8j8m1g3d4i1.apps.googleusercontent.com',
				iosClientId: '583659066312-ph4u33j8m58ak6720ko0a44eu9gu6lgh.apps.googleusercontent.com',
				webClientId: '583659066312-apbaumdnf5f80ak7v1clgp11q1otq3fq.apps.googleusercontent.com',
				scopes: [scope, 'email']
			});

			switch (type) {
				case 'success': {
					this.setState({accessToken: accessToken});
					this.setState({auth: false});
					break;
				}
				case 'cancel': {
					Alert.alert(
						'Cancelled!',
						'Login was cancelled!',
					);
					break;
				}
				default: {
					Alert.alert(
						'Oops!',
						'Login failed!',
					);
				}
			};
		}
		catch (e) {
			Alert.alert(
				'Oops!',
				'Login failed!',
			);
		}
	};

	setAuth() {
		this.setState({auth: true});
	}

	render() {
		return (
			this.state.auth ? 
				<View style={styles.container}>
					<Button
					title="Login with Google"
					onPress={this._handleGoogleLogin}
					color="#183739"
					/>
				</View>
			:
				<View style={styles.container}>
					<Button
					title="Test"
					onPress={this._handleGoogleLogin}
					color="#183739"
					/>
				</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: Constants.statusBarHeight,
		backgroundColor: '#162631',
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#34495e',
	},
});