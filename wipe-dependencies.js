const fs = require("fs"),
    wipeDependencies = () => {
        const file = fs.readFileSync("package.json"),
            content = JSON.parse(file);
        for (let devDep in content.devDependencies) {
            content.devDependencies[devDep] = "*";
        }
        for (let dep in content.dependencies) {
            content.dependencies[dep] = "*";
        }
        fs.writeFileSync("package.json", JSON.stringify(content, null, 2));
    };
if (require.main === module) {
    wipeDependencies();
} else {
    module.exports = wipeDependencies;
}
