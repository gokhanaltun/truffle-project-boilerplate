const sample = artifacts.require("Sample");

contract("Sample", accounts => {
  it("sample echo test", async () => {
    let instance = await sample.deployed();

    const message = "Hello, world!";

    const result = await instance.echo(message);

    assert.equal(result.logs.length, 1, "MessageEvent not emitted");
    const event = result.logs[0];
    assert.equal(event.event, "EchoEvent", "Event is not EchoEvent");
    assert.equal(event.args._message, message, "Incorrect _message value");
  });
});
