import React, {Component} from 'react';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Card from './common/Card';
import {TextInput} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChange} from '../actions'
class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    onPasswordChange() {
        this.props.onPasswordChange(text);
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
                    />
                </CardSection>
                <CardSection>
                    <Button>
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
        password: state.auth.password
    }
}

export default connect(mapStateToProps, {emailChanged})(LoginForm);