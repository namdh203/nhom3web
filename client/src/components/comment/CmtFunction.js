import axios from 'axios'

export const getComment = async (type, type_name, email) => {

    // console.log("type: ", type, " type_name: ", type_name)

    return axios
    .post('/comment/getComment', {
        type: type,
        type_name: type_name
    })
    .then(response => {
        console.log(response.data)
        return response.data
    })   
}

export const sendComment = (id, email, type, type_name, comment, name, avatar) => {
    return axios
      .post('/comment/sendComment', {
        id: id,
        email: email,
        type: type,
        type_name: type_name,
        comment: comment,
        name: name,
        avatar: avatar
      })
      .then(response => {
        console.log('Send Comment Successfully')
        return response.data
      })
  }
  