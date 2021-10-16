const rewire = require("rewire")
const index = rewire("./index")
const sendMail = index.__get__("sendMail")
const cleanSchedule = index.__get__("cleanSchedule")
const cleanSchedules = index.__get__("cleanSchedules")
// @ponicode
describe("sendMail", () => {
    test("0", async () => {
        await sendMail("smtp-relay.sendinblue.com", 3000, "www.google.com", 123, "C:\\\\path\\to\\file.ext", "path/to/folder/", "Error: Unknown URL", "This is a Text", "a<a [onclick]=\"click\">b</a>")
    })

    test("1", async () => {
        await sendMail("smtp-relay.sendinblue.com", 8000, "test.host", "username", "./path/to/file", "path/to/file.ext", "dummy subject", "foo bar", "a<a [onclick]=\"click\">b</a>")
    })

    test("2", async () => {
        await sendMail("smtp-relay.sendinblue.com", 457, "localhost", "username", "/path/to/file", "C:\\\\path\\to\\file.ext", "dummy subject", "Hello, world!", "<html> HTML </html>")
    })

    test("3", async () => {
        await sendMail("smtp.gmail.com", 457, "10.10.10.10", "user123", "C:\\\\path\\to\\file.ext", "C:\\\\path\\to\\file.ext", "Error: Unknown URL", "Foo bar", "<source src=\"http://www.google.com\">")
    })

    test("4", async () => {
        await sendMail("smtp.gmail.com", 8000, "www.scielo.br", "username", "./path/to/file", "C:\\\\path\\to\\file.ext", "dummy subject", "foo bar", "a<a [onclick]=\"click\">b</a>")
    })

    test("5", async () => {
        await sendMail("", Infinity, "", "", "", undefined, "", undefined, undefined)
    })
})

// @ponicode
describe("cleanSchedule", () => {
    test("0", () => {
        let callFunction = () => {
            cleanSchedule({ schedule: -0.5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            cleanSchedule({ schedule: 10.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            cleanSchedule({ schedule: -1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            cleanSchedule({ schedule: 0.5 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            cleanSchedule({ schedule: 1.0 })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cleanSchedule({ schedule: -Infinity })
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("cleanSchedules", () => {
    test("0", () => {
        let object = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], [10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            cleanSchedules(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object3 = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], [10, -45.9, 103.5, 0.955674]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            cleanSchedules(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674]]
        let object2 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], ["a", "b", "043", "foo bar"]]
        let object3 = [[10, -45.9, 103.5, 0.955674], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            cleanSchedules(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"], ["a", "b", "043", "foo bar"]]
        let object2 = [["a", "b", "043", "foo bar"], [10, -45.9, 103.5, 0.955674], ["a", "b", "043", "foo bar"]]
        let object3 = [["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            cleanSchedules(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [["foo bar", -0.353, "**text**", 4653], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let object2 = [["a", "b", "043", "foo bar"], [-1, 0.5, 1, 2, 3, 4, 5], [10, -45.9, 103.5, 0.955674]]
        let object3 = [[-1, 0.5, 1, 2, 3, 4, 5], ["foo bar", -0.353, "**text**", 4653], [-1, 0.5, 1, 2, 3, 4, 5]]
        let param1 = [object, object2, object3]
        let callFunction = () => {
            cleanSchedules(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            cleanSchedules(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
