import {Text, View} from "react-native";
import {useContext, useState} from "react";
import style from "./style";
import {LinearGradient} from "expo-linear-gradient";
import {Button, Input, Logo} from "../../shared/components/Index";
import useFetchMutation from "../../app/hooks/useFetchMutation";
import {LoginService} from "../../app/service/LoginService";
import {useNavigate} from "../../app/hooks/useNavigate";
import {UserNameContext} from "../../context/UserNameContext";

const Login = () => {
    const ctx = useContext(UserNameContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [error, loading, Login] = useFetchMutation(LoginService, (data) => {
        const token = data?.data?.token
        ctx.setUsername(data?.data?.data?.name)
        navigate("HomeStack")
    })
    return (
        <LinearGradient
            colors={['#fa1605', '#990b00']}
            style={style.container}
            end={{x: 0.3, y: 0.5}}
        >
            <Logo styles={{marginTop: 50}}/>
            <View style={style.box}>
                <View style={{flex: 1, marginTop: 15}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login</Text>
                </View>
                <View style={{width: '100%', flex: 3, alignItems: 'center'}}>
                    <View style={style.inputGroup}>
                        <Input onChangeText={text => setEmail(text)}
                               placeholder={'e-mail'}
                               styles={{marginVertical: 5}}
                        />
                    </View>
                    <View style={style.inputGroup}>
                        <Input
                            onChangeText={text => setPassword(text)}
                            placeholder={'password'}
                            secureTextEntry={true}
                            styles={{marginVertical: 5}}
                        />
                    </View>
                    <Button
                        styles={style.btn}
                        onPress={() => {
                            Login({email, password})
                            if (error) {
                                // const status = error.message.match(/\d/gm)
                                // console.log(status.join(''))
                            }
                        }}
                        disabled={password.length < 6 || loading}
                    ><Text style={style.btnText}>Login</Text></Button>
                    <Text style={{
                        fontWeight: 'bold',
                        color: '#fa1605',
                        marginLeft: 5,
                        marginTop: 15
                    }}>forgot your password?</Text>
                </View>
            </View>
        </LinearGradient>
    )
}
export default Login