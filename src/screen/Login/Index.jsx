import {Text, View} from "react-native";
import {useContext, useState} from "react";
import style from "./style";
import {LinearGradient} from "expo-linear-gradient";
import {Button, Input, Logo} from "../../shared/components/Index";
import useFetchMutation from "../../app/hooks/useFetchMutation";
import {LoginService} from "../../app/service/LoginService";
import {useNavigate} from "../../app/hooks/useNavigate";
import {UserNameContext} from "../../context/UserNameContext";
import {saveToken} from "../../utils/token";
import Lottie from 'lottie-react-native';

const Login = () => {
    const ctx = useContext(UserNameContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, loading, Login] = useFetchMutation(LoginService, (data) => {
        saveToken(data?.data.token)
        navigate("HomeStack")
    })
    const validate = () => {
        if (password.length < 6 || email.length < 6) {
            return true
        }
    }
    return (
        <LinearGradient
            colors={['#fa1605', '#990b00']}
            style={style.container}
            end={{x: 0.3, y: 0.5}}
        >
            <Logo styles={{marginTop: 50}}/>
            <View style={style.box}>
                {
                    loading ? (
                        <Lottie source={require('../../../assets/animation.json')} autoPlay loop/>
                    ) : (
                        <View style={{width: '100%'}}>
                            <View style={{marginTop: 15, alignSelf: 'flex-start', marginLeft: 15}}>
                                <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login</Text>
                            </View>
                            <View style={{width: '100%', alignItems: 'center', marginTop: 25}}>
                                <View style={style.inputGroup}>
                                    <Input onChangeText={text => setEmail(text)}
                                           placeholder={'e-mail'}
                                           styles={{marginVertical: 5}}
                                    />
                                </View>
                                {(email?.length <6) && (
                                    <View>
                                        <Text style={{color: 'red'}}>email must be at least 6 character</Text>
                                    </View>
                                )}
                                <View style={style.inputGroup}>
                                    <Input
                                        onChangeText={text => setPassword(text)}
                                        placeholder={'password'}
                                        secureTextEntry={true}
                                        styles={{marginVertical: 5}}
                                    />
                                </View>
                                {(email?.length <6) && (
                                    <View>
                                        <Text style={{color: 'red'}}>email must be at least 6 character</Text>
                                    </View>
                                )}
                                <Button
                                    styles={style.btn}
                                    onPress={() => {
                                        Login({email, password})
                                    }}
                                    disabled={!password || password.length < 6}
                                ><Text style={style.btnText}>Login</Text></Button>
                                {(error && error.message === "Request failed with status code 401") && (
                                    <View>
                                        <Text style={{color: 'red'}}>Login failed: Username or password are
                                            incorect</Text>
                                    </View>
                                )}
                                <Text style={{
                                    fontWeight: 'bold',
                                    color: '#fa1605',
                                    marginLeft: 5,
                                    marginTop: 15
                                }}>forgot your password?</Text>
                            </View>
                        </View>
                    )
                }
            </View>
        </LinearGradient>
    )
}
export default Login