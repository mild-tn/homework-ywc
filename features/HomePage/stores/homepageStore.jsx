import { action, makeObservable, observable, toJS } from "mobx"

import apiService from '../services/api'
import { createContext } from 'react'

export class HomePageContext {
  data
  storeType
  constructor() {
    makeObservable(this, {
      data: observable,
      storeType: observable,
      getData: action
    })
    this.storeType = 10
  }

  getData = async () => {
    try {
      this.data = await apiService.getData()
      this.data = toJS(this.data)
    } catch (error) {
      console.log(error)
    }
  }

  setStoreType = (value) => {
    this.storeType = value
  }

}

export const StoreContext = createContext(new HomePageContext())