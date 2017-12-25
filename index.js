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
            const vm = {
                statements: [],
                pharses: [],
                rules
            }
            parse_statement(vm)
            parse_pharse(vm)
            return p
        }

        function parse_statement (self) {
            self.statements = self.rules.match(statement)
        }

        function parse_pharse (self) {
            self.statements.reduce((arr, statement => {
                arr.push(statement.match(pharse))
                return arr
            }, self.pharses))
        }
    }
}
