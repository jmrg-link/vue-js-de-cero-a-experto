import journalApi from "@/api/journalApi";

export const loadEntries = async ({commit}) => {
    const {data} = await journalApi.get('/entries.json')
    if (!data) {
        commit('setEntries', [])
        return
    }

    const entries = []
    for (let id of Object.keys(data)) {
        entries.push({
            id,
            ...data[id]
        })
    }
    //console.log(entries)
    commit('setEntries', entries)
}
export const updateEntry = async ({commit}, entry) => { // entry debe ser un parametro
    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}
    const resp = await journalApi.put(`/entries/${entry.id}.json`, dataToSave)
    dataToSave.id = entry.id // dentro de dataToSave tiene que ser igual que el contenido del object de entry.id
    // console.log(resp)
    // commit de una mutation -> updateEntry
    commit('updateEntry', {...dataToSave})
}

export const createEntry = async ({commit}, entry) => {
    const {date, picture, text} = entry
    const dataToSave = {date, picture, text}
    const {data} = await journalApi.post(`/entries.json`, dataToSave)
    dataToSave.id = data.name
    commit('addEntry', dataToSave)
    return data.name
}

export const deleteEntry = async ({commit}, id) => {
    await journalApi.delete(`/entries/${id}.json`)
    commit('deleteEntry', id)
    return id
}