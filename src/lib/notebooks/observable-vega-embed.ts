export function createObservableVegaEmbed(
  embed: (...args: any[]) => any,
  createContainer: () => HTMLDivElement = () => document.createElement('div'),
) {
  return function observableVegaEmbed(...args: any[]) {
    if (args.length !== 1) return embed(...args);

    const container = createContainer();
    return Promise.resolve(embed(container, args[0])).then(() => container);
  };
}
