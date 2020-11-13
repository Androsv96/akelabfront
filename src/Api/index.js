export default async function apiCall(url, method, data) {
    let newUrl = new URL(url);
    Object.keys(data).forEach(key => newUrl.searchParams.append(key, data[key]));

    return await fetch(newUrl, {
        method,
    }).then(response => response.json());

}