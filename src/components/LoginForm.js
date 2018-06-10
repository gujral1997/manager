import React, {Component} from 'react'
import {View, Text} from 'react-native'
import Button from './common/Button'
import CardSection from './common/CardSection'
import Card from './common/Card'
import {TextInput} from 'react-native'
import {connect} from 'react-redux'
import {emailChanged, passwordChanged, loginUser} from '../actions'
class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text)
    }

    onButtonPress() {
        const {email, password} = this.props;

        this.props.loginUser({email, password})
    }

    renderError() {
        if (this.props.error) {
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                    style={{flex:1}}
                    label="Email"
                    placeholder="email@gmail.com"
                    underlineColorAndroid="transparent"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                    style={{flex:1}}
                    secureTextEntry
                    label= "Password"
                    placeholder="password"
                    underlineColorAndroid="transparent"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                    />
                </CardSection>
                {this.renderError()}
                <CardSection>
                    <Button onPress = {this.onButtonPress.bind(this)}>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

const styles ={
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm)