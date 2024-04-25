import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { DELETE_EMPLOYEE } from '../graphql/Shema'
import { useMutation } from '@apollo/client'

const DeleteEmployee = () => {

    const [id, setId] = useState('')

    const [deleteEmployee, { loading, error }] = useMutation(DELETE_EMPLOYEE)

    const deleteEmployeeHandler = () => {

        deleteEmployee({ variables: { id } })
            .then(res => {
                console.log(res)
                console.log("Deleted Successfilly")
            }).catch(err => {
                console.log(err)
            })
    }

    if (loading) return <Text>Loading...</Text>
    if (error) return <Text>Error: {error.message}</Text>

    return (
        <View>
            <Text style={styles.textStyle}>DELETE EMPLOYEE</Text>
            <View>
                <TextInput style={styles.input} value={id.toString()} placeholder='Enter ID' onChangeText={(value) => setId(value)} />
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => deleteEmployeeHandler()}>
                    <Text style={styles.buttonText}>DELETE EMPLOYEE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DeleteEmployee

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