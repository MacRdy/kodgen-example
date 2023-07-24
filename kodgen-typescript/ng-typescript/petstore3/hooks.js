module.exports = {
    // 'I' prefix
    generateModelName: (defaultFn, name, modifier, type) => `I${defaultFn(name, modifier, type)}`,
    // Add 'Api' suffix to service name
    generateServiceName: (defaultFn, name, modifier) => `${defaultFn(name, modifier)}Api`,
};
