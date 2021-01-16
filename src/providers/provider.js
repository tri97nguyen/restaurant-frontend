import React, { createContext, useEffect, useState, useCallback } from "react"
import { firestore } from "../firebase"

export var ContextProvider = createContext(null)

export default function Provider(props) {
  var [value, setValue] = useState({
    dishes: null,
    comments: null,
    promotions: null,
    leaders: null,
  })
  useEffect(function providerUseEffect() {
    var unsubscribeFunctions = [
      "dishes",
      "comments",
      "leaders",
      "promotions",
    ].map((collection) => fetchDataAndListenUpdate(collection))
    return () => unsubscribeFunctions.forEach((func) => func())
  }, [])

  var fetchDataAndListenUpdate = useCallback(function fetchDataAndListenUpdate(
    collectionName,
  ) {
    // fetch initial value
    firestore
      .collection(collectionName)
      .get()
      .then((snapshot) => {
        var fetchData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setValue((prevValue) => ({ ...prevValue, [collectionName]: fetchData }))
      })
    // listener for change in db
    var unsubscribe = firestore.collection(collectionName).onSnapshot(
      function onNewUpdate(snapshot) {
        var updateValue = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
        setValue((prevValue) => ({
          ...prevValue,
          [collectionName]: updateValue,
        }))
      },
      function onError(err) {
        console.error(err)
      },
    )

    return unsubscribe
  },
  [])

  return (
    <ContextProvider.Provider value={value}>
      {props.children}
    </ContextProvider.Provider>
  )
}
