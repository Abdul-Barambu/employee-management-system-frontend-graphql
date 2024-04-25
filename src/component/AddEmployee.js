import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { ADD_EMPLOYEE } from '../graphql/Shema'

const AddEmployee = () => {

  const [employeeNumber, setEmployeeNumber] = useState('')
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [department, setDepartment] = useState('')


  const [addEmployee, { loading, error }] = useMutation(ADD_EMPLOYEE)

  const addEmployeeHandler = () => {
    console.log("Employee Data", { employeeNumber, first_name, last_name, email, department });
    addEmployee({ variables: { employeeInput: { employeeNumber, first_name, last_name, email, department } } })
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
  }

  if (loading) return <Text>Loading...</Text>
  if (error) return <Text>Error Occurred...</Text>

  return (
    <View>
      <Text style={styles.textStyle}>ADD EMPLOYEE</Text>
      <View>
        <TextInput style={styles.input} placeholder='Employee Number' onChangeText={(value) => setEmployeeNumber(value)} />
        <TextInput style={styles.input} placeholder='First Name' onChangeText={(value) => setFirstName(value)} />
        <TextInput style={styles.input} placeholder='Last Name' onChangeText={(value) => setLastName(value)} />
        <TextInput style={styles.input} placeholder='Email' onChangeText={(value) => setEmail(value)} />
        <TextInput style={styles.input} placeholder='Department' onChangeText={(value) => setDepartment(value)} />
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={() => addEmployeeHandler()}>
          <Text style={styles.buttonText}>ADD EMPLOYEE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AddEmployee

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    fontWeight: 'bold'
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  buttonView: {
    marginTop: 20
  },

  button: {
    backgroundColor: 'gray',
    paddingVertical: 15,
    borderRadius: 10
  },

  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  }
})