type MessageType = 'image' | 'audio'
type Message = {
    id: number
    type: MessageType
    sendMessage: string
}

let messages: Message[] = [
    { id: 1, type: 'image', sendMessage: '1111' },
    { id: 2, type: 'audio', sendMessage: '2222' },
    { id: 3, type: 'audio', sendMessage: '3333' },
    { id: 4, type: 'audio', sendMessage: '4444' },
]
function getMessage(value:number):Message
function getMessage(value:string,readCount:number):Message[]
function getMessage(
    value: any,readCount:number = 1
) {
    if (typeof value === 'number') {
        return messages.find((item) => item.id === value)
    } else {
        return messages.filter((item)=>item.type===value).splice(0,readCount)
    }
}
console.log(getMessage(1))
console.log(getMessage('audio',2))
console.log(getMessage(1).id)

