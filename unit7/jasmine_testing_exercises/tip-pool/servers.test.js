describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server if server name is blank', function() {
    serverNameInput.value = '';
    submitServerInfo();
    expect(allServers.length).not.toBeDefined();
  })

  it('should update table with new server after submit', function() {
    submitServerInfo();
    row = document.querySelector('#server1');
    expect(row.firstChild.textContent).toEqual('Alice');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};  // clear allServers object;
    serverId = 0;  // clear server counter

    // clear ttable rows in payments table
    paymentRows = document.querySelectorAll('table[id="paymentTable"] tbody tr');
    for (let row of paymentRows) {
      row.remove();
    }

    // clear table rows in server table
    serverRows = document.querySelectorAll('table[id="serverTable"] tbody tr');
    for (let row of serverRows) {
      row.remove();
    }
  });
});
