module.exports = {
    validator ({builder, rules}) {
        if (!rules) throw new Error("rules shouldn't be empty")
        // const statement  = /((\|>((^| ).*($|\s))))/g
        const statement = /((\|>(( ).*(?!\s+|\\|>))))/g
        const pharse = /(\|>\s+(.*))/
        const word = /(@\{.*\})|(\w+[!| |&])|(\w+=\w+)/g
        const symbol = /(\w+(.*))/g
        const keys = Object.keys(builder)
        let ast = parser(rules)
        return ast
        // keys.reduce((res, cur) => {
        //     return res
        // })
        function parser (rules) {
            console.log('pattern=====================')
            console.log('statemetn', statement)
            console.log('pharse', pharse)
            console.log('word', word)
            console.log('symbol', symbol)
            console.log('pattern=====================')
            let p = rules.match(statement)
            const vm = {
                statements: [],
                pharses: [],
                words: [],
                symbols: [],
                rules
            }
            parse_statement(vm)
            // parse_pharse(vm)
            // parse_word(vm)
            // parse_symbol(vm)
            return vm
        }

        function parse_statement (self) {
            self.statements = self.rules.match(statement)
            parse_pharse(self)
        }

        function parse_pharse (self) {
            // let arr = []
            self.statements.forEach((statement, i) => {
                const text = statement
                self.statements[i] = {
                    text,
                    pharses: [text.match(pharse)[2]]
                }
                parse_word(self.statements[i])
                // arr.push(text.match(pharse)[2])
            })
            // self.pharses = arr
        }

        function parse_word (self) {
            // let words = []
            self.pharses.forEach((pharse, i) => {
                const text = pharse
                self.pharses[i] = {
                    text,
                    words: pharse.match(word)
                }
                // words = words.concat(pharse.match(word))
            })
            // self.words = words
        }

        function parse_symbol (self) {
            // let symbols = []
            self.words.forEach((word, i) => {
                const text = word
                self.words[i] = {
                    text,
                    symbols: [text.match(symbol)]
                }
                // symbols.push(text.match(symbol))
            })
            // self.symbols = symbols
        }
    }
}
