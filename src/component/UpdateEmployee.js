import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { UPDATE_EMPLOYEE } from '../graphql/Shema'

const UpdateEmployee = () => {

    const [id, setId] = useState('')
    const [employeeNumber, setEmployeeNumber] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [department, setDepartment] = useState('')

    const [updateEmployee, { loading, error }] = useMutation(UPDATE_EMPLOYEE)

    const updateEmployeeHandler = () => {

        // Construct the employeeUpdateRecord object dynamically based on fields that are not empty
        const employeeUpdateRecord = {};
        if (employeeNumber !== '') employeeUpdateRecord.employeeNumber = employeeNumber;
        if (first_name !== '') employeeUpdateRecord.first_name = first_name;
        if (last_name !== '') employeeUpdateRecord.last_name = last_name;
        if (email !== '') employeeUpdateRecord.email = email;
        if (department !== '') employeeUpdateRecord.department = department;

        updateEmployee({ variables: { id, employeeUpdateRecord } })
            .then(response => {
                console.log(response)
            }).catch(error => {
                console.log(error)
            })
    }

    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error: {error.message}</Text>

    return (
        <View>
            <Text style={styles.textStyle}>UPDATE EMPLOYEE</Text>
            <View>
                <TextInput style={styles.input} value={id.toString()} placeholder='Enter ID' onChangeText={(value) => setId(value)} />
                <TextInput style={styles.input} value={employeeNumber} placeholder='Employee Number' onChangeText={(value) => setEmployeeNumber(value)} />
                <TextInput style={styles.input} value={first_name} placeholder='First Name' onChangeText={(value) => setFirstName(value)} />
                <TextInput style={styles.input} value={last_name} placeholder='Last Name' onChangeText={(value) => setLastName(value)} />
                <TextInput style={styles.input} value={email} placeholder='Email' onChangeText={(value) => setEmail(value)} />
                <TextInput style={styles.input} value={department} placeholder='Department' onChangeText={(value) => setDepartment(value)} />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => updateEmployeeHandler()}>
                    <Text style={styles.buttonText}>UPDATE EMPLOYEE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UpdateEmployee

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