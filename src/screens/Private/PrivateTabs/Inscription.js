import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../../components/Background'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import BackButton from '../../../components/BackButton'
import { theme } from '../../../core/theme'
import { emailValidator } from '../../../helpers/emailValidator'
import { passwordValidator } from '../../../helpers/passwordValidator'
import { nameValidator } from '../../../helpers/nameValidator'
import { Colors } from '../../../core/theme'
import { Register } from '../../../service'
export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setpassword] = useState({ value: '', error: '' })
  const [cin, setcin] = useState({ value: '', error: '' })
  const [phone, setphone] = useState({ value: '', error: '' })

  const onSignUpPressed = async () => {
    const phoneError = nameValidator(phone.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    if (emailError || passwordError || phoneError) {
      setphone({ ...phone, error: phoneError })
      setEmail({ ...email, error: emailError })
      setpassword({ ...password, error: passwordError })
      console.log(phoneError)
      console.log(emailError)
      console.log(passwordError)
      return
    } else {
      var register = await Register.RegisterCustomer({
        "user_name": name.value,
        "password": password.value,
        "cin": cin.value,
        "phone": phone.value,
        "email": email.value
      })
      if(register.data){
        setEmail({ value: '', error: '' })
        setpassword({ value: '', error: '' })
        setcin({ value: '', error: '' })
        setName({ value: '', error: '' })
        setphone({ value: '', error: '' })
        alert("Success")
      }
    }

  }
  const handleChange = (data) => {
    if (data.isValid) {
      setphone({ ...phone, error: ''})
    } else {
      setphone({ ...phone, error: ' is not a valid phone number' })
    }
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.container}>
        {/* <BackButton goBack={navigation.goBack} /> */}
        <Header>Welcome.</Header>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
        />
        <TextInput
          label="Identity"
          returnKeyType="text"
          value={cin.value}
          onChangeText={(text) => setcin({ value: text, error: '' })}
        />
        {/* <View style={styles.containerNumberPhone}>
          <PhoneInput
            initialCountry="US"
            onChange={handleChange}
            style={styles.inputNumberPhone}
          />
          {phone.error ? <Text style={styles.error}>{phone.error}</Text> : null}
        </View> */}


        <TextInput
          label="Phone Number"
          returnKeyType="text"
          value={phone.value}
          onChangeText={(text) => setphone({ value: text, error: '' })}
          error={!!phone.error}
          errorText={phone.error}
          autoCapitalize="none"
          autoCompleteType="phone"
          textContentType="phone"
          keyboardType="phone"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={(text) => setpassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{ marginTop: 24 }}
        >
          Next
        </Button>
        <View style={styles.row}>
          <Text>I already have an account !</Text>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: Colors.info,
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerNumberPhone: {
    width: '100%',
    marginVertical: 8,
  },
  inputNumberPhone: {
    backgroundColor: theme.colors.surface,
    borderRadius: 3,
    padding: 8,
    borderEndWidth: 0.8,
    borderColor: Colors.black
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
  },
})