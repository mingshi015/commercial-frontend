interface iLocalStorage {
  [key: string]: any
}

let globalLocalStorage: iLocalStorage = {}

export const getLocalStorageItem = (key: string) => {
  try {
    return window.localStorage.getItem(key)
  } catch (e) {
    console.error(e)
    return globalLocalStorage[key]
  }
}

export const setLocalStorageItem = (key: string, value: any) => {
  try {
    window.localStorage.setItem(key, value)
  } catch (e) {
    console.error(e)
    globalLocalStorage = { ...globalLocalStorage, [key]: value }
  }
}

export const removeLocalStorageItem = (key: string) => {
  try {
    window.localStorage.removeItem(key)
  } catch (e) {
    console.error(e)
    delete globalLocalStorage[key]
  }
}

export const clearLocalStorage = () => {
  try {
    window.localStorage.clear()
  } catch (e) {
    console.error(e)
    globalLocalStorage = {}
  }
}
