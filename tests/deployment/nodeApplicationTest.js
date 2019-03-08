const GraknClient = require("grakn-client");


beforeEach(async () => {
    client = GraknClient("localhost:48555");
    session = client.session("testkeyspace");
    tx = await session.transaction().write();
})

afterEach(() => {
    tx.close();
    session.close();
    client.close()
});
