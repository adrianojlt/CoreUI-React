const FakeApi = {

    frameworks: [
        /*
        {
            name: "knockout",
            content: {
                "name": "Knockout",
                "language": "Javascript",
                "Version": "1.0",
                "templateType": "js"
            }
        },
        {
            name: "angular",
            content: {

                "name": "Angular",
                "language": "Typescript",
                "Version": "1.0",
                "templateType": "ts"
            }
        }
        */
        {
            "name": "Knockout",
            "language": "Javascript",
            "Version": "1.0",
            "templateType": "js"
        },
        {
            "name": "Angular",
            "language": "Typescript",
            "Version": "1.0",
            "templateType": "ts"
        },
        {
            "name": "Handlebars",
            "language": "Javascript",
            "Version": "1.0",
            "templateType": ".hbm"
        }
    ],
    all: function () { return this.frameworks },
    get: function (name) {
        const isFramework = f => f.name === name
        return this.frameworks.find(isFramework)
    }
}

export default FakeApi