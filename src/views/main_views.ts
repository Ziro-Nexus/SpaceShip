

export function main_page(): Response {
    return new Response(JSON.stringify({hello_world: true}));
}
