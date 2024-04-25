import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
    {
        employees{
            id
            employeeNumber
            first_name
            last_name
            email
            department
        }
    }
`

export const ADD_EMPLOYEE = gql`

    mutation($employeeInput: EmployeeInput){
        addEmployee(employeeInput: $employeeInput){
            id
            employeeNumber
            first_name
            last_name
            email
            department
        }
    }

`