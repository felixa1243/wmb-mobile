import {Image, Text, TextInput, View} from "react-native";
import {useState} from "react";
import style from "./style";
import {LinearGradient} from "expo-linear-gradient";
import wmbLogo from '../../../assets/wmb-red.png'
import {Button, Input, Logo} from "../../shared/components/Index";
import useFetchMutation from "../../app/hooks/useFetchMutation";
import {LoginService} from "../../app/service/LoginService";
import {useNavigation} from "@react-navigation/native";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigation()
    const [error, loading, Login] = useFetchMutation(LoginService, () => navigate.navigate('Home'))
    return (
        <LinearGradient
            colors={['#fa1605', '#990b00']}
            style={style.container}
            end={{x: 0.2, y: 0.9}}
        >
            <Logo styles={{marginTop: 50}}/>
            <View style={style.box}>
                <View style={{flex: 1, marginTop: 15}}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Login</Text>
                </View>
                <View style={{width: '100%', flex: 3}}>
                    <View style={style.inputGroup}>
                        <Input onChangeText={text => setEmail(text)}
                               placeholder={'e-mail'}
                        />
                    </View>
                    <View style={style.inputGroup}>
                        <Input
                            onChangeText={text => setPassword(text)}
                            placeholder={'password'}
                            secureTextEntry={true}
                        />
                    </View>
                    <Button
                        styles={style.btn}
                        onPress={() => {
                            Login({email, password})
                            if (error){
                                console.log(error)
                            }
                        }}
                    ><Text style={style.btnText}>Login</Text></Button>
                </View>
            </View>
        </LinearGradient>
    )
}
export default Login