import axios from 'axios'

const url = 'http://localhost:8000'

export const login = (data) => {
    return {
        type: 'LOGIN',
        payload: axios.post(`${url}/login`, data
        // , {
        //     headers: { //ini header buat apa yak?
        //         "authorization": "x-control-user", //ini buat apa juga?
        //     }
        // }
        )
        .then(res => {
            console.log(res.data.result)
            // naroh items di local nih yeeee. ini udah pasti berhasil ya soalanya narohnya di then?
            const token = res.data.result.token;
            const userid = res.data.result.id;
            const fullname = res.data.result.fullname;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('userid', userid);
            localStorage.setItem('name', fullname)
            // console.log('ini data dari action ', pat)
        })
    }
}

export const logout = (userid) => {
    return {
        type: 'LOGOUT', userid,
        payload: axios.patch(`${url}/logout/${userid}`)
    }
}