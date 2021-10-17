const ShippingStatus = artifacts.require("Shipping");
const truffleAssert = require('truffle-assertions');

contract("Shipping", () => {
  it("should return the status Pending", async () => {
    const instance = await ShippingStatus.deployed();//instance of our deployed contract
    const status = await instance.Status();
    assert.equal(status, "Pending");
  });

  it("should return the status Shipped", async () => {
    const instance = await ShippingStatus.deployed()
    await instance.Shipped();
    const status = await instance.Status();
    assert.equal(status, "Shipped");
  })

  it("should return the status Delivered", async () => {
    const instance = await ShippingStatus.deployed();
    await instance.Delivered();
    const status = await instance.Status();
    assert.equal(status, "Delivered")
  })

  it('should return correct event description', async () => {
    const instance = await ShippingStatus.deployed();
    const delivered = await instance.Delivered();

    // Check event description is correct
    truffleAssert.eventEmitted(delivered, 'LogNewAlert', (event) => {
      return event.description == 'Your package has arrived';
    });
  })
});
