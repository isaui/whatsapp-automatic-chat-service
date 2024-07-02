import axios from "axios"

export const sendMessageToWA = async (phoneNo: string, message: string) => {
    console.log(phoneNo)
    const payload = {
        "phone_no": phoneNo,
        "key": process.env.WOOWA_TOKEN,
        "message": message,
        "deliveryFlag": true,
    }
    await axios.post("http://116.203.191.58/api/send_message", payload)
}