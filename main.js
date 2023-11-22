class HelloWorld {
  getInfo() {
    return {
      id: 'miscBlocks',
      name: 'Misc',
      blocks: [
        {
          opcode: 'getName',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Project Name'
        },
        {
          opcode: 'isBlank',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is [VALUE] blank?',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Apple"
          }
        }
      ]
    };
  }

  getName() {
    return 'Paper Minecraft Online';
  }

  isBlank({VALUE}) {
    return VALUE === null;
  }

}

Scratch.extensions.register(new HelloWorld());

