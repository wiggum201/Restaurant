export interface APIConnectionInterface{
    id: number,
    date: string,
    name: string,
    room: string
}

export interface APIPostsInterface{
    "userId": number,
    "id": number,
    "title": string,
    "body": string
} 