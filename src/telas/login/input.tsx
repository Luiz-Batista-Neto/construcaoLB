import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Input } from 'react-native-elements';



export interface InputRoundProps {
	texto?:string;
	senha?:boolean;
	onBlur?(campo:any):void;
	icone?: string;
	placeholder?: string;
	onChangeText?(text:string):void;
}

export function InputRound (props: InputRoundProps) {


    return (
      <View>

		  {props.texto && <Text style={styles.containerInput}>{props.texto}</Text>}
            <Input placeholder={props.placeholder}
		    leftIcon={{ name: props.icone, color: 'white' }}
		    onBlur={props.onBlur}
		    placeholderTextColor="white"
		    inputContainerStyle={styles.containerInput}
		    inputStyle={{ color: 'white' }}
		    onChangeText={props.onChangeText}
		    secureTextEntry={props.senha} autoCompleteType={undefined}            />

      </View>
    );
    
}

const styles = StyleSheet.create({
	containerInput:{
		backgroundColor: 'black'
	}
})