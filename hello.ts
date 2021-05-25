function Greeting(options: { name: string }) {
    console.log(`Hello ${options.name}!`);
}

Greeting({
    name: "Dustin"
});