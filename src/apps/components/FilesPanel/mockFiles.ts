import {UploadFile, User} from "../../../generated/graphql"
const mockFiles : UploadFile[] =  [
    {
        fileId: "1",
        filename: "Some image.jpg",
        uploadedBy: null as any,
        createdAt: "12:30pm",
        serverLink: "/some-image.jpg",
        shortenedLink: "bit.ly/asdasdasd", 
    },
    {
        fileId: "2",
        filename: "Some image.jpg",
        uploadedBy: undefined as any,
        createdAt: "12:30pm",
        serverLink: "/some-image.jpg",
        shortenedLink: "bit.ly/asdasdasd", 
    },
    {
        fileId: "3",
        filename: "Some image.jpg",
        uploadedBy: undefined as any,
        createdAt: "12:30pm",
        serverLink: "/some-image.jpg",
        shortenedLink: "bit.ly/asdasdasd", 
    },
    {
        fileId: "4",
        filename: "Some image.jpg",
        uploadedBy: undefined as any,
        createdAt: "12:30pm",
        serverLink: "/some-image.jpg",
        shortenedLink: "bit.ly/asdasdasd", 
    },

]
export default mockFiles