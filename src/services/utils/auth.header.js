export default function authHeader(token, contentType = null, accept = null) {
    if (token) {
        return {
            'Content-Type': (contentType === null ? 'application/json' : contentType) + '; charset=utf-8',
            'Authorization': 'Bearer ' + token,
            'Accept': accept === null ? 'application/json' : accept
        };
    }

    return {};
}
