(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('This example must run unsandboxed');
  }

  class Internet {
    getInfo() {
      return {
        id: 'internet',
        name: 'Internet',
        blocks: [
          {
            blockType: Scratch.BlockType.EVENT,
            opcode: 'internetConnectionChanged',
            text: 'When internet [STATE]',
            isEdgeActivated: false,
            shouldRestartExistingThreads: true,
            arguments: {
              STATE: {
                type: Scratch.ArgumentType.STRING,
                menu: 'wifi'
              }
            }
          }
        ],
        menus: {
          wifi: {
            acceptReporters: false,
            items: [
              'connected',
              'disconnected'
            ]
          }
        }
      };
    }
  }

  window.addEventListener('online', (e) => {
    Scratch.vm.runtime.startHats('internet_internetConnectionChanged', {
      STATE: 'connected'
    );
  });

  window.addEventListener('offline', (e) => {
    Scratch.vm.runtime.startHats('internet_internetConnectionChanged', {
      STATE: 'disconnected'
    );
  });
  // document.addEventListener('keydown', (e) => {
  //   Scratch.vm.runtime.startHats('restartexampleunsandboxed_whenPressed', {
  //     KEY: e.key
  //   });
  // });

  Scratch.extensions.register(new Internet());
})(Scratch);
