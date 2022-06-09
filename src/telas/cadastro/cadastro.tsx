import * as React from 'react';
import { 
     View,
     Text,
     Button,
     TextInput,
     StyleSheet,
     TouchableOpacity,
     Pressable
     } from 'react-native';
import { useState } from 'react';

export interface CadastroScreenProps {
}

export function CadastroScreen (props: CadastroScreenProps) {

     const [ isCPF, setIsCPF ] = useState(true);

    return (
      <View>
          <Text 
               style={styles.boasvindas}>Cadastro {'\n'}
               <Text style={{fontSize:25}}>preencha abaixo com suas informações</Text>
          </Text>

               {/* CPF-CNPJ */}
               <View style={{flex: 1, flexDirection: 'row'}}>
     
                    <Pressable onPressIn={() => { setIsCPF(true); console.log('cpf')}}>
                         <Text style={styles.buttons}>CPF</Text>
                    </Pressable>

                    <Pressable onPressIn={() => { setIsCPF(false); console.log('cpnj')}}>
                         <Text style={styles.buttons}>CNPJ</Text>
                    </Pressable>

               </View>
               

               {/* FORMULÁRIO CPF */}
               { isCPF && 
                    <View style={{position: 'absolute', width: '90%', left: 20, flex: 1, flexDirection: 'column', alignContent: 'space-around'}}>
                         
                         <TextInput placeholder='  Digite seu Email:' style={styles.formulario_cpf}></TextInput>
                         <TextInput placeholder='  Digite a sua senha (3 digitos):' style={styles.formulario_cpf}></TextInput>
                         <TextInput placeholder='  Primeiro nome:' style={styles.formulario_cpf}></TextInput>
                         <TextInput placeholder='  Sobrenome:' style={styles.formulario_cpf}></TextInput>

                    </View>
               }

               {/* FORMULÁRIO CNPJ */}
               { !isCPF && 
                    <View style={{position: 'absolute', width: '90%', left: 20, flex: 1, flexDirection: 'column', alignContent: 'space-around'}}>
                         
                         <TextInput placeholder='  Nome Empresarial:' style={styles.formulario_cpf}></TextInput>
                         <TextInput placeholder='  Título do estabelecimento (Nome Fantasia):' style={styles.formulario_cpf}></TextInput>
                         <TextInput placeholder='  CEP:' style={styles.formulario_cpf}></TextInput>
                    </View>
               }

               <View style={{position: 'absolute', width: '90%', left: 20, flex: 1, flexDirection: 'column', alignContent: 'space-around', top: 200}}>
                    <Button title='Submit' onPress={() => console.log('teste')}></Button>
                    <Button title='Cancelar'></Button>
               </View>
      </View>
    );
}

const styles = StyleSheet.create({
     boasvindas:{
 
         backgroundColor: 'black',
         color: 'white',
         bottom: 200,
         width: '100%',
         textAlign: 'center',
         fontSize: 40,
         position: 'absolute'
     },
     buttons:{
          borderColor:'white', 
          backgroundColor: 'black',
          borderWidth: 2,
          color:'white',
          fontSize: 25,
          height: 35,
          width: 200,
          marginLeft: 3,
          bottom: 160,
          textAlign: 'center'
          // position: 'absolute'
     },
     formulario_cpf:{
          backgroundColor: 'whitesmoke',
          borderColor: 'black',
          borderRadius: 0,
          borderWidth: 3,
          bottom: 80,
          marginBottom: 20
     }   
});
