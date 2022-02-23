export default function authHeader(token = null) {
    const storage = JSON.parse(localStorage.getItem(process.env.REACT_APP_USER_KEY_STORAGE));
    if (storage || token) {
        return {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + (token ? token : storage.token.token)
        };
    }

    return {};
}
