import { View, Text } from 'react-native'
import React from 'react'
import {useQuery } from '@apollo/client'
import { GET_EMPLOYEES } from '../graphql/Shema'

const EmployeeQuery = () => {

    const {loading, error, data} = useQuery(GET_EMPLOYEES)

    if(loading) return <Text>Loading . . .</Text>;
    if(error) return <Text>Error Occurred: {error.message}</Text>


    // console.log(data)

  return (
    <View>
      {data.employees.map((employee) => (
        <View key={employee.id}>
            <Text>{employee.first_name}</Text>
        </View>
      ))
        
      }
    </View>
  )
}

export default EmployeeQuery
