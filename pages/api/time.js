export default  function  handler(request,answer){
    let today = new Date()
    return answer.status(200).json(today)
}