console.log("Hello World");
// Import the API
const { ApiPromise ,WsProvider} = require('@polkadot/api');

async function main () {
    const wsProvider = new WsProvider('ws://52.206.88.57:9945');
    const api = await ApiPromise.create({ provider: wsProvider });


    api.query.system.events((events) => {
        console.log(`\nReceived ${events.length} events:`);


    events.forEach((record) => {

        const { event, phase } = record;
    const types = event.typeDef;

    console.log(`\t${event.section}:${event.method}:: (phase=${phase.toString()})`);


    event.data.forEach((data, index) => {
        console.log(`\t\t\t${types[index].type}: ${data.toString()}`);
            });
        });
    });
}

main().catch((error) => {
    console.error(error);
process.exit(-1);
});