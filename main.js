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
          text: 'is [v] blank?',
          arguments: {
            v: {
              type: Scratch.ArgumentType.STRING
          }
      ]
    };
  }

  getName() {
    return 'Paper Minecraft Online';
  }

  isBlank(args) {
    return args.v === null;
  }

}

Scratch.extensions.register(new HelloWorld());

