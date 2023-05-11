import axios from 'axios'

const authFetch = axios.create({
    baseURL : 'https://course-api.com',
    headers : {
        Accept: 'application/json',
    },
})

export default authFetch;


// With a custom one we can pick, Whatever stuffwe want to add to our request 
// so every time, we use this "authFetch instance" 
// with this baseURL, and whatever default setup we add over here, but then if we just use the normal axios instance,
// it's just going to be a standard request
