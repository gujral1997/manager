import React, {Component} from 'react';
import Button from './common/Button';
import CardSection from './common/CardSection';
import Card from './common/Card';
import {TextInput} from 'react-native';

class LoginForm extends Component {
    onEmailCHange(text) {
        
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
                    onChangeText={this.onEmailCHange.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <TextInput
                    style={{flex:1}}
                    secureTextEntry
                    label= "Password"
                    placeholder="password"
                    underlineColorAndroid="transparent"
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

export default LoginForm;