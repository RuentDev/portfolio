'use server'

import axios from "axios"

export async function sendEmail(formData: FormData) {
    const name = formData.get('name')
    const email = formData.get('email')
    const message = formData.get('message')


    try {
        axios.post('https://ruentgencomia-portfolio.herokuapp.com/api/send-mail', {
            name: name,
            email: email,
            message: message
        }).then(res => {
            if (res.status === 200) {
               return {
                    statusText: res.data.statusText
               }
            }
        }).catch(err => {
            console.log(err)
        })
    } catch (error) {
        console.error(error)
    }
}

