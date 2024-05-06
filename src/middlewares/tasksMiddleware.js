const validateBody = (request, response, next) => {
  const { body } = request

  if (body.title === undefined){
    return response.status(400).json({mensagem: 'The field title is required'})
  }
   if (body.title === ''){
   return response.status(400).json({mensagem: 'The cannot be empty'})
  }
  next()
  
}

module.exports = {
  validateBody
}