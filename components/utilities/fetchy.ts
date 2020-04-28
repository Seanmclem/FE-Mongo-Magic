
const defaults: RequestInit = {
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

export const httpGet = (url: string) => {
    return httpy('GET', url)
}

export const httpy = async (
    type: 'GET' | 'POST' | 'PUT' | 'DELETE',
    url: string,
    data: any = {},
    overrides?: any
) => {
    const params = {
        ...defaults,
        method: type,
        body: type === 'POST' || type === 'PUT' ? JSON.stringify(data) : undefined,
        ...overrides
    }
    console.log(params)

    let response = undefined;

    try {
        response = await fetch(url, params);
    } catch (e) {
        return e
    }

    try {
        return await response.json();
    } catch (e) {
        console.error('Fetchy: Response-data is not json. Failed to parse. Returned whole response instead.')
        return response;
    }

}