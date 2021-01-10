import React, { createContext, useEffect, useState, useCallback } from 'react'
import { firestore } from '../firebase'

export var ContextProvider = createContext(null)

export default function Provider(props) {
    var [value, setValue] = useState({ dishes: null, comments: null, promotions: null, leaders: null })
    useEffect(function providerUseEffect() {
        console.log("initial value")
        console.log(value)

        var unsubscribeDishes = listenFirebaseUpdate('dishes')
        var unsubscribeComments = listenFirebaseUpdate('comments')
        var unsubscribeLeaders = listenFirebaseUpdate('leaders')
        var unsubsrcibePromo = listenFirebaseUpdate('promotions')
        console.log("after fetching value overall")
        console.log(value)
        return () => {
            unsubscribeDishes()
            unsubscribeComments()
            unsubscribeLeaders()
            unsubsrcibePromo()
        }
    }, [])

    var listenFirebaseUpdate = useCallback(function listenFirebaseUpdate(collectionName) {
        firestore.collection(collectionName).get().then(snapshot => {
            var fetchData = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            console.log("fetched data from firebase")
            console.log(fetchData)
            setValue(prevValue => ({ ...prevValue, [collectionName]: fetchData }))
            console.log("after fetching value in update function")
            console.log(value)
        })

        var unsubscribe = firestore.collection(collectionName).onSnapshot(function onNewUpdate(snapshot) {
            var updateValue = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            setValue(prevValue => ({ ...prevValue, [collectionName]: updateValue }))
        }, function onError(err) { console.error(err) })

        return unsubscribe
    }, [])


    return (
        <ContextProvider.Provider value={value}>
            {props.children}
        </ContextProvider.Provider>
    )
}


