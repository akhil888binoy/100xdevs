const { Command } = require("commander");
const program = new Command();

program
  .name("index")
  .description("CLI to some JavaScript string utilities")
  .version("0.8.0");

program
  .command("count")
  .description("count words")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((file, options) => {});

program.parse();
