module.exports = {
    validator ({builder, rules}) {
        if (!rules) throw new Error("rules shouldn't be empty")
        const statement  = /((\|>((^| ).*($|\s))))/g
        const pharse = /(\|>\s+(.*))/
        const word = /(\w+[!| |&])/g
        const symbol = /(\w+(.*))/g
        const keys = Object.keys(builder)
        let ast = parser(rules)
        return ast
        // keys.reduce((res, cur) => {
        //     return res
        // })
        function parser (rules) {
            let p = rules.match(statement)
            console.log(JSON.stringify(rules))
            return p
        }
    }
}
