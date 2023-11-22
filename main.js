class HelloWorld {
  getInfo() {
    return {
      id: 'miscBlocks',
      name: 'Misc',
      blocks: [
        {
          opcode: 'isblank',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'is [VALUE] blank?',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "Apple"
            }
          }
        }
      ]
    };

    isblank(args) {
      var data = args.VALUE;
      if (data === null) {return true}
      if (data === "") {return true}
      return false
  }
}

Scratch.extensions.register(new HelloWorld());

