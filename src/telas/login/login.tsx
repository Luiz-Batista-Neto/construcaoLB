import React, { useState } from "react"
import { StyleSheet, Text, View, Image, TextInput, ActivityIndicator } from 'react-native'
import { Button, Input } from 'react-native-elements'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { InputRound } from "./input"

export interface LoginTelaProps {

}

function Logintela(props: LoginTelaProps) {

     const [email, setEmail] = useState('')
	const [senha, setSenha] = useState('')

         //Função que exibe o login
          const logar = async (dados: { email: string; senha: string }) => {
          console.log(dados)

          await new Promise((resolve) => setTimeout(resolve, 3000))

          if (dados.email == "teste@teste.com" && dados.senha == "123456")
          console.log('Logado com sucesso');
          else
          console.log('Email ou senha incorreto');
     }


     return ( 
          <Formik 
               initialValues={{email: '', senha: ''}} 
               validationSchema={Yup.object({
               email: Yup.string().required('Informe o email').email('Não é um formato de e-mail válido'),
               senha: Yup.string().required('Informe a senha').min(6, 'A senha precisa de 6 caracteres')
          })}
               onSubmit={logar}>
               {({errors, touched, handleChange, handleSubmit, handleBlur, isSubmitting}) => (
     
               <View>
                    <Text style={styles.boasvindas}>L.B. Construções</Text>
                    <Image style={styles.logostyle} source={require('../../assets/imgs/logoTrans.png')}/>

                    
                        {/* EMAIL  */}
                        <InputRound placeholder='Digite seu email' icone='person' onChangeText={handleChange('email')} onBlur={handleBlur('email')} />
                        {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}
                        {/* SENHA */}
                        <InputRound placeholder='Digite sua senha' icone='lock' senha  onChangeText={handleChange('senha')} onBlur={handleBlur('senha')}/>
                        {touched.senha && errors.senha && <Text style={styles.error}>{errors.senha}</Text>}


                    <Text style={styles.cadastrar}>Não possui conta? Clique aqui para se cadastrar</Text>
                        {isSubmitting && <ActivityIndicator size="large" color="blue" />}
                        {!isSubmitting && <Button title="Logar" onPress={() => handleSubmit()} raised={true} />}

                        {isSubmitting && <ActivityIndicator size="large" color="blue" />}
                        {!isSubmitting && <Button title="Cadastar" onPress={() => handleSubmit()} raised={true} />}
          
               </View>

     )}

          </Formik>

      );
}

//Styles do logo
const styles = StyleSheet.create({
    boasvindas:{

        backgroundColor: 'black',
        color: 'white',
        bottom: '1%',
        textAlign: 'center',
        fontSize: 40,
        // position: 'absolute'

     },
     logostyle: {
         
        //    backgroundColor: 'white'
        width: 200,
        height: 200,
        resizeMode: 'stretch',
        bottom: '1%',
        left: '25%',
        // position: 'absolute'

     },
     cadastrar: {

        color: 'black',
        fontSize: 20,
        textDecorationLine: 'underline',
        margin: 10,
        textAlign: 'center'
     
     }, error:{
        color:'crimson',
        fontSize: 15,
        textAlign:'center'
     }
});


export default Logintela;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Luiz-Batista-Neto/construcaolb.git
// git push -u origin main