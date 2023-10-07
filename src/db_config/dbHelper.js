export const getData = async (collection, key = null, expression = null, value = null) => {
    try {
        if (key) {
            const data = await collection.where(key, expression, value).get()
            return { message: "DONE", data: data.docs.map(doc => ({ id: doc.id, ...doc.data() })) }
        }
        const data = await collection.get()
        return { message: "DONE", data: data.docs.map(doc => ({ id: doc.id, ...doc.data() })) }
    } catch (error) {
        console.log(error);
        return { message: "FAILURE" }
    }
}

export const deleteData = async (collection, key = null, expression = null, value = null) => {
    try {
        if (key) {
            const deletionPromises = [];
            const snapShots = await collection.where(key, expression, value).get()
            snapShots.forEach(element => deletionPromises.push(element.ref.delete()));
            await Promise.all(deletionPromises);
            return { message: "DONE" }
        }
        const snapShots = await collection.get()
        snapShots.forEach(element => deletionPromises.push(element.ref.delete()));
        await Promise.all(deletionPromises);
        return { message: "DONE" }
    } catch (error) {
        console.log(error);
        return { message: "FAILURE" }
    }
}