export async function getJoke(){
    let response = await fetch("https://icanhazdadjoke.com/", {
        headers: {
            Accept: "application/json"
        },
        method: "GET"
    });
    let body = await response.json();
    return body.joke;
}