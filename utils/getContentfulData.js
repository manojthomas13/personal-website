import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
    space,
    accessToken,
})

const fetchData = async () => {
    const entries = await client.getEntries()

    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
}

export default fetchData