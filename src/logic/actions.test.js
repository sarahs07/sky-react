const actions = require("./actions")
// @ponicode
describe("actions.addItem", () => {
    test("0", () => {
        let callFunction = () => {
            actions.addItem("contact")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.addItem("episodes")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.addItem("html")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.addItem("video")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.addItem("albums")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.addItem(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.removeItem", () => {
    test("0", () => {
        let callFunction = () => {
            actions.removeItem("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.removeItem(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.removeItem(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.removeItem(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.removeItem("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.removeItem(Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.toggleItemStatus", () => {
    test("0", () => {
        let callFunction = () => {
            actions.toggleItemStatus("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.toggleItemStatus(12)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.toggleItemStatus(56784)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.toggleItemStatus(987650)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.toggleItemStatus("a1969970175")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.toggleItemStatus(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("actions.setListFilter", () => {
    test("0", () => {
        let callFunction = () => {
            actions.setListFilter("xhtml")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.setListFilter("application/data")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.setListFilter("photo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.setListFilter("location")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.setListFilter("document")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            actions.setListFilter(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
