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
            "templateType": "js",
            "frameworkPresentRules": [ ]
        },
        {
            "name": "Angular",
            "language": "Typescript",
            "Version": "1.0",
            "templateType": "ts",
            "frameworkPresentRules": [
                {
                    "ruleType": "fileExtension",
                    "rule": {
                        "fileExtension": ".html",
                        "contentType": "Template"
                    }
                }
            ]
        },
        {
            "name": "Handlebars",
            "language": "Javascript",
            "Version": "1.0",
            "templateType": ".hbm",
            "frameworkPresentRules": [
                {
                    "ruleType": "fileExtension",
                    "rule": {
                        "fileExtension": ".hbs",
                        "contentType": "PlainCode"
                    }
                },
                {
                    "ruleType": "fileExtension",
                    "rule": {
                        "fileExtension": ".handlebars",
                        "contentType": "PlainCode"
                    }
                },
                {
                    "ruleType": "pattern",
                    "rule": {
                        "fileExtension": ".html",
                        "regEx": "<script [^>]*src\\s*=[^>]*handlebars[^>]*\\.js",
                        "contentType": "Template"
                    }
                }
            ],
            "templatePreProcessingRules": [
                {
                    "ruleType": "grammar",
                    "rule": {
                        "pathToTag": "//script[@id and contains(@type, 'handlebars')]",
                        "pathToGrammar": "HandlebarsGrammarHandler"
                    }
                }
            ]
        }
    ],
    all: function () { return this.frameworks },
    get: function (name) {
        const isFramework = f => f.name === name
        return this.frameworks.find(isFramework)
    }
}

export default FakeApi