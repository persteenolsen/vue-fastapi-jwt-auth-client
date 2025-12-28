import { useAuthStore } from '@/stores';

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {

    return (url, body) => {
               
        const requestOptions = {
            method,
            headers: authHeader(url)
        };
        if (body) {
            
            // 28-12-2025 - Gets the username + password from login view
            const myJSON = JSON.stringify(body);
            let obj = JSON.parse(myJSON);
            let u = obj.username;
            let p = obj.password;

            //console.log( 'Username ' + u + ' Password: ' + p );

            // 28-12-2025 - Gets the username + password from login view
            requestOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            requestOptions.body = 'grant_type=password&username=' + u + '&password=' + p + '&scope=&client_id=string&client_secret=********'
        }
        return fetch(url, requestOptions).then(handleResponse);
    }
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { user } = useAuthStore();

    const isLoggedIn = !!user?.access_token;

    const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
    if (isLoggedIn && isApiUrl) {
        return { Authorization: `Bearer ${user.access_token}` };
    } else {
        return {};
    }
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        
        if (!response.ok) {
            const { user, logout } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}    
