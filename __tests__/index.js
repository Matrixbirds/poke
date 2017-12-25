const poke = require('../index')

const models = {
    id: '3',
    type: '3',
    name: 'pokemon-go',
    password: '233333',
    created_at: null,
    updated_at: null
}

poke.validator({
    builder: models,
    rules: `
        |> id!type!name!password! |>
        |> id=3 && type!name!password!
    `
})

// module.exports = models
module.exports = {
    a: `
        |> id!type!name!password! |>
        |> id=3 && type!name!password!
        |> id=5 && type!name!password!
`,
    b: `
        |>
        |> id=5 && type!name!password!
`,
    c: `
        |
`,
    d: `
    |>|>|>
`
}
