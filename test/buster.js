var config = module.exports;

config["tests"] = {
    rootPath: "../",
    environment: "node", // or "node"
    sources: [
        "calendar-item.js"
    ],
    tests: [
        "test/*-test.js"
    ]
}
