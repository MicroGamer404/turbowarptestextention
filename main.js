class Helper {
  getInfo() {
    return {
      id: 'wifi',
      name: 'Internet',
      blocks: [
        {
          opcode: 'hasInternet',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'device has internet?'
        },
        {
          opcode: 'internetChanged',
          blockType: Scratch.BlockType.EVENT,
          text: 'When internet [INTERNETCONNECTION]',
          isEdgeActivated: false,
          shouldRestartExistingThreads: true,
          arguments: {
            INTERNETCONNECTION: {
              type: Scratch.ArgumentType.STRING,
              menu: 'internet'
            }
          }
        }
      ],
      menus: {
        internet: {
          acceptReporters: false,
          items: [
            {
              text: "connected",
              value: "connect"
            },
            {
              text: "disconnected",
              value: "disconnect"
            }
          ]
        }
      }
    };

    hasInternet() {
      return window.navigator.onLine
    };


    window.addEventListener('online' (e) => {
      Scratch.vm.runtime.startHats('wifi_internetChanged', {
      INTERNETCONNECTION: "connect"
    });
      
    window.addEventListener('offline' (e) => {
      Scratch.vm.runtime.startHats('wifi_internetChanged', {
      INTERNETCONNECTION: "disconnect"
    });
    })
}

Scratch.extensions.register(new Helper());

